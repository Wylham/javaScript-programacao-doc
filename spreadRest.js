let pessoa1 = {
  nome: "Wylham",
  idade: 22,
  profissao: "Desenvolvedor",
};

// Spread operator
const pessoa2 = { ...pessoa1 };

pessoa2.idade = 23;

console.log(pessoa1);
console.log(pessoa2);

pessoa1 = {
  ...pessoa2,
  profissao: "Desenvolvedor backend",
  cidade: "Rio verde",
  temCnh: true,
};

console.log(pessoa1);

// Rest operator
const { nome, ...restante } = pessoa1;

console.log(nome);
console.log(restante);
