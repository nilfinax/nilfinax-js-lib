// Importações:
const isCla = require('./isCla'); const isFac = require('./isFac'); const isCon = require('./isCon'); const isAsy = require('./isAsy'); const isFun = require('./isFun'); const isThe = require('./isThe'); const isPro = require('./isPro'); const isIns = require('./isIns'); const isObj = require('./isObj'); const isArr = require('./isArr'); const isSym = require('./isSym'); const isBig = require('./isBig'); const isNum = require('./isNum'); const isStr = require('./isStr'); const isBoo = require('./isBoo'); const isNul = require('./isNul'); const isUnd = require('./isUnd');

const fname = `checkRepeatedElements`;

const declaration = `function checkRepeatedElements(arrArrayOfElements, booCompareTypes = true) { ... };`;

const description = `--- Função que verifica quantas vezes cada elemento de um array se repete.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. Array. Indica o array a ser verificado os elementos que se repetem.
- 2º parâmetro: Opcional. Boolean. Indica se os tipos dos elementos também serão comparados.
- Retorno: Array.

Exemplo de uso:
checkRepeatedElements([
  undefined,
  undefined,
  'undefined',
  null,
  false,
  '1',
  1,
  1,
  1.1,
  1n,
  Symbol('a'),
  [],
  [ 1 ],
  [1],
  {},
  new function constructorFunction(a) {this.a = a},
  { then(res) { res('ok'); } },
  new Promise((res) => res('test')),
  i => i + 1,
  async () => {},
  function () {},
  () => { return {} },
  class {},
]);

Exemplo de retorno:
[
  [ undefined, 2, [ 'undefined' ] ],
  [ 'undefined', 1, [ 'string' ] ],
  [ null, 1, [ 'null' ] ],
  [ false, 1, [ 'boolean' ] ],
  [ '1', 1, [ 'string' ] ],
  [ 1, 2, [ 'number' ] ],
  [ 1.1, 1, [ 'number' ] ],
  [ undefined, 1, [ 'bigint' ] ],
  [ undefined, 1, [ 'symbol' ] ],
  [ '[]', 1, [ 'array' ] ],
  [ '[1]', 2, [ 'array' ] ],
  [ '{}', 1, [ 'object' ] ],
  [ '{}', 1, [ 'instance' ] ],
  [ '{}', 1, [ 'thenable' ] ],
  [ '{}', 1, [ 'promise' ] ],
  [ undefined, 1, [ 'function' ] ],
  [ undefined, 1, [ 'async function' ] ],
  [ undefined, 1, [ 'constructor function' ] ],
  [ undefined, 1, [ 'factory function' ] ],
  [ undefined, 1, [ 'class' ] ]
]`;

/**
 * Função que verifica quantas vezes cada elemento de um array se repete.
 *
 * @param {Array} arrArrayOfElements Obrigatório. Array. Indica o array a ser verificado os elementos que se repetem.
 * @param {boolean} [booCompareTypes=true] Opcional. Boolean. Indica se os tipos dos elementos também serão comparados.
 * @returns {Array} Array:
 *
 * @example
 * checkRepeatedElements([
 *   undefined,
 *   undefined,
 *   'undefined',
 *   null,
 *   false,
 *   '1',
 *   1,
 *   1,
 *   1.1,
 *   1n,
 *   Symbol('a'),
 *   [],
 *   [ 1 ],
 *   [1],
 *   {},
 *   new function constructorFunction(a) {this.a = a},
 *   { then(res) { res('ok'); } },
 *   new Promise((res) => res('test')),
 *   i => i + 1,
 *   async () => {},
 *   function () {},
 *   () => { return {} },
 *   class {},
 * ]);
 * // Retorno:
 * // [
 * //   [ undefined, 2, [ 'undefined' ] ],
 * //   [ 'undefined', 1, [ 'string' ] ],
 * //   [ null, 1, [ 'null' ] ],
 * //   [ false, 1, [ 'boolean' ] ],
 * //   [ '1', 1, [ 'string' ] ],
 * //   [ 1, 2, [ 'number' ] ],
 * //   [ 1.1, 1, [ 'number' ] ],
 * //   [ undefined, 1, [ 'bigint' ] ],
 * //   [ undefined, 1, [ 'symbol' ] ],
 * //   [ '[]', 1, [ 'array' ] ],
 * //   [ '[1]', 2, [ 'array' ] ],
 * //   [ '{}', 1, [ 'object' ] ],
 * //   [ '{}', 1, [ 'instance' ] ],
 * //   [ '{}', 1, [ 'thenable' ] ],
 * //   [ '{}', 1, [ 'promise' ] ],
 * //   [ undefined, 1, [ 'function' ] ],
 * //   [ undefined, 1, [ 'async function' ] ],
 * //   [ undefined, 1, [ 'constructor function' ] ],
 * //   [ undefined, 1, [ 'factory function' ] ],
 * //   [ undefined, 1, [ 'class' ] ]
 * // ]
 */
