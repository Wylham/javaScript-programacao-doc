const idadeWylham = 22;
const minhaIdade = 20;

// operador de igualdade
const saoIguais = idadeWylham == minhaIdade;

// maior que (>)
const comparacao1 = idadeWylham > minhaIdade;

// menor que (>)
const comparacao2 = idadeWylham < minhaIdade;

console.log("São iguais? ", saoIguais);

// Os principais operadores
// Igualdade

// === igual restrito (valor e tipo)

5 === 5; // true
"5" === 5; // false

// == igual com conversão (evite na maioria dos casos)

"5" == 5; // true

// === é o restrito (não converte tipos)
// == é o “flexível” (converte tipos)

"20" === 20; // false  (string vs number)
"20" == 20; // true   (o == converte "20" pra 20)

// Diferença
// !== diferente estrito

5 !== 6; // true
"5" !== 5; // true

// != diferente com conversão (evite)

"5" != 5; // false

// Maior & menor

/* 

> maior que
>= maior ou igual
< menor que
<= menor ou igual

*/

// Ex:

10 > 5; // true
10 >= 10; // true
3 < 2; // false

// Comparações com strings (pegadinha leve)
// Strings com > e < comparam em ordem alfabética (lexicográfica):

"b" > "a"; // true
"10" > "2"; // false (porque "1" vem antes de "2")
// Por isso, pra números vindos de prompt, converta antes (Number, parseInt).

// null e undefined (bem rápido)
null === undefined; // false
null == undefined; // true (regra especial do ==)
