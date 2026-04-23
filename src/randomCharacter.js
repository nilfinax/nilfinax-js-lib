// Importações:


const fname = `randomCharacter`;

const declaration = `function randomCharacter(strCharacterType = "0", strLetterType = "0") { ... };`;

const description = `--- Função que escolhe aleatoriamente um caractere, podendo ser um número, uma letra ou um símbolo.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. String. Indica o tipo de caractere e deve seguir algum desses padrões:
"0" para caractere aleatório podendo ser número, letra ou símbolo;
"1" para caractere aleatório podendo ser apenas número;
"2" para caractere aleatório podendo ser apenas letra;
"3" para caractere aleatório podendo ser apenas símbolo;
"4" para caractere aleatório podendo ser número ou letra;
"5" para caractere aleatório podendo ser número ou símbolo;
"6" para caractere aleatório podendo ser letra ou símbolo.
- 2º parâmetro: Opcional. String. Indica o tipo de letra e deve seguir algum desses padrões:
"0" para letra aleatória podendo ser minúscula ou maiúscula;
"1" para letra aleatória podendo ser minúscula;
"2" para letra aleatória podendo ser maiúscula.
- Retorno: String.

Exemplo de uso:
randomCharacter(2, 1);

Exemplo de retorno:
n`;

const strNumbers = `0123456789`;
const strLettersLower = `abcdefghijklmnopqrstuvwxyz`;
const strLettersUpper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const strLettersAll = `${strLettersLower}${strLettersUpper}`;
const strSymbols = `!#$%&()*+,-./:;<=>?@[]^_{|}~¡¢£§¨©ª¬®°±²³´¶¹º¼½¾¿ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝßàáâãäçèéêëìíîïñòóôõö÷ùúûüýÿŸƒΔμ`;

const strNumbersAndSymbols = `${strNumbers}${strSymbols}`;
const strLettersLowerAndSymbols = `${strLettersLower}${strSymbols}`;
const strLettersUpperAndSymbols = `${strLettersUpper}${strSymbols}`;
const strLettersAllAndSymbols = `${strLettersAll}${strSymbols}`;

const arrSourceByCharacterType = [
  [
    `${strNumbers}${strLettersAll}${strSymbols}`,
    `${strNumbers}${strLettersLower}${strSymbols}`,
    `${strNumbers}${strLettersUpper}${strSymbols}`
  ],
  [
    strNumbers,
    strNumbers,
    strNumbers
  ],
  [
    strLettersAll,
    strLettersLower,
    strLettersUpper
  ],
  [
    strSymbols,
    strSymbols,
    strSymbols
  ],
  [
    `${strNumbers}${strLettersAll}`,
    `${strNumbers}${strLettersLower}`,
    `${strNumbers}${strLettersUpper}`
  ],
  [
    strNumbersAndSymbols,
    strNumbersAndSymbols,
    strNumbersAndSymbols
  ],
  [
    strLettersAllAndSymbols,
    strLettersLowerAndSymbols,
    strLettersUpperAndSymbols
  ]
];

/**
 * @typedef {'0' | '1' | '2' | '3' | '4' | '5' | '6'} randomCharacterCharacterType
 * @typedef {'0' | '1' | '2'} randomCharacterLetterType
 */

/**
 * Função que escolhe aleatoriamente um caractere, podendo ser um número, uma letra ou um símbolo.
 *
 * @param {randomCharacterCharacterType} [strCharacterType='0'] Opcional. String. Indica o tipo de caractere e deve seguir algum desses padrões:
 * "0" para caractere aleatório podendo ser número, letra ou símbolo;
 * "1" para caractere aleatório podendo ser apenas número;
 * "2" para caractere aleatório podendo ser apenas letra;
 * "3" para caractere aleatório podendo ser apenas símbolo;
 * "4" para caractere aleatório podendo ser número ou letra;
 * "5" para caractere aleatório podendo ser número ou símbolo;
 * "6" para caractere aleatório podendo ser letra ou símbolo.
 * @param {randomCharacterLetterType} [strLetterType='0'] Opcional. String. Indica o tipo de letra e deve seguir algum desses padrões:
 * "0" para letra aleatória podendo ser minúscula ou maiúscula;
 * "1" para letra aleatória podendo ser minúscula;
 * "2" para letra aleatória podendo ser maiúscula.
 * @returns {string} String.
 *
 * @example
 * randomCharacter(2, 1);
 * // Retorno:
 * // n
 */
function randomCharacter(strCharacterType = "0", strLetterType = "0") {
  const strSource = arrSourceByCharacterType[strCharacterType][strLetterType];
  const intRandomIndex = Math.floor(Math.random() * strSource.length);

  return strSource.charAt(intRandomIndex);
};

randomCharacter.fname = fname;
randomCharacter.declaration = declaration;
randomCharacter.description = description;
randomCharacter.help = help;

module.exports = randomCharacter;
