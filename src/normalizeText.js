// Importações:


const fname = `normalizeText`;

const declaration = `function normalizeText(strText) { ... };`;

const description = `--- Função que normaliza texto para comparações e pesquisas.`;

const help = `${description}

${declaration}

- 1º parâmetro: Obrigatório. String. Indica o texto a ser normalizado.
- Retorno: String.

Exemplo de uso:
normalizeText("Atenção! O café do Sr. João, em São Paulo, é ótimo para quem busca disposição!");

Exemplo de retorno:
Atencao! O cafe do Sr. Joao, em Sao Paulo, e otimo para quem busca disposicao!`;

/**
 * Função que normaliza texto para comparações e pesquisas.
 *
 * @param {string} strNumber Obrigatório. String. Indica o texto a ser normalizado.
 * @returns {string} String.
 *
 * @example
 * normalizeText("Atenção! O café do Sr. João, em São Paulo, é ótimo para quem busca disposição!");
 * // Retorno:
 * // Atencao! O cafe do Sr. Joao, em Sao Paulo, e otimo para quem busca disposicao!
 */
function normalizeText(strText) {
  return String(strText || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

normalizeText.fname = fname;
normalizeText.declaration = declaration;
normalizeText.description = description;
normalizeText.help = help;

module.exports = normalizeText;
