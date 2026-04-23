// Importações:
const toFixed = require('./toFixed');

const fname = `numberForRealMoneyFormat`;

const declaration = `function numberForRealMoneyFormat(numNumber, intDecimals = 2) { ... };`;

const description = `--- Função que converte um número para o formato do dinheiro Real.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. Number. Indica o número a ser formatado para o dinheiro Real.
- 2º parâmetro: Opcional. Integer. Indica quantas casas decimais deve-se ter.
- Retorno: String.

Exemplo de uso:
numberForRealMoneyFormat(1250.009);

Exemplo de retorno:
1.250,00`;

/**
 * Função que converte um número para o formato do dinheiro Real.
 *
 * @param {number} numNumber Obrigatório. Number. Indica o número a ser formatado para o dinheiro Real.
 * @param {number} [intDecimals=2] Opcional. Integer. Indica quantas casas decimais deve-se ter.
 * @returns {string} String.
 *
 * @example
 * numberForRealMoneyFormat(1250.009);
 * // Retorno:
 * // 1.250,00
 */
function numberForRealMoneyFormat(numNumber, intDecimals = 2) {
  const booNegative = numNumber < 0;
  if (booNegative) numNumber = Math.abs(numNumber);

  let arrParts = toFixed(numNumber, intDecimals).split('.');

  arrParts[0] = arrParts[0].split(/(?=(?:\d{3})*$)/).filter(Boolean).join('.');

  if (booNegative) arrParts[0] = '-' + arrParts[0];

  return arrParts.join(',');
};

numberForRealMoneyFormat.fname = fname;
numberForRealMoneyFormat.declaration = declaration;
numberForRealMoneyFormat.description = description;
numberForRealMoneyFormat.help = help;

module.exports = numberForRealMoneyFormat;
