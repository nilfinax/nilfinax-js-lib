const fs = require('fs');
const path = require('path');

const strSrcDir = path.join(__dirname, '..', 'src');
const strOutputFile = path.join(strSrcDir, 'nilfinax.js');

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

console.log('- Validando funcionalidades...');

// Validação: verifica se cada feature tem as propriedades esperadas
arrFeatures.forEach(({ strName }) => {
  try {
    const anyMod = require(path.join(strSrcDir, `${strName}.js`));

    const arrMissing = [];
    if (!anyMod.fname) arrMissing.push('fname');
    if (!anyMod.declaration) arrMissing.push('declaration');
    if (!anyMod.description) arrMissing.push('description');
    if (!anyMod.help) arrMissing.push('help');

    if (arrMissing.length > 0) {
      console.warn(`Funcionalidade "${strName}" está faltando: ${arrMissing.join(', ')}`);
      console.log('');
    }
  } catch (objErr) {
    console.error(`Erro ao carregar feature "${strName}":`, objErr.message);
    console.log('');
  }
});

// Gera o código
let strCode = `
// ===============================================================
// ARQUIVO GERADO AUTOMATICAMENTE POR scripts/generate-nilfinax.js
// NÃO EDITE MANUALMENTE - suas alterações serão sobrescritas
// ===============================================================

const booIsDev = process.env.NODE_ENV === 'development';

const nilfinax = {};
nilfinax.dev = {};
nilfinax.prod = {};

// ===============================================================
// IMPORTS ESTÁTICOS
// ===============================================================
`;

arrFeatures.forEach(({ strName, booHasDev }) => {
  strCode += `const ${strName} = require('./${strName}');\n`;
  if (booHasDev) {
    strCode += `const ${strName}Dev = require('./${strName}.dev');\n`;
  }
});

strCode += `// ===============================================================
// MAPA DE MÓDULOS
// ===============================================================
const mapModules = {
`;

arrFeatures.forEach(({ strName, booHasDev }, intIndex) => {
  const booIsLast = intIndex === arrFeatures.length - 1;
  if (booHasDev) {
    strCode += `  ${strName}: { prod: ${strName}, dev: ${strName}Dev }${booIsLast ? '' : ','}\n`;
  } else {
    strCode += `  ${strName}: { prod: ${strName} }${booIsLast ? '' : ','}\n`;
  }
});

strCode += `};

// ===============================================================
// LISTA DE FEATURES
// ===============================================================
const arrAllFeatureFiles = [
`;

// Adiciona o array
arrFeatures.forEach(({ strName }, intIndex) => {
  const booIsLast = intIndex === arrFeatures.length - 1;
  strCode += `  { strFeatureFileName: '${strName}' }${booIsLast ? '' : ','}\n`;
});

strCode += `];

// ===============================================================
// LOOP DE MONTAGEM
// ===============================================================
for (let i = 0; i < arrAllFeatureFiles.length; i++) {
  const obj = arrAllFeatureFiles[i];
  const strName = obj.strFeatureFileName;

  const modules = mapModules[strName];

  if (!modules) {
    console.warn(\`[nilfinax] Feature "\${strName}" não encontrada no mapModules. Pulando.\`);
    continue;
  }

  const funProd = modules.prod;
  const funDev = modules.dev || funProd;

  nilfinax.prod[strName] = funProd;
  nilfinax.dev[strName] = funDev;
  nilfinax[strName] = booIsDev ? funDev : funProd;
}

// ===============================================================
// FUNÇÃO DE HELP
// ===============================================================
const funShowFeatures = () => {
  let strFeaturesInfo = '';

  for (let i = 0; i < arrAllFeatureFiles.length; i++) {
    const obj = arrAllFeatureFiles[i];
    const strName = obj.strFeatureFileName;

    const fun = nilfinax[strName];

    if (!fun) continue;

    const strFname = fun.fname ? fun.fname : '';
    const strDesc = fun.description ? fun.description : '';

    if (strFname && strDesc) {
      strFeaturesInfo += \`\${strFname}\\n\${strDesc}\\n\`;

      if (i !== arrAllFeatureFiles.length - 1) strFeaturesInfo += \`\\n\`;
    }
  }

  return strFeaturesInfo;
};

const description = \`--- Biblioteca de JavaScript do @Nilfinax.\`;

const help = \`\${description}

\${funShowFeatures()}

Use 'functionName.help()' para detalhes sobre ela.

Bom uso!\`;

nilfinax.test = () => { console.log(\`Teste da biblioteca de JavaScript do @Nilfinax.\`); };
nilfinax.description = description;
nilfinax.help = help;

module.exports = nilfinax;
`;

// Escreve o arquivo
fs.writeFileSync(strOutputFile, strCode, 'utf8');

console.log(`- nilfinax.js gerado com sucesso!`);
console.log(`- ${arrFeatures.length} funcionalidades encontradas:`);
arrFeatures.forEach(({ strName, booHasDev }) => {
  console.log(`${strName}${booHasDev ? ' (com .dev)' : ''}`);
});
