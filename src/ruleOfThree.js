// Importações:
const isNum = require('./isNum');

const fname = `ruleOfThree`;

const declaration = `function ruleOfThree(numFirstQuantity1, numSecondQuantity1, numFirstQuantity2, numSecondQuantity2, strProportionality = "dir") { ... };`;

const description = `--- Função que calcula a regra de três com as grandezas diretamente ou inversamente proporcionais.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. Number. Indica o primeiro número da primeira grandeza.
- 2º parâmetro: Obrigatório. Number. Indica o primeiro número da segunda grandeza.
- 3º parâmetro: Opcional. Number. Indica o segundo número da primeira grandeza.
- 4º parâmetro: Opcional. Number. Indica o segundo número da segunda grandeza.
- 5º parâmetro: Opcional. String. Indica se a regra de três vai ser diretamente ou inversamente proporcional e deve seguir algum desses padrões:
"dir" para diretamente proporcional;
"inv" para inversamente proporcional.
- Retorno: Number.

Exemplo de uso:
ruleOfThree(2, 5, 4);

Exemplo de retorno:
10`;

/**
 * @typedef {'dir' | 'inv'} ruleOfThreeProportionality
 */

/**
 * Função que calcula a regra de três com as grandezas diretamente ou inversamente proporcionais.
 *
 * @param {number} numFirstQuantity1 Obrigatório. Number. Indica o primeiro número da primeira grandeza.
 * @param {number} numSecondQuantity1 Obrigatório. Number. Indica o primeiro número da segunda grandeza.
 * @param {number} [numFirstQuantity2] Opcional. Number. Indica o segundo número da primeira grandeza.
 * @param {number} [numSecondQuantity2] Opcional. Number. Indica o segundo número da segunda grandeza.
 * @param {ruleOfThreeProportionality} [strProportionality] Opcional. String. Indica se a regra de três vai ser diretamente ou inversamente proporcional e deve seguir algum desses padrões:
 * "dir" para diretamente proporcional;
 * "inv" para inversamente proporcional.
 * @returns {number} Number.
 *
 * @example
 * ruleOfThree(2, 5, 4);
 * // Retorno:
 * // 10
 */
function ruleOfThree(numFirstQuantity1, numSecondQuantity1, numFirstQuantity2, numSecondQuantity2, strProportionality = "dir") {
  if (numFirstQuantity1 === 0 || numSecondQuantity1 === 0 || numFirstQuantity2 === 0 || numSecondQuantity2 === 0) return 0;

  if (strProportionality === 'dir') {
    if (isNum(numFirstQuantity2)) {
      return (numSecondQuantity1 * numFirstQuantity2) / numFirstQuantity1;
    } else {
      return (numFirstQuantity1 * numSecondQuantity2) / numSecondQuantity1;
    };
  } else {
    if (isNum(numFirstQuantity2)) {
      return (numFirstQuantity1 * numSecondQuantity1) / numFirstQuantity2;
    } else {
      return (numFirstQuantity1 * numSecondQuantity1) / numSecondQuantity2;
    };
  };
};

ruleOfThree.fname = fname;
ruleOfThree.declaration = declaration;
ruleOfThree.description = description;
ruleOfThree.help = help;

module.exports = ruleOfThree;
