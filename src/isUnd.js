// Importações:


const fname = `isUnd`;

const declaration = `function isUnd(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é um undefined.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isUnd(undefined);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é um undefined.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isUnd(undefined);
 * // Retorno:
 * // true
 */
function isUnd(anyParameter) {
  return anyParameter === undefined;
};

isUnd.fname = fname;
isUnd.declaration = declaration;
isUnd.description = description;
isUnd.help = help;

module.exports = isUnd;
