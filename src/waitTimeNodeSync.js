// Importações:


const fname = `waitTimeNodeSync`;

const declaration = `function waitTimeNodeSync(intMilliseconds = 1000) { ... };`;

const description = `--- Função síncrona, para Node.js, que bloqueia a thread atual pelo tempo passado como parâmetro em milissegundos.`;

const help = `${description}

${declaration}

- 1º parâmetro: Opcional. Integer. Indica o tempo em milissegundos a ser aguardado.
- Retorno: Promise.

Exemplo de uso:
waitTimeNodeSync(3000);

Exemplo de retorno:
true`;

let insWaitTimeNodeSyncBuffer = null;

/**
 * Função síncrona, para Node.js, que bloqueia a thread atual pelo tempo passado como parâmetro em milissegundos.
 *
 * @param {number} [intMilliseconds=1000] Opcional. Integer. Indica o tempo em milissegundos a ser aguardado.
 * @returns {boolean} Boolean.
 *
 * @example
 * waitTimeNodeSync(3000);
 * // Retorno:
 * // true
 */
function waitTimeNodeSync(intMilliseconds = 1000) {
  const booIsNode =
    typeof process !== 'undefined' &&
    process !== null &&
    process.versions !== undefined &&
    typeof process.versions.node === 'string';

  if (!booIsNode) {
    throw new Error(`A função "${fname}" é exclusiva para Node.js.`);
  }

  if (
    typeof SharedArrayBuffer === 'undefined' ||
    typeof Atomics === 'undefined' ||
    typeof Atomics.wait !== 'function'
  ) {
    throw new Error(`A função "${fname}" não é suportada neste ambiente.`);
  }

  if (insWaitTimeNodeSyncBuffer === null) {
    insWaitTimeNodeSyncBuffer = new Int32Array(new SharedArrayBuffer(4));
  }

  Atomics.wait(insWaitTimeNodeSyncBuffer, 0, 0, intMilliseconds);
  return true;
};

waitTimeNodeSync.fname = fname;
waitTimeNodeSync.declaration = declaration;
waitTimeNodeSync.description = description;
waitTimeNodeSync.help = help;

module.exports = waitTimeNodeSync;
