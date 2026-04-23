# Nilfinax

[![npm version](https://img.shields.io/npm/v/nilfinax.svg)](https://www.npmjs.com/package/nilfinax)
[![npm downloads](https://img.shields.io/npm/dm/nilfinax.svg)](https://www.npmjs.com/package/nilfinax)
[![license](https://img.shields.io/npm/l/nilfinax.svg)](https://github.com/nilfinax/nilfinax-js-lib/blob/main/LICENSE)

Biblioteca de JavaScript do **@Nilfinax** com funções utilitárias, validações de tipos e funções auxiliares para desenvolvimento.

---

## 📦 Instalação

```bash
npm install nilfinax
```

---

## ⚙️ Compatibilidade

- Node.js >= 20
- Compatível com bundlers modernos (Webpack, Vite, Rollup)
- Suporte a ESM, CommonJS e diretamente no browser via CDN (UMD)

---

## 🛠️ Desenvolvimento vs Produção

Em Node.js e bundlers, a biblioteca detecta automaticamente o ambiente:

- **Desenvolvimento** (`NODE_ENV !== "production"`): usa validações de parâmetros
- **Produção** (`NODE_ENV === "production"`): não usa validações de parâmetros (mais desempenho)

Mas você também pode forçar o uso do modo de desenvolvimento com `_NX.dev` ou o uso do modo de produção com `_NX.prod`.

---

## 🚀 Uso

### Node.js / Bundlers (Webpack, Vite, Rollup, etc.)

```javascript
const _NX = require("nilfinax");

// Automático (dev ou prod conforme NODE_ENV)
console.log(_NX.isNum(0)); // true

// Sempre com validações (dev)
console.log(_NX.dev.isNum(0)); // true

// Sempre sem validações (prod)
console.log(_NX.prod.isNum(0)); // true
```

### ES Modules (Node, Deno, Bun)

```javascript
import _NX from "nilfinax";

// Automático (dev ou prod conforme NODE_ENV)
console.log(_NX.isNum(0)); // true

// Sempre com validações (dev)
console.log(_NX.dev.isNum(0)); // true

// Sempre sem validações (prod)
console.log(_NX.prod.isNum(0)); // true
```

### Browser (CDN)

#### Versão de produção (minificada, sem validações)

```html
<script src="https://unpkg.com/nilfinax/dist/nilfinax.umd.min.js"></script>
<!-- Ou usando o campo padrão do unpkg:
<script src="https://unpkg.com/nilfinax"></script>
-->

<script>
  // Sem validações ("_NX.prod" por padrão)
  console.log(_NX.isNum(0)); // true

  // Com validações (uso de "_NX.dev" necessário)
  console.log(_NX.dev.isNum(0)); // true
</script>
```

#### Versão de desenvolvimento (com validações)

```html
<script src="https://unpkg.com/nilfinax/dist/nilfinax.umd.js"></script>

<script>
  // Com validações ("_NX.dev" por padrão)
  console.log(_NX.isNum(0)); // true

  // Sem validações (uso de "_NX.prod" necessário)
  console.log(_NX.prod.isNum(0)); // true
</script>
```

---

## 🔍 Ajuda e documentação

### Ver todas as funções disponíveis

```javascript
_NX.help();
```

### Ver detalhes de uma função específica

```javascript
_NX.isNum.help();
```

---

## 📚 Funções disponíveis

### Verificação de tipos

- `isUnd()` - Verifica se é `undefined`
- `isNul()` - Verifica se é `null`
- `isBoo()` - Verifica se é `boolean`
- `isStr()` - Verifica se é `string`
- `isNum()` - Verifica se é `number`
- `isInt()` - Verifica se é `integer`
- `isFlo()` - Verifica se é `float`
- `isBig()` - Verifica se é `bigint`
- `isSym()` - Verifica se é `symbol`
- `isArr()` - Verifica se é `array`
- `isObj()` - Verifica se é `object`
- `isIns()` - Verifica se é `instance`
- `isThe()` - Verifica se é `thenable`
- `isPro()` - Verifica se é `promise`
- `isFun()` - Verifica se é `function`
- `isAsy()` - Verifica se é `async function`
- `isCon()` - Verifica se é `constructor function`
- `isFac()` - Verifica se é `factory function`
- `isCla()` - Verifica se é `class`
- `is_()` - Verifica em quais tipos o valor se encaixa

### Matemática

- `toFixed()` - Arredonda número com precisão
- `floor()` - Arredonda para baixo com precisão
- `ceil()` - Arredonda para cima com precisão
- `randomBetweenNumbers()` - Gera número aleatório entre min e max
- `ruleOfThree()` - Calcula regra de três

### Strings

- `normalizeText()` - Remove acentos e normaliza texto
- `randomCharacter()` - Gera string aleatória

### Arrays

- `sortElements()` - Ordena elementos
- `checkRepeatedElements()` - Verifica elementos repetidos
- `prettyArrayFormattingInString()` - Formata array como string visualmente mais legível

### Datas

- `checkLeapYear()` - Verifica se o ano é bissexto
- `dateToSeconds()` - Converte data para segundos
- `secondsToDate()` - Converte segundos para data

### Formatação

- `numberForRealMoneyFormat()` - Formata número como moeda brasileira (R$)

### Outros

- `calculateNumerology()` - Calcula numerologia de um texto
- `waitTimeAsync()` - Aguarda um tempo de forma assíncrona
- `waitTimeNodeSync()` - Aguarda um tempo de forma síncrona no Node.js (específico de Node.js)

---

## 📋 Changelog

Veja todas as mudanças em [CHANGELOG.md](CHANGELOG.md).

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m "Adiciona MinhaFeature"`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Nilfinax**

- GitHub: [@nilfinax](https://github.com/nilfinax)
- npm: [nilfinax](https://www.npmjs.com/package/nilfinax)

---

## ⭐ Apoie o projeto

Se você gostou da biblioteca, considere dar uma ⭐ no [repositório do GitHub](https://github.com/nilfinax/nilfinax-js-lib)!

---

**Bom uso! 🚀**
