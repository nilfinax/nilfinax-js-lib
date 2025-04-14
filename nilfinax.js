// Descrição da biblioteca:
const funDesc = () => `--- Biblioteca de JavaScript do Nilfinax.`;

// Ajuda da biblioteca:
const funHelp = () => `${funDesc()}

${funMostrarFuncoes()}

Use 'functionName.help()' para detalhes sobre ela.

Bom uso!`;

const nilfinax = {};

nilfinax.arraysWithElementInElements = require('./arraysWithElementInElements');
nilfinax.calculateNumerology = require('./calculateNumerology');
nilfinax.ceil = require('./ceil');
nilfinax.checkLeapYear = require('./checkLeapYear');
nilfinax.checkRepeatedElements = require('./checkRepeatedElements');
nilfinax.dateToSeconds = require('./dateToSeconds');
nilfinax.floor = require('./floor');
nilfinax.is_ = require('./is_');
nilfinax.isArr = require('./isArr');
nilfinax.isBoo = require('./isBoo');
nilfinax.isCla = require('./isCla');
nilfinax.isCon = require('./isCon');
nilfinax.isFac = require('./isFac');
nilfinax.isFlo = require('./isFlo');
nilfinax.isFun = require('./isFun');
nilfinax.isIns = require('./isIns');
nilfinax.isInt = require('./isInt');
nilfinax.isNul = require('./isNul');
nilfinax.isNum = require('./isNum');
nilfinax.isObj = require('./isObj');
nilfinax.isStr = require('./isStr');
nilfinax.isUnd = require('./isUnd');
nilfinax.numberForFormRealMoney = require('./numberForFormRealMoney');
nilfinax.randomBetweenNumbers = require('./randomBetweenNumbers');
nilfinax.randomCharacter = require('./randomCharacter');
nilfinax.ruleOfThree = require('./ruleOfThree');
nilfinax.secondsDetailed = require('./secondsDetailed');
nilfinax.secondsToDate = require('./secondsToDate');
nilfinax.sortElements = require('./sortElements');
nilfinax.toFixed = require('./toFixed');
nilfinax.waitTime = require('./waitTime');
nilfinax.waitTimeNode = require('./waitTimeNode');

const funMostrarFuncoes = () => {
  const ArrFuncoesBiblioteca = Object.keys(nilfinax);
  const ArrFuncoesBibliotecaModificado = [];
  let strFuncoesBiblioteca = '';
  for (let i = 1; i < ArrFuncoesBiblioteca.length; i++) {
    const StrNomeFuncao = ArrFuncoesBiblioteca[i];
    if (StrNomeFuncao !== 'test' && StrNomeFuncao !== 'desc' && StrNomeFuncao !== 'help') {
      const StrDescricao = `${nilfinax[StrNomeFuncao].desc()}`;
      const StrNome = `${nilfinax[StrNomeFuncao].name()}`;
      ArrFuncoesBibliotecaModificado.push(StrDescricao);
      ArrFuncoesBibliotecaModificado.push(StrNome);
    };
  };
  for (let i = 0; i < ArrFuncoesBibliotecaModificado.length; i++) {
    const StrDescricaoENomeFuncao = ArrFuncoesBibliotecaModificado[i];
    if (strFuncoesBiblioteca === '') {
      strFuncoesBiblioteca = `${StrDescricaoENomeFuncao}`;
    } else if (i % 2 === 0 || i === ArrFuncoesBibliotecaModificado.length - 1) {
      strFuncoesBiblioteca = `${strFuncoesBiblioteca}
${StrDescricaoENomeFuncao}`;
} else {
      strFuncoesBiblioteca = `${strFuncoesBiblioteca}
${StrDescricaoENomeFuncao}
`;
    };
  };
  return strFuncoesBiblioteca;
};

nilfinax.test = () => { console.log(`Teste da biblioteca de JavaScript do Nilfinax.`); }
nilfinax.desc = funDesc;
nilfinax.help = funHelp;

module.exports = nilfinax;
