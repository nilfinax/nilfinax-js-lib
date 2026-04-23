// Importações:


const fname = `randomBetweenNumbers`;

const declaration = `function randomBetweenNumbers(arrIntervals, strReturnIntegerOrFloat) { ... };`;

const description = `--- Função que escolhe aleatoriamente um número entre os intervalos de índice 0 e 1 dos arrays passados.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. Array. Indica os intervalos do número randômico.
- 2º parâmetro: Opcional. String. Indica se o número randômico deve ser um integer ou float e deve seguir algum desses padrões:
"int" para um integer;
"flo" para um float.
- Retorno: Number.

Exemplo de uso:
randomBetweenNumbers([ [1, 2], [5, 6] ]);

Exemplo de retorno:
5`;

/**
 * @typedef {'int' | 'flo'} randomBetweenNumbersReturnIntegerOrFloat
 */

/**
 * Função que escolhe aleatoriamente um número entre os intervalos de índice 0 e 1 dos arrays passados.
 *
 * @param {Array} arrIntervals Obrigatório. Array. Indica os intervalos do número randômico.
 * @param {randomBetweenNumbersReturnIntegerOrFloat} [strReturnIntegerOrFloat] Opcional. String. Indica se o número randômico deve ser um integer ou float e deve seguir algum desses padrões:
 * "int" para um integer;
 * "flo" para um float.
 * @returns {number} Number.
 *
 * @example
 * randomBetweenNumbers([ [1, 2], [5, 6] ]);
 * // Retorno:
 * // 5
 */
