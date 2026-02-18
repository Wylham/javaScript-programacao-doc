function saudacao() {
  console.log("E aí, beleza?");
}

// setTimeout(saudacao, 2000); // valor em ms

// O setTimeout()método da Windowinterface define um temporizador que executa uma função
// ou um trecho de código específico assim que o temporizador expirar.

let contador = 0;

const id = setInterval(() => {
  contador++;
  console.log("Tempo decorrido (em segundos):", contador);
  if (contador == 10) {
    clearInterval(id);
  }
}, 1000);

// O setInterval()método da Windowinterface chama repetidamente uma função
// ou executa um trecho de código, com um intervalo de tempo fixo entre cada chamada.

// O setInterval()função é comumente usada para definir um atraso para funções que são executadas repetidamente,
// como animações. Você pode cancelar o intervalo usando clearInterval().

// Se você deseja que sua função seja chamada uma única vez após o atraso especificado, use setTimeout().
