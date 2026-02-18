let contador = 1;

// estrutura do while (enquanto) para contar de 1 até 10.
while (contador <= 10) {
  console.log("Número atual: ", contador);
  contador++;
}

let numero1 = 1;

// estrutura do do... while para contar de 1 até 10.
do {
  console.log("Número atual: ", numero1);
  numero1++;
} while (numero1 <= 10);

let numero = 0;

// estrutura do while para obter somente os números pares de 0 à 15.
while (numero <= 15) {
  if (numero % 2 == 0) {
    console.log("Número par: ", numero);
  }
  numero++;
}

let numero2 = 0;

// estrutura do while para obter somente os números ímpares de 0 à 15.
while (numero2 <= 15) {
  if (numero2 % 2 > 0) {
    console.log("Número impar: ", numero2);
  }
  numero2++;
}

// while vs for

//for: quando você sabe quantas vezes vai repetir (ex: 10 vezes, percorrer um array).
//while: quando você repete até uma condição acontecer (ex: usuário acertar, saldo acabar, input válido).

// do...while (faz pelo menos 1 vez)

let senha;

do {
  senha = prompt("Digite a senha:");
} while (senha !== "1234");

// Mesmo que a condição já fosse falsa, ele executa uma vez antes de checar.

// 1° erro comum: iniciar um contador com valor errado sem querer
// 2° erro comum: não adicionar um contador (o que gera looping infinito)
