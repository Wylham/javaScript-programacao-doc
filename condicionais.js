let idade = 18;
const notaDoAluno = 3;

// comparador ternário (ou condicional ternária).
// Ele é um “if/else em uma linha”.
idade >= 18 ? console.log("Maior de idade!") : console.log("Menor de idade!");

// condicional if/else.
if (idade >= 18) {
  console.log("É maior de idade!");
} else {
  console.log("Não é maior de idade!");
}

// condicional para obter a fase da nota do aluno
if (notaDoAluno >= 9) {
  console.log("Nota excelente!");
} else if (notaDoAluno >= 7) {
  console.log("Nota boa!");
} else if (notaDoAluno >= 4) {
  console.log("Nota média");
} else {
  console.log("Nota ruim!");
}
