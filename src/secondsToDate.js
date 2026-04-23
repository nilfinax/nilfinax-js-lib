// Importações:


const fname = `secondsToDate`;

const declaration = `function secondsToDate(intSeconds, booSecondsBasedOnNewDateMethod = false, booUseLocalUTCOnNewDateMethod = false) { ... };`;

const description = `--- Função que retorna uma data exata referente aos segundos passados, respeitando a transição do calendário Juliano para o Gregoriano.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Integer. Indica os segundos desde "01/01/0001 00:00:00".
- 2º parâmetro: Opcional. Boolean. Indica se os segundos passados estão no formato do Date "Math.trunc(Date.now() / 1000)".
- 3º parâmetro: Opcional. Boolean. Indica se deve ser usado o UTC local.
- Retorno: Object.
Até "04/10/1582 23:59:59", usa calendário "Juliano" e a partir de "15/10/1582 00:00:00", usa calendário "Gregoriano";
Há um salto de 10 dias da data "04/10/1582 23:59:59" para a data "15/10/1582 00:00:00", usado como padronização da mudança de calendário.

Exemplo de uso:
secondsToDate(0);

Exemplo de retorno:
{
  year: "0001",
  month: "01",
  day: "01",
  hour: "00",
  minute: "00",
  second: "00",
  calendarsUsed: ["Juliano"]
}`;

const intSecondsOfThisFunctionForUnixEpoch = 62135769600;
const intSecondsPerMinute = 60;
const intSecondsPerHour = 3600;
const intSecondsPerDay = 86400;

const intJdnJulianEpoch = 1721424;
const intJdnGregorianStart = 2299161;

const arrTwoDigits = new Array(100);
for (let intIndex = 0; intIndex < 100; intIndex++) {
  arrTwoDigits[intIndex] = intIndex < 10 ? `0${intIndex}` : `${intIndex}`;
};

const arrCalendarsJulian = Object.freeze([`juliano`]);
const arrCalendarsJulianGregorian = Object.freeze([`juliano`, `gregoriano`]);

function funFormatYearMinFourDigits(intYear) {
  if (intYear < 10) return `000${intYear}`;
  if (intYear < 100) return `00${intYear}`;
  if (intYear < 1000) return `0${intYear}`;

  return `${intYear}`;
};

/**
 * Função que retorna uma data exata referente aos segundos passados, respeitando a transição do calendário Juliano para o Gregoriano.
 *
 * @param {number} [intSeconds] Opcional. Integer. Indica os segundos desde "01/01/0001 00:00:00".
 * @param {boolean} [booSecondsBasedOnNewDateMethod=false] Opcional. Boolean. Indica se os segundos passados estão no formato do Date "Math.trunc(Date.now() / 1000)".
 * @param {boolean} [booUseLocalUTCOnNewDateMethod=false] Opcional. Boolean. Indica se deve ser usado o UTC local.
 * @returns {Object} Object.
 * @property {string} year Número de anos.
 * @property {string} month Número de meses.
 * @property {string} day Número de dias.
 * @property {string} hour Número de horas.
 * @property {string} minute Número de minutos.
 * @property {string} second Número de segundos.
 * @property {string} calendarsUsed Calendários usados.
 * Até "04/10/1582 23:59:59", usa calendário "Juliano" e a partir de "15/10/1582 00:00:00", usa calendário "Gregoriano";
 * Há um salto de 10 dias da data "04/10/1582 23:59:59" para a data "15/10/1582 00:00:00", usado como padronização da mudança de calendário.
 *
 * @example
 * secondsToDate(0);
 * // Retorno:
 * // {
 * //   year: "0001",
 * //   month: "01",
 * //   day: "01",
 * //   hour: "00",
 * //   minute: "00",
 * //   second: "00",
 * //   calendarsUsed: ["Juliano"]
 * // }
 */
