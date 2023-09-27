//captura no js de elementos do HTML
const pergunta1 = document.getElementById("pergunta1")
const opcao1 = document.getElementById("opcao1")
const opcao2 = document.getElementById("opcao2")
const opcao3 = document.getElementById("opcao3")
const opcao4 = document.getElementById("opcao4")

const pergunta2 = document.getElementById("pergunta2")
const opcao1Quiz2 = document.getElementById("opcao1-quiz2")
const opcao2Quiz2 = document.getElementById("opcao2-quiz2")
const opcao3Quiz2 = document.getElementById("opcao3-quiz2")
const opcao4Quiz2 = document.getElementById("opcao4-quiz2")

const quizArea1 = document.getElementById("quiz-area1")
const quizArea2 = document.getElementById("quiz-area2")
const principal = document.querySelector("body")

//adição do listener para ouvir o pressionar do teclado
document.addEventListener("keydown", configurarTeclas)

//declaração da variável que irá receber um valor aleatório para ser usada de índice na lista de perguntas. Isso tem como objetivo selecionar, de forma aleatória, uma pergunta do nosso banco de questões para ser exibida na tela. Como a cada rodada deve-se pegar um valor aleatório de indice para acessar a lista, este elemento é naturalmente variável
let indiceAleatorio

//listas representativas das barras de vida dos jogadores
const vidaJogador1 = [1, 1, 1, 1, 1]
const vidaJogador2 = [1, 1, 1, 1, 1]

//lista com as perguntas
const perguntas = [
    adcQuestao("Qual cidade Sergipana é considerada capital nacional do bordado?", "Simão Dias", "Tobias Barreto", "Laranjeiras", "Malhador", "Tobias Barreto"),
    adcQuestao("Qual é a cor da caixa-preta do avião?", "Preta", "Amarela", "Laranja", "Azul", "Laranja"),

    //tire as execuções de função do console.log e adicione na lista

    /*console.log(adcQuestao("Qual o minimo de jogadores deve ter em cada time de futebol?", "12",  "6", "7", "5",  "7" ))
    console.log(adcQuestao("Qual o menor país do mundo?", "Rússia",  "Brasil", "Vaticano", "Estados Unidos",  "Vaticano" ))
    console.log(adcQuestao("Quantas casas decimais tem o número pi?", "Uma",  "Infinitas", "Vinte", "Três",  "Infinitas" ))
    console.log(adcQuestao("Qual a escola de magia e bruxaria em que estuda Harry Potter?", "Hogsmeade ",  "Caldeirão Furado", "Hogwarts", "Beco Diagonal",  "Hogwarts" ))
    console.log(adcQuestao("Qual o tipo sanguíneo considerado doador universal?", "Tipo O",  "Tipo AB", "Tipo B", "Tipo A",  "Tipo O" ))
    console.log(adcQuestao("Em que país nasceu Clarice Lispector?", "Brasil",  "Ucrânia", "Argentina", "Uruguai",  "Ucrânia" ))*/

    //lembre de colocar uma vírgula após a função, apenas o último elemento não precisa. Adicione todas as perguntas que temos até então
]

//aplicação da função removerElemento na lista de questões
const removerQuestao = removerElemento(perguntas)

//função que recebe um indice e exibe na tela a pergunta correspondente
const definirPergunta = (indice) => {
    pergunta1.innerHTML = perguntas[indice].pergunta
    opcao1.innerHTML = perguntas[indice].opcao1
    opcao2.innerHTML = perguntas[indice].opcao2
    opcao3.innerHTML = perguntas[indice].opcao3
    opcao4.innerHTML = perguntas[indice].opcao4

    opcao1.value = perguntas[indice].opcao1
    opcao2.value = perguntas[indice].opcao2
    opcao3.value = perguntas[indice].opcao3
    opcao4.value = perguntas[indice].opcao4


    pergunta2.innerHTML = perguntas[indice].pergunta
    opcao1Quiz2.innerHTML = perguntas[indice].opcao1
    opcao2Quiz2.innerHTML = perguntas[indice].opcao2
    opcao3Quiz2.innerHTML = perguntas[indice].opcao3
    opcao4Quiz2.innerHTML = perguntas[indice].opcao4

    opcao1Quiz2.value = perguntas[indice].opcao1
    opcao2Quiz2.value = perguntas[indice].opcao2
    opcao3Quiz2.value = perguntas[indice].opcao3
    opcao4Quiz2.value = perguntas[indice].opcao4
}

//função que é acionada quando um dos botões de resposta do HTML é acionado. Ela chama todas as funções necessárias para proseguir com o jogo. Desativar os botões, verificar se o jogador acertou ou não...
window.verificarResposta = function (botao) {
    const playerAtuante = botao.classList[0] === "botao-quiz1"? 1 : 2   //verifica qual jogador selecionou alguma resposta

    desativarBotoes(1)
    desativarBotoes(2)

    const statusAtual = conferirResposta(botao) //executa a função de correção de respostas e passa o status(de acerto ou erro) para a constante statusAtual

    atualizarBarraDeVida(playerAtuante, statusAtual)
    
    console.table(vidaJogador1)
    console.table(vidaJogador2)

    removerQuestao(indiceAleatorio)
    setTimeout(carregarPergunta, 600)
}

