// Importações:


const fname = `ceil`;

const declaration = `function ceil(strNumber) { ... };`;

const description = `--- Função que soma 1 ao último elemento de um número.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. String. Indica o número a ser processado.
- Retorno: String.

Exemplo de uso:
ceil("123.123");

Exemplo de retorno:
123.124`;

/**
 * Função que soma 1 ao último elemento de um número.
 *
 * @param {string} strNumber Obrigatório. String. Indica o número a ser processado.
 * @returns {string} String.
 *
 * @example
 * ceil("123.123");
 * // Retorno:
 * // 123.124
 */
function ceil(strNumber) {
  const funAdd = strNumber => `${Number(strNumber) + 1}`;
  const funSub = strNumber => `${Number(strNumber) - 1}`;

  let funAddOrSub = funAdd;

  let strNegativeSign = '';

  if (strNumber[0] === '-') {
    strNumber = strNumber.slice(1);

    if (Number(strNumber) !== 0) {
      strNegativeSign = '-';
      funAddOrSub = funSub;
    };
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
    strFloatPart = funAddOrSub(strFloatPart);

    if (strFloatPart.length > intFloatPartLength) {
      strIntPart = funAddOrSub(strIntPart);
      strFloatPart = '0';
    };
  } else {
    if (Number(strFloatPart) === 0) {
      strIntPart = funAddOrSub(strIntPart);
      strFloatPart = '9'.padStart(intFloatPartLength, '9');
    } else {
      strFloatPart = funAddOrSub(strFloatPart);
    };
  };

  strIntPart = strIntPart.padStart(intIntPartLength, '0');
  strFloatPart = strFloatPart.padStart(intFloatPartLength, '0');

  return `${strNegativeSign}${strIntPart}.${strFloatPart}`;
};

ceil.fname = fname;
ceil.declaration = declaration;
ceil.description = description;
ceil.help = help;

module.exports = ceil;
