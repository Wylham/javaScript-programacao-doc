// Hoisting é o “içamento” que o JavaScript faz: ele move as declarações para o topo do escopo antes de executar o código.
// Isso afeta principalmente var, function e (de um jeito diferente) let/const.
console.log("minha idade atual é: ", idade);

var idade = 37;

console.log("minha idade atual depois de declarar: ", idade);

// ⚠️ Repara: não dá erro, mas pode confundir.

dizerOi();

function dizerOi() {
  console.log("oi");
}

// ✅ Funciona porque declaração de função é içada inteira.

// let e const também “sobem”, mas dão erro se usar antes
// Eles entram na chamada Temporal Dead Zone (TDZ): existem, mas você não pode acessar antes da linha de declaração.

console.log(y); // ReferenceError
let y = 10;

console.log(z); // ReferenceError
const z = 10;

// ✅ Moral: let/const são mais seguros porque não deixam você usar “antes da hora”.
