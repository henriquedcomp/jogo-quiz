//função que retorna um número aleatório entre 0 e alcance(o valor retornado é sempre menor que alcance). O Math.random retorna um número no intervalo semiaberto [0, 1), esse número é multiplicado por alcance, somado com minimo(caso deseje-se definir um valor mínimo de retorno diferente de 0) e então arredondado para baixo com o Math.floor
const rng = (alcance, minimo) => Math.floor((Math.random() * alcance) + minimo)

//função que recebe um índice como parâmetro e define o valor do array na posição indice como null
const removerElemento = (lista) => (indice) => lista[indice] = null

//função que usa recursividade para verificar se todos os elementos de uma lista são nulos, o que configura um empate. Ela será usada passando a lista de perguntas como argumento na função verificarFimDeJogo
const verificarEmpate = (lista) => {
    const [x, ...xs] = lista
    if(typeof(x) === "undefined") return true
    else if(x !== null) return false
    return verificarEmpate(xs)
}

//função que utiliza do conceito de currying para modificar a barra de vida dos jogadores. O parâmetro indice diz respeito ao valor que será usado para iterar nas casas da lista que representa a barra de vida dos jogadores. Modificador indica como o indice vai alterar seu valor a cada chamada recursiva (+1 ou -1 a depender se for usada para causar dano ou regenerar vida). Val1 e val 2 são parâmetros auxiliares para tomar uma decisão(na função de causar dano por exemplo, se a lista na posição indice for igual a 1(val1) esse valor será trocado por 0(val 2) o que indica que o player perdeu 1 de vida. Na função de regenerar vida ocorre o contrário). O parâmetro lista indica a lista que será analisada na função(vidaPlayer1 ou vidaPlayer2)
const modificarBarraDeVida = (modificador, indice = 0) => (val1, val2) => (lista) => {
    if(modificador === -1 && indice === 0) indice = lista.length - 1 //caso em que a função será usada para causarDano no momento em que o indice ainda não foi definido corretamente

    if(indice === lista.length) return
    else if(lista[indice] === val1) {
        lista[indice] = val2
        return 
    }
    return modificarBarraDeVida(modificador, indice + modificador)(val1, val2)(lista)
}

//função que atualiza a lista representativa da barra de vida dos jogadores. Quando um jogador recebe dano o valor no array passa de 1 a 0. Uma função será criada posteriormente para exibir um coração na tela a cada 1 que aparecer na lista.
const causarDano = modificarBarraDeVida(-1)(1, 0)

//função que atualiza a lista representativa da barra de vida dos jogadores. Quando um jogador recupera vida o valor no array passa de 0 a 1. Se a barra de vida estiver cheia(não houver nenhum 0 na lista), a função não fará nada. Uma função será criada posteriormente para exibir um coração na tela a cada 1 que aparecer na lista.
const recuperarVida = modificarBarraDeVida(1)(0, 1)
 
//função para criar um objeto de pergunta com as opções de respostas e a resposta correta, será usada para adicionar as perguntas na lista
const adcQuestao = (per, op1, op2, op3, op4, opc) => {
    return {
        pergunta: per,
        opcao1: op1,
        opcao2:op2,
        opcao3: op3,
        opcao4: op4,
        opcaocorreta: opc
    }
}