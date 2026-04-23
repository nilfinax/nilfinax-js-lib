// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum'); const floor = require('./floor');

const fname = floor.fname;

const declaration = floor.declaration;

const description = floor.description;

const help = floor.help;

function floorDev(strNumber) {
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

  return floor(strNumber);
};

floorDev.fname = fname;
floorDev.declaration = declaration;
floorDev.description = description;
floorDev.help = help;

module.exports = floorDev;
