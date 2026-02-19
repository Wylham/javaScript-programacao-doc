const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Qual é o seu nome? ", (nome) => {
  console.log("Olá,", nome);
  console.log("Boas vindas ao nosso sistema!");

  leitor.question("Qual sua idade? ", (idade) => {
    if (idade > 18) {
      console.log("Você pode tirar a CNH!");
    } else {
      console.log("Você não pode tirar a CNH!");
    }
    leitor.close();
  });
});
