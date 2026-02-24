let pessoa = {
  nome: "Ana",

  apresentar: () => {
    console.log("Olá, meu nome é " + this.nome);
  },
};

pessoa.apresentar(); // Resultado: Olá, meu nome é undefined