function checkRepeatedElements(arrArrayOfElements, booCompareTypes = true) {
  const arrElementsReturn = [];

  const objElements = {};
  for (let i = 0; i < arrArrayOfElements.length; i++) {
    const anyElement = arrArrayOfElements[i];

    let strType = '';
    let anyElementStringify = '';

    if (isCla(anyElement)) {
      strType = 'class';
      anyElementStringify = undefined;
    } else if (isFac(anyElement)) {
      strType = 'factory function';
      anyElementStringify = undefined;
    } else if (isCon(anyElement)) {
      strType = 'constructor function';
      anyElementStringify = undefined;
    } else if (isAsy(anyElement)) {
      strType = 'async function';
      anyElementStringify = undefined;
    } else if (isFun(anyElement)) {
      strType = 'function';
      anyElementStringify = undefined;
    } else if (isPro(anyElement)) {
      strType = 'promise';
      anyElementStringify = JSON.stringify(anyElement);
    } else if (isThe(anyElement)) {
      strType = 'thenable';
      anyElementStringify = JSON.stringify(anyElement);
    } else if (isIns(anyElement)) {
      strType = 'instance';
      anyElementStringify = JSON.stringify(anyElement);
    } else if (isObj(anyElement)) {
      strType = 'object';
      anyElementStringify = JSON.stringify(anyElement);
    } else if (isArr(anyElement)) {
      strType = 'array';
      anyElementStringify = JSON.stringify(anyElement);
    } else if (isSym(anyElement)) {
      strType = 'symbol';
      anyElementStringify = undefined;
    } else if (isBig(anyElement)) {
      strType = 'bigint';
      anyElementStringify = undefined;
    } else if (isNum(anyElement)) {
      strType = 'number';
    } else if (isStr(anyElement)) {
      strType = 'string';
    } else if (isBoo(anyElement)) {
      strType = 'boolean';
    } else if (isNul(anyElement)) {
      strType = 'null';
    } else if (isUnd(anyElement)) {
      strType = 'undefined';
    } else {
      continue;
    };

    let anyElementToString;
    let anyElementToUse;

    if (anyElementStringify === '') {
      anyElementToString = `${anyElement}`;
      anyElementToUse = anyElement;
    } else {
      anyElementToString = anyElementStringify;
      anyElementToUse = anyElementStringify
    };

    if (!objElements[anyElementToString]) {
      arrElementsReturn.push([ anyElementToUse, 1, [ strType ] ]);

      if (booCompareTypes) {
        objElements[anyElementToString] = {
          [strType]: { intIndex: arrElementsReturn.length - 1 }
        };
      } else {
        objElements[anyElementToString] = { intIndex: arrElementsReturn.length - 1 };
      };
    } else if (booCompareTypes && !objElements[anyElementToString][strType]) {
      arrElementsReturn.push([ anyElementToUse, 1, [ strType ] ]);

      objElements[anyElementToString][strType] = { intIndex: arrElementsReturn.length - 1 };
    } else {
      const objElementInfo = booCompareTypes ? objElements[anyElementToString][strType] : objElements[anyElementToString];

      const arrElementTypesOfElements = arrElementsReturn[objElementInfo.intIndex][2];

      arrElementsReturn[objElementInfo.intIndex][1]++;
      if (arrElementTypesOfElements.indexOf(strType) === -1) arrElementsReturn[objElementInfo.intIndex][2].push(strType);
    };
  };

  return arrElementsReturn;
};

checkRepeatedElements.fname = fname;
checkRepeatedElements.declaration = declaration;
checkRepeatedElements.description = description;
checkRepeatedElements.help = help;

module.exports = checkRepeatedElements;
