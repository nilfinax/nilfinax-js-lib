// Importações:
const isArr = require('./isArr'); const isBoo = require('./isBoo'); const checkRepeatedElements = require('./checkRepeatedElements');

const fname = checkRepeatedElements.fname;

const declaration = checkRepeatedElements.declaration;

const description = checkRepeatedElements.description;

const help = checkRepeatedElements.help;

function checkRepeatedElementsDev(arrArrayOfElements, booCompareTypes = true) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isArr(arrArrayOfElements)) {
    funConsoleError(`O 1º parâmetro "${arrArrayOfElements}" não é do tipo "array".`);
    return [];
  };

  if (arrArrayOfElements.length < 1) {
    funConsoleError(`O 1º parâmetro "${arrArrayOfElements}" não contém nenhum elemento.`);
    return [];
  };

  if (!isBoo(booCompareTypes)) {
    funConsoleError(`O 2º parâmetro "${booCompareTypes}" não é do tipo "boolean".`);
    return [];
  };

  return checkRepeatedElements(arrArrayOfElements, booCompareTypes);
};

checkRepeatedElementsDev.fname = fname;
checkRepeatedElementsDev.declaration = declaration;
checkRepeatedElementsDev.description = description;
checkRepeatedElementsDev.help = help;

module.exports = checkRepeatedElementsDev;
