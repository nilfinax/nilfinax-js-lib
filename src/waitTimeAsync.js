// Importações:


const fname = `waitTimeAsync`;

const declaration = `function waitTimeAsync(intMilliseconds = 1000) { ... };`;

const description = `--- Função assíncrona que aguarda o tempo passado como parâmetro em milissegundos baseado em uma Promise.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Integer. Indica o tempo em milissegundos a ser aguardado.
- Retorno: Promise.

Exemplo de uso:
waitTimeAsync(3000);

Exemplo de retorno:
Promise { <pending> }`;

/**
 * Função assíncrona que aguarda o tempo passado como parâmetro em milissegundos baseado em uma Promise.
 *
 * @param {number} [intMilliseconds=1000] Opcional. Integer. Indica o tempo em milissegundos a ser aguardado.
 * @returns {Promise<boolean>} Promise.
 *
 * @example
 * waitTimeAsync(3000);
 * // Retorno:
 * // Promise { <pending> }
 */
function waitTimeAsync(intMilliseconds = 1000) {
  return new Promise(funResolve => {
    setTimeout(funResolve, intMilliseconds, true);
  });
};

waitTimeAsync.fname = fname;
waitTimeAsync.declaration = declaration;
waitTimeAsync.description = description;
waitTimeAsync.help = help;

module.exports = waitTimeAsync;
