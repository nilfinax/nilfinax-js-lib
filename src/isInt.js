// Importações:


const fname = `isInt`;

const declaration = `function isInt(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é um integer.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isInt(1);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é um integer.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isInt(1);
 * // Retorno:
 * // true
 */
function isInt(anyParameter) {
  return Number.isInteger(anyParameter);
};

isInt.fname = fname;
isInt.declaration = declaration;
isInt.description = description;
isInt.help = help;

module.exports = isInt;
