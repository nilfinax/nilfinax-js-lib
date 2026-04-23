// Importações:


const fname = `isSym`;

const declaration = `function isSym(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é do tipo symbol.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isSym(Symbol('a'));

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é do tipo symbol.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isSym(Symbol('a'));
 * // Retorno:
 * // true
 */
function isSym(anyParameter) {
  return typeof anyParameter === 'symbol';
};

isSym.fname = fname;
isSym.declaration = declaration;
isSym.description = description;
isSym.help = help;

module.exports = isSym;
