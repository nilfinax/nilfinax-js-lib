// Importações:


const fname = `prettyArrayFormattingInString`;

const declaration = `function prettyArrayFormattingInString(arrArray, strVariableDeclaration, booUseSpaces = true, strCommaPositionAfter = true) { ... };`;

const description = `--- Função que retorna o array com os elementos aninhado em colunas, na mesma linha, para uma visualização melhor.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. Array. Indica o array a ser aninhado.
- 2º parâmetro: Opcional. String. Indica a declaração de variável do array a ser aninhado.
- 3º parâmetro: Opcional. Boolean. Indica se o aninhamento vai ser feito.
- 4º parâmetro: Opcional. Boolean. Indica se a vírgula virá antes dos espaços do aninhamento.
- Retorno: String.

Exemplo de uso:
prettyArrayFormattingInString([
  [
    \`v1"\`,
    \`v12'\`,
    123,
    [\`v1"'\`, 12],
    {
      key2: ["v12", { key1: 1, key2: "v1" }],
    },
  ],
  [
    true,
    null,
    undefined,
    ["v1", 1],
    {
      key2: ["v1", { key1: 123, key2: "v12" }],
    },
  ],
], "const arrExample");

Exemplo de retorno:
const arrExample = [
  [ 'v1"', "v12'", 123,       [ \`v1"'\`, 12 ], { key2: [ "v12", { key1: 1,   key2: "v1"  } ] } ],
  [ true,  null,   undefined, [ "v1",   1  ], { key2: [ "v1",  { key1: 123, key2: "v12" } ] } ]
];`;

/**
 * Função que retorna o array com os elementos aninhado em colunas, na mesma linha, para uma visualização melhor.
 *
 * @param {Array} arrArray Obrigatório. Array. Indica o array a ser aninhado.
 * @param {string} strVariableDeclaration Opcional. String. Indica a declaração de variável do array a ser aninhado.
 * @param {boolean} [booUseSpaces=true] Opcional. Boolean. Indica se o aninhamento vai ser feito.
 * @param {boolean} [strCommaPositionAfter=true] Opcional. Boolean. Indica se a vírgula virá antes dos espaços do aninhamento.
 * @returns {string} String.
 *
 * @example
 * prettyArrayFormattingInString([
 *   [
 *     `v1"`,
 *     `v12'`,
 *     123,
 *     [`v1"'`, 12],
 *     {
 *       key2: ["v12", { key1: 1, key2: "v1" }],
 *     },
 *   ],
 *   [
 *     true,
 *     null,
 *     undefined,
 *     ["v1", 1],
 *     {
 *       key2: ["v1", { key1: 123, key2: "v12" }],
 *     },
 *   ],
 * ], "const arrExample");
 * // Retorno:
 * // const arrExample = [
 * //   [ 'v1"', "v12'", 123,       [ `v1"'`, 12 ], { key2: [ "v12", { key1: 1,   key2: "v1"  } ] } ],
 * //   [ true,  null,   undefined, [ "v1",   1  ], { key2: [ "v1",  { key1: 123, key2: "v12" } ] } ]
 * // ];
 */