//funcao que marca na tela como certa ou errada a alternativa selecionada pelo usuário
function conferirResposta(bto, respCorreta = perguntas[indiceAleatorio].opcaocorreta) {
    if(bto.value !== respCorreta) {
        bto.style.backgroundColor = "red"
        return 0
    }
    else {
        bto.style.backgroundColor = "green" 
        return 1
    }
}

//função que altera as listas que representam as barras de vida dos jogadores
function atualizarBarraDeVida (jogador, status) {
    if(status === 0) {
        if(jogador === 1) recuperarVida(vidaJogador2)
        else recuperarVida(vidaJogador1)
    } else {
        if(jogador === 1) causarDano(vidaJogador2)
        else causarDano(vidaJogador1)
    }
}

//função que desativa os botões na tela com base no jogador que lhe é passado como parâmetro
function desativarBotoes(jogador) {
    if(jogador === 1) {
        opcao1.disabled = true
        opcao2.disabled = true
        opcao3.disabled = true
        opcao4.disabled = true 
    } else {
        opcao1Quiz2.disabled = true
        opcao2Quiz2.disabled = true
        opcao3Quiz2.disabled = true
        opcao4Quiz2.disabled = true
    }

    desativarBotoesVisual(jogador)
}

//função que realiza as mudanças visuais na tela quando os botões são desativados
function desativarBotoesVisual(jogador) {
    if(jogador === 1) {
        opcao1.style.color = "black"
        opcao2.style.color = "black"
        opcao3.style.color = "black"
        opcao4.style.color = "black"

        opcao1.style.backgroundColor = "#b6b4b4"
        opcao2.style.backgroundColor = "#b6b4b4"
        opcao3.style.backgroundColor = "#b6b4b4"
        opcao4.style.backgroundColor = "#b6b4b4"
    } else {
        opcao1Quiz2.style.color = "black"
        opcao2Quiz2.style.color = "black"
        opcao3Quiz2.style.color = "black"
        opcao4Quiz2.style.color = "black"

        opcao1Quiz2.style.backgroundColor = "#b6b4b4"
        opcao2Quiz2.style.backgroundColor = "#b6b4b4"
        opcao3Quiz2.style.backgroundColor = "#b6b4b4"
        opcao4Quiz2.style.backgroundColor = "#b6b4b4"
    }
}

//função que torna a ativar os botões com base no jogador que lhe é passado como parâmetro
function ativarBotoes(jogador) {
    if(jogador === 1) {
        opcao1.disabled = false
        opcao2.disabled = false
        opcao3.disabled = false
        opcao4.disabled = false
    } else {
        opcao1Quiz2.disabled = false
        opcao2Quiz2.disabled = false
        opcao3Quiz2.disabled = false
        opcao4Quiz2.disabled = false
    }
}

//função que remove a marcação de certo/errado adicionada quando o usuário seleciona uma alternativa
function reverterMarcacaoBotao() {
    opcao1.style.backgroundColor = "white"
    opcao2.style.backgroundColor = "white"
    opcao3.style.backgroundColor = "white"
    opcao4.style.backgroundColor = "white"

    opcao1Quiz2.style.backgroundColor = "white"
    opcao2Quiz2.style.backgroundColor = "white"
    opcao3Quiz2.style.backgroundColor = "white"
    opcao4Quiz2.style.backgroundColor = "white"
}

//função que verifica se o jogo acabou --> Atualmente o único modo do jogo acabar é se o banco de perguntas se esgotar mas em implementações futuras será adicionada uma nova condição
const verificarFimDeJogo = () => verificarEmpate(perguntas)? "EMPATE" : false

//função que, caso o jogo não tenha se encerrado, configura uma nova pergunta na tela e começa uma nova rodada. Caso o jogo tenha se encerrado, chama a função exibirTelaDeFimDeJogo
function carregarPergunta() {
    if(verificarFimDeJogo() === false) {

        indiceAleatorio = rng(perguntas.length, 0)

        if(perguntas[indiceAleatorio] !== null) {
            reverterMarcacaoBotao()

            definirPergunta(indiceAleatorio)

            ativarBotoes(1)
            ativarBotoes(2)

        } else carregarPergunta()

    } else exibirTelaDeFimDeJogo()
}

//exibe uma tela improvisada de fim de jogo
function exibirTelaDeFimDeJogo() {
    quizArea1.style.display = "none"
    quizArea2.style.display = "none"
    principal.innerHTML = 
    `
    <h1>FIM DE JOGO!</h1>
    <h2>${verificarFimDeJogo()}</h2>
    `
}

//função que configura as teclas que serão ouvidas pelo EventListener
function configurarTeclas(event) {
    switch(event.key) {
        case "W" : 
        case "w" : opcao1.click()
        case "A" :
        case "a" : opcao2.click()
        case "S" :
        case "s" : opcao3.click()
        case "D" :
        case "d" : opcao4.click()
        case "ArrowUp" : opcao1Quiz2.click()
        case "ArrowLeft" : opcao2Quiz2.click()
        case "ArrowDown" : opcao3Quiz2.click()
        case "ArrowRight" : opcao4Quiz2.click()
    }
}

//começa o jogo
carregarPergunta()