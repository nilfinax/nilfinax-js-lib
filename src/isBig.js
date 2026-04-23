// Importações:


const fname = `isBig`;

const declaration = `function isBig(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é do tipo bigint.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isBig(1n);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é do tipo bigint.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isBig(1n);
 * // Retorno:
 * // true
 */
function isBig(anyParameter) {
  return typeof anyParameter === 'bigint';
};

isBig.fname = fname;
isBig.declaration = declaration;
isBig.description = description;
isBig.help = help;

module.exports = isBig;
