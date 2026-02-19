// função saudação com 'nome' como parâmetro.
/* function saudacao(nome) {
  console.log("Olá, ", nome);
} */

// arrow function:
/* const saudacao = (nome) => {
  console.log("Vida longa e próspera, ", nome);
}; */

const saudacao = (nome) => console.log("Saudações terráqueo ", nome);

// 'wylham' é o 'argumento'.
saudacao("wylham");

// quando retorna um valor:
/* function calcularDobro(numero) {
  return numero * 2;
} */

// arrow function:
/* const calcularDobro = (numero) => {
  return numero * 2;
}; */

const calcularDobro = (numero) => numero * 2;

// guarda o valor da função em uma constante
const numeroDobrado = calcularDobro(4);
console.log("O dobro de 4 é: ", numeroDobrado);

// exercicio de estudo:

function calcularTroco(valorCompra, valorPago) {
  calcularTroco = valorPago - valorCompra;
  console.log("O valor a ser passado de troco é: ", calcularTroco);
  return calcularTroco;
}

calcularTroco(12.5, 20);

const calcularTroco = (valorCompra, valorPago) => {
  const troco = valorPago - valorCompra;
  console.log("O valor a ser passado de troco é: ", troco);
  return calcularTroco;
};

calcularTroco(12.5, 20);

const calcularTroco2 = (compra, pago) => pago - compra;
console.log("Troco:", calcularTroco2(12.5, 20));
