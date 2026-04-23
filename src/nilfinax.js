
// ===============================================================
// ARQUIVO GERADO AUTOMATICAMENTE POR scripts/generate-nilfinax.js
// NÃO EDITE MANUALMENTE - suas alterações serão sobrescritas
// ===============================================================

const booIsDev = process.env.NODE_ENV === 'development';

const nilfinax = {};
nilfinax.dev = {};
nilfinax.prod = {};

// ===============================================================
// IMPORTS ESTÁTICOS
// ===============================================================
const calculateNumerology = require('./calculateNumerology');
const calculateNumerologyDev = require('./calculateNumerology.dev');
const ceil = require('./ceil');
const ceilDev = require('./ceil.dev');
const checkLeapYear = require('./checkLeapYear');
const checkLeapYearDev = require('./checkLeapYear.dev');
const checkRepeatedElements = require('./checkRepeatedElements');
const checkRepeatedElementsDev = require('./checkRepeatedElements.dev');
const dateToSeconds = require('./dateToSeconds');
const dateToSecondsDev = require('./dateToSeconds.dev');
const floor = require('./floor');
const floorDev = require('./floor.dev');
const is_ = require('./is_');
const isArr = require('./isArr');
const isAsy = require('./isAsy');
const isBig = require('./isBig');
const isBoo = require('./isBoo');
const isCla = require('./isCla');
const isCon = require('./isCon');
const isFac = require('./isFac');
const isFlo = require('./isFlo');
const isFun = require('./isFun');
const isIns = require('./isIns');
const isInt = require('./isInt');
const isNul = require('./isNul');
const isNum = require('./isNum');
const isObj = require('./isObj');
const isPro = require('./isPro');
const isStr = require('./isStr');
const isSym = require('./isSym');
const isThe = require('./isThe');
const isUnd = require('./isUnd');
const normalizeText = require('./normalizeText');
const normalizeTextDev = require('./normalizeText.dev');
const numberForRealMoneyFormat = require('./numberForRealMoneyFormat');
const numberForRealMoneyFormatDev = require('./numberForRealMoneyFormat.dev');
const prettyArrayFormattingInString = require('./prettyArrayFormattingInString');
const prettyArrayFormattingInStringDev = require('./prettyArrayFormattingInString.dev');
const randomBetweenNumbers = require('./randomBetweenNumbers');
const randomBetweenNumbersDev = require('./randomBetweenNumbers.dev');
const randomCharacter = require('./randomCharacter');
const randomCharacterDev = require('./randomCharacter.dev');
const ruleOfThree = require('./ruleOfThree');
const ruleOfThreeDev = require('./ruleOfThree.dev');
const secondsToDate = require('./secondsToDate');
const secondsToDateDev = require('./secondsToDate.dev');
const sortElements = require('./sortElements');
const sortElementsDev = require('./sortElements.dev');
const toFixed = require('./toFixed');
const toFixedDev = require('./toFixed.dev');
const waitTimeAsync = require('./waitTimeAsync');
const waitTimeAsyncDev = require('./waitTimeAsync.dev');
const waitTimeNodeSync = require('./waitTimeNodeSync');
const waitTimeNodeSyncDev = require('./waitTimeNodeSync.dev');
// ===============================================================
// MAPA DE MÓDULOS
// ===============================================================
const mapModules = {
  calculateNumerology: { prod: calculateNumerology, dev: calculateNumerologyDev },
  ceil: { prod: ceil, dev: ceilDev },
  checkLeapYear: { prod: checkLeapYear, dev: checkLeapYearDev },
  checkRepeatedElements: { prod: checkRepeatedElements, dev: checkRepeatedElementsDev },
  dateToSeconds: { prod: dateToSeconds, dev: dateToSecondsDev },
  floor: { prod: floor, dev: floorDev },
  is_: { prod: is_ },
  isArr: { prod: isArr },
  isAsy: { prod: isAsy },
  isBig: { prod: isBig },
  isBoo: { prod: isBoo },
  isCla: { prod: isCla },
  isCon: { prod: isCon },
  isFac: { prod: isFac },
  isFlo: { prod: isFlo },
  isFun: { prod: isFun },
  isIns: { prod: isIns },
  isInt: { prod: isInt },
  isNul: { prod: isNul },
  isNum: { prod: isNum },
  isObj: { prod: isObj },
  isPro: { prod: isPro },
  isStr: { prod: isStr },
  isSym: { prod: isSym },
  isThe: { prod: isThe },
  isUnd: { prod: isUnd },
  normalizeText: { prod: normalizeText, dev: normalizeTextDev },
  numberForRealMoneyFormat: { prod: numberForRealMoneyFormat, dev: numberForRealMoneyFormatDev },
  prettyArrayFormattingInString: { prod: prettyArrayFormattingInString, dev: prettyArrayFormattingInStringDev },
  randomBetweenNumbers: { prod: randomBetweenNumbers, dev: randomBetweenNumbersDev },
  randomCharacter: { prod: randomCharacter, dev: randomCharacterDev },
  ruleOfThree: { prod: ruleOfThree, dev: ruleOfThreeDev },
  secondsToDate: { prod: secondsToDate, dev: secondsToDateDev },
  sortElements: { prod: sortElements, dev: sortElementsDev },
  toFixed: { prod: toFixed, dev: toFixedDev },
  waitTimeAsync: { prod: waitTimeAsync, dev: waitTimeAsyncDev },
  waitTimeNodeSync: { prod: waitTimeNodeSync, dev: waitTimeNodeSyncDev }
};

