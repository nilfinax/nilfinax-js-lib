// Importações:
const isNum = require('./isNum'); const isInt = require('./isInt'); const toFixed = require('./toFixed');

const fname = toFixed.fname;

const declaration = toFixed.declaration;

const description = toFixed.description;

const help = toFixed.help;

function toFixedDev(numNumber, intDecimals = 0) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isNum(numNumber)) {
    funConsoleError(`O 1º parâmetro "${numNumber}" não é do tipo "number".`);
    return 0;
  };

  if (!isInt(intDecimals)) {
    funConsoleError(`O 2º parâmetro "${intDecimals}" não é do tipo "integer".`);
    return 0;
  };

  if (intDecimals < 0) {
    funConsoleError(`O 2º parâmetro "${intDecimals}" é menor que 0.`);
    return 0;
  };

  return toFixed(numNumber, intDecimals);
};

toFixedDev.fname = fname;
toFixedDev.declaration = declaration;
toFixedDev.description = description;
toFixedDev.help = help;

module.exports = toFixedDev;
