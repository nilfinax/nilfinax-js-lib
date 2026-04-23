// Importações:


const fname = `isBoo`;

const declaration = `function isBoo(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é do tipo boolean.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isBoo(false);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é do tipo boolean.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isBoo(false);
 * // Retorno:
 * // true
 */
function isBoo(anyParameter) {
  return typeof anyParameter === 'boolean';
};

isBoo.fname = fname;
isBoo.declaration = declaration;
isBoo.description = description;
isBoo.help = help;

module.exports = isBoo;
