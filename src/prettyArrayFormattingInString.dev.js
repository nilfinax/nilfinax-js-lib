// Importações:
const isArr = require('./isArr'); const isStr = require('./isStr'); const isBoo = require('./isBoo'); const prettyArrayFormattingInString = require('./prettyArrayFormattingInString');

const fname = prettyArrayFormattingInString.fname;

const declaration = prettyArrayFormattingInString.declaration;

const description = prettyArrayFormattingInString.description;

const help = prettyArrayFormattingInString.help;

function prettyArrayFormattingInStringDev(arrArray, strVariableDeclaration, booUseSpaces = true, strCommaPositionAfter = true) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isArr(arrArray)) {
    funConsoleError(`O 1º parâmetro "${arrArray}" não é do tipo "array".`);
    return [];
  };

  if (arrArray.length < 1) {
    funConsoleError(`O 1º parâmetro "${arrArray}" não contém nenhum elemento.`);
    return [];
  };

  if (strVariableDeclaration !== undefined && strVariableDeclaration !== null) {
    if (!isStr(strVariableDeclaration)) {
      funConsoleError(`O 2º parâmetro "${strVariableDeclaration}" não é do tipo "string".`);
      return [];
    };
  };

  if (!isBoo(booUseSpaces)) {
    funConsoleError(`O 3º parâmetro "${booUseSpaces}" não é do tipo "boolean".`);
    return [];
  };

  if (!isBoo(strCommaPositionAfter)) {
    funConsoleError(`O 4º parâmetro "${strCommaPositionAfter}" não é do tipo "boolean".`);
    return [];
  };

  return prettyArrayFormattingInString(arrArray, strVariableDeclaration, booUseSpaces, strCommaPositionAfter);
}

prettyArrayFormattingInStringDev.fname = fname;
prettyArrayFormattingInStringDev.declaration = declaration;
prettyArrayFormattingInStringDev.description = description;
prettyArrayFormattingInStringDev.help = help;

module.exports = prettyArrayFormattingInStringDev;
