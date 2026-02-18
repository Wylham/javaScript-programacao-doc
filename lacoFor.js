// estrutura do laço de repetição for contando até 10
for (let contador = 1; contador <= 10; contador++) {
  console.log("Número atual: ", contador);
}

// para encontrar um número par até 15
for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 == 0) {
    console.log("Número par encontrado: ", numero);
  }
}

// para encontrar um número ímpar até 15
for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 > 0) {
    console.log("Número par encontrado: ", numero);
  }
}

// palavra.length indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada

const palavra = "hevelyn";

for (let contador = 0; contador < palavra.length; contador++) {
  console.log(palavra[contador]);
}

const palavra3 = "exemplo";

// Uso incorreto: pode acessar 'undefined'
/* for (let i = 0; i <= palavra.length; i++) {
  console.log(palavra[i]);
} */

// Uso correto: acessa apenas posições válidas
/* for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
} */

// terminal:

/*
e
x
e
m
p
l
o
undefined
e
x
e
m
p
l
o
*/

// Outra abordagem interessante para iterar sobre os caracteres de uma string sem se preocupar com índices é utilizar o loop for...of
const palavra2 = "exemplo";

for (const caractere of palavra2) {
  console.log(caractere);
}
// Esse formato torna o código mais legível, removendo a necessidade de gerenciar contadores e condições de parada manualmente.

// -------------------------------------

// length é uma propriedade que diz “quantos itens/quantos caracteres tem”, dependendo do tipo.

// 1) Em string (texto): quantidade de caracteres
const nome = "Wylham";
console.log(nome.length); // 6

// Inclui espaços:
const frase = "oi tudo bem";
console.log(frase.length); // "oi tudo bem" 11

// ✅ Muito usado pra validar entrada:

const senha = "abc";
if (senha.length < 8) console.log("Senha fraca");

//2) Em array (lista): quantidade de elementos
const nums = [10, 20, 30];
console.log(nums.length); // 3

//✅ Muito usado em loops:

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

//3) Pegadinhas úteis
// Strings: trim() muda o length
"  sim  ".length; // 7
"  sim  ".trim().length; // 3

// Arrays: mudar length pode cortar/esticar
const a = [1, 2, 3, 4];
a.length = 2;
console.log(a); // [1, 2]
