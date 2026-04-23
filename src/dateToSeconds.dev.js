// Importações:
const isObj = require('./isObj'); const isStr = require('./isStr'); const isNum = require('./isNum'); const isInt = require('./isInt'); const dateToSeconds = require('./dateToSeconds');

const fname = dateToSeconds.fname;

const declaration = dateToSeconds.declaration;

const description = dateToSeconds.description;

const help = dateToSeconds.help;

const intGregorianTransitionYear = 1582;
const intGregorianTransitionMonth = 10;
const intLastJulianDayBeforeTransition = 4;
const intFirstGregorianDayAfterTransition = 15;

const arrMonthMaxDaysCommonYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const arrMonthMaxDaysLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function dateToSecondsDev(objDateAndTime) {
  const funConsoleError = (strErrorText) => {
    console.error(`ERRO FUNÇÃO: ${declaration}`);
    console.error(`ERRO: ${strErrorText}`);
    console.error(`ERRO: Use "${fname}.help" para detalhes.`);
  };

  if (objDateAndTime !== undefined && objDateAndTime !== null) {
    if (!isObj(objDateAndTime)) {
      funConsoleError(`O 1º parâmetro "${objDateAndTime}" não é do tipo "object".`);
      return 0;
    };

    if (!('year' in objDateAndTime) && !('month' in objDateAndTime) && !('day' in objDateAndTime) && !('hour' in objDateAndTime) && !('minute' in objDateAndTime) && !('second' in objDateAndTime)) {
      funConsoleError(`O 1º parâmetro "${objDateAndTime}" não contém nenhuma das seguintes propriedades: "year", "month", "day", "hour", "minute" ou "second".`);
      return 0;
    };

    let intMin;
    let intMax;
    let intYear = 1;
    let intMonth = 1;
    let intDay = 1;

    if ('year' in objDateAndTime) {
      if (!isStr(objDateAndTime.year) && !isNum(objDateAndTime.year)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "year" mas o valor "${objDateAndTime.year}" não é do tipo "string" nem "number".`);
        return 0;
      };

      intMin = 1;
      const numYearToVerify = Number(objDateAndTime.year);

      if (!isInt(numYearToVerify)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "year" mas o valor "${objDateAndTime.year}" não representa um "integer".`);
        return 0;
      };

      if (numYearToVerify < intMin) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "year" mas o valor "${objDateAndTime.year}" é menor que o número ${intMin}.`);
        return 0;
      };

      intYear = numYearToVerify;
    };

    if ('month' in objDateAndTime) {
      if (!isStr(objDateAndTime.month) && !isNum(objDateAndTime.month)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "month" mas o valor "${objDateAndTime.month}" não é do tipo "string" nem "number".`);
        return 0;
      };

      intMin = 1;
      intMax = 12;
      const numMonthToVerify = Number(objDateAndTime.month);

      if (!isInt(numMonthToVerify)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "month" mas o valor "${objDateAndTime.month}" não representa um "integer".`);
        return 0;
      };

      if (numMonthToVerify < intMin) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "month" mas o valor "${objDateAndTime.month}" é menor que o número ${intMin}.`);
        return 0;
      };

      if (numMonthToVerify > intMax) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "month" mas o valor "${objDateAndTime.month}" é maior que o número ${intMax}.`);
        return 0;
      };

      intMonth = numMonthToVerify;
    };

    if ('day' in objDateAndTime) {
      if (!isStr(objDateAndTime.day) && !isNum(objDateAndTime.day)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "day" mas o valor "${objDateAndTime.day}" não é do tipo "string" nem "number".`);
        return 0;
      };

      intMin = 1;
      const numDayToVerify = Number(objDateAndTime.day);

      if (!isInt(numDayToVerify)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "day" mas o valor "${objDateAndTime.day}" não representa um "integer".`);
        return 0;
      };

      if (numDayToVerify < intMin) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "day" mas o valor "${objDateAndTime.day}" é menor que o número ${intMin}.`);
        return 0;
      };

      intDay = numDayToVerify;
    };

    let booUseGregorianCalendar = false;

    if (intYear > intGregorianTransitionYear) {
      booUseGregorianCalendar = true;
    } else if (intYear === intGregorianTransitionYear) {
      if (intMonth > intGregorianTransitionMonth) {
        booUseGregorianCalendar = true;
      } else if (intMonth === intGregorianTransitionMonth) {
        if (intDay >= intFirstGregorianDayAfterTransition) {
          booUseGregorianCalendar = true;
        } else if (intDay > intLastJulianDayBeforeTransition) {
          funConsoleError(`A data "${`${intYear}`.padStart(4, '0')}/${`${intMonth}`.padStart(2, '0')}/${`${intDay}`.padStart(2, '0')}" não existe neste modelo por causa da transição do calendário "Juliano" para o "Gregoriano".`);
          return 0;
        };
      };
    };

    const booLeapYear = booUseGregorianCalendar
      ? (intYear % 4 === 0 && (intYear % 100 !== 0 || intYear % 400 === 0))
      : (intYear % 4 === 0);

    intMax = (booLeapYear ? arrMonthMaxDaysLeapYear : arrMonthMaxDaysCommonYear)[intMonth - 1];

    if (intDay > intMax) {
      funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "day" mas o valor "${objDateAndTime.day}" é maior que o número do máximo de dias ${intMax} do mês referente "${`${intMonth}`.padStart(2, '0')}".`);
      return 0;
    };

    if ('hour' in objDateAndTime) {
      if (!isStr(objDateAndTime.hour) && !isNum(objDateAndTime.hour)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "hour" mas o valor "${objDateAndTime.hour}" não é do tipo "string" nem "number".`);
        return 0;
      };

      intMin = 0;
      intMax = 23;
      const numHourToVerify = Number(objDateAndTime.hour);

      if (!isInt(numHourToVerify)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "hour" mas o valor "${objDateAndTime.hour}" não representa um "integer".`);
        return 0;
      };

      if (numHourToVerify < intMin) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "hour" mas o valor "${objDateAndTime.hour}" é menor que o número ${intMin}.`);
        return 0;
      };

      if (numHourToVerify > intMax) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "hour" mas o valor "${objDateAndTime.hour}" é maior que o número ${intMax}.`);
        return 0;
      };
    };

    if ('minute' in objDateAndTime) {
      if (!isStr(objDateAndTime.minute) && !isNum(objDateAndTime.minute)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "minute" mas o valor "${objDateAndTime.minute}" não é do tipo "string" nem "number".`);
        return 0;
      };

      intMin = 0;
      intMax = 59;
      const numMinuteToVerify = Number(objDateAndTime.minute);

      if (!isInt(numMinuteToVerify)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "minute" mas o valor "${objDateAndTime.minute}" não representa um "integer".`);
        return 0;
      };

      if (numMinuteToVerify < intMin) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "minute" mas o valor "${objDateAndTime.minute}" é menor que o número ${intMin}.`);
        return 0;
      };

      if (numMinuteToVerify > intMax) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "minute" mas o valor "${objDateAndTime.minute}" é maior que o número ${intMax}.`);
        return 0;
      };
    };

    if ('second' in objDateAndTime) {
      if (!isStr(objDateAndTime.second) && !isNum(objDateAndTime.second)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "second" mas o valor "${objDateAndTime.second}" não é do tipo "string" nem "number".`);
        return 0;
      };

      intMin = 0;
      intMax = 59;
      const numSecondToVerify = Number(objDateAndTime.second);

      if (!isInt(numSecondToVerify)) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "second" mas o valor "${objDateAndTime.second}" não representa um "integer".`);
        return 0;
      };

      if (numSecondToVerify < intMin) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "second" mas o valor "${objDateAndTime.second}" é menor que o número ${intMin}.`);
        return 0;
      };

      if (numSecondToVerify > intMax) {
        funConsoleError(`O 1º parâmetro "${objDateAndTime}" contém a propriedade "second" mas o valor "${objDateAndTime.second}" é maior que o número ${intMax}.`);
        return 0;
      };
    };
  };

  const intSeconds = dateToSeconds(objDateAndTime);

  if (!Number.isSafeInteger(intSeconds)) {
    funConsoleError(`A data informada resulta em um número de segundos que não é um inteiro seguro "safe integer".`);
    return 0;
  };

  return intSeconds;
};

dateToSecondsDev.fname = fname;
dateToSecondsDev.declaration = declaration;
dateToSecondsDev.description = description;
dateToSecondsDev.help = help;

module.exports = dateToSecondsDev;
