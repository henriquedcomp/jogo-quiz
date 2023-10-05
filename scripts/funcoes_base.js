//função que retorna um número aleatório entre 0 e alcance(o valor retornado é sempre menor que alcance). O Math.random retorna um número no intervalo semiaberto [0, 1), esse número é multiplicado por alcance, somado com minimo(caso deseje-se definir um valor mínimo de retorno diferente de 0) e então arredondado para baixo com o Math.floor
const numeroAleatorio = (alcance, minimo = 0) => Math.floor((Math.random() * alcance) + minimo)

//função que recebe um índice como parâmetro e define o valor do array na posição indice como null
const removerElemento = (lista) => (indice) => lista[indice] = null

//função verifica se todos os elementos de uma lista são nulos usando filter. Será usada para verificar empate, o que ocorre quando a lista de perguntas é composta somente por null
const verificarEmpate = (lista) => lista.filter((x) => x !== null).length === 0? true : false

//função que utiliza do conceito de currying para modificar a barra de vida dos jogadores. O parâmetro indice diz respeito ao valor que será usado para iterar nas casas da lista que representa a barra de vida dos jogadores. Modificador indica como o indice vai alterar seu valor a cada chamada recursiva (+1 ou -1 a depender se for usada para causar dano ou regenerar vida). Val1 e val 2 são parâmetros auxiliares para tomar uma decisão(na função de causar dano por exemplo, se a lista na posição indice for igual a 1(val1) esse valor será trocado por 0(val 2) o que indica que o player perdeu 1 de vida. Na função de regenerar vida ocorre o contrário). O parâmetro lista indica a lista que será analisada na função(vidaPlayer1 ou vidaPlayer2)
const modificarBarraDeVida = (modificador, indice) => (val1, val2) => (lista) => {
    if(indice === null) indice = lista.length - 1 //caso em que a função será usada para causarDano no momento em que o indice ainda não foi definido corretamente

    if(indice === lista.length) return
    else if(lista[indice] === val1) {
        lista[indice] = val2
        return 
    }
    return modificarBarraDeVida(modificador, indice + modificador)(val1, val2)(lista)
}

//função que atualiza a lista representativa da barra de vida dos jogadores. Quando um jogador recebe dano o valor no array passa de 1 a 0. Uma função será criada posteriormente para exibir um coração na tela a cada 1 que aparecer na lista.
const causarDano = modificarBarraDeVida(-1, null)(1, 0)

//função que atualiza a lista representativa da barra de vida dos jogadores. Quando um jogador recupera vida o valor no array passa de 0 a 1. Se a barra de vida estiver cheia(não houver nenhum 0 na lista), a função não fará nada. Uma função será criada posteriormente para exibir um coração na tela a cada 1 que aparecer na lista.
const recuperarVida = modificarBarraDeVida(1, 0)(0, 1)

//função que verifica se uma lista é composta apenas por zeros, o que configura a situação em que um jogador perdeu todas as suas vidas
const verificarVidaZerada = (lista) => lista.reduce((acc, x) => acc + x) === 0? true : false
 
//função para criar um objeto de pergunta com as opções de respostas e a resposta correta, será usada para adicionar as perguntas na lista
const adicionarQuestao = (pergunta, opcao1, opcao2, opcao3, opcao4, opcaocorreta) => {
    return {
        pergunta: pergunta,
        opcao1: opcao1,
        opcao2:opcao2,
        opcao3: opcao3,
        opcao4: opcao4,
        opcaocorreta: opcaocorreta
    }
}

//função que identifica o valor de cada elemento de uma lista composta por zeros e uns. Essa função será usada para atualizar a barra de vida dos jogadores e para exibir o "código" do mini-game na tela
const adicionarElemento = (elemento1, elemento2) => (lista, itemHTML, indice = 0) => {
    if (indice === 0) itemHTML.innerHTML = ""
    if (indice === lista.length) return
    else if (lista[indice] === 0) itemHTML.innerHTML += elemento1
    else itemHTML.innerHTML += elemento2
    adicionarElemento(elemento1, elemento2)(lista, itemHTML, indice + 1)
}

//função que altera os elementos de uma lista para zeros e uns de forma aleatória. Será usada para gerar um "código" aleatório no mini jogo
const alterarParaValoresBinarios = (lista, indice = 0) => {
    if (indice === lista.length) return lista
    else {
        lista[indice] = numeroAleatorio(2)
    }
    return alterarParaValoresBinarios(lista, indice + 1)
}

//função que "anula" uma lista, deixando todos os seus elementos nulos, será usada para resetar a lista que representa as entradas dos usuários no mini jogo ao começar uma nova rodada
const anularLista = (lista, indice = 0) => {
    if (indice === lista.length) return lista
    else {
        lista[indice] = null
    }
    return anularLista(lista, indice + 1)
}
//NOTA: Como as funções alterarParaValoresBinarios e anularLista são muito parecidas, pensamos em criar uma forma currificada para reaproveitar o código. No entanto, como na função "alterarParaValoresBinarios" o valor atribuído à cada uma das posições da lista é aleatório, não estava funcionando criar uma forma currificada, passando o valor que será atribuído na lista como parâmetro, porque a função citada estava deixando a lista só com zeros ou só com uns, o que não é o objetivo, a ideia é ter zeros e uns misturados na lista