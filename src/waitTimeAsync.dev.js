// Importações:
const isInt = require('./isInt'); const waitTimeAsync = require('./waitTimeAsync');

const fname = waitTimeAsync.fname;

const declaration = waitTimeAsync.declaration;

const description = waitTimeAsync.description;

const help = waitTimeAsync.help;

function waitTimeAsyncDev(intMilliseconds = 1000) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isInt(intMilliseconds)) {
    funConsoleError(`O 1º parâmetro "${intMilliseconds}" não é do tipo "integer".`);
    return false;
  };

  if (intMilliseconds < 0) {
    funConsoleError(`O 1º parâmetro "${intMilliseconds}" é menor que o número 0.`);
    return false;
  };

  return waitTimeAsync(intMilliseconds);
};

waitTimeAsyncDev.fname = fname;
waitTimeAsyncDev.declaration = declaration;
waitTimeAsyncDev.description = description;
waitTimeAsyncDev.help = help;

module.exports = waitTimeAsyncDev;