// ===============================================================
// LISTA DE FEATURES
// ===============================================================
const arrAllFeatureFiles = [
  { strFeatureFileName: 'calculateNumerology' },
  { strFeatureFileName: 'ceil' },
  { strFeatureFileName: 'checkLeapYear' },
  { strFeatureFileName: 'checkRepeatedElements' },
  { strFeatureFileName: 'dateToSeconds' },
  { strFeatureFileName: 'floor' },
  { strFeatureFileName: 'is_' },
  { strFeatureFileName: 'isArr' },
  { strFeatureFileName: 'isAsy' },
  { strFeatureFileName: 'isBig' },
  { strFeatureFileName: 'isBoo' },
  { strFeatureFileName: 'isCla' },
  { strFeatureFileName: 'isCon' },
  { strFeatureFileName: 'isFac' },
  { strFeatureFileName: 'isFlo' },
  { strFeatureFileName: 'isFun' },
  { strFeatureFileName: 'isIns' },
  { strFeatureFileName: 'isInt' },
  { strFeatureFileName: 'isNul' },
  { strFeatureFileName: 'isNum' },
  { strFeatureFileName: 'isObj' },
  { strFeatureFileName: 'isPro' },
  { strFeatureFileName: 'isStr' },
  { strFeatureFileName: 'isSym' },
  { strFeatureFileName: 'isThe' },
  { strFeatureFileName: 'isUnd' },
  { strFeatureFileName: 'normalizeText' },
  { strFeatureFileName: 'numberForRealMoneyFormat' },
  { strFeatureFileName: 'prettyArrayFormattingInString' },
  { strFeatureFileName: 'randomBetweenNumbers' },
  { strFeatureFileName: 'randomCharacter' },
  { strFeatureFileName: 'ruleOfThree' },
  { strFeatureFileName: 'secondsToDate' },
  { strFeatureFileName: 'sortElements' },
  { strFeatureFileName: 'toFixed' },
  { strFeatureFileName: 'waitTimeAsync' },
  { strFeatureFileName: 'waitTimeNodeSync' }
];

// ===============================================================
// LOOP DE MONTAGEM
// ===============================================================
for (let i = 0; i < arrAllFeatureFiles.length; i++) {
  const obj = arrAllFeatureFiles[i];
  const strName = obj.strFeatureFileName;

  const modules = mapModules[strName];

  if (!modules) {
    console.warn(`[nilfinax] Feature "${strName}" não encontrada no mapModules. Pulando.`);
    continue;
  }

  const funProd = modules.prod;
  const funDev = modules.dev || funProd;

  nilfinax.prod[strName] = funProd;
  nilfinax.dev[strName] = funDev;
  nilfinax[strName] = booIsDev ? funDev : funProd;
}

// ===============================================================
// FUNÇÃO DE HELP
// ===============================================================
const funShowFeatures = () => {
  let strFeaturesInfo = '';

  for (let i = 0; i < arrAllFeatureFiles.length; i++) {
    const obj = arrAllFeatureFiles[i];
    const strName = obj.strFeatureFileName;

    const fun = nilfinax[strName];

    if (!fun) continue;

    const strFname = fun.fname ? fun.fname : '';
    const strDesc = fun.description ? fun.description : '';

    if (strFname && strDesc) {
      strFeaturesInfo += `${strFname}\n${strDesc}\n`;

      if (i !== arrAllFeatureFiles.length - 1) strFeaturesInfo += `\n`;
    }
  }

  return strFeaturesInfo;
};

const description = `--- Biblioteca de JavaScript do @Nilfinax.`;

const help = `${description}

${funShowFeatures()}

Use 'functionName.help()' para detalhes sobre ela.

Bom uso!`;

nilfinax.test = () => { console.log(`Teste da biblioteca de JavaScript do @Nilfinax.`); };
nilfinax.description = description;
nilfinax.help = help;

module.exports = nilfinax;
