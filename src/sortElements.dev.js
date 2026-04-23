// Importações:
const isArr = require('./isArr'); const isStr = require('./isStr'); const isInt = require('./isInt'); const isObj = require('./isObj'); const sortElements = require('./sortElements');

const fname = sortElements.fname;

const declaration = sortElements.declaration;

const description = sortElements.description;

const help = sortElements.help;

function sortElementsDev(arrArrayToSort, arrIndicesOrObjectKeys, strSortMode = "cre", strSortType = "vt") {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (!isArr(arrArrayToSort)) {
    funConsoleError(`O 1º parâmetro "${arrArrayToSort}" não é do tipo "array".`);
    return [];
  };

  if (arrArrayToSort.length < 1) {
    funConsoleError(`O 1º parâmetro "${arrArrayToSort}" não contém nenhum elemento.`);
    return [];
  };

  if (arrIndicesOrObjectKeys === undefined || arrIndicesOrObjectKeys === null) {
    funConsoleError(`O 2º parâmetro "${arrIndicesOrObjectKeys}" foi passado mas não é do tipo "array".`);
    return [];
  } else {
    if (!isArr(arrIndicesOrObjectKeys)) {
      funConsoleError(`O 2º parâmetro "${arrIndicesOrObjectKeys}" foi passado mas não é do tipo "array".`);
      return [];
    };

    if (arrIndicesOrObjectKeys.length < 1) {
      funConsoleError(`O 2º parâmetro "${arrIndicesOrObjectKeys}" foi passado mas não contém nenhum elemento.`);
      return [];
    };

    let strElementsType = '';
    let intMaxIndexOnArray = -1;
    let arrAllKeysOnObject = [];

    for (let i = 0; i < arrArrayToSort.length; i++) {
      const anyToSort = arrArrayToSort[i];

      let strElementType = '';
      if (isStr(anyToSort)) {
        strElementType = 'string';
      } else if (isArr(anyToSort)) {
        strElementType = 'array';

        if (intMaxIndexOnArray === -1) {
          intMaxIndexOnArray = anyToSort.length - 1;
        } else {
          if (anyToSort.length - 1 < intMaxIndexOnArray) intMaxIndexOnArray = anyToSort.length - 1;
        };
      } else if (isObj(anyToSort)) {
        strElementType = 'object';

        if (arrAllKeysOnObject.length === 0) {
          for (const strKey in anyToSort) {
            arrAllKeysOnObject.push(strKey);
          };
        } else {
          for (let i = 0; i < arrAllKeysOnObject.length; i++) {
            const strKey = arrAllKeysOnObject[i];

            if (!(strKey in anyToSort)) arrAllKeysOnObject.splice(i, 1);
          };
        };
      } else {
        strElementType = 'any';
      };

      if (strElementsType === '') {
        strElementsType = strElementType;
      } else {
        if (strElementsType !== strElementType) strElementsType = 'any';
      };
    };

    for (let i = 0; i < arrIndicesOrObjectKeys.length; i++) {
      const anyArrayIndicesOrObjectKeys = arrIndicesOrObjectKeys[i];

      if (strElementsType === 'array') {
        if (!isInt(anyArrayIndicesOrObjectKeys)) {
          funConsoleError(`O 1º parâmetro "${arrArrayToSort}" possui apenas elementos do tipo "array" mas o ${i + 1}º elemento "${anyArrayIndicesOrObjectKeys}" do 2º parâmetro não é do tipo "number".`);
          return [];
        };

        if (anyArrayIndicesOrObjectKeys < 0) {
          funConsoleError(`O 1º parâmetro "${arrArrayToSort}" possui apenas elementos do tipo "array" mas o ${i + 1}º elemento "${anyArrayIndicesOrObjectKeys}" do 2º parâmetro é menor que o número 0.`);
          return [];
        };

        if (anyArrayIndicesOrObjectKeys > intMaxIndexOnArray) {
          funConsoleError(`O 1º parâmetro "${arrArrayToSort}" possui apenas elementos do tipo "array" mas o ${i + 1}º elemento "${anyArrayIndicesOrObjectKeys}" do 2º parâmetro é maior que o maior índice válido de todos os elementos do 1º parâmetro.`);
          return [];
        };
      } else if (strElementsType === 'object') {
        if (!isStr(anyArrayIndicesOrObjectKeys)) {
          funConsoleError(`O 1º parâmetro "${arrArrayToSort}" possui apenas elementos do tipo "object" mas o ${i + 1}º elemento "${anyArrayIndicesOrObjectKeys}" do 2º parâmetro não é do tipo "string".`);
          return [];
        };

        if (anyArrayIndicesOrObjectKeys.trim().length === 0) {
          funConsoleError(`O 1º parâmetro "${arrArrayToSort}" possui apenas elementos do tipo "object" mas o ${i + 1}º elemento "${anyArrayIndicesOrObjectKeys}" do 2º parâmetro é uma "string" vazia.`);
          return [];
        };

        if (arrAllKeysOnObject.indexOf(anyArrayIndicesOrObjectKeys) === -1) {
          funConsoleError(`O 1º parâmetro "${arrArrayToSort}" possui apenas elementos do tipo "object" mas o ${i + 1}º elemento "${anyArrayIndicesOrObjectKeys}" do 2º parâmetro não representa uma propriedade válida de todos os elementos do 1º parâmetro.`);
          return [];
        };
      };
    };
  };

  if (!isStr(strSortMode)) {
    funConsoleError(`O 3º parâmetro "${strSortMode}" não é do tipo "string".`);
    return [];
  };

  if (strSortMode !== 'cre' && strSortMode !== 'dec') {
    funConsoleError(`O 3º parâmetro "${strSortMode}" não é nenhum dos seguintes valores válidos: "cre" ou "dec".`);
    return [];
  };

  if (!isStr(strSortType)) {
    funConsoleError(`O 4º parâmetro "${strSortType}" não é do tipo "string".`);
    return [];
  };

  if (strSortType !== 'vt' && strSortType !== 'v' && strSortType !== 't') {
    funConsoleError(`O 4º parâmetro "${strSortType}" não é nenhum dos seguintes valores válidos: "vt", "v" ou "t".`);
    return [];
  };

  return sortElements(arrArrayToSort, arrIndicesOrObjectKeys, strSortMode, strSortType);
};

sortElementsDev.fname = fname;
sortElementsDev.declaration = declaration;
sortElementsDev.description = description;
sortElementsDev.help = help;

module.exports = sortElementsDev;
