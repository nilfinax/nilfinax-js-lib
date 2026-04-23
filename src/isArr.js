// Importações:


const fname = `isArr`;

const declaration = `function isArr(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é um array.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isArr([]);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é um array.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isArr([]);
 * // Retorno:
 * // true
 */
function isArr(anyParameter) {
  return Array.isArray(anyParameter);
};

isArr.fname = fname;
isArr.declaration = declaration;
isArr.description = description;
isArr.help = help;

module.exports = isArr;
