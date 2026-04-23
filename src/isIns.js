// Importações:


const fname = `isIns`;

const declaration = `function isIns(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é uma instance.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isIns(new function constructorFunction(a) {this.a = a});

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é uma instance.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isIns(new function constructorFunction(a) {this.a = a});
 * // Retorno:
 * // true
 */
function isIns(anyParameter) {
  if (typeof anyParameter !== 'object' || anyParameter === null || Array.isArray(anyParameter)) return false;

  const objPrototype = Object.getPrototypeOf(anyParameter);
  return objPrototype !== null && objPrototype !== Object.prototype;
};

isIns.fname = fname;
isIns.declaration = declaration;
isIns.description = description;
isIns.help = help;

module.exports = isIns;
