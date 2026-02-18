// contar quantos números pares e quantos números ímpares nós temos entre 0 e 100

let totalDeNumerosPares = 0;
let totalDeNumerosImpares = 0;

// laço de repetiçao

for (let contador = 0; contador <= 100; contador++) {
  if (contador % 2 == 0) {
    totalDeNumerosPares++;
  } else {
    totalDeNumerosImpares++;
  }
}

console.log("Total de números pares:", totalDeNumerosPares);
console.log("Total de números ímpares:", totalDeNumerosImpares);
