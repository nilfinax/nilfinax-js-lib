// Importações:


const fname = `dateToSeconds`;

const declaration = `function dateToSeconds(objDateAndTime) { ... };`;

const description = `--- Função que retorna os segundos totais da data fornecida, respeitando a transição do calendário Juliano para o Gregoriano.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Object. Indica a data e hora e deve seguir esses padrões:
A chave "year" representa o ano;
A chave "month" representa o mês;
A chave "day" representa o dia;
A chave "hour" representa a hora;
A chave "minute" representa o minuto;
A chave "second" representa o segundo.
- Retorno: Integer.
Até "04/10/1582 23:59:59", usa calendário "Juliano" e a partir de "15/10/1582 00:00:00", usa calendário "Gregoriano";
Há um salto de 10 dias da data "04/10/1582 23:59:59" para a data "15/10/1582 00:00:00", usado como padronização da mudança de calendário.

Exemplo de uso:
dateToSeconds({ year: "0001", month: "01", day: "02", hour: "00", minute: "00", second: "00" });

Exemplo de retorno:
86400`;

const intSecondsPerMinute = 60;
const intSecondsPerHour = 3600;
const intSecondsPerDay = 86400;

const intJdnJulianEpoch = 1721424;

const intGregorianTransitionYear = 1582;
const intGregorianTransitionMonth = 10;
const intFirstGregorianDayAfterTransition = 15;

const objEmptyDateAndTime = Object.freeze({});

/**
 * Função que retorna os segundos totais da data fornecida, respeitando a transição do calendário Juliano para o Gregoriano.
 *
 * @param {Object} [objDateAndTime] Opcional. Object. Indica a data e hora e deve seguir esses padrões:
 * @param {string|number} [objDateAndTime.year] - O ano.
 * @param {string|number} [objDateAndTime.month] - O mês.
 * @param {string|number} [objDateAndTime.day] - O dia.
 * @param {string|number} [objDateAndTime.hour] - A hora.
 * @param {string|number} [objDateAndTime.minute] - O minuto.
 * @param {string|number} [objDateAndTime.second] - O segundo.
 * @returns {number} Integer.
 * Até "04/10/1582 23:59:59", usa calendário "Juliano" e a partir de "15/10/1582 00:00:00", usa calendário "Gregoriano";
 * Há um salto de 10 dias da data "04/10/1582 23:59:59" para a data "15/10/1582 00:00:00", usado como padronização da mudança de calendário.
 *
 * @example
 * dateToSeconds({ year: "0001", month: "01", day: "02", hour: "00", minute: "00", second: "00" });
 * // Retorno:
 * // 86400
 */
function dateToSeconds(objDateAndTime) {
  const objSourceDateAndTime = objDateAndTime === undefined || objDateAndTime === null ? objEmptyDateAndTime : objDateAndTime;

  const intYear = objSourceDateAndTime.year === undefined || objSourceDateAndTime.year === null ? 1 : Number(objSourceDateAndTime.year);
  const intMonth = objSourceDateAndTime.month === undefined || objSourceDateAndTime.month === null ? 1 : Number(objSourceDateAndTime.month);
  const intDay = objSourceDateAndTime.day === undefined || objSourceDateAndTime.day === null ? 1 : Number(objSourceDateAndTime.day);
  const intHour = objSourceDateAndTime.hour === undefined || objSourceDateAndTime.hour === null ? 0 : Number(objSourceDateAndTime.hour);
  const intMinute = objSourceDateAndTime.minute === undefined || objSourceDateAndTime.minute === null ? 0 : Number(objSourceDateAndTime.minute);
  const intSecond = objSourceDateAndTime.second === undefined || objSourceDateAndTime.second === null ? 0 : Number(objSourceDateAndTime.second);

  const booUseGregorianCalendar = intYear > intGregorianTransitionYear || (intYear === intGregorianTransitionYear && (intMonth > intGregorianTransitionMonth || (intMonth === intGregorianTransitionMonth && intDay >= intFirstGregorianDayAfterTransition)));

  const intMonthShift = intMonth < 3 ? 1 : 0;
  const intNormalizedYear = intYear + 4800 - intMonthShift;
  const intNormalizedMonth = intMonth + (12 * intMonthShift) - 3;

  let intJdn;

  if (booUseGregorianCalendar) {
    intJdn = intDay
      + Math.floor((153 * intNormalizedMonth + 2) / 5)
      + (365 * intNormalizedYear)
      + Math.floor(intNormalizedYear / 4)
      - Math.floor(intNormalizedYear / 100)
      + Math.floor(intNormalizedYear / 400)
      - 32045;
  } else {
    intJdn = intDay
      + Math.floor((153 * intNormalizedMonth + 2) / 5)
      + (365 * intNormalizedYear)
      + Math.floor(intNormalizedYear / 4)
      - 32083;
  };

  const intElapsedDays = intJdn - intJdnJulianEpoch;

  return (intElapsedDays * intSecondsPerDay) + (intHour * intSecondsPerHour) + (intMinute * intSecondsPerMinute) + intSecond;
};

dateToSeconds.fname = fname;
dateToSeconds.declaration = declaration;
dateToSeconds.description = description;
dateToSeconds.help = help;

module.exports = dateToSeconds;
