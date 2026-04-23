// Ordem personalizada das funcionalidades:
/*
isUnd
isNul
isBoo
isStr
isNum
isInt
isFlo
isBig
isSym
isArr
isObj
isIns
isThe
isPro
isFun
isAsy
isCon
isFac
isCla
is_
toFixed
floor
ceil
normalizeText
randomBetweenNumbers
randomCharacter
ruleOfThree
sortElements
checkRepeatedElements
checkLeapYear
dateToSeconds
secondsToDate
prettyArrayFormattingInString
numberForRealMoneyFormat
calculateNumerology
waitTimeAsync
waitTimeNodeSync
*/

/** @type {import('./dist/nilfinax')} */
const _NX = require('./');
console.log('Testing CJS:');
console.log('');

let intPass = 0;
let intFail = 0;

function funAssert(strDesc, anyGot, anyExpected, funPersonalVerification) {
  let booPass;

  if (typeof funPersonalVerification === 'function') {
    booPass = funPersonalVerification(anyGot, anyExpected);
  } else {
    booPass = anyGot === anyExpected
  };

  if (booPass) {
    intPass++;
  } else {
    intFail++;
    console.log('--- FAIL:');
    console.log('  Function:');
    console.log(strDesc);
    console.log('  Got:');
    console.log(anyGot);
    console.log('  Expected:');
    console.log(anyExpected);
    console.log('');
  };
};

let funPersonalVerification;

funAssert("isUnd(undefined)", _NX.isUnd(undefined), true);
funAssert("isUnd(null)", _NX.isUnd(null), false);
funAssert("isUnd(false)", _NX.isUnd(false), false);
funAssert("isUnd('1')", _NX.isUnd('1'), false);
funAssert("isUnd(1)", _NX.isUnd(1), false);
funAssert("isUnd(1)", _NX.isUnd(1), false);
funAssert("isUnd(1.1)", _NX.isUnd(1.1), false);
funAssert("isUnd(1n)", _NX.isUnd(1n), false);
funAssert("isUnd(Symbol('a'))", _NX.isUnd(Symbol('a')), false);
funAssert("isUnd([])", _NX.isUnd([]), false);
funAssert("isUnd({})", _NX.isUnd({}), false);
funAssert("isUnd(new function constructorFunction(a) {this.a = a})", _NX.isUnd(new function constructorFunction(a) {this.a = a}), false);
funAssert("isUnd({ then(res) { res('ok'); } })", _NX.isUnd({ then(res) { res('ok'); } }), false);
funAssert("isUnd(new Promise((res) => res('test')))", _NX.isUnd(new Promise((res) => res('test'))), false);
funAssert("isUnd(i => i + 1)", _NX.isUnd(i => i + 1), false);
funAssert("isUnd(async () => {})", _NX.isUnd(async () => {}), false);
funAssert("isUnd(function () {})", _NX.isUnd(function () {}), false);
funAssert("isUnd(() => { return {} })", _NX.isUnd(() => { return {} }), false);
funAssert("isUnd(class {})", _NX.isUnd(class {}), false);

funAssert("isNul(undefined)", _NX.isNul(undefined), false);
funAssert("isNul(null)", _NX.isNul(null), true);
funAssert("isNul(false)", _NX.isNul(false), false);
funAssert("isNul('1')", _NX.isNul('1'), false);
funAssert("isNul(1)", _NX.isNul(1), false);
funAssert("isNul(1)", _NX.isNul(1), false);
funAssert("isNul(1.1)", _NX.isNul(1.1), false);
funAssert("isNul(1n)", _NX.isNul(1n), false);
funAssert("isNul(Symbol('a'))", _NX.isNul(Symbol('a')), false);
funAssert("isNul([])", _NX.isNul([]), false);
funAssert("isNul({})", _NX.isNul({}), false);
funAssert("isNul(new function constructorFunction(a) {this.a = a})", _NX.isNul(new function constructorFunction(a) {this.a = a}), false);
funAssert("isNul({ then(res) { res('ok'); } })", _NX.isNul({ then(res) { res('ok'); } }), false);
funAssert("isNul(new Promise((res) => res('test')))", _NX.isNul(new Promise((res) => res('test'))), false);
funAssert("isNul(i => i + 1)", _NX.isNul(i => i + 1), false);
funAssert("isNul(async () => {})", _NX.isNul(async () => {}), false);
funAssert("isNul(function () {})", _NX.isNul(function () {}), false);
funAssert("isNul(() => { return {} })", _NX.isNul(() => { return {} }), false);
funAssert("isNul(class {})", _NX.isNul(class {}), false);

funAssert("isBoo(undefined)", _NX.isBoo(undefined), false);
funAssert("isBoo(null)", _NX.isBoo(null), false);
funAssert("isBoo(false)", _NX.isBoo(false), true);
funAssert("isBoo('1')", _NX.isBoo('1'), false);
funAssert("isBoo(1)", _NX.isBoo(1), false);
funAssert("isBoo(1)", _NX.isBoo(1), false);
funAssert("isBoo(1.1)", _NX.isBoo(1.1), false);
funAssert("isBoo(1n)", _NX.isBoo(1n), false);
funAssert("isBoo(Symbol('a'))", _NX.isBoo(Symbol('a')), false);
funAssert("isBoo([])", _NX.isBoo([]), false);
funAssert("isBoo({})", _NX.isBoo({}), false);
funAssert("isBoo(new function constructorFunction(a) {this.a = a})", _NX.isBoo(new function constructorFunction(a) {this.a = a}), false);
funAssert("isBoo({ then(res) { res('ok'); } })", _NX.isBoo({ then(res) { res('ok'); } }), false);
funAssert("isBoo(new Promise((res) => res('test')))", _NX.isBoo(new Promise((res) => res('test'))), false);
funAssert("isBoo(i => i + 1)", _NX.isBoo(i => i + 1), false);
funAssert("isBoo(async () => {})", _NX.isBoo(async () => {}), false);
funAssert("isBoo(function () {})", _NX.isBoo(function () {}), false);
funAssert("isBoo(() => { return {} })", _NX.isBoo(() => { return {} }), false);
funAssert("isBoo(class {})", _NX.isBoo(class {}), false);

