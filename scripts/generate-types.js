const fs = require('fs');
const path = require('path');

const strSrcDir = path.join(__dirname, '..', 'src');
const strDistDir = path.join(__dirname, '..', 'dist');
const strOutputFile = path.join(strDistDir, 'nilfinax.d.ts');

// Garante que a pasta dist existe
if (!fs.existsSync(strDistDir)) fs.mkdirSync(strDistDir, { recursive: true });

// Arquivos a ignorar
const arrIgnoreFiles = ['index.js', 'nilfinax.js'];
const arrIgnorePatterns = [/^_/, /\.dev\.js$/]; // ignora arquivos que começam com _ e .dev.js

// Lê todos os arquivos .js da pasta src/
const arrAllFiles = fs.readdirSync(strSrcDir).filter(strFile => {
  if (!strFile.endsWith('.js')) return false;
  if (arrIgnoreFiles.includes(strFile)) return false;
  if (arrIgnorePatterns.some(objPattern => objPattern.test(strFile))) return false;

  return true;
});

// Monta a lista de funcionalidades
const arrFeatures = arrAllFiles.map(strFile => {
  const strName = strFile.replace('.js', '');
  const strDevFile = `${strName}.dev.js`;
  const booHasDev = fs.existsSync(path.join(strSrcDir, strDevFile));

  return { strName, booHasDev };
});

// Ordena alfabeticamente
arrFeatures.sort((a, b) => a.strName.localeCompare(b.strName));

console.log('- Gerando tipos TypeScript...');

// Converte tipos JSDoc para TypeScript
function funConvertJSDocTypeToTS(strJsdocType) {
  // Se o tipo já for uma união de strings (ex: 'cre' | 'dec'), retorna como está
  if (strJsdocType.includes('|')) return strJsdocType;

  const objTypeMap = {
    'Array': 'any[]',
    'array': 'any[]',
    'Array<any>': 'any[]',
    'Array<Array>': 'any[][]',
    'boolean': 'boolean',
    'string': 'string',
    'number': 'number',
    'integer': 'number',
    'Date': 'Date',
    'Promise<void>': 'Promise<void>',
    'Promise<boolean>': 'Promise<boolean>',
    'Object': 'object',
    'object': 'object',
    'any': 'any',
    '*': 'any',
    'Function': 'Function',
    'bigint': 'bigint',
    'symbol': 'symbol',
    'undefined': 'undefined',
    'null': 'null'
  };

  return objTypeMap[strJsdocType] || strJsdocType; // Se não achar no mapa, tenta usar o nome original
}

// Função para extrair TODOS os blocos JSDoc antes da função (preservando formatação original)
function funExtractJSDoc(strFilePath) {
  const strContent = fs.readFileSync(strFilePath, 'utf8');
  const strFunctionName = path.basename(strFilePath, '.js');

  // Regex EXATA da função pública
  const insFunctionRegex = new RegExp(`(\\/\\*\\*[\\s\\S]*?\\*\\/\\s*)+(?:async\\s+)?function\\s+${strFunctionName}\\s*\\(`, 'm');

  const arrMatch = strContent.match(insFunctionRegex);
  if (!arrMatch) return null;

  // Captura todos os blocos JSDoc imediatamente antes da função
  const arrJsdocBlocks = arrMatch[0].match(/\/\*\*[\s\S]*?\*\//g);

  if (!arrJsdocBlocks || arrJsdocBlocks.length === 0) return null;

  const strMainJSDocBlock = arrJsdocBlocks[arrJsdocBlocks.length - 1];
  const arrTypedefBlocks = arrJsdocBlocks.slice(0, -1);

  const arrTypedefs = [];
  arrTypedefBlocks.forEach(strBlock => {
    const arrMatches = [...strBlock.matchAll(/@typedef\s+\{([^}]+)\}\s+(\w+)/g)];
    arrMatches.forEach(m => {
      arrTypedefs.push({
        strName: m[2],
        strType: m[1]
      });
    });
  });

  // @return OU @returns
  const arrReturnMatch = strMainJSDocBlock.match(/@returns?\s+\{([^}]+)\}/);
  const strReturnType = arrReturnMatch ? funConvertJSDocTypeToTS(arrReturnMatch[1]) : 'any';

  // Parâmetros (IGNORANDO sub-propriedades como objDateAndTime.year)
  const objParamRegex = /@param\s+\{([^}]+)\}\s+([^\s]+)/g;
  const arrParams = [...strMainJSDocBlock.matchAll(objParamRegex)].map(m => {
    const strRawType = m[1];
    const strRawName = m[2];

    // IGNORA propriedades de objeto (obj.prop)
    if (strRawName.includes('.')) return null;

    const booOptional = strRawName.startsWith('[');
    const arrNameMatch = strRawName.match(/\[?(\w+)/);
    const strName = arrNameMatch ? arrNameMatch[1] : strRawName;

    // Detecta se é um parâmetro rest (começa com ...)
    const booIsRest = strRawType.startsWith('...');
    const strCleanType = booIsRest ? strRawType.slice(3) : strRawType;

    return {
      strName,
      strType: funConvertJSDocTypeToTS(strCleanType),
      booOptional,
      booIsRest
    };
  });

  return {
    strFunctionName,
    arrTypedefBlocks,
    arrTypedefs,
    strMainJSDocBlock,
    arrParams,
    strReturnType
  };
}

