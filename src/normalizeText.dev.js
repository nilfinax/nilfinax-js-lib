// Importações:
const isStr = require('./isStr'); const normalizeText = require('./normalizeText');

const fname = normalizeText.fname;

const declaration = normalizeText.declaration;

const description = normalizeText.description;

const help = normalizeText.help;

function normalizeTextDev(strText) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isStr(strText)) {
    funConsoleError(`O 1º parâmetro "${strText}" não é do tipo "string".`);
    return '';
  };

  return normalizeText(strText);
};

normalizeTextDev.fname = fname;
normalizeTextDev.declaration = declaration;
normalizeTextDev.description = description;
normalizeTextDev.help = help;

module.exports = normalizeTextDev;
