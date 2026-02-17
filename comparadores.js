const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCnh = false;

// AND ou E (&&)
const podeDirigir = maiorDeIdade && possuiCnh;

console.log("Pode dirigir: ", podeDirigir);

// OR ou OU (||)
const podeViajarSozinho = maiorDeIdade || possuiCnh;

console.log("Pode viajar sozinho(a)? ", podeViajarSozinho);

// NOT ou NÃO (!)
const precisaDeAcompanhante = !maiorDeIdade;

console.log("Precisa de acompanhante? ", precisaDeAcompanhante);
