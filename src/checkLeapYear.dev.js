// Importações:
const isInt = require('./isInt'); const checkLeapYear = require('./checkLeapYear');

const fname = checkLeapYear.fname;

const declaration = checkLeapYear.declaration;

const description = checkLeapYear.description;

const help = checkLeapYear.help;

function checkLeapYearDev(intYear) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isInt(intYear)) {
    funConsoleError(`O 1º parâmetro "${intYear}" não é do tipo "integer".`);
    return false;
  };

  return checkLeapYear(intYear);
};

checkLeapYearDev.fname = fname;
checkLeapYearDev.declaration = declaration;
checkLeapYearDev.description = description;
checkLeapYearDev.help = help;

module.exports = checkLeapYearDev;
