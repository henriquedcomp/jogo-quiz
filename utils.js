//função que retorna um número aleatório entre 0 e um outro número passado como argumento(o valor retornado é sempre menor que o passado como argumento). O Math.random retorna um número no intervalo semiaberto [0, 1), esse número é multiplicado pelo valor passado como parâmetro e então arredondado para baixo com o Math.floor
const rng = (alcance) => Math.floor((Math.random() * alcance))

//função que recebe um índice como parâmetro e define o valor do array na posição indice como null
Array.prototype.removerElemento = function(indice) {
    this[indice] = null
}

//função que usa recursividade para verificar se todos os elementos de uma lista são nulos, o que configura um empate. Ela será usada passando a lista de perguntas como argumento na função verificarFimDeJogo
Array.prototype.verificarEmpate = function() {
    const verificacao = (lista) => {
        const [x, ...xs] = lista
        if(typeof(x) === "undefined") return true
        else if(x !== null) return false
        return verificacao(xs)
    }
    return verificacao(this)
}

//função que atualiza a lista representativa da barra de vida dos jogadores. Quando um jogador recebe dano o valor no array passa de 1 a 0. Uma função será criada posteriormente para exibir um coração na tela a cada 1 que aparecer na lista.
Array.prototype.causarDano = function () {
    const dano = (lista, indice = lista.length - 1) => {
        if(lista[indice] === 1) {
            lista[indice] = 0
            return 
        }
        return dano(lista, indice - 1)
    }
    dano(this)
}

//função que atualiza a lista representativa da barra de vida dos jogadores. Quando um jogador recupera vida o valor no array passa de 0 a 1. Se a barra de vida estiver cheia(não houver nenhum 0 na lista), a função não fará nada. Uma função será criada posteriormente para exibir um coração na tela a cada 1 que aparecer na lista.
Array.prototype.recuperarVida = function () {
    const regenerar = (lista, indice = 0) => {
        if(indice === lista.length) return
        else if(lista[indice] === 0) {
            lista[indice] = 1
            return 
        }
        return regenerar(lista, indice + 1)
    }
    regenerar(this)
}
 
// função para criar um objeto de pergunta com as opções de respostas e a resposta correta, será usada para adicionar as perguntas na lista
const addQuestao = (per, op1, op2, op3, op4, opc) => {
    return {
        pergunta: per,
        opcao1: op1,
        opcao2:op2,
        opcao3: op3,
        opcao4: op4,
        opcaocorreta: opc
    }
}

export {rng, addQuestao}