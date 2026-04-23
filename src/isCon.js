// Importações:
const isCla = require('./isCla');

const fname = `isCon`;

const declaration = `function isCon(anyParameter) { ... };`;

const description = `--- Função que verifica se o dado fornecido é uma função construtível que não é class.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
isCon(function () {});

Exemplo de retorno:
true`;

/**
 * Função que verifica se o dado fornecido é uma função construtível que não é class.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isCon(function () {});
 * // Retorno:
 * // true
 */
function isCon(anyParameter) {
  if (typeof anyParameter !== 'function' || isCla(anyParameter)) {
    return false;
  };

  try {
    Reflect.construct(String, [], anyParameter);
    return true;
  } catch {
    return false;
  };
};

isCon.fname = fname;
isCon.declaration = declaration;
isCon.description = description;
isCon.help = help;

module.exports = isCon;
