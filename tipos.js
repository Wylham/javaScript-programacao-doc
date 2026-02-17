let nome = "Ana";
let idade = 23;
let altura = 1.67;

// typeof (pra que serve)
// typeof é um operador que te diz qual é o tipo do valor.

/*
typeof "oi"     // "string"
typeof 10       // "number"
typeof true     // "boolean"
typeof undefined// "undefined"
typeof function(){} // "function"
typeof {}       // "object"
typeof []       // "object"  (array é um tipo de object)
typeof null     // "object"  (BUG histórico do JS) */

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);

let estaFrio = true;

console.log(estaFrio);

let cidade;

console.log(typeof cidade);

let aprendeuJs = null;

console.log(aprendeuJs);

let simbulo = Symbol();

console.log(typeof simbulo);

// Tipos são “a categoria” do valor (texto, número, booleano, etc.). Em JavaScript,
// os tipos são dinâmicos: a variável pode trocar de tipo conforme você atribui outro valor.

// Tipos mais comuns no JS
/*
string: texto ("oi")
number: número (10, 3.14)
boolean: true/false
undefined: existe, mas não recebeu valor
null: vazio intencional (pegadinha: typeof null é “object”)
object: objetos, arrays, datas, etc.
function: funções (é um tipo também!)
symbol e bigint: mais raros no começo
*/

// Por que typeof é útil?
// 1) Validar entrada (ex: prompt)

// prompt() devolve string (ou null se cancelar). Então:

const entrada = prompt("Digite um número:");
if (entrada === null) {
  alert("Cancelou!");
} else if (typeof entrada === "string") {
  // aqui você converte e valida
}

// 2) Garantir que um número é número

function depositar(valor) {
  if (typeof valor !== "number") return;
  if (Number.isNaN(valor)) return;
  // segue o baile
}