// Gera as definições de tipo
const insSetGeneratedTypes = new Set();

// Gera as definições de tipo
let strTypeDefinitions = `// Type definitions for nilfinax 2.0.0
// Project: https://github.com/nilfinax/nilfinax-js-lib
// Definitions by: Nilfinax
// TypeScript Version: 3.0

/**
 * Biblioteca de JavaScript do @Nilfinax.
 */
declare const nilfinax: Nilfinax;

export = nilfinax;

interface Nilfinax {
  /**
   * Função de teste da biblioteca.
   */
  test(): void;

  /**
   * Descrição da biblioteca.
   */
  description: string;

  /**
   * Ajuda geral da biblioteca.
   */
  help: string;

  /**
   * Objeto com versões de desenvolvimento (com validações).
   */
  dev: NilfinaxFeatures;

  /**
   * Objeto com versões de produção (sem validações).
   */
  prod: NilfinaxFeatures;

`;

// Adiciona cada feature
const arrFeatureSignatures = [];

arrFeatures.forEach(({ strName }) => {
  const strFilePath = path.join(strSrcDir, `${strName}.js`);
  const objJsdoc = funExtractJSDoc(strFilePath);

  if (objJsdoc) {
    // GERA type REAL a partir de @typedef (sem duplicar)
    if (objJsdoc.arrTypedefs?.length) {
      objJsdoc.arrTypedefs.forEach(t => {
        if (insSetGeneratedTypes.has(t.strName)) return;

        // Insere ANTES da interface Nilfinax
        const intInterfaceIndex = strTypeDefinitions.indexOf('interface Nilfinax {');
        if (intInterfaceIndex !== -1) {
          strTypeDefinitions =
            strTypeDefinitions.slice(0, intInterfaceIndex) +
            `type ${t.strName} = ${t.strType};\n\n` +
            strTypeDefinitions.slice(intInterfaceIndex);
        }

        insSetGeneratedTypes.add(t.strName);
      });
    }

    // Monta a assinatura da função
    const strParamsStr = objJsdoc.arrParams.map(p => {
      if (p === null) return '';

      const strOptional = p.booOptional ? '?' : '';

      // Se for rest parameter, usa sintaxe correta do TypeScript
      if (p.booIsRest) {
        // Se já for array, não duplica []
        if (p.strType.endsWith('[]')) return `...${p.strName}: ${p.strType}`;

        return `...${p.strName}: ${p.strType}[]`;
      };

      return `${p.strName}${strOptional}: ${p.strType}`;
    }).filter(strParam => strParam !== '').join(', ');

    // Adiciona o bloco JSDoc principal da função
    strTypeDefinitions += `${objJsdoc.strMainJSDocBlock}\n`;

    // Adiciona a assinatura TypeScript
    strTypeDefinitions += `  ${strName}(${strParamsStr}): ${objJsdoc.strReturnType};\n\n`;

    arrFeatureSignatures.push(strName);
  } else {
    console.warn(`Não foi possível extrair JSDoc de "${strName}"`);
    // Adiciona assinatura genérica
    strTypeDefinitions += `  ${strName}: any;\n\n`;
    arrFeatureSignatures.push(strName);
  }
});

strTypeDefinitions += `}\n\n`;

// Adiciona interface NilfinaxFeatures
strTypeDefinitions += `interface NilfinaxFeatures {\n`;
arrFeatureSignatures.forEach(strName => {
  strTypeDefinitions += `  ${strName}: typeof nilfinax.${strName};\n`;
});
strTypeDefinitions += `}\n`;

// Escreve o arquivo principal
fs.writeFileSync(strOutputFile, strTypeDefinitions, 'utf8');

// Cria arquivos .d.ts para cada bundle (apontando para o principal)
const bundleFiles = [
  'nilfinax.cjs.d.ts',
  'nilfinax.esm.d.ts',
  'nilfinax.umd.d.ts',
  'nilfinax.umd.min.d.ts'
];

const referenceContent = `export * from './nilfinax';\nexport { default } from './nilfinax';\n`;

bundleFiles.forEach(strFile => {
  const strFilePath = path.join(strDistDir, strFile);
  fs.writeFileSync(strFilePath, referenceContent, 'utf8');
});

console.log(`- nilfinax.d.ts gerado com sucesso!`);
console.log(`- Arquivos de referência criados: ${bundleFiles.join(', ')}`);
console.log(`${arrFeatures.length} funcionalidades processadas.`);
