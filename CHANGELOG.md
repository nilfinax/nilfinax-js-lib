# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).
Este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [2.0.0] - 2026-03-16

### ⚠️ Alterações incompatíveis

- **`arraysWithElementInElements`**: Função removida.
- **`secondsDetailed`**: Função removida.
- **`numberForFormRealMoney`**: Renomeada para `numberForRealMoneyFormat`.
- **`waitTime`**: Renomeada para `waitTimeAsync`.
- **`waitTimeNode`**: Renomeada para `waitTimeNodeSync`.
- **`calculateNumerology`**: Deixou de aceitar números e passou a aceitar apenas strings.
- **`randomCharacter`**: Deixou de aceitar números inteiros e passou a aceitar apenas strings.
- **`randomBetweenNumbers`**: Os parâmetros foram reorganizados e o segundo e os demais parâmetros `...arrArraysOfIntervals` foram unificados em um único parâmetro `arrIntervals` do tipo `array`. A ordem dos parâmetros também foi invertida.
- **`sortElements`**: O quarto e os demais parâmetros `...arrArrayIndicesOrObjectKeys` foram unificados em um único parâmetro `arrIndicesOrObjectKeys` do tipo `array`. A ordem dos parâmetros também foi alterada para: antigo 1º, antigo 4º, antigo 2º e antigo 3º.
- **`sortElements`**: Passou a aceitar como primeiro parâmetro apenas array de arrays ou array de objetos.

### ✨ Adicionado

- **`secondsToDate`**: Adicionado o terceiro parâmetro `booUseLocalUTCOnNewDateMethod = false` que indica se deve ser usado o UTC local caso a função deva usar `Date.now()`.
- **`isThe`**: Nova função para identificar se o dado pode ser assimilado como promessa por await/Promise.resolve (`thenable`).
- **`normalizeText`**: Nova função para normalizar textos.
- **`prettyArrayFormattingInString`**: Nova função para formatar arrays em string de forma visualmente legível, auxiliando no desenvolvimento.
- Modo desenvolvimento/produção automático baseado em `NODE_ENV`.
- Suporte a bundlers modernos (esbuild, Rollup).
- Tipos TypeScript completos (`.d.ts`).
- Suporte a ES Modules.

### 🔧 Corrigido

- **`floor`**: Erro ao trabalhar com números negativos corrigido.
- **`checkRepeatedElements`**: Erro ao trabalhar com BigInt corrigido.
- **`ruleOfThree`**: Erro de lógica com o número `0` corrigido.
- **`isNum`**: Agora valida apenas números finitos (exclui `NaN`, `Infinity` e `-Infinity`).
- **`isFlo`**: Agora valida apenas números finitos do tipo float (exclui `NaN`, `Infinity` e `-Infinity`).
- **`isIns`**: Agora evita falsos positivos em casos de protótipo nulo, como em `Object.create(null)`.
- **`isPro`**: Agora é mais restritiva, identificando se é realmente uma `Promise`.
- **`isAsy`**: Agora não depende mais de `toString()` nem do formato do código-fonte da função. Detecta `async arrow function` além de `async function`.
- **`isCon`**: Agora não executa mais a função, evitando efeitos colaterais e problemas reais. Também evita falso negativo quando a função exige parâmetros. Por fim, verifica corretamente a constructibilidade da função.

### 🚀 Melhorado

- Todas as funcionalidades foram convertidas de arrow functions para funções regulares.
- Estrutura interna reorganizada com pastas `src/` e `dist/`.
- Melhorias de desempenho na maioria das funcionalidades, sendo as mais significativas:
  - **`randomBetweenNumbers`**: ~1.041,15x mais rápida.
  - **`randomCharacter`**: ~282,28x mais rápida.
  - **`sortElements`**: ~26,35x mais rápida.
  - **`checkRepeatedElements`**: ~13,09x mais rápida.
  - **`secondsToDate`**: ~8,41x mais rápida.
  - **`dateToSeconds`**: ~4,67x mais rápida.

---

## [1.0.0] - 2025-04-14

- Versão inicial da biblioteca.
