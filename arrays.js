const frutas = ["Uva", "Banana", "Kiwi", "Maça", "Morango"];
// índice das informaçoes na lista:
// uva = 0
// morango = 4

console.log(frutas);

/* console.log("Primeira fruta da lista:", frutas[0]);
console.log("Última fruta da lista:", frutas[4]);

console.log("total de frutas da lista:", frutas.length);

frutas.push("Abacaxi");

console.log("total de frutas da lista:", frutas.length);

console.log("Última fruta da lista:", frutas[frutas.length - 1]); */

// frutas.splice(2, 1); // splice remove a partir da posição "2" e apenas "1" informação (2, 1)

/* console.log("Depois de remover", frutas); */

// percorrendo listas
// for tradicional:
for (let i = 0; i < frutas.length; i++) {
  console.log("índice:", i);
  console.log(frutas[i]);
}

console.log("usando forEach:");
// forEach (método mais moderno e direto para arrays)
frutas.forEach((valor, indice) => {
  console.log("índice:", indice, valor);
});

console.log("usando for of:");
// for of (sintaxe simples e elegante, ideal para percorrer valores)
for (const fruta of frutas) {
  console.log("fruta da vez:", fruta);
}