funAssert("isStr(undefined)", _NX.isStr(undefined), false);
funAssert("isStr(null)", _NX.isStr(null), false);
funAssert("isStr(false)", _NX.isStr(false), false);
funAssert("isStr('1')", _NX.isStr('1'), true);
funAssert("isStr(1)", _NX.isStr(1), false);
funAssert("isStr(1)", _NX.isStr(1), false);
funAssert("isStr(1.1)", _NX.isStr(1.1), false);
funAssert("isStr(1n)", _NX.isStr(1n), false);
funAssert("isStr(Symbol('a'))", _NX.isStr(Symbol('a')), false);
funAssert("isStr([])", _NX.isStr([]), false);
funAssert("isStr({})", _NX.isStr({}), false);
funAssert("isStr(new function constructorFunction(a) {this.a = a})", _NX.isStr(new function constructorFunction(a) {this.a = a}), false);
funAssert("isStr({ then(res) { res('ok'); } })", _NX.isStr({ then(res) { res('ok'); } }), false);
funAssert("isStr(new Promise((res) => res('test')))", _NX.isStr(new Promise((res) => res('test'))), false);
funAssert("isStr(i => i + 1)", _NX.isStr(i => i + 1), false);
funAssert("isStr(async () => {})", _NX.isStr(async () => {}), false);
funAssert("isStr(function () {})", _NX.isStr(function () {}), false);
funAssert("isStr(() => { return {} })", _NX.isStr(() => { return {} }), false);
funAssert("isStr(class {})", _NX.isStr(class {}), false);

funAssert("isNum(undefined)", _NX.isNum(undefined), false);
funAssert("isNum(null)", _NX.isNum(null), false);
funAssert("isNum(false)", _NX.isNum(false), false);
funAssert("isNum('1')", _NX.isNum('1'), false);
funAssert("isNum(1)", _NX.isNum(1), true);
funAssert("isNum(1)", _NX.isNum(1), true);
funAssert("isNum(1.1)", _NX.isNum(1.1), true);
funAssert("isNum(1n)", _NX.isNum(1n), false);
funAssert("isNum(Symbol('a'))", _NX.isNum(Symbol('a')), false);
funAssert("isNum([])", _NX.isNum([]), false);
funAssert("isNum({})", _NX.isNum({}), false);
funAssert("isNum(new function constructorFunction(a) {this.a = a})", _NX.isNum(new function constructorFunction(a) {this.a = a}), false);
funAssert("isNum({ then(res) { res('ok'); } })", _NX.isNum({ then(res) { res('ok'); } }), false);
funAssert("isNum(new Promise((res) => res('test')))", _NX.isNum(new Promise((res) => res('test'))), false);
funAssert("isNum(i => i + 1)", _NX.isNum(i => i + 1), false);
funAssert("isNum(async () => {})", _NX.isNum(async () => {}), false);
funAssert("isNum(function () {})", _NX.isNum(function () {}), false);
funAssert("isNum(() => { return {} })", _NX.isNum(() => { return {} }), false);
funAssert("isNum(class {})", _NX.isNum(class {}), false);

funAssert("isInt(undefined)", _NX.isInt(undefined), false);
funAssert("isInt(null)", _NX.isInt(null), false);
funAssert("isInt(false)", _NX.isInt(false), false);
funAssert("isInt('1')", _NX.isInt('1'), false);
funAssert("isInt(1)", _NX.isInt(1), true);
funAssert("isInt(1)", _NX.isInt(1), true);
funAssert("isInt(1.1)", _NX.isInt(1.1), false);
funAssert("isInt(1n)", _NX.isInt(1n), false);
funAssert("isInt(Symbol('a'))", _NX.isInt(Symbol('a')), false);
funAssert("isInt([])", _NX.isInt([]), false);
funAssert("isInt({})", _NX.isInt({}), false);
funAssert("isInt(new function constructorFunction(a) {this.a = a})", _NX.isInt(new function constructorFunction(a) {this.a = a}), false);
funAssert("isInt({ then(res) { res('ok'); } })", _NX.isInt({ then(res) { res('ok'); } }), false);
funAssert("isInt(new Promise((res) => res('test')))", _NX.isInt(new Promise((res) => res('test'))), false);
funAssert("isInt(i => i + 1)", _NX.isInt(i => i + 1), false);
funAssert("isInt(async () => {})", _NX.isInt(async () => {}), false);
funAssert("isInt(function () {})", _NX.isInt(function () {}), false);
funAssert("isInt(() => { return {} })", _NX.isInt(() => { return {} }), false);
funAssert("isInt(class {})", _NX.isInt(class {}), false);

