// Importações:


const fname = `isPro`;

const declaration = `function isPro(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é uma Promise.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isPro(new Promise((res) => res('test')));

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é uma Promise.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isPro(new Promise((res) => res('test')));
 * // Retorno:
 * // true
 */
function isPro(anyParameter) {
  return anyParameter instanceof Promise;
};

isPro.fname = fname;
isPro.declaration = declaration;
isPro.description = description;
isPro.help = help;

module.exports = isPro;
