// Importações:


const fname = `checkLeapYear`;

const declaration = `function checkLeapYear(intYear) { ... };`;

const description = `--- Função que verifica se o ano passado é bissexto.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. Integer. Indica o ano a ser verificado.
- Retorno: Boolean.

Exemplo de uso:
checkLeapYear(4);

Exemplo de retorno:
true`;

/**
 * Função que verifica se o ano passado é bissexto.
 *
 * @param {number} intYear Obrigatório. Integer. Indica o ano a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * checkLeapYear(4);
 * // Retorno:
 * // true
 */
function checkLeapYear(intYear) {
  return (intYear % 4 === 0 && (intYear % 100 !== 0 || intYear % 400 === 0));
};

checkLeapYear.fname = fname;
checkLeapYear.declaration = declaration;
checkLeapYear.description = description;
checkLeapYear.help = help;

module.exports = checkLeapYear;
