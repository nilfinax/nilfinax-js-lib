// Importações:


const fname = `toFixed`;

const declaration = `function toFixed(numNumber, intDecimals = 0) { ... };`;

const description = `--- Função que faz o mesmo que ".toFixed(precision)", mas sem arredondar.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. Number. Indica o número a ser fixado.
- 2º parâmetro: Opcional. Integer. Indica a precisão.
- Retorno: String.

Exemplo de uso:
toFixed(9.99);

Exemplo de retorno:
9`;

/**
 * Função que faz o mesmo que ".toFixed(precision)", mas sem arredondar..
 *
 * @param {number} numNumber Obrigatório. Number. Indica o número a ser fixado.
 * @param {number} [intDecimals=0] Opcional. Integer. Indica a precisão.
 * @returns {string} String.
 *
 * @example
 * toFixed(9.99);
 * // Retorno:
 * // 9
 */
function toFixed(numNumber, intDecimals = 0) {
  const IntCasas = 10 ** intDecimals;

  return (Math.trunc(numNumber * IntCasas) / IntCasas).toFixed(intDecimals);
};

toFixed.fname = fname;
toFixed.declaration = declaration;
toFixed.description = description;
toFixed.help = help;

module.exports = toFixed;
