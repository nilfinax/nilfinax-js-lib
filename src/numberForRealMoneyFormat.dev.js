// Importações:
const isNum = require('./isNum'); const isInt = require('./isInt'); const numberForRealMoneyFormat = require('./numberForRealMoneyFormat');

const fname = numberForRealMoneyFormat.fname;

const declaration = numberForRealMoneyFormat.declaration;

const description = numberForRealMoneyFormat.description;

const help = numberForRealMoneyFormat.help;

function numberForRealMoneyFormatDev(numNumber, intDecimals = 2) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isNum(numNumber)) {
    funConsoleError(`O 1º parâmetro "${numNumber}" não é do tipo "number".`);
    return '';
  };

  if (!isInt(intDecimals)) {
    funConsoleError(`O 2º parâmetro "${intDecimals}" não é do tipo "integer".`);
    return '';
  };

  if (intDecimals < 0) {
    funConsoleError(`O 2º parâmetro "${intDecimals}" é menor que o número 0.`);
    return '';
  };

  return numberForRealMoneyFormat(numNumber, intDecimals);
};

numberForRealMoneyFormatDev.fname = fname;
numberForRealMoneyFormatDev.declaration = declaration;
numberForRealMoneyFormatDev.description = description;
numberForRealMoneyFormatDev.help = help;

module.exports = numberForRealMoneyFormatDev;
