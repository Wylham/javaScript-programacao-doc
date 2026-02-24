const pessoa = {
  nome: "Wylham",
  idade: 22,
  profissao: "Desenvolvedor",
};

console.log(pessoa.nome);
console.log(pessoa.idade);

// destructuring
const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

// destructuring
function saudacao({ nome, idade }) {
  console.log("Olá, ", nome);
}

saudacao(pessoa);
