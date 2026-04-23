// Importações:


const fname = `isObj`;

const declaration = `function isObj(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é um object não array.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isObj({});

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é um object não array.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isObj({});
 * // Retorno:
 * // true
 */
function isObj(anyParameter) {
  return (typeof anyParameter === 'object' && anyParameter !== null && !Array.isArray(anyParameter));
};

isObj.fname = fname;
isObj.declaration = declaration;
isObj.description = description;
isObj.help = help;

module.exports = isObj;
