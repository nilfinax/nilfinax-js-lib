// Importações:


const fname = `floor`;

const declaration = `function floor(strNumber) { ... };`;

const description = `--- Função que subtrai 1 do último elemento de um número.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. String. Indica o número a ser processado.
- Retorno: String.

Exemplo de uso:
floor("123.123");

Exemplo de retorno:
123.122`;

/**
 * Função que subtrai 1 do último elemento de um número.
 *
 * @param {string} strNumber Obrigatório. String. Indica o número a ser processado.
 * @returns {string} String.
 *
 * @example
 * floor("123.123");
 * // Retorno:
 * // 123.122
 */
function floor(strNumber) {
  const funAdd = strNumber => `${Number(strNumber) + 1}`;
  const funSub = strNumber => `${Number(strNumber) - 1}`;

  let funAddOrSub = funSub;

  let strNegativeSign = '';

  if (strNumber[0] === '-' || Number(strNumber) === 0) {
    if (strNumber[0] === '-') strNumber = strNumber.slice(1);

    strNegativeSign = '-';
    funAddOrSub = funAdd;
  };

  let intNumberLength = strNumber.length;

  if (strNumber.indexOf('.') === -1) {
    strNumber = funAddOrSub(strNumber);

    if (strNumber[0] === '-') strNumber = strNumber.slice(1);

    if (Number(strNumber) === 0) strNegativeSign = '';

    return `${strNegativeSign}${strNumber.padStart(intNumberLength, '0')}`;
  };

  const strIntAndFloatParts = strNumber.split('.');

  let strIntPart = strIntAndFloatParts[0];
  let strFloatPart = strIntAndFloatParts[1];

  const intIntPartLength = strIntPart.length;
  const intFloatPartLength = strFloatPart.length;

  if (strNegativeSign === '') {
    if (Number(strFloatPart) === 0) {
      strIntPart = funAddOrSub(strIntPart);
      strFloatPart = '9'.padStart(intFloatPartLength, '9');
    } else {
      strFloatPart = funAddOrSub(strFloatPart);
    };
  } else {
    strFloatPart = funAddOrSub(strFloatPart);

    if (strFloatPart.length > intFloatPartLength) {
      strIntPart = funAddOrSub(strIntPart);
      strFloatPart = '0';
    };
  };

  strIntPart = strIntPart.padStart(intIntPartLength, '0');
  strFloatPart = strFloatPart.padStart(intFloatPartLength, '0');

  return `${strNegativeSign}${strIntPart}.${strFloatPart}`;
};

floor.fname = fname;
floor.declaration = declaration;
floor.description = description;
floor.help = help;

module.exports = floor;
