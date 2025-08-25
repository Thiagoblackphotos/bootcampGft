// Classe que representa um herói
class Heroi {
  // Construtor para criar o herói
  constructor(nome, idade, tipo) {
    this.nome = nome;   // variável de instância para nome
    this.idade = idade; // variável de instância para idade
    this.tipo = tipo;   // variável de instância para tipo
  }

  // Método atacar
  atacar() {
    let ataque = ""; // variável que vai armazenar o ataque

    // Estrutura de decisão para definir o ataque conforme o tipo
    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    } else {
      ataque = "não tem ataque definido";
    }

    // Saída final
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando alguns heróis (objetos)
const herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthur", 30, "guerreiro"),
  new Heroi("Shaolin", 40, "monge"),
  new Heroi("Hanzo", 25, "ninja")
];

// Usando laço de repetição para chamar o ataque de todos os heróis
for (let heroi of herois) {
  heroi.atacar();
}
