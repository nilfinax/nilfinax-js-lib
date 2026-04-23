// Importações:
const isUnd = require('./isUnd'); const isNul = require('./isNul'); const isBoo = require('./isBoo'); const isStr = require('./isStr'); const isNum = require('./isNum'); const isInt = require('./isInt'); const isFlo = require('./isFlo'); const isBig = require('./isBig'); const isSym = require('./isSym'); const isArr = require('./isArr'); const isObj = require('./isObj'); const isIns = require('./isIns'); const isThe = require('./isThe'); const isPro = require('./isPro'); const isFun = require('./isFun'); const isAsy = require('./isAsy'); const isCon = require('./isCon'); const isFac = require('./isFac'); const isCla = require('./isCla');

const fname = `is_`;

const declaration = `function is_(anyParameter) { ... };`;

const description = `--- Função que retorna os tipos do dado fornecido.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Any. Dado a ser verificado.
- Retorno: Array.

Exemplo de uso:
is_(a => { a: a });

Exemplo de retorno:
[
  [ "fun", "fac" ],
  [ "function", "factory function" ]
]`;

/**
 * Função que retorna os tipos do dado fornecido.
 *
 * @param {*} [anyParameter] Opcional. Any. Dado a ser verificado.
 * @returns {Array} Array.
 *
 * @example
 * is_(a => { a: a });
 * // Retorno:
 * // [
 * //   [ "fun", "fac" ],
 * //   [ "function", "factory function" ]
 * // ]
 */
function is_(anyParameter) {
  const arrReturn = [];

  if (isUnd(anyParameter)) arrReturn.push([ 'und', 'undefined' ]);
  if (isNul(anyParameter)) arrReturn.push([ 'nul', 'null' ]);
  if (isBoo(anyParameter)) arrReturn.push([ 'boo', 'boolean' ]);
  if (isStr(anyParameter)) arrReturn.push([ 'str', 'string' ]);
  if (isNum(anyParameter)) arrReturn.push([ 'num', 'number' ]);
  if (isInt(anyParameter)) arrReturn.push([ 'int', 'integer' ]);
  if (isFlo(anyParameter)) arrReturn.push([ 'flo', 'float' ]);
  if (isBig(anyParameter)) arrReturn.push([ 'big', 'bigint' ]);
  if (isSym(anyParameter)) arrReturn.push([ 'sym', 'symbol' ]);
  if (isArr(anyParameter)) arrReturn.push([ 'arr', 'array' ]);
  if (isObj(anyParameter)) arrReturn.push([ 'obj', 'object' ]);
  if (isIns(anyParameter)) arrReturn.push([ 'ins', 'instance' ]);
  if (isThe(anyParameter)) arrReturn.push([ 'the', 'thenable' ]);
  if (isPro(anyParameter)) arrReturn.push([ 'pro', 'promise' ]);
  if (isFun(anyParameter)) arrReturn.push([ 'fun', 'function' ]);
  if (isAsy(anyParameter)) arrReturn.push([ 'asy', 'async function' ]);
  if (isCon(anyParameter)) arrReturn.push([ 'con', 'constructor function' ]);
  if (isFac(anyParameter)) arrReturn.push([ 'fac', 'factory function' ]);
  if (isCla(anyParameter)) arrReturn.push([ 'cla', 'class' ]);

  if (arrReturn.length < 1) arrReturn.push([ '-', '-' ]);

  return arrReturn;
};

is_.fname = fname;
is_.declaration = declaration;
is_.description = description;
is_.help = help;

module.exports = is_;
