// Importações:
const isStr = require('./isStr'); const randomCharacter = require('./randomCharacter');

const fname = randomCharacter.fname;

const declaration = randomCharacter.declaration;

const description = randomCharacter.description;

const help = randomCharacter.help;

function randomCharacterDev(strCharacterType = '0', strLetterType = '0') {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isStr(strCharacterType)) {
    funConsoleError(`O 1º parâmetro "${strCharacterType}" não é do tipo "string".`);
    return '';
  };

  if (strCharacterType !== '0' && strCharacterType !== '1' && strCharacterType !== '2' && strCharacterType !== '3' && strCharacterType !== '4' && strCharacterType !== '5' && strCharacterType !== '6') {
    funConsoleError(`O 1º parâmetro "${strCharacterType}" não é nenhum dos seguintes valores válidos: "0", "1", "2", "3", "4", "5" ou "6".`);
    return '';
  };

  if (!isStr(strLetterType)) {
    funConsoleError(`O 2º parâmetro "${strLetterType}" não é do tipo "string".`);
    return '';
  };

  if (strLetterType !== '0' && strLetterType !== '1' && strLetterType !== '2') {
    funConsoleError(`O 2º parâmetro "${strLetterType}" não é nenhum dos seguintes valores válidos: "0", "1" ou "2".`);
    return '';
  };

  return randomCharacter(strCharacterType, strLetterType);
};

randomCharacterDev.fname = fname;
randomCharacterDev.declaration = declaration;
randomCharacterDev.description = description;
randomCharacterDev.help = help;

module.exports = randomCharacterDev;
