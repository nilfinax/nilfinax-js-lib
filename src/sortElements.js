// Importações:


const fname = `sortElements`;

const declaration = `function sortElements(arrArrayToSort, arrIndicesOrObjectKeys, strSortMode = "cre", strSortType = "vt") { ... };`;

const description = `--- Função que retorna o array fornecido ordenado referente aos índices ou chaves fornecidas.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. Array. Indica o array a ser ordenado.
- 2º parâmetro: Obrigatório. Array. Indica os índices do array ou as chaves do objeto.
A ordenação será feita referente ao último índice ou chave de objeto fornecida.
Os anteriores representam os índices ou chaves de objeto que deverá ser mantida a ordem.
- 3º parâmetro: Opcional. String. Indica o modo de ordenagem e deve seguir algum desses padrões:
"cre" para ordenar de forma crescente;
"dec" para ordenar de forma decrescente.
- 4º parâmetro: Opcional. String. Indica o tipo de ordenagem e deve seguir algum desses padrões:
"vt" para ordenar verificando o valor e o tipo;
"v" para ordenar verificando apenas o valor;
"t" para ordenar verificando apenas o tipo.
- Retorno: Array.

Exemplo de uso:
sortElements([
  [ 2, "b" ],
  [ 2, "a" ],
  [ 3, "b" ],
  [ 3, "c" ],
  [ 3, "a" ],
  [ 1, "a" ],
  [ 1, "b" ]
], [ 0, 1 ]);

Exemplo de retorno:
[
  [ 2, "a" ],
  [ 2, "b" ],
  [ 3, "a" ],
  [ 3, "b" ],
  [ 3, "c" ],
  [ 1, "a" ],
  [ 1, "b" ]
]`;

/**
 * @typedef {'cre' | 'dec'} sortElementsSortMode
 * @typedef {'vt' | 'v' | 't'} sortElementsSortType
 */

/**
 * Função que retorna o array fornecido ordenado referente aos índices ou chaves fornecidas.
 *
 * @param {Array<any>} arrArrayToSort Obrigatório. Array. Indica o array a ser ordenado.
 * @param {Array<number|string>} arrIndicesOrObjectKeys Obrigatório. Array. Indica os índices do array ou as chaves do objeto.
 * A ordenação será feita referente ao último índice ou chave de objeto fornecida.
 * Os anteriores representam os índices ou chaves de objeto que deverá ser mantida a ordem.
 * @param {sortElementsSortMode} [strSortMode='cre'] Opcional. String. Indica o modo de ordenagem e deve seguir algum desses padrões:
 * - "cre" para ordenar de forma crescente;
 * - "dec" para ordenar de forma decrescente.
 * @param {sortElementsSortType} [strSortType='vt'] Opcional. String. Indica o tipo de ordenagem e deve seguir algum desses padrões:
 * - "vt" para ordenar verificando o valor e o tipo;
 * - "v" para ordenar verificando apenas o valor;
 * - "t" para ordenar verificando apenas o tipo.
 * @returns {Array} Array.
 *
 * @example
 * sortElements([
 *   [ 2, "b" ],
 *   [ 2, "a" ],
 *   [ 3, "b" ],
 *   [ 3, "c" ],
 *   [ 3, "a" ],
 *   [ 1, "a" ],
 *   [ 1, "b" ]
 * ], [ 0, 1 ]);
 * // Retorno:
 * // [
 * //   [ 2, "a" ],
 * //   [ 2, "b" ],
 * //   [ 3, "a" ],
 * //   [ 3, "b" ],
 * //   [ 3, "c" ],
 * //   [ 1, "a" ],
 * //   [ 1, "b" ]
 * // ]
 */
