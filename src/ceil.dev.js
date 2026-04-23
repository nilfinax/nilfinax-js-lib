// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum'); const ceil = require('./ceil');

const fname = ceil.fname;

const declaration = ceil.declaration;

const description = ceil.description;

const help = ceil.help;

function ceilDev(strNumber) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isStr(strNumber)) {
    funConsoleError(`O 1º parâmetro "${strNumber}" não é do tipo "string".`);
    return '';
  };

  if (!isNum(Number(strNumber))) {
    funConsoleError(`O 1º parâmetro "${strNumber}" não representa um número.`);
    return '';
  };

  return ceil(strNumber);
};

ceilDev.fname = fname;
ceilDev.declaration = declaration;
ceilDev.description = description;
ceilDev.help = help;

module.exports = ceilDev;
