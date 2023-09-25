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
 
export {rng}