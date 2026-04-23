// Importações:


const fname = `isFlo`;

const declaration = `function isFlo(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é um finite number float.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isFlo(1.1);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é um finite number float.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isFlo(1.1);
 * // Retorno:
 * // true
 */
function isFlo(anyParameter) {
  return Number.isFinite(anyParameter) && !Number.isInteger(anyParameter);
};

isFlo.fname = fname;
isFlo.declaration = declaration;
isFlo.description = description;
isFlo.help = help;

module.exports = isFlo;