function secondsToDate(intSeconds, booSecondsBasedOnNewDateMethod = false, booUseLocalUTCOnNewDateMethod = false) {
  if (intSeconds === undefined || intSeconds === null) {
    if (booUseLocalUTCOnNewDateMethod) {
      const insDateNow = new Date();

      intSeconds = Math.trunc(insDateNow.getTime() / 1000)
        - (insDateNow.getTimezoneOffset() * 60)
        + intSecondsOfThisFunctionForUnixEpoch;
    } else {
      intSeconds = Math.trunc(Date.now() / 1000) + intSecondsOfThisFunctionForUnixEpoch;
    };
  } else {
    if (intSeconds < 0) intSeconds = -intSeconds;

    if (booSecondsBasedOnNewDateMethod) {
      intSeconds += intSecondsOfThisFunctionForUnixEpoch;

      if (booUseLocalUTCOnNewDateMethod) {
        intSeconds -= new Date().getTimezoneOffset() * 60;
      };
    };
  };

  const intElapsedDays = Math.floor(intSeconds / intSecondsPerDay);
  let intRemainingSeconds = intSeconds % intSecondsPerDay;

  const intHour = Math.floor(intRemainingSeconds / intSecondsPerHour);
  intRemainingSeconds -= intHour * intSecondsPerHour;

  const intMinute = Math.floor(intRemainingSeconds / intSecondsPerMinute);
  const intSecond = intRemainingSeconds - (intMinute * intSecondsPerMinute);

  const intJdn = intJdnJulianEpoch + intElapsedDays;

  let intYear;
  let intMonth;
  let intDay;
  let arrCalendarsUsed;

  if (intJdn >= intJdnGregorianStart) {
    let intShiftedJdn = intJdn + 68569;
    const intGregorian400YearCycles = Math.floor((4 * intShiftedJdn) / 146097);

    intShiftedJdn -= Math.floor((146097 * intGregorian400YearCycles + 3) / 4);

    const intYearIndexInGregorianCycle = Math.floor((4000 * (intShiftedJdn + 1)) / 1461001);

    intShiftedJdn = intShiftedJdn - Math.floor((1461 * intYearIndexInGregorianCycle) / 4) + 31;

    const intMonthIndexFromMarchBase = Math.floor((80 * intShiftedJdn) / 2447);

    intDay = intShiftedJdn - Math.floor((2447 * intMonthIndexFromMarchBase) / 80);

    const intMonthYearCarry = Math.floor(intMonthIndexFromMarchBase / 11);

    intMonth = intMonthIndexFromMarchBase + 2 - (12 * intMonthYearCarry);
    intYear = (100 * (intGregorian400YearCycles - 49)) + intYearIndexInGregorianCycle + intMonthYearCarry;
    arrCalendarsUsed = arrCalendarsJulianGregorian;
  } else {
    const intShiftedJdn = intJdn + 32082;
    const intJulian4YearCycles = Math.floor((4 * intShiftedJdn + 3) / 1461);
    const intDayIndexInJulianCycle = intShiftedJdn - Math.floor((1461 * intJulian4YearCycles) / 4);
    const intMonthIndexFromMarchBase = Math.floor((5 * intDayIndexInJulianCycle + 2) / 153);
    const intMonthYearCarry = Math.floor(intMonthIndexFromMarchBase / 10);

    intDay = intDayIndexInJulianCycle - Math.floor((153 * intMonthIndexFromMarchBase + 2) / 5) + 1;
    intMonth = intMonthIndexFromMarchBase + 3 - (12 * intMonthYearCarry);
    intYear = intJulian4YearCycles - 4800 + intMonthYearCarry;
    arrCalendarsUsed = arrCalendarsJulian;
  };

  return {
    year: funFormatYearMinFourDigits(intYear),
    month: arrTwoDigits[intMonth],
    day: arrTwoDigits[intDay],
    hour: arrTwoDigits[intHour],
    minute: arrTwoDigits[intMinute],
    second: arrTwoDigits[intSecond],
    calendarsUsed: arrCalendarsUsed
  };
};

secondsToDate.fname = fname;
secondsToDate.declaration = declaration;
secondsToDate.description = description;
secondsToDate.help = help;

module.exports = secondsToDate;