function randomBetweenNumbers(arrIntervals, strReturnIntegerOrFloat) {
  let booReturnFloat = strReturnIntegerOrFloat === 'flo';

  if (!booReturnFloat && strReturnIntegerOrFloat !== 'int') {
    for (let i = 0; i < arrIntervals.length; i++) {
      const arrInterval = arrIntervals[i];

      if ((arrInterval[0] % 1) !== 0 || (arrInterval[1] % 1) !== 0) {
        booReturnFloat = true;
        break;
      };
    };
  };

  const arrNormalizedIntervals = new Array(arrIntervals.length);
  let numNormalizedIntervalsLength = 0;

  if (booReturnFloat) {
    for (let i = 0; i < arrIntervals.length; i++) {
      const arrInterval = arrIntervals[i];
      let numIntervalStart = arrInterval[0];
      let numIntervalEnd = arrInterval[1];

      if (numIntervalStart > numIntervalEnd) {
        const numTemporary = numIntervalStart;
        numIntervalStart = numIntervalEnd;
        numIntervalEnd = numTemporary;
      };

      arrNormalizedIntervals[numNormalizedIntervalsLength] = [numIntervalStart, numIntervalEnd];
      numNormalizedIntervalsLength++;
    };

    if (numNormalizedIntervalsLength === 0) return NaN;

    if (numNormalizedIntervalsLength === 1) {
      const arrInterval = arrNormalizedIntervals[0];
      const numIntervalLength = arrInterval[1] - arrInterval[0];

      if (numIntervalLength === 0) return arrInterval[0];

      return arrInterval[0] + (Math.random() * numIntervalLength);
    };

    arrNormalizedIntervals.length = numNormalizedIntervalsLength;

    arrNormalizedIntervals.sort((arrIntervalA, arrIntervalB) => {
      return (arrIntervalA[0] - arrIntervalB[0]) || (arrIntervalA[1] - arrIntervalB[1]);
    });

    let numWriteIndex = 0;
    let arrCurrentInterval = arrNormalizedIntervals[0];
    let numTotalLength = 0;

    for (let i = 1; i < numNormalizedIntervalsLength; i++) {
      const arrNextInterval = arrNormalizedIntervals[i];

      if (arrNextInterval[0] <= arrCurrentInterval[1]) {
        if (arrNextInterval[1] > arrCurrentInterval[1]) arrCurrentInterval[1] = arrNextInterval[1];
      } else {
        arrNormalizedIntervals[numWriteIndex] = arrCurrentInterval;
        numWriteIndex++;
        numTotalLength += arrCurrentInterval[1] - arrCurrentInterval[0];
        arrCurrentInterval = arrNextInterval;
      };
    };

    arrNormalizedIntervals[numWriteIndex] = arrCurrentInterval;
    numWriteIndex++;
    numTotalLength += arrCurrentInterval[1] - arrCurrentInterval[0];
    arrNormalizedIntervals.length = numWriteIndex;

    if (numTotalLength === 0) {
      const numRandomPointIndex = Math.floor(Math.random() * numWriteIndex);
      return arrNormalizedIntervals[numRandomPointIndex][0];
    };

    let numRandomOffset = Math.random() * numTotalLength;

    for (let i = 0; i < numWriteIndex; i++) {
      const arrInterval = arrNormalizedIntervals[i];
      const numIntervalLength = arrInterval[1] - arrInterval[0];

      if (numRandomOffset < numIntervalLength) return arrInterval[0] + numRandomOffset;

      numRandomOffset -= numIntervalLength;
    };

    return arrNormalizedIntervals[numWriteIndex - 1][1];
  };

  for (let i = 0; i < arrIntervals.length; i++) {
    const arrInterval = arrIntervals[i];
    let numIntervalStart = arrInterval[0];
    let numIntervalEnd = arrInterval[1];

    if (numIntervalStart > numIntervalEnd) {
      const numTemporary = numIntervalStart;
      numIntervalStart = numIntervalEnd;
      numIntervalEnd = numTemporary;
    };

    numIntervalStart = Math.ceil(numIntervalStart);
    numIntervalEnd = Math.floor(numIntervalEnd);

    if (numIntervalStart <= numIntervalEnd) {
      arrNormalizedIntervals[numNormalizedIntervalsLength] = [numIntervalStart, numIntervalEnd];
      numNormalizedIntervalsLength++;
    };
  };

  if (numNormalizedIntervalsLength === 0) return NaN;

  if (numNormalizedIntervalsLength === 1) {
    const arrInterval = arrNormalizedIntervals[0];
    return arrInterval[0] + Math.floor(Math.random() * ((arrInterval[1] - arrInterval[0]) + 1));
  };

  arrNormalizedIntervals.length = numNormalizedIntervalsLength;

  arrNormalizedIntervals.sort((arrIntervalA, arrIntervalB) => {
    return (arrIntervalA[0] - arrIntervalB[0]) || (arrIntervalA[1] - arrIntervalB[1]);
  });

  let numWriteIndex = 0;
  let arrCurrentInterval = arrNormalizedIntervals[0];
  let numTotalIntegers = 0;

  for (let i = 1; i < numNormalizedIntervalsLength; i++) {
    const arrNextInterval = arrNormalizedIntervals[i];

    if (arrNextInterval[0] <= (arrCurrentInterval[1] + 1)) {
      if (arrNextInterval[1] > arrCurrentInterval[1]) arrCurrentInterval[1] = arrNextInterval[1];
    } else {
      arrNormalizedIntervals[numWriteIndex] = arrCurrentInterval;
      numWriteIndex++;
      numTotalIntegers += (arrCurrentInterval[1] - arrCurrentInterval[0]) + 1;
      arrCurrentInterval = arrNextInterval;
    };
  };

  arrNormalizedIntervals[numWriteIndex] = arrCurrentInterval;
  numWriteIndex++;
  numTotalIntegers += (arrCurrentInterval[1] - arrCurrentInterval[0]) + 1;
  arrNormalizedIntervals.length = numWriteIndex;

  let numRandomIndex = Math.floor(Math.random() * numTotalIntegers);

  for (let i = 0; i < numWriteIndex; i++) {
    const arrInterval = arrNormalizedIntervals[i];
    const numIntervalTotalIntegers = (arrInterval[1] - arrInterval[0]) + 1;

    if (numRandomIndex < numIntervalTotalIntegers) return arrInterval[0] + numRandomIndex;

    numRandomIndex -= numIntervalTotalIntegers;
  };

  return arrNormalizedIntervals[numWriteIndex - 1][1];
};

randomBetweenNumbers.fname = fname;
randomBetweenNumbers.declaration = declaration;
randomBetweenNumbers.description = description;
randomBetweenNumbers.help = help;

module.exports = randomBetweenNumbers;
