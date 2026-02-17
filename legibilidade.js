// Legibilidade é o “quão fácil é bater o olho e entender o que o código faz”
// pra você do futuro (que sempre esquece) e pra qualquer outra pessoa.

let altura1 = 1.8; // fraco
let alturaDoWylham = 1.8; // bem identificado e legivel

console.log(alturaDoWylham);

let altura = 7;
let largura = 10;
let area = 70;

// Regra prática: se o nome explica, você comenta menos.

// Uma função = uma ideia
// Se a função faz 3 coisas, ela vira um monstro difícil de manter.

// ruim:
function processar() {
  /* valida, calcula, salva, imprime */
}

// Bom:
function validarEntrada() {}
function calcularTotal() {}
function salvarNoBanco() {}

/* Consistência é rei
Escolhe um padrão e segue:

aspas simples ou duplas (um só)
nome de variáveis em camelCase
organização de imports
formato de funções
Isso deixa o projeto “com uma cara só”. */

/* Pequenas coisas que ajudam MUITO:

espaçamento
linhas curtas (sem textão)
separar blocos com linha em branco
evitar “números mágicos” (usar constantes)

Ex: */

const LIMITE_DIARIO = 100;