funAssert("isFlo(undefined)", _NX.isFlo(undefined), false);
funAssert("isFlo(null)", _NX.isFlo(null), false);
funAssert("isFlo(false)", _NX.isFlo(false), false);
funAssert("isFlo('1')", _NX.isFlo('1'), false);
funAssert("isFlo(1)", _NX.isFlo(1), false);
funAssert("isFlo(1)", _NX.isFlo(1), false);
funAssert("isFlo(1.1)", _NX.isFlo(1.1), true);
funAssert("isFlo(1n)", _NX.isFlo(1n), false);
funAssert("isFlo(Symbol('a'))", _NX.isFlo(Symbol('a')), false);
funAssert("isFlo([])", _NX.isFlo([]), false);
funAssert("isFlo({})", _NX.isFlo({}), false);
funAssert("isFlo(new function constructorFunction(a) {this.a = a})", _NX.isFlo(new function constructorFunction(a) {this.a = a}), false);
funAssert("isFlo({ then(res) { res('ok'); } })", _NX.isFlo({ then(res) { res('ok'); } }), false);
funAssert("isFlo(new Promise((res) => res('test')))", _NX.isFlo(new Promise((res) => res('test'))), false);
funAssert("isFlo(i => i + 1)", _NX.isFlo(i => i + 1), false);
funAssert("isFlo(async () => {})", _NX.isFlo(async () => {}), false);
funAssert("isFlo(function () {})", _NX.isFlo(function () {}), false);
funAssert("isFlo(() => { return {} })", _NX.isFlo(() => { return {} }), false);
funAssert("isFlo(class {})", _NX.isFlo(class {}), false);

funAssert("isBig(undefined)", _NX.isBig(undefined), false);
funAssert("isBig(null)", _NX.isBig(null), false);
funAssert("isBig(false)", _NX.isBig(false), false);
funAssert("isBig('1')", _NX.isBig('1'), false);
funAssert("isBig(1)", _NX.isBig(1), false);
funAssert("isBig(1)", _NX.isBig(1), false);
funAssert("isBig(1.1)", _NX.isBig(1.1), false);
funAssert("isBig(1n)", _NX.isBig(1n), true);
funAssert("isBig(Symbol('a'))", _NX.isBig(Symbol('a')), false);
funAssert("isBig([])", _NX.isBig([]), false);
funAssert("isBig({})", _NX.isBig({}), false);
funAssert("isBig(new function constructorFunction(a) {this.a = a})", _NX.isBig(new function constructorFunction(a) {this.a = a}), false);
funAssert("isBig({ then(res) { res('ok'); } })", _NX.isBig({ then(res) { res('ok'); } }), false);
funAssert("isBig(new Promise((res) => res('test')))", _NX.isBig(new Promise((res) => res('test'))), false);
funAssert("isBig(i => i + 1)", _NX.isBig(i => i + 1), false);
funAssert("isBig(async () => {})", _NX.isBig(async () => {}), false);
funAssert("isBig(function () {})", _NX.isBig(function () {}), false);
funAssert("isBig(() => { return {} })", _NX.isBig(() => { return {} }), false);
funAssert("isBig(class {})", _NX.isBig(class {}), false);

funAssert("isSym(undefined)", _NX.isSym(undefined), false);
funAssert("isSym(null)", _NX.isSym(null), false);
funAssert("isSym(false)", _NX.isSym(false), false);
funAssert("isSym('1')", _NX.isSym('1'), false);
funAssert("isSym(1)", _NX.isSym(1), false);
funAssert("isSym(1)", _NX.isSym(1), false);
funAssert("isSym(1.1)", _NX.isSym(1.1), false);
funAssert("isSym(1n)", _NX.isSym(1n), false);
funAssert("isSym(Symbol('a'))", _NX.isSym(Symbol('a')), true);
funAssert("isSym([])", _NX.isSym([]), false);
funAssert("isSym({})", _NX.isSym({}), false);
funAssert("isSym(new function constructorFunction(a) {this.a = a})", _NX.isSym(new function constructorFunction(a) {this.a = a}), false);
funAssert("isSym({ then(res) { res('ok'); } })", _NX.isSym({ then(res) { res('ok'); } }), false);
funAssert("isSym(new Promise((res) => res('test')))", _NX.isSym(new Promise((res) => res('test'))), false);
funAssert("isSym(i => i + 1)", _NX.isSym(i => i + 1), false);
funAssert("isSym(async () => {})", _NX.isSym(async () => {}), false);
funAssert("isSym(function () {})", _NX.isSym(function () {}), false);
funAssert("isSym(() => { return {} })", _NX.isSym(() => { return {} }), false);
funAssert("isSym(class {})", _NX.isSym(class {}), false);

funAssert("isArr(undefined)", _NX.isArr(undefined), false);
funAssert("isArr(null)", _NX.isArr(null), false);
funAssert("isArr(false)", _NX.isArr(false), false);
funAssert("isArr('1')", _NX.isArr('1'), false);
funAssert("isArr(1)", _NX.isArr(1), false);
funAssert("isArr(1)", _NX.isArr(1), false);
funAssert("isArr(1.1)", _NX.isArr(1.1), false);
funAssert("isArr(1n)", _NX.isArr(1n), false);
funAssert("isArr(Symbol('a'))", _NX.isArr(Symbol('a')), false);
funAssert("isArr([])", _NX.isArr([]), true);
funAssert("isArr({})", _NX.isArr({}), false);
funAssert("isArr(new function constructorFunction(a) {this.a = a})", _NX.isArr(new function constructorFunction(a) {this.a = a}), false);
funAssert("isArr({ then(res) { res('ok'); } })", _NX.isArr({ then(res) { res('ok'); } }), false);
funAssert("isArr(new Promise((res) => res('test')))", _NX.isArr(new Promise((res) => res('test'))), false);
funAssert("isArr(i => i + 1)", _NX.isArr(i => i + 1), false);
funAssert("isArr(async () => {})", _NX.isArr(async () => {}), false);
funAssert("isArr(function () {})", _NX.isArr(function () {}), false);
funAssert("isArr(() => { return {} })", _NX.isArr(() => { return {} }), false);
funAssert("isArr(class {})", _NX.isArr(class {}), false);

