// Importações:


const fname = `isThe`;

const declaration = `function isThe(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido pode ser assimilado como promessa por await/Promise.resolve (thenable).`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isThe(new Promise((res) => res('test')));

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido pode ser assimilado como promessa por await/Promise.resolve (thenable).
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isThe(new Promise((res) => res('test')));
 * // Retorno:
 * // true
 */
function isThe(anyParameter) {
  return anyParameter !== null && (typeof anyParameter === 'object' || typeof anyParameter === 'function') && typeof anyParameter.then === 'function';
};

isThe.fname = fname;
isThe.declaration = declaration;
isThe.description = description;
isThe.help = help;

module.exports = isThe;
