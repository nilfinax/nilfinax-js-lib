# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).
Este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [2.0.0] - 2026-03-16

### ⚠️ Alterações incompatíveis (MAJOR)

- **`arraysWithElementInElements`**: Função removida.
- **`secondsDetailed`**: Função removida.
- **`numberForFormRealMoney`**: Renomeada para `numberForRealMoneyFormat`.
- **`waitTime`**: Renomeada para `waitTimeAsync`.
- **`waitTimeNode`**: Renomeada para `waitTimeNodeSync`.
- **`dateToSeconds`**: Passou a trabalhar também com o calendário Juliano além do calendário Gregoriano, tendo um salto de 10 dias da data 04/10/1582 23:59:59 para a data 15/10/1582 00:00:00, usado como padronização da mudança de calendário.
- **`secondsToDate`**: Passou a trabalhar também com o calendário Juliano além do calendário Gregoriano, tendo um salto de 10 dias da data 04/10/1582 23:59:59 para a data 15/10/1582 00:00:00, usado como padronização da mudança de calendário.
- **`checkRepeatedElements`**:
  - Estrutura de retorno alterada: removido o 4º elemento (string serializada). Agora retorna apenas `[elemento, contagem, tipos]`.
  - Elementos não serializáveis (`undefined`, `bigint`, `symbol`, `function`, `class`) agora retornam `undefined` como primeiro elemento do subarray, em vez do valor original.
  - Elementos de tipos distintos com o mesmo valor serializado (ex.: `{}` de `object`, `instance`, `thenable` e `promise`) agora geram entradas separadas no retorno, em vez de serem agrupados em um único subarray com múltiplos tipos.
  - O parâmetro `booCompareTypes` agora controla apenas a comparação de tipos entre elementos de mesmo valor serializado — a separação por tipo estrutural acima é sempre aplicada.
- **`calculateNumerology`**:
  - O primeiro e os demais parâmetros `...arrStringsOrNumbers` foram unificados em um único parâmetro `arrStrings` do tipo `array`.
  - Passou a aceitar como primeiro parâmetro apenas array de strings.
- **`randomCharacter`**: Deixou de aceitar números inteiros e passou a aceitar apenas strings.
- **`randomBetweenNumbers`**: Os parâmetros foram reorganizados e o segundo e os demais parâmetros `...arrArraysOfIntervals` foram unificados em um único parâmetro `arrIntervals` do tipo `array`. A ordem dos parâmetros também foi invertida.
- **`sortElements`**:
  - O quarto e os demais parâmetros `...arrArrayIndicesOrObjectKeys` foram unificados em um único parâmetro `arrIndicesOrObjectKeys` do tipo `array`. A ordem dos parâmetros também foi alterada para: antigo 1º, antigo 4º, antigo 2º e antigo 3º.
  - Passou a aceitar como primeiro parâmetro apenas array de arrays ou array de objetos.

### ✨ Adicionado (MINOR)

- **`secondsToDate`**: Adicionado o terceiro parâmetro `booUseLocalUTCOnNewDateMethod = false` que indica se deve ser usado o UTC local caso a função deva usar `Date.now()`.
- **`isThe`**: Nova função para identificar se o dado pode ser assimilado como promessa por await/Promise.resolve (`thenable`).
- **`is_`**: A função `isThe` foi incrementada.
- **`normalizeText`**: Nova função para normalizar textos.
- **`prettyArrayFormattingInString`**: Nova função para formatar arrays em string de forma visualmente legível, auxiliando no desenvolvimento.
- Modo desenvolvimento/produção automático baseado em `NODE_ENV`.
- Suporte a bundlers modernos (esbuild, Rollup).
- Tipos TypeScript completos (`.d.ts`).
- Suporte a ES Modules.

### 🔧 Corrigido (PATCH)

- **`floor`**: Erro ao trabalhar com números negativos corrigido.
- **`checkRepeatedElements`**:
  - Erro ao trabalhar com `bigint` corrigido. Anteriormente, `bigint` era agrupado com outros tipos não serializáveis de forma incorreta.
  - Passou a distinguir corretamente entre `object`, `instance`, `thenable` e `promise`, que antes eram todos agrupados sob `'{}'`.
- **`ruleOfThree`**: Corrigido erro de lógica com o número `0`.
- **`numberForRealMoneyFormat`**: Corrigido erro de lógica com números negativos onde, por exemplo, o valor `-123.456` retornava erroneamente `"-.123,45"`. Agora o retorno é corretamente `"-123,45"`.
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