function sortElements(arrArrayToSort, arrIndicesOrObjectKeys, strSortMode = "cre", strSortType = "vt") {
  const intArrayLength = arrArrayToSort.length;
  const arrArrayDeElementosOrdenados = arrArrayToSort.slice();

  if (intArrayLength < 2) return arrArrayDeElementosOrdenados;

  const intLastIndexOrKeyPosition = arrIndicesOrObjectKeys.length - 1;
  const anyLastIndexOrKey = arrIndicesOrObjectKeys[intLastIndexOrKeyPosition];

  const funCompararValoresETipos = (anyA, anyB) => {
    if (anyA === anyB) return 0;

    if (anyA === undefined) return -1;
    if (anyB === undefined) return 1;

    if (anyA === null) return -1;
    if (anyB === null) return 1;

    const strTypeA = typeof anyA;
    const strTypeB = typeof anyB;

    if (strTypeA === 'boolean') {
      if (strTypeB === 'boolean') return anyA ? -1 : 1;
      return -1;
    };
    if (strTypeB === 'boolean') return 1;

    if (strTypeA === 'string') {
      if (strTypeB === 'string') return anyA.localeCompare(anyB);
      return -1;
    };
    if (strTypeB === 'string') return 1;

    const booIsNumA = (strTypeA === 'number' && Number.isFinite(anyA));
    const booIsNumB = (strTypeB === 'number' && Number.isFinite(anyB));

    if (booIsNumA) {
      if (booIsNumB) return anyA - anyB;
      return -1;
    };
    if (booIsNumB) return 1;

    const booIsArrA = Array.isArray(anyA);
    const booIsArrB = Array.isArray(anyB);

    if (booIsArrA) {
      if (booIsArrB) return 0;
      return -1;
    };
    if (booIsArrB) return 1;

    const booIsObjA = (strTypeA === 'object');
    const booIsObjB = (strTypeB === 'object');

    if (booIsObjA) {
      if (booIsObjB) return 0;
      return -1;
    };
    if (booIsObjB) return 1;

    if (strTypeA === 'function') {
      if (strTypeB === 'function') return 0;
      return -1;
    };
    if (strTypeB === 'function') return 1;

    return 0;
  };

  const funCompararApenasValores = (anyA, anyB) => {
    if (anyA === anyB) return 0;

    if (typeof anyA !== 'string') anyA = String(anyA);
    if (typeof anyB !== 'string') anyB = String(anyB);

    return anyA.localeCompare(anyB);
  };

  const funCompararApenasTipos = (anyA, anyB) => {
    if (anyA === undefined) return anyB === undefined ? 0 : -1;
    if (anyB === undefined) return 1;

    if (anyA === null) return anyB === null ? 0 : -1;
    if (anyB === null) return 1;

    const strTypeA = typeof anyA;
    const strTypeB = typeof anyB;

    if (strTypeA === 'boolean') return strTypeB === 'boolean' ? 0 : -1;
    if (strTypeB === 'boolean') return 1;

    if (strTypeA === 'string') return strTypeB === 'string' ? 0 : -1;
    if (strTypeB === 'string') return 1;

    const booIsNumA = (strTypeA === 'number' && Number.isFinite(anyA));
    const booIsNumB = (strTypeB === 'number' && Number.isFinite(anyB));

    if (booIsNumA) return booIsNumB ? 0 : -1;
    if (booIsNumB) return 1;

    const booIsArrA = Array.isArray(anyA);
    const booIsArrB = Array.isArray(anyB);

    if (booIsArrA) return booIsArrB ? 0 : -1;
    if (booIsArrB) return 1;

    const booIsObjA = (strTypeA === 'object');
    const booIsObjB = (strTypeB === 'object');

    if (booIsObjA) return booIsObjB ? 0 : -1;
    if (booIsObjB) return 1;

    if (strTypeA === 'function') return strTypeB === 'function' ? 0 : -1;
    if (strTypeB === 'function') return 1;

    return 0;
  };

  let funComparar;
  if (strSortType === 'v') {
    funComparar = funCompararApenasValores;
  } else if (strSortType === 't') {
    funComparar = funCompararApenasTipos;
  } else {
    funComparar = funCompararValoresETipos;
  };

  if (strSortMode === 'dec') {
    const funCompararOriginal = funComparar;
    funComparar = (anyA, anyB) => funCompararOriginal(anyB, anyA);
  };

  const funCompararPeloUltimoIndiceOuChave = (anyA, anyB) => {
    return funComparar(anyA[anyLastIndexOrKey], anyB[anyLastIndexOrKey]);
  };

  const funMesmosIndicesOuChavesAnteriores = (anyA, anyB) => {
    for (let i = 0; i < intLastIndexOrKeyPosition; i++) {
      const anyIndexOrKey = arrIndicesOrObjectKeys[i];

      if (anyA[anyIndexOrKey] !== anyB[anyIndexOrKey]) {
        return false;
      };
    };

    return true;
  };

  const funInsertionSortNoIntervalo = (arr, intStart, intEnd) => {
    for (let i = intStart + 1; i < intEnd; i++) {
      const anyCurrent = arr[i];
      let j = i - 1;

      while (j >= intStart && funCompararPeloUltimoIndiceOuChave(arr[j], anyCurrent) > 0) {
        arr[j + 1] = arr[j];
        j--;
      };

      arr[j + 1] = anyCurrent;
    };
  };

  const funSortNoIntervalo = (arr, intStart, intEnd) => {
    const intIntervalSize = intEnd - intStart;

    if (intIntervalSize < 2) return;

    if (intIntervalSize < 32) {
      funInsertionSortNoIntervalo(arr, intStart, intEnd);
      return;
    };

    const arrOrdenado = arr.slice(intStart, intEnd).sort(funCompararPeloUltimoIndiceOuChave);

    for (let i = 0; i < intIntervalSize; i++) {
      arr[intStart + i] = arrOrdenado[i];
    };
  };

  if (intLastIndexOrKeyPosition === 0) {
    arrArrayDeElementosOrdenados.sort(funCompararPeloUltimoIndiceOuChave);
    return arrArrayDeElementosOrdenados;
  };

  let intGroupStart = 0;

  for (let i = 1; i <= intArrayLength; i++) {
    if (
      i < intArrayLength &&
      funMesmosIndicesOuChavesAnteriores(
        arrArrayDeElementosOrdenados[i - 1],
        arrArrayDeElementosOrdenados[i]
      )
    ) {
      continue;
    };

    if (i - intGroupStart > 1) {
      funSortNoIntervalo(arrArrayDeElementosOrdenados, intGroupStart, i);
    };

    intGroupStart = i;
  };

  return arrArrayDeElementosOrdenados;
};

sortElements.fname = fname;
sortElements.declaration = declaration;
sortElements.description = description;
sortElements.help = help;

module.exports = sortElements;
