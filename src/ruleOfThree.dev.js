// Importações:
const isNum = require('./isNum'); const isStr = require('./isStr'); const ruleOfThree = require('./ruleOfThree');

const fname = ruleOfThree.fname;

const declaration = ruleOfThree.declaration;

const description = ruleOfThree.description;

const help = ruleOfThree.help;

function ruleOfThreeDev(numFirstQuantity1, numSecondQuantity1, numFirstQuantity2, numSecondQuantity2, strProportionality = 'dir') {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isNum(numFirstQuantity1)) {
    funConsoleError(`O 1º parâmetro "${numFirstQuantity1}" não é do tipo "number".`);
    return 0;
  };

  if (!isNum(numSecondQuantity1)) {
    funConsoleError(`O 2º parâmetro "${numSecondQuantity1}" não é do tipo "number".`);
    return 0;
  };

  if ((numFirstQuantity2 === undefined || numFirstQuantity2 === null) && (numSecondQuantity2 === undefined || numSecondQuantity2 === null)) {
    funConsoleError(`O 3º parâmetro "${numFirstQuantity2}" e o 4º parâmetro "${numSecondQuantity2}" não foram passados, mas ao menos um deve ser passado.`);
    return 0;
  };

  if (numFirstQuantity2 !== undefined && numFirstQuantity2 !== null) {
    if (!isNum(numFirstQuantity2)) {
      funConsoleError(`O 3º parâmetro "${numFirstQuantity2}" não é do tipo "number".`);
      return 0;
    };
  };

  if (numSecondQuantity2 !== undefined && numSecondQuantity2 !== null) {
    if (!isNum(numSecondQuantity2)) {
      funConsoleError(`O 4º parâmetro "${numSecondQuantity2}" não é do tipo "number".`);
      return 0;
    };
  };

  if (!isStr(strProportionality)) {
    funConsoleError(`O 5º parâmetro "${strProportionality}" não é do tipo "string".`);
    return 0;
  };

  if (strProportionality !== 'dir' && strProportionality !== 'inv') {
    funConsoleError(`O 5º parâmetro "${strProportionality}" não é nenhum dos seguintes valores válidos: "dir" ou "inv".`);
    return 0;
  };

  return ruleOfThree(numFirstQuantity1, numSecondQuantity1, numFirstQuantity2, numSecondQuantity2, strProportionality);
};

ruleOfThreeDev.fname = fname;
ruleOfThreeDev.declaration = declaration;
ruleOfThreeDev.description = description;
ruleOfThreeDev.help = help;

module.exports = ruleOfThreeDev;