funAssert("isObj(undefined)", _NX.isObj(undefined), false);
funAssert("isObj(null)", _NX.isObj(null), false);
funAssert("isObj(false)", _NX.isObj(false), false);
funAssert("isObj('1')", _NX.isObj('1'), false);
funAssert("isObj(1)", _NX.isObj(1), false);
funAssert("isObj(1)", _NX.isObj(1), false);
funAssert("isObj(1.1)", _NX.isObj(1.1), false);
funAssert("isObj(1n)", _NX.isObj(1n), false);
funAssert("isObj(Symbol('a'))", _NX.isObj(Symbol('a')), false);
funAssert("isObj([])", _NX.isObj([]), false);
funAssert("isObj({})", _NX.isObj({}), true);
funAssert("isObj(new function constructorFunction(a) {this.a = a})", _NX.isObj(new function constructorFunction(a) {this.a = a}), true);
funAssert("isObj({ then(res) { res('ok'); } })", _NX.isObj({ then(res) { res('ok'); } }), true);
funAssert("isObj(new Promise((res) => res('test')))", _NX.isObj(new Promise((res) => res('test'))), true);
funAssert("isObj(i => i + 1)", _NX.isObj(i => i + 1), false);
funAssert("isObj(async () => {})", _NX.isObj(async () => {}), false);
funAssert("isObj(function () {})", _NX.isObj(function () {}), false);
funAssert("isObj(() => { return {} })", _NX.isObj(() => { return {} }), false);
funAssert("isObj(class {})", _NX.isObj(class {}), false);

funAssert("isIns(undefined)", _NX.isIns(undefined), false);
funAssert("isIns(null)", _NX.isIns(null), false);
funAssert("isIns(false)", _NX.isIns(false), false);
funAssert("isIns('1')", _NX.isIns('1'), false);
funAssert("isIns(1)", _NX.isIns(1), false);
funAssert("isIns(1)", _NX.isIns(1), false);
funAssert("isIns(1.1)", _NX.isIns(1.1), false);
funAssert("isIns(1n)", _NX.isIns(1n), false);
funAssert("isIns(Symbol('a'))", _NX.isIns(Symbol('a')), false);
funAssert("isIns([])", _NX.isIns([]), false);
funAssert("isIns({})", _NX.isIns({}), false);
funAssert("isIns(new function constructorFunction(a) {this.a = a})", _NX.isIns(new function constructorFunction(a) {this.a = a}), true);
funAssert("isIns({ then(res) { res('ok'); } })", _NX.isIns({ then(res) { res('ok'); } }), false);
funAssert("isIns(new Promise((res) => res('test')))", _NX.isIns(new Promise((res) => res('test'))), true);
funAssert("isIns(i => i + 1)", _NX.isIns(i => i + 1), false);
funAssert("isIns(async () => {})", _NX.isIns(async () => {}), false);
funAssert("isIns(function () {})", _NX.isIns(function () {}), false);
funAssert("isIns(() => { return {} })", _NX.isIns(() => { return {} }), false);
funAssert("isIns(class {})", _NX.isIns(class {}), false);

funAssert("isThe(undefined)", _NX.isThe(undefined), false);
funAssert("isThe(null)", _NX.isThe(null), false);
funAssert("isThe(false)", _NX.isThe(false), false);
funAssert("isThe('1')", _NX.isThe('1'), false);
funAssert("isThe(1)", _NX.isThe(1), false);
funAssert("isThe(1)", _NX.isThe(1), false);
funAssert("isThe(1.1)", _NX.isThe(1.1), false);
funAssert("isThe(1n)", _NX.isThe(1n), false);
funAssert("isThe(Symbol('a'))", _NX.isThe(Symbol('a')), false);
funAssert("isThe([])", _NX.isThe([]), false);
funAssert("isThe({})", _NX.isThe({}), false);
funAssert("isThe(new function constructorFunction(a) {this.a = a})", _NX.isThe(new function constructorFunction(a) {this.a = a}), false);
funAssert("isThe({ then(res) { res('ok'); } })", _NX.isThe({ then(res) { res('ok'); } }), true);
funAssert("isThe(new Promise((res) => res('test')))", _NX.isThe(new Promise((res) => res('test'))), true);
funAssert("isThe(i => i + 1)", _NX.isThe(i => i + 1), false);
funAssert("isThe(async () => {})", _NX.isThe(async () => {}), false);
funAssert("isThe(function () {})", _NX.isThe(function () {}), false);
funAssert("isThe(() => { return {} })", _NX.isThe(() => { return {} }), false);
funAssert("isThe(class {})", _NX.isThe(class {}), false);

