// Importações:
const normalizeText = require('./normalizeText');

const fname = `calculateNumerology`;

const declaration = `function calculateNumerology(arrStrings) { ... };`;

const description = `--- Função que calcula a numerologia dos parâmetros passados.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório e demais opcionais. String. Indicam os textos a ser calculada a numerologia.
- Retorno: Array.

Exemplo de uso:
calculateNumerology([ "123", "abc", " a2c!@~", "92", "994", "9996", "" ]);

Exemplo de retorno:
[
  [ '123', 6 ],
  [ 'abc', 6 ],
  [ ' a2c!@~', 6 ],
  [ '92', 11 ],
  [ '994', 22 ],
  [ '9996', 33 ],
  [ '', 0 ]
]`;

const arrCharValues = new Uint8Array(65536);

for (let intCode = 49; intCode <= 57; intCode++) {
  arrCharValues[intCode] = intCode - 48;
};

for (let intCode = 65; intCode <= 90; intCode++) {
  arrCharValues[intCode] = ((intCode - 65) % 9) + 1;
};

for (let intCode = 97; intCode <= 122; intCode++) {
  arrCharValues[intCode] = ((intCode - 97) % 9) + 1;
};

function funReduceNumerology(intSum) {
  while (intSum > 9 && intSum !== 11 && intSum !== 22 && intSum !== 33) {
    let intReduced = 0;

    while (intSum > 0) {
      intReduced += intSum % 10;
      intSum = (intSum / 10) | 0;
    };

    intSum = intReduced;
  };

  return intSum;
};

/**
 * Função que calcula a numerologia dos parâmetros passados.
 *
 * @param {...(string)} arrStrings Obrigatório e demais opcionais. String. Indicam os textos a ser calculada a numerologia.
 * @return {Array} Array.
 *
 * @example
 * calculateNumerology([ "123", "abc", " a2c!@~", "92", "994", "9996", "" ]);
 * // Retorno:
 * // [
 * //   [ '123', 6 ],
 * //   [ 'abc', 6 ],
 * //   [ ' a2c!@~', 6 ],
 * //   [ '92', 11 ],
 * //   [ '994', 22 ],
 * //   [ '9996', 33 ],
 * //   [ '', 0 ]
 * // ]
 */
function calculateNumerology(arrStrings) {
  const intLength = arrStrings.length;
  const arrRetorno = new Array(intLength);

  for (let i = 0; i < intLength; i++) {
    const strString = arrStrings[i];
    const strStringToUse = normalizeText(strString);

    let intSoma = 0;

    for (let j = 0; j < strStringToUse.length; j++) {
      intSoma += arrCharValues[strStringToUse.charCodeAt(j)];
    };

    arrRetorno[i] = [strString, funReduceNumerology(intSoma)];
  };

  return arrRetorno;
};

calculateNumerology.fname = fname;
calculateNumerology.declaration = declaration;
calculateNumerology.description = description;
calculateNumerology.help = help;

module.exports = calculateNumerology;
