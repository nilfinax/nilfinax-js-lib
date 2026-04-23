// Importações:


const fname = `isFun`;

const declaration = `function isFun(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é do tipo function.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isFun(i => i + 1);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é do tipo function.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isFun(i => i + 1);
 * // Retorno:
 * // true
 */
function isFun(anyParameter) {
  return typeof anyParameter === 'function';
};

isFun.fname = fname;
isFun.declaration = declaration;
isFun.description = description;
isFun.help = help;

module.exports = isFun;