funAssert("isPro(undefined)", _NX.isPro(undefined), false);
funAssert("isPro(null)", _NX.isPro(null), false);
funAssert("isPro(false)", _NX.isPro(false), false);
funAssert("isPro('1')", _NX.isPro('1'), false);
funAssert("isPro(1)", _NX.isPro(1), false);
funAssert("isPro(1)", _NX.isPro(1), false);
funAssert("isPro(1.1)", _NX.isPro(1.1), false);
funAssert("isPro(1n)", _NX.isPro(1n), false);
funAssert("isPro(Symbol('a'))", _NX.isPro(Symbol('a')), false);
funAssert("isPro([])", _NX.isPro([]), false);
funAssert("isPro({})", _NX.isPro({}), false);
funAssert("isPro(new function constructorFunction(a) {this.a = a})", _NX.isPro(new function constructorFunction(a) {this.a = a}), false);
funAssert("isPro({ then(res) { res('ok'); } })", _NX.isPro({ then(res) { res('ok'); } }), false);
funAssert("isPro(new Promise((res) => res('test')))", _NX.isPro(new Promise((res) => res('test'))), true);
funAssert("isPro(i => i + 1)", _NX.isPro(i => i + 1), false);
funAssert("isPro(async () => {})", _NX.isPro(async () => {}), false);
funAssert("isPro(function () {})", _NX.isPro(function () {}), false);
funAssert("isPro(() => { return {} })", _NX.isPro(() => { return {} }), false);
funAssert("isPro(class {})", _NX.isPro(class {}), false);

funAssert("isFun(undefined)", _NX.isFun(undefined), false);
funAssert("isFun(null)", _NX.isFun(null), false);
funAssert("isFun(false)", _NX.isFun(false), false);
funAssert("isFun('1')", _NX.isFun('1'), false);
funAssert("isFun(1)", _NX.isFun(1), false);
funAssert("isFun(1)", _NX.isFun(1), false);
funAssert("isFun(1.1)", _NX.isFun(1.1), false);
funAssert("isFun(1n)", _NX.isFun(1n), false);
funAssert("isFun(Symbol('a'))", _NX.isFun(Symbol('a')), false);
funAssert("isFun([])", _NX.isFun([]), false);
funAssert("isFun({})", _NX.isFun({}), false);
funAssert("isFun(new function constructorFunction(a) {this.a = a})", _NX.isFun(new function constructorFunction(a) {this.a = a}), false);
funAssert("isFun({ then(res) { res('ok'); } })", _NX.isFun({ then(res) { res('ok'); } }), false);
funAssert("isFun(new Promise((res) => res('test')))", _NX.isFun(new Promise((res) => res('test'))), false);
funAssert("isFun(i => i + 1)", _NX.isFun(i => i + 1), true);
funAssert("isFun(async () => {})", _NX.isFun(async () => {}), true);
funAssert("isFun(function () {})", _NX.isFun(function () {}), true);
funAssert("isFun(() => { return {} })", _NX.isFun(() => { return {} }), true);
funAssert("isFun(class {})", _NX.isFun(class {}), true);

funAssert("isAsy(undefined)", _NX.isAsy(undefined), false);
funAssert("isAsy(null)", _NX.isAsy(null), false);
funAssert("isAsy(false)", _NX.isAsy(false), false);
funAssert("isAsy('1')", _NX.isAsy('1'), false);
funAssert("isAsy(1)", _NX.isAsy(1), false);
funAssert("isAsy(1)", _NX.isAsy(1), false);
funAssert("isAsy(1.1)", _NX.isAsy(1.1), false);
funAssert("isAsy(1n)", _NX.isAsy(1n), false);
funAssert("isAsy(Symbol('a'))", _NX.isAsy(Symbol('a')), false);
funAssert("isAsy([])", _NX.isAsy([]), false);
funAssert("isAsy({})", _NX.isAsy({}), false);
funAssert("isAsy(new function constructorFunction(a) {this.a = a})", _NX.isAsy(new function constructorFunction(a) {this.a = a}), false);
funAssert("isAsy({ then(res) { res('ok'); } })", _NX.isAsy({ then(res) { res('ok'); } }), false);
funAssert("isAsy(new Promise((res) => res('test')))", _NX.isAsy(new Promise((res) => res('test'))), false);
funAssert("isAsy(i => i + 1)", _NX.isAsy(i => i + 1), false);
funAssert("isAsy(async () => {})", _NX.isAsy(async () => {}), true);
funAssert("isAsy(function () {})", _NX.isAsy(function () {}), false);
funAssert("isAsy(() => { return {} })", _NX.isAsy(() => { return {} }), false);
funAssert("isAsy(class {})", _NX.isAsy(class {}), false);

funAssert("isCon(undefined)", _NX.isCon(undefined), false);
funAssert("isCon(null)", _NX.isCon(null), false);
funAssert("isCon(false)", _NX.isCon(false), false);
funAssert("isCon('1')", _NX.isCon('1'), false);
funAssert("isCon(1)", _NX.isCon(1), false);
funAssert("isCon(1)", _NX.isCon(1), false);
funAssert("isCon(1.1)", _NX.isCon(1.1), false);
funAssert("isCon(1n)", _NX.isCon(1n), false);
funAssert("isCon(Symbol('a'))", _NX.isCon(Symbol('a')), false);
funAssert("isCon([])", _NX.isCon([]), false);
funAssert("isCon({})", _NX.isCon({}), false);
funAssert("isCon(new function constructorFunction(a) {this.a = a})", _NX.isCon(new function constructorFunction(a) {this.a = a}), false);
funAssert("isCon({ then(res) { res('ok'); } })", _NX.isCon({ then(res) { res('ok'); } }), false);
funAssert("isCon(new Promise((res) => res('test')))", _NX.isCon(new Promise((res) => res('test'))), false);
funAssert("isCon(i => i + 1)", _NX.isCon(i => i + 1), false);
funAssert("isCon(async () => {})", _NX.isCon(async () => {}), false);
funAssert("isCon(function () {})", _NX.isCon(function () {}), true);
funAssert("isCon(() => { return {} })", _NX.isCon(() => { return {} }), false);
funAssert("isCon(class {})", _NX.isCon(class {}), false);

