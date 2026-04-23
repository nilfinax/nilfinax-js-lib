// Importações:


const fname = `isAsy`;

const declaration = `function isAsy(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é uma async function.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isAsy(async () => {});

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é uma async function.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isAsy(async () => {});
 * // Retorno:
 * // true
 */
function isAsy(anyParameter) {
  return Object.prototype.toString.call(anyParameter) === '[object AsyncFunction]';
};

isAsy.fname = fname;
isAsy.declaration = declaration;
isAsy.description = description;
isAsy.help = help;

module.exports = isAsy;
