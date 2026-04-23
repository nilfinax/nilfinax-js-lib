// Importações:


const fname = `isCla`;

const declaration = `function isCla(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é uma class.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isCla(class {});

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é uma class.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isCla(class {});
 * // Retorno:
 * // true
 */
function isCla(anyParameter) {
  return typeof anyParameter === 'function' && /^class\b/.test(Function.prototype.toString.call(anyParameter));
};

isCla.fname = fname;
isCla.declaration = declaration;
isCla.description = description;
isCla.help = help;

module.exports = isCla;