function prettyArrayFormattingInString(arrArray, strVariableDeclaration, booUseSpaces = true, strCommaPositionAfter = true) {
  if (arrArray.length === 0) return (strVariableDeclaration ? `${strVariableDeclaration} = [];` : '[]');

  const funIsPlainObject = objValue => objValue && typeof objValue === 'object' && !Array.isArray(objValue);

  const funPrimitiveToStr = value => {
    if (typeof value === 'string') {
      const booHasDoubleQuote = value.includes('"');
      const booHasSingleQuote = value.includes("'");

      if (!booHasDoubleQuote) {
        return `"${value}"`;
      } else if (!booHasSingleQuote) {
        return `'${value}'`;
      } else {
        return `\`${value}\``;
      };
    };

    if (value === null) return 'null';

    if (typeof value === 'undefined') return 'undefined';

    return String(value);
  };

  const funRenderGroup = (arrValues, booUseSpaces, strCommaPositionAfter) => {
    // Detecta tipos entre entradas não-undefined
    let booHasObj = false;
    let booHasArr = false;
    let booHasPrim = false;

    for (let intI = 0; intI < arrValues.length; intI++) {
      const value = arrValues[intI];

      if (funIsPlainObject(value)) {
        booHasObj = true;
      } else if (Array.isArray(value)) {
        booHasArr = true;
      } else {
        booHasPrim = true;
      };
    };

    // Se apenas primitivos (ou undefined), renderiza diretamente
    if (!booHasObj && !booHasArr) {
      const arrStrs = new Array(arrValues.length);
      let intMaxW = 0;

      for (let intI = 0; intI < arrValues.length; intI++) {
        const strS = funPrimitiveToStr(arrValues[intI]);
        arrStrs[intI] = strS;

        if (strS.length > intMaxW) intMaxW = strS.length;
      };

      return { strs: arrStrs, maxW: intMaxW };
    };

    // Se algum objeto presente, trata como grupo de objetos (união de chaves)
    if (booHasObj && !booHasArr) {
      // Coleta todas as chaves
      const objKeyMap = {};

      for (let intI = 0; intI < arrValues.length; intI++) {
        const value = arrValues[intI];

        if (funIsPlainObject(value)) {
          const arrKeys = Object.keys(value);

          for (let intK = 0; intK < arrKeys.length; intK++) {
            objKeyMap[arrKeys[intK]] = true;
          };
        };
      };

      const arrKeys = Object.keys(objKeyMap);

      // Para cada chave, constrói subValues e chama renderGroup recursivamente
      const objPerKey = {};

      for (let intK = 0; intK < arrKeys.length; intK++) {
        const strKey = arrKeys[intK];
        const arrSubValues = new Array(arrValues.length);

        for (let intI = 0; intI < arrValues.length; intI++) {
          const value = arrValues[intI];
          arrSubValues[intI] = (funIsPlainObject(value) && Object.prototype.hasOwnProperty.call(value, strKey))
            ? value[strKey]
            : undefined;
        };

        objPerKey[strKey] = funRenderGroup(arrSubValues, booUseSpaces, strCommaPositionAfter);
      };

      // Constrói strings para cada índice usando strings filhas com padding
      const arrStrs = new Array(arrValues.length);
      let intMaxW = 0;

      for (let intI = 0; intI < arrValues.length; intI++) {
        const arrParts = [];

        for (let intK = 0; intK < arrKeys.length; intK++) {
          const strKey = arrKeys[intK];
          const objRg = objPerKey[strKey];
          const strChild = objRg.strs[intI];
          const intPad = booUseSpaces ? (objRg.maxW - strChild.length) : 0;

          if (strCommaPositionAfter) {
            // Vírgula encostada no valor, espaços depois
            const strComma = (intK < arrKeys.length - 1) ? ',' : '';
            arrParts.push(strKey + ': ' + strChild + strComma + (intPad > 0 ? ' '.repeat(intPad) : ''));
          } else {
            // Vírgula alinhada (comportamento padrão)
            arrParts.push(strKey + ': ' + strChild + (intPad > 0 ? ' '.repeat(intPad) : ''));
          };
        };

        const strS = strCommaPositionAfter
          ? '{ ' + arrParts.join(' ') + ' }'
          : '{ ' + arrParts.join(', ') + ' }';

        arrStrs[intI] = strS;

        if (strS.length > intMaxW) intMaxW = strS.length;
      };

      return { strs: arrStrs, maxW: intMaxW };
    };

    // Se algum array presente, trata como grupo de arrays (alinha por índice)
    if (booHasArr && !booHasObj) {
      // Encontra comprimento interno máximo
      let intMaxLen = 0;

      for (let intI = 0; intI < arrValues.length; intI++) {
        if (Array.isArray(arrValues[intI])) intMaxLen = Math.max(intMaxLen, arrValues[intI].length);
      };

      // Para cada índice j, constrói subValues entre irmãos e chama renderGroup
      const arrPerIndex = new Array(intMaxLen);
      for (let intJ = 0; intJ < intMaxLen; intJ++) {
        const arrSubValues = new Array(arrValues.length);

        for (let intI = 0; intI < arrValues.length; intI++) {
          arrSubValues[intI] = (Array.isArray(arrValues[intI]) && arrValues[intI].length > intJ)
            ? arrValues[intI][intJ]
            : undefined;
        };

        arrPerIndex[intJ] = funRenderGroup(arrSubValues, booUseSpaces, strCommaPositionAfter);
      };

      // Constrói strings para cada índice i
      const arrStrs = new Array(arrValues.length);
      let intMaxW = 0;

      for (let intI = 0; intI < arrValues.length; intI++) {
        const arrParts = [];

        for (let intJ = 0; intJ < arrPerIndex.length; intJ++) {
          const objRg = arrPerIndex[intJ];
          const strChild = objRg.strs[intI];
          const intPad = booUseSpaces ? (objRg.maxW - strChild.length) : 0;

          if (strCommaPositionAfter) {
            // Vírgula encostada no valor, espaços depois
            const strComma = (intJ < arrPerIndex.length - 1) ? ',' : '';
            arrParts.push(strChild + strComma + (intPad > 0 ? ' '.repeat(intPad) : ''));
          } else {
            // Vírgula alinhada (comportamento padrão)
            arrParts.push(strChild + (intPad > 0 ? ' '.repeat(intPad) : ''));
          };
        };

        const strS = strCommaPositionAfter
          ? '[ ' + arrParts.join(' ') + ' ]'
          : '[ ' + arrParts.join(', ') + ' ]';
        arrStrs[intI] = strS;

        if (strS.length > intMaxW) intMaxW = strS.length;
      };

      return { strs: arrStrs, maxW: intMaxW };
    };

    // Objetos e arrays misturados ou outras misturas — fallback: stringify e alinha como primitivos
    const arrStrs = new Array(arrValues.length);
    let intMaxW = 0;

    for (let intI = 0; intI < arrValues.length; intI++) {
      const value = arrValues[intI];
      let strS;

      if (Array.isArray(value)) {
        const arrMapped = new Array(value.length);

        for (let intJ = 0; intJ < value.length; intJ++) {
          arrMapped[intJ] = funPrimitiveToStr(value[intJ]);
        };

        strS = '[ ' + arrMapped.join(', ') + ' ]';
      } else if (funIsPlainObject(value)) {
        const arrKeys = Object.keys(value);
        const arrMapped = new Array(arrKeys.length);

        for (let intK = 0; intK < arrKeys.length; intK++) {
          const strKey = arrKeys[intK];
          arrMapped[intK] = `${strKey}: ${funPrimitiveToStr(value[strKey])}`;
        };

        strS = '{ ' + arrMapped.join(', ') + ' }';
      } else {
        strS = funPrimitiveToStr(value);
      };

      arrStrs[intI] = strS;

      if (strS.length > intMaxW) intMaxW = strS.length;
    };

    return { strs: arrStrs, maxW: intMaxW };
  };

  // Detecta tipo dos elementos do topo
  const firstElem = arrArray[0];
  const arrLines = [];

  if (funIsPlainObject(firstElem)) {
    // Unifica chaves
    const arrAllKeys = [];

    for (let intI = 0; intI < arrArray.length; intI++) {
      const arrKeys = Object.keys(arrArray[intI]);

      for (let intK = 0; intK < arrKeys.length; intK++) {
        const strKey = arrKeys[intK];

        if (arrAllKeys.indexOf(strKey) === -1) arrAllKeys.push(strKey);
      };
    };

    // Para cada chave, renderiza grupo de valores entre irmãos
    const objPerKey = {};

    for (let intK = 0; intK < arrAllKeys.length; intK++) {
      const strKey = arrAllKeys[intK];
      const arrGroup = new Array(arrArray.length);

      for (let intI = 0; intI < arrArray.length; intI++) {
        arrGroup[intI] = Object.prototype.hasOwnProperty.call(arrArray[intI], strKey)
          ? arrArray[intI][strKey]
          : undefined;
      };

      objPerKey[strKey] = funRenderGroup(arrGroup, booUseSpaces, strCommaPositionAfter);
    };

    // Compõe linhas
    for (let intI = 0; intI < arrArray.length; intI++) {
      const arrParts = [];

      for (let intK = 0; intK < arrAllKeys.length; intK++) {
        const strKey = arrAllKeys[intK];
        const objRg = objPerKey[strKey];
        const strChild = objRg.strs[intI];
        const intPad = booUseSpaces ? (objRg.maxW - strChild.length) : 0;

        if (strCommaPositionAfter) {
          // Vírgula encostada no valor, espaços depois
          const strComma = (intK < arrAllKeys.length - 1) ? ',' : '';
          arrParts.push(`${strKey}: ${strChild}${strComma}${intPad > 0 ? ' '.repeat(intPad) : ''}`);
        } else {
          // Vírgula alinhada (comportamento padrão)
          arrParts.push(`${strKey}: ${strChild}${intPad > 0 ? ' '.repeat(intPad) : ''}`);
        };
      };

      arrLines.push(strCommaPositionAfter
        ? `{ ${arrParts.join(' ')} }`
        : `{ ${arrParts.join(', ')} }`);
    };
  } else if (Array.isArray(firstElem)) {
    // Arrays de arrays -> encontra comprimento interno máximo
    let intMaxLen = 0;

    for (let intI = 0; intI < arrArray.length; intI++) {
      if (Array.isArray(arrArray[intI])) intMaxLen = Math.max(intMaxLen, arrArray[intI].length);
    };

    // Para cada índice, renderiza grupo entre irmãos
    const arrPerIndex = new Array(intMaxLen);

    for (let intJ = 0; intJ < intMaxLen; intJ++) {
      const arrGroup = new Array(arrArray.length);

      for (let intI = 0; intI < arrArray.length; intI++) {
        arrGroup[intI] = (Array.isArray(arrArray[intI]) && arrArray[intI].length > intJ)
          ? arrArray[intI][intJ]
          : undefined;
      };

      arrPerIndex[intJ] = funRenderGroup(arrGroup, booUseSpaces, strCommaPositionAfter);
    };

    // Compõe linhas
    for (let intI = 0; intI < arrArray.length; intI++) {
      const arrParts = [];

      for (let intJ = 0; intJ < arrPerIndex.length; intJ++) {
        const objRg = arrPerIndex[intJ];
        const strChild = objRg.strs[intI];
        const intPad = booUseSpaces ? (objRg.maxW - strChild.length) : 0;

        if (strCommaPositionAfter) {
          // Vírgula encostada no valor, espaços depois
          const strComma = (intJ < arrPerIndex.length - 1) ? ',' : '';
          arrParts.push(strChild + strComma + (intPad > 0 ? ' '.repeat(intPad) : ''));
        } else {
          // Vírgula alinhada (comportamento padrão)
          arrParts.push(strChild + (intPad > 0 ? ' '.repeat(intPad) : ''));
        };
      };

      arrLines.push(strCommaPositionAfter
        ? `[ ${arrParts.join(' ')} ]`
        : `[ ${arrParts.join(', ')} ]`);
    };
  } else {
    // Primitivos
    const arrStrs = new Array(arrArray.length);
    let intMaxW = 0;

    for (let intI = 0; intI < arrArray.length; intI++) {
      const strS = funPrimitiveToStr(arrArray[intI]);
      arrStrs[intI] = strS;
      if (strS.length > intMaxW) intMaxW = strS.length;
    };

    for (let intI = 0; intI < arrStrs.length; intI++) {
      const intPad = booUseSpaces ? (intMaxW - arrStrs[intI].length) : 0;
      arrLines.push(`[ ${arrStrs[intI]}${intPad > 0 ? ' '.repeat(intPad) : ''} ]`);
    };
  };

  const strBody = arrLines.map((strLine, intI) => '  ' + strLine + (intI === arrLines.length - 1 ? '' : ',')).join('\n');

  return strVariableDeclaration ? `${strVariableDeclaration} = [\n${strBody}\n];` : `[\n${strBody}\n]`;
};

prettyArrayFormattingInString.fname = fname;
prettyArrayFormattingInString.declaration = declaration;
prettyArrayFormattingInString.description = description;
prettyArrayFormattingInString.help = help;

module.exports = prettyArrayFormattingInString;
