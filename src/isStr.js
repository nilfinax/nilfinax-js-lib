// Importações:


const fname = `isStr`;

const declaration = `function isStr(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é do tipo string.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isStr('1');

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é do tipo string.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isStr('1');
 * // Retorno:
 * // true
 */
function isStr(anyParameter) {
  return typeof anyParameter === 'string';
};

isStr.fname = fname;
isStr.declaration = declaration;
isStr.description = description;
isStr.help = help;

module.exports = isStr;
