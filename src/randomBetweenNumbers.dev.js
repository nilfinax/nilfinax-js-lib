// Importações:
const isArr = require('./isArr'); const isNum = require('./isNum'); const isStr = require('./isStr'); const randomBetweenNumbers = require('./randomBetweenNumbers');

const fname = randomBetweenNumbers.fname;

const declaration = randomBetweenNumbers.declaration;

const description = randomBetweenNumbers.description;

const help = randomBetweenNumbers.help;

function randomBetweenNumbersDev(arrIntervals, strReturnIntegerOrFloat) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isArr(arrIntervals)) {
    funConsoleError(`O 1º parâmetro "${arrIntervals}" não é do tipo "array".`);
    return 0;
  };

  if (arrIntervals.length < 1) {
    funConsoleError(`O 1º parâmetro "${arrIntervals}" não contém nenhum elemento.`);
    return 0;
  };

  for (let i = 0; i < arrIntervals.length; i++) {
    const arrInterval = arrIntervals[i];
    if (!isArr(arrInterval)) {
      funConsoleError(`O ${i + 1}º elemento "${arrInterval}" do 1º parâmetro "${arrIntervals}" não é do tipo "array".`);
      return 0;
    };

    if (arrInterval.length < 2) {
      funConsoleError(`O ${i + 1}º elemento "${arrInterval}" do 1º parâmetro "${arrIntervals}" não contém 2 elementos.`);
      return 0;
    };

    if (!isNum(arrInterval[0])) {
      funConsoleError(`O 1º elemento "${arrInterval[0]}" do ${i + 1}º elemento "${arrInterval}" do 1º parâmetro "${arrIntervals}" não é do tipo "number".`);
      return 0;
    };

    if (!isNum(arrInterval[1])) {
      funConsoleError(`O 2º elemento "${arrInterval[1]}" do ${i + 1}º elemento "${arrInterval}" do 1º parâmetro "${arrIntervals}" não é do tipo "number".`);
      return 0;
    };
  };

  if (strReturnIntegerOrFloat !== undefined && strReturnIntegerOrFloat !== null) {
    if (!isStr(strReturnIntegerOrFloat)) {
      funConsoleError(`O 2º parâmetro "${strReturnIntegerOrFloat}" foi passado e não é do tipo "string".`);
      return 0;
    };

    if (strReturnIntegerOrFloat !== 'int' && strReturnIntegerOrFloat !== 'flo') {
      funConsoleError(`O 2º parâmetro "${strReturnIntegerOrFloat}" foi passado e não é igual a nenhum dos valores válidos "int" e "flo".`);
      return 0;
    };
  };

  return randomBetweenNumbers(arrIntervals, strReturnIntegerOrFloat);
};

randomBetweenNumbersDev.fname = fname;
randomBetweenNumbersDev.declaration = declaration;
randomBetweenNumbersDev.description = description;
randomBetweenNumbersDev.help = help;

module.exports = randomBetweenNumbersDev;
