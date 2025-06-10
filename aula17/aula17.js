function saudacao(nome) {
    console.log(`Oi ${nome}`)
}

const nome = "Heitor"
const teste1 = saudacao(nome)

console.log("Retorno da função sem retorno: " + teste1)

function saudacaoComReturn(nome){
    return `Olá ${nome}. Função com retorno.`
}

const teste2 = saudacaoComReturn(nome)

console.log(teste2)