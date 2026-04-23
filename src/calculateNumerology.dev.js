// Importações:
const isArr = require('./isArr'); const isStr = require('./isStr'); const calculateNumerology = require('./calculateNumerology');

const fname = calculateNumerology.fname;

const declaration = calculateNumerology.declaration;

const description = calculateNumerology.description;

const help = calculateNumerology.help;

function calculateNumerologyDev(arrStrings) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isArr(arrStrings)) {
    funConsoleError(`O 1º parâmetro "${arrStrings}" não é do tipo "array".`);
    return [];
  };

  if (arrStrings.length < 1) {
    funConsoleError(`O 1º parâmetro "${arrStrings}" não contém nenhum elemento.`);
    return [];
  };

  for (let i = 0; i < arrStrings.length; i++) {
    const anyStringOuNumber = arrStrings[i];

    if (!isStr(anyStringOuNumber)) {
      funConsoleError(`O ${i + 1}º parâmetro não é do tipo "string".`);
      return [];
    };
  };

  return calculateNumerology(arrStrings);
};

calculateNumerologyDev.fname = fname;
calculateNumerologyDev.declaration = declaration;
calculateNumerologyDev.description = description;
calculateNumerologyDev.help = help;

module.exports = calculateNumerologyDev;
