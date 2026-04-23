// Importações:
const isInt = require('./isInt'); const waitTimeNodeSync = require('./waitTimeNodeSync');

const fname = waitTimeNodeSync.fname;

const declaration = waitTimeNodeSync.declaration;

const description = waitTimeNodeSync.description;

const help = waitTimeNodeSync.help;

function waitTimeNodeSyncDev(intMilliseconds = 1000) {
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

  return waitTimeNodeSync(intMilliseconds);
};

waitTimeNodeSyncDev.fname = fname;
waitTimeNodeSyncDev.declaration = declaration;
waitTimeNodeSyncDev.description = description;
waitTimeNodeSyncDev.help = help;

module.exports = waitTimeNodeSyncDev;
