const pessoa1 = {
    nome: "Heitor",
    sobrenome: "Cruz",
    idade: 39
};
console.log(pessoa1)

// Função para criar objetos pessoas (Factory)
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala() { 
            console.log(`Olá, mundo! Eu sou o ${this.nome}!`)
        },

        incrementaIdade(){
            console.log(this.idade +=1)
        }
    }
};

const pessoa2 = criarPessoa("Ninna", "Cruz", 40)
console.log(pessoa2["nome"], pessoa1.nome, pessoa2["sobrenome"])
pessoa2.fala()
console.log(pessoa2.idade, pessoa2.incrementaIdade(), pessoa2.incrementaIdade())

pessoa1.tel = 61999253993
console.log(pessoa1)
