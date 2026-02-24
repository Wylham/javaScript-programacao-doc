const agora = new Date();

console.log(agora);

console.log("Data:", agora.getDate());
console.log("Ano:", agora.getFullYear());
console.log("Data de hoje:", agora.getDay());
console.log("Mês:", agora.getMonth());

const nascimento = new Date("2003-10-28T02:00:00.000Z");
console.log(nascimento);

console.log("Data em portugues brasil: ", nascimento.toLocaleDateString("pt-BR"));
console.log("Data em inglês EUA: ", nascimento.toLocaleDateString("en-US"));
