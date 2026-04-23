// Importações:


const fname = `isNul`;

const declaration = `function isNul(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é um null.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isNul(null);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é um null.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isNul(null);
 * // Retorno:
 * // true
 */
function isNul(anyParameter) {
  return anyParameter === null;
};

isNul.fname = fname;
isNul.declaration = declaration;
isNul.description = description;
isNul.help = help;

module.exports = isNul;