funAssert("isFac(undefined)", _NX.isFac(undefined), false);
funAssert("isFac(null)", _NX.isFac(null), false);
funAssert("isFac(false)", _NX.isFac(false), false);
funAssert("isFac('1')", _NX.isFac('1'), false);
funAssert("isFac(1)", _NX.isFac(1), false);
funAssert("isFac(1)", _NX.isFac(1), false);
funAssert("isFac(1.1)", _NX.isFac(1.1), false);
funAssert("isFac(1n)", _NX.isFac(1n), false);
funAssert("isFac(Symbol('a'))", _NX.isFac(Symbol('a')), false);
funAssert("isFac([])", _NX.isFac([]), false);
funAssert("isFac({})", _NX.isFac({}), false);
funAssert("isFac(new function constructorFunction(a) {this.a = a})", _NX.isFac(new function constructorFunction(a) {this.a = a}), false);
funAssert("isFac({ then(res) { res('ok'); } })", _NX.isFac({ then(res) { res('ok'); } }), false);
funAssert("isFac(new Promise((res) => res('test')))", _NX.isFac(new Promise((res) => res('test'))), false);
funAssert("isFac(i => i + 1)", _NX.isFac(i => i + 1), false);
funAssert("isFac(async () => {})", _NX.isFac(async () => {}), false);
funAssert("isFac(function () {})", _NX.isFac(function () {}), false);
funAssert("isFac(() => { return {} })", _NX.isFac(() => { return {} }), true);
funAssert("isFac(class {})", _NX.isFac(class {}), false);

funAssert("isCla(undefined)", _NX.isCla(undefined), false);
funAssert("isCla(null)", _NX.isCla(null), false);
funAssert("isCla(false)", _NX.isCla(false), false);
funAssert("isCla('1')", _NX.isCla('1'), false);
funAssert("isCla(1)", _NX.isCla(1), false);
funAssert("isCla(1)", _NX.isCla(1), false);
funAssert("isCla(1.1)", _NX.isCla(1.1), false);
funAssert("isCla(1n)", _NX.isCla(1n), false);
funAssert("isCla(Symbol('a'))", _NX.isCla(Symbol('a')), false);
funAssert("isCla([])", _NX.isCla([]), false);
funAssert("isCla({})", _NX.isCla({}), false);
funAssert("isCla(new function constructorFunction(a) {this.a = a})", _NX.isCla(new function constructorFunction(a) {this.a = a}), false);
funAssert("isCla({ then(res) { res('ok'); } })", _NX.isCla({ then(res) { res('ok'); } }), false);
funAssert("isCla(new Promise((res) => res('test')))", _NX.isCla(new Promise((res) => res('test'))), false);
funAssert("isCla(i => i + 1)", _NX.isCla(i => i + 1), false);
funAssert("isCla(async () => {})", _NX.isCla(async () => {}), false);
funAssert("isCla(function () {})", _NX.isCla(function () {}), false);
funAssert("isCla(() => { return {} })", _NX.isCla(() => { return {} }), false);
funAssert("isCla(class {})", _NX.isCla(class {}), true);

funPersonalVerification = (anyGot, anyExpected) => {
  if (anyGot === undefined || anyGot === null) return false;
  if (anyExpected === undefined || anyExpected === null) return false;

  if (anyGot.length === undefined || anyGot.length === null) return false;
  if (anyGot.length !== anyExpected.length) return false;

  for (let i = 0; i < anyGot.length; i++) {
    if (anyGot[i][0] !== anyExpected[i][0] || anyGot[i][1] !== anyExpected[i][1]) return false;
  };

  return true;
};
funAssert("is_(undefined)", _NX.is_(undefined), [ [ 'und', 'undefined' ] ], funPersonalVerification);
funAssert("is_(null)", _NX.is_(null), [ [ 'nul', 'null' ] ], funPersonalVerification);
funAssert("is_(false)", _NX.is_(false), [ [ 'boo', 'boolean' ] ], funPersonalVerification);
funAssert("is_('1')", _NX.is_('1'), [ [ 'str', 'string' ] ], funPersonalVerification);
funAssert("is_(1)", _NX.is_(1), [ [ 'num', 'number' ], [ 'int', 'integer' ] ], funPersonalVerification);
funAssert("is_(1)", _NX.is_(1), [ [ 'num', 'number' ], [ 'int', 'integer' ] ], funPersonalVerification);
funAssert("is_(1.1)", _NX.is_(1.1), [ [ 'num', 'number' ], [ 'flo', 'float' ] ], funPersonalVerification);
funAssert("is_(1n)", _NX.is_(1n), [ [ 'big', 'bigint' ] ], funPersonalVerification);
funAssert("is_(Symbol('a'))", _NX.is_(Symbol('a')), [ [ 'sym', 'symbol' ] ], funPersonalVerification);
funAssert("is_([])", _NX.is_([]), [ [ 'arr', 'array' ] ], funPersonalVerification);
funAssert("is_({})", _NX.is_({}), [ [ 'obj', 'object' ] ], funPersonalVerification);
funAssert("is_(new function constructorFunction(a) {this.a = a})", _NX.is_(new function constructorFunction(a) {this.a = a}), [ [ 'obj', 'object' ], [ 'ins', 'instance' ] ], funPersonalVerification);
funAssert("is_({ then(res) { res('ok'); } })", _NX.is_({ then(res) { res('ok'); } }), [ [ 'obj', 'object' ], [ 'the', 'thenable' ] ], funPersonalVerification);
funAssert("is_(new Promise((res) => res('test')))", _NX.is_(new Promise((res) => res('test'))), [ [ 'obj', 'object' ], [ 'ins', 'instance' ], [ 'the', 'thenable' ], [ 'pro', 'promise' ] ], funPersonalVerification);
funAssert("is_(i => i + 1)", _NX.is_(i => i + 1), [ [ 'fun', 'function' ] ], funPersonalVerification);
funAssert("is_(async () => {})", _NX.is_(async () => {}), [ [ 'fun', 'function' ], [ 'asy', 'async function' ] ], funPersonalVerification);
funAssert("is_(function () {})", _NX.is_(function () {}), [ [ 'fun', 'function' ], [ 'con', 'constructor function' ] ], funPersonalVerification);
funAssert("is_(() => { return {} })", _NX.is_(() => { return {} }), [ [ 'fun', 'function' ], [ 'fac', 'factory function' ] ], funPersonalVerification);
funAssert("is_(class {})", _NX.is_(class {}), [ [ 'fun', 'function' ], [ 'cla', 'class' ] ], funPersonalVerification);

