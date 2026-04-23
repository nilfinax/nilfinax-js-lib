// Importações:


const fname = `isFac`;

const declaration = `function isFac(anyParameter) { ... };`;

const description = `--- Função heurística que verifica se o dado fornecido é uma função que, ao ser chamada sem parâmetros, retorna um plain object (factory function).`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isFac(() => { return {} });

Exemplo de retorno:
true`;

/**
 * Função heurística que verifica se o dado fornecido é uma função que, ao ser chamada sem parâmetros, retorna um plain object (factory function).
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isFac(() => { return {} });
 * // Retorno:
 * // true
 */
function isFac(anyParameter) {
  if (typeof anyParameter === 'function') {
    try {
      const anyResult = anyParameter();
      return typeof anyResult === 'object' && anyResult !== null && anyResult.constructor === Object;
    } catch (e) {
      return false;
    };
  };

  return false;
};

isFac.fname = fname;
isFac.declaration = declaration;
isFac.description = description;
isFac.help = help;

module.exports = isFac;
