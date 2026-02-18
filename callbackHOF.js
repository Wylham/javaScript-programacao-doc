// HOF -> Higher-Order Function === função que recebe outra função como parâmetro

function calcular(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

function soma(num1, num2) {
  return num1 + num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

const resultadoSoma = calcular(8, 2, soma); // soma é um callback
console.log("O resultado da soma:", resultadoSoma);

const resultadoDivisao = calcular(32, 8, divisao); // divisão é um callback
console.log("O resultado da divisão:", resultadoDivisao);

// 1) O que é HOF na prática?

// Uma HOF é uma função que faz pelo menos 1 desses:

// recebe uma função como parâmetro (callback)
// retorna uma função

// E o callback é só a “função convidada” que a HOF vai chamar em algum momento.