funAssert("toFixed(9.99)",
  _NX.toFixed(9.99),
  '9');
funAssert("toFixed(9.99)",
  _NX.toFixed(9.99, 1),
  '9.9');

funAssert('floor("123.123")',
  _NX.floor("123.123"),
  '123.122');
funAssert('floor("123.000")',
  _NX.floor("123.000"),
  '122.999');
funAssert('floor("000.000")',
  _NX.floor("000.000"),
  '-000.001');
funAssert('floor("-000.001")',
  _NX.floor("-000.001"),
  '-000.002');

funAssert('ceil("123.123")',
  _NX.ceil("123.123"),
  '123.124');
funAssert('ceil("123.999")',
  _NX.ceil("123.999"),
  '124.000');
funAssert('ceil("-000.000")',
  _NX.ceil("-000.000"),
  '000.001');
funAssert('ceil("-001.000")',
  _NX.ceil("-001.000"),
  '-000.999');

funAssert('normalizeText("Atenção! O café do Sr. João, em São Paulo, é ótimo para quem busca disposição!")',
  _NX.normalizeText("Atenção! O café do Sr. João, em São Paulo, é ótimo para quem busca disposição!"),
  "Atencao! O cafe do Sr. Joao, em Sao Paulo, e otimo para quem busca disposicao!");

funPersonalVerification = (anyGot, anyExpected) => {
  if (anyExpected.indexOf(anyGot) === -1) return false;

  return true;
};
funAssert("randomBetweenNumbers([ [1, 2], [5, 6] ])",
  _NX.randomBetweenNumbers([ [1, 2], [5, 6] ]),
  [ 1, 2, 5, 6 ],
  funPersonalVerification);

