const pessoa = {
  nome: "Aline",
  idade: 18,
  temCnh: true,
};

pessoa.sobrenome = "Nunes";
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

const livro = {
  titulo: "O Hobbit",
  autor: "J. R. R. Tolkien",
  paginas: 310,
};

const propriedade = "autor";
console.log(livro[propriedade]); // imprime J. R. R. Tolkien

livro.publicado = true;
livro.idomas = ["Inglês", "Espanhol", "Português"];

for (const chaves in pessoa) {
  console.log("Chave: ", chaves);
  console.log("Valor: ", pessoa[chaves]);
}

const valores = Object.keys(pessoa);
const chaves = Object.values(pessoa);

const entradas = Object.entries(pessoa);

console.log("Valor: ", valores);
console.log("Chaves: ", chaves);
console.log("Entradas (valor+chaves): ", entradas);
