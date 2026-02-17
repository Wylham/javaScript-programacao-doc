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

// palavra.lenght indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada

const palavra = "hevelyn";

for (let contador = 0; contador < palavra.length; contador++) {
  console.log(palavra[contador]);
}