funPersonalVerification = (anyGot, anyExpected) => {
  if (anyExpected.indexOf(anyGot) === -1) return false;

  return true;
};
funAssert("randomCharacter(1)",
  _NX.randomCharacter(1),
  [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
  funPersonalVerification);

funAssert("ruleOfThree(2, 5, 4)",
  _NX.ruleOfThree(2, 5, 4),
  10);

funPersonalVerification = (anyGot, anyExpected) => {
  if (anyGot === undefined || anyGot === null) return false;
  if (anyExpected === undefined || anyExpected === null) return false;

  if (anyGot.length === undefined || anyGot.length === null) return false;
  if (anyGot.length !== anyExpected.length) return false;

  for (let i = 0; i < anyGot.length; i++) {
    if (anyGot[i][0] !== anyExpected[i][0] || anyGot[i][1] !== anyExpected[i][1]) return false;
  };

  return true;
};
funAssert('sortElements([ [ 2, "b" ], [ 2, "a" ], [ 3, "b" ], [ 3, "c" ], [ 3, "a" ], [ 1, "a" ], [ 1, "b" ] ], [ 0, 1 ])',
  _NX.sortElements([ [ 2, "b" ], [ 2, "a" ], [ 3, "b" ], [ 3, "c" ], [ 3, "a" ], [ 1, "a" ], [ 1, "b" ] ], [ 0, 1 ]),
  [ [ 2, "a" ], [ 2, "b" ], [ 3, "a" ], [ 3, "b" ], [ 3, "c" ], [ 1, "a" ], [ 1, "b" ] ],
  funPersonalVerification);

funPersonalVerification = (anyGot, anyExpected) => {
  if (anyGot === undefined || anyGot === null) return false;
  if (anyExpected === undefined || anyExpected === null) return false;

  if (anyGot.length === undefined || anyGot.length === null) return false;
  if (anyGot.length !== anyExpected.length) return false;

  for (let i = 0; i < anyGot.length; i++) {
    if (anyGot[i][0] !== anyExpected[i][0] || anyGot[i][1] !== anyExpected[i][1]) return false;

    if (anyGot[i][2].length === undefined || anyExpected[i][2].length === null) return false;
    if (anyGot[i][2].length !== anyExpected[i][2].length) return false;

    for (let j = 0; j < anyGot[i][2].length; j++) {
      if (anyGot[i][2][j] !== anyExpected[i][2][j]) return false;
    };
  };

  return true;
};
funAssert("checkRepeatedElements([ undefined, undefined, 'undefined', null, false, '1', 1, 1, 1.1, 1n, Symbol('a'), [], [ 1 ], [1], {}, new function constructorFunction(a) {this.a = a}, { then(res) { res('ok'); } }, new Promise((res) => res('test')), i => i + 1, async () => {}, function () {}, () => { return {} }, class {}, ])",
  _NX.checkRepeatedElements([ undefined, undefined, 'undefined', null, false, '1', 1, 1, 1.1, 1n, Symbol('a'), [], [ 1 ], [1], {}, new function constructorFunction(a) {this.a = a}, { then(res) { res('ok'); } }, new Promise((res) => res('test')), i => i + 1, async () => {}, function () {}, () => { return {} }, class {}, ]),
  [ [ undefined, 2, [ 'undefined' ] ], [ 'undefined', 1, [ 'string' ] ], [ null, 1, [ 'null' ] ], [ false, 1, [ 'boolean' ] ], [ '1', 1, [ 'string' ] ], [ 1, 2, [ 'number' ] ], [ 1.1, 1, [ 'number' ] ], [ undefined, 1, [ 'bigint' ] ], [ undefined, 1, [ 'symbol' ] ], [ '[]', 1, [ 'array' ] ], [ '[1]', 2, [ 'array' ] ], [ '{}', 1, [ 'object' ] ], [ '{}', 1, [ 'instance' ] ], [ '{}', 1, [ 'thenable' ] ], [ '{}', 1, [ 'promise' ] ], [ undefined, 1, [ 'function' ] ], [ undefined, 1, [ 'async function' ] ], [ undefined, 1, [ 'constructor function' ] ], [ undefined, 1, [ 'factory function' ] ], [ undefined, 1, [ 'class' ] ] ],
  funPersonalVerification);

funAssert("checkLeapYear(4)", _NX.checkLeapYear(4), true);

funAssert('dateToSeconds({ year: "0001", month: "01", day: "02", hour: "00", minute: "00", second: "00" })',
  _NX.dateToSeconds({ year: "0001", month: "01", day: "02", hour: "00", minute: "00", second: "00" }),
  86400);

funPersonalVerification = (anyGot, anyExpected) => {
  if (!anyGot || !anyExpected) return false;

  if (anyGot.year !== anyExpected.year || anyGot.month !== anyExpected.month || anyGot.day !== anyExpected.day || anyGot.hour !== anyExpected.hour || anyGot.minute !== anyExpected.minute || anyGot.second !== anyExpected.second) return false;

  if (!anyGot.calendarsUsed || !anyExpected.calendarsUsed) return false;

  if (anyGot.calendarsUsed.length !== anyExpected.calendarsUsed.length) return false;

  for (let i = 0; i < anyGot.calendarsUsed.length; i++) {
    if (anyGot.calendarsUsed[i] !== anyExpected.calendarsUsed[i]) return false;
  };

  return true;
};
funAssert("secondsToDate(0)",
  _NX.secondsToDate(0),
  { year: "0001", month: "01", day: "01", hour: "00", minute: "00", second: "00", calendarsUsed: ["juliano"] },
  funPersonalVerification);

funAssert("numberForRealMoneyFormat(1250.009)",
  _NX.numberForRealMoneyFormat(1250.009),
  "1.250,00");

funPersonalVerification = (anyGot, anyExpected) => {
  if (anyGot === undefined || anyGot === null) return false;
  if (anyExpected === undefined || anyExpected === null) return false;

  if (anyGot.length === undefined || anyGot.length === null) return false;
  if (anyGot.length !== anyExpected.length) return false;

  for (let i = 0; i < anyGot.length; i++) {
    if (anyGot[i][0] !== anyExpected[i][0] || anyGot[i][1] !== anyExpected[i][1]) return false;
  };

  return true;
};
funAssert('calculateNumerology([ "123", "abc", " a2c!@~", "92", "994", "9996", "" ])',
  _NX.calculateNumerology([ "123", "abc", " a2c!@~", "92", "994", "9996", "" ]),
  [ [ '123', 6 ], [ 'abc', 6 ], [ ' a2c!@~', 6 ], [ '92', 11 ], [ '994', 22 ], [ '9996', 33 ], [ '', 0 ] ],
  funPersonalVerification);

// Testes assíncronos (executados após os síncronos)
(async () => {
  const intMilliseconds = 1000;

  // waitTimeAsync
  const intNow1 = Date.now();
  await _NX.waitTimeAsync(intMilliseconds);
  const intElapsed1 = Date.now() - intNow1;
  if (intElapsed1 >= intMilliseconds) {
    intPass++;
  } else {
    intFail++;
    console.log('--- FAIL:');
    console.log('  Function:');
    console.log(`waitTimeAsync(${intMilliseconds})`);
    console.log('  Got (elapsed ms):');
    console.log(intElapsed1);
    console.log('  Expected (>= ms):');
    console.log(intMilliseconds);
    console.log('');
  };

  // waitTimeNodeSync
  const intNow2 = Date.now();
  _NX.waitTimeNodeSync(intMilliseconds);
  const intElapsed2 = Date.now() - intNow2;
  if (intElapsed2 >= intMilliseconds) {
    intPass++;
  } else {
    intFail++;
    console.log('--- FAIL:');
    console.log('  Function:');
    console.log(`waitTimeNodeSync(${intMilliseconds})`);
    console.log('  Got (elapsed ms):');
    console.log(intElapsed2);
    console.log('  Expected (>= ms):');
    console.log(intMilliseconds);
    console.log('');
  };

  console.log(`Final: ${intPass} passed, ${intFail} failed`);
  console.log('');
  process.exitCode = intFail > 0 ? 1 : 0;
})();
