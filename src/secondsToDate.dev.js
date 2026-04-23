// Importações:
const isInt = require('./isInt'); const isBoo = require('./isBoo'); const secondsToDate = require('./secondsToDate');

const fname = secondsToDate.fname;

const declaration = secondsToDate.declaration;

const description = secondsToDate.description;

const help = secondsToDate.help;

function secondsToDateDev(intSeconds, booSecondsBasedOnNewDateMethod = false, booUseLocalUTCOnNewDateMethod = false) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (intSeconds !== undefined && intSeconds !== null) {
    if (!isInt(intSeconds)) {
      funConsoleError(`O 1º parâmetro "${intSeconds}" não é do tipo "integer".`);
      return {};
    };

    if (!Number.isSafeInteger(intSeconds)) {
      funConsoleError(`O 1º parâmetro "${intSeconds}" não é um inteiro seguro "safe integer".`);
      return {};
    };
  };

  if (!isBoo(booSecondsBasedOnNewDateMethod)) {
    funConsoleError(`O 2º parâmetro "${booSecondsBasedOnNewDateMethod}" não é do tipo "boolean".`);
    return {};
  };

  if (!isBoo(booUseLocalUTCOnNewDateMethod)) {
    funConsoleError(`O 3º parâmetro "${booUseLocalUTCOnNewDateMethod}" não é do tipo "boolean".`);
    return {};
  };

  return secondsToDate(intSeconds, booSecondsBasedOnNewDateMethod, booUseLocalUTCOnNewDateMethod);
};

secondsToDateDev.fname = fname;
secondsToDateDev.declaration = declaration;
secondsToDateDev.description = description;
secondsToDateDev.help = help;

module.exports = secondsToDateDev;
