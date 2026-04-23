// Importações:


const fname = `isNum`;

const declaration = `function isNum(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é um finite number.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isNum(1);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é um finite number.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isNum(1);
 * // Retorno:
 * // true
 */
function isNum(anyParameter) {
  return Number.isFinite(anyParameter);
};

isNum.fname = fname;
isNum.declaration = declaration;
isNum.description = description;
isNum.help = help;

module.exports = isNum;
