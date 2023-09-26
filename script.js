//imports de recursos de outros arquivos js
import "./utils.js"
import {rng} from "./utils.js"
import {perguntas} from "./banco_de_perguntas.js"

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

//declaração de lista que irá receber um valor aleatório para ser usada de índice. Isso tem como objetivo selecionar, de forma aleatória, uma pergunta do nosso banco de questões para ser exibida na tela
const randomIndice = [0]

//listas representativas das barras de vida dos jogadores
const vidaPlayer1 = [1, 1, 1, 1, 1]
const vidaPlayer2 = [1, 1, 1, 1, 1]

//função que recebe um indice e printa na tela a pergunta correspondente
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

//função que é acionada quando um dos botões do HTML é acionado. Ela marca na tela como certa ou errada a alternativa selecionada pelo usuário. Além disso, ela chama a função de desativar botões, chama a função que "remove" a pergunta selecionada do banco de perguntas e, após algum tempo, ela chama a função que configura uma nova pergunta pra ser exibida na tela. O window usado de prefixo serve para deixá-la global e, portanto, acessível sem problemas pelo HTML. Como essa função não é lida dentro do arquivo js, isso é importante para garantir que a função tenha um uso definido
window.verificarResposta = function (botao, respCorreta = perguntas[randomIndice[0]].opcaocorreta) {
    desativarBotoes()

    const playerAtuante = botao.classList[0] === "botao-quiz1"? 1 : 2

    if(botao.value !== respCorreta) {
        botao.style.backgroundColor = "red"
        if(playerAtuante === 1) vidaPlayer2.recuperarVida()
        else vidaPlayer1.recuperarVida()
    }
    else {
        botao.style.backgroundColor = "green" 
        if(playerAtuante === 1) vidaPlayer2.causarDano()
        else vidaPlayer1.causarDano()
    }

    perguntas.removerElemento(randomIndice[0])
    setTimeout(carregarPergunta, 600)
}

//função que desativa os botões na tela
function desativarBotoes() {
    opcao1.disabled = true
    opcao2.disabled = true
    opcao3.disabled = true
    opcao4.disabled = true

    opcao1.style.color = "black"
    opcao2.style.color = "black"
    opcao3.style.color = "black"
    opcao4.style.color = "black"

    opcao1.style.backgroundColor = "#b6b4b4"
    opcao2.style.backgroundColor = "#b6b4b4"
    opcao3.style.backgroundColor = "#b6b4b4"
    opcao4.style.backgroundColor = "#b6b4b4"

    
    opcao1Quiz2.disabled = true
    opcao2Quiz2.disabled = true
    opcao3Quiz2.disabled = true
    opcao4Quiz2.disabled = true

    opcao1Quiz2.style.color = "black"
    opcao2Quiz2.style.color = "black"
    opcao3Quiz2.style.color = "black"
    opcao4Quiz2.style.color = "black"

    opcao1Quiz2.style.backgroundColor = "#b6b4b4"
    opcao2Quiz2.style.backgroundColor = "#b6b4b4"
    opcao3Quiz2.style.backgroundColor = "#b6b4b4"
    opcao4Quiz2.style.backgroundColor = "#b6b4b4"
}

//função que torna a ativar os botões
function ativarBotoes() {
    opcao1.disabled = false
    opcao2.disabled = false
    opcao3.disabled = false
    opcao4.disabled = false

    opcao1Quiz2.disabled = false
    opcao2Quiz2.disabled = false
    opcao3Quiz2.disabled = false
    opcao4Quiz2.disabled = false
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
const verificarFimDeJogo = () => perguntas.verificarEmpate()? "EMPATE" : false

//função que configura uma nova pergunta na tela e começa o jogo, além disso, mostra uma tela improvisada de fim de jogo
function carregarPergunta() {
    if(verificarFimDeJogo() === false) {
        randomIndice[0] = rng(perguntas.length)
        if(perguntas[randomIndice[0]] !== null) {
            reverterMarcacaoBotao()
            definirPergunta(randomIndice[0])
            ativarBotoes()
        } else carregarPergunta()
    } else {
        quizArea1.style.display = "none"
        quizArea2.style.display = "none"
        principal.innerHTML = 
        `
        <h1>FIM DE JOGO!</h1>
        <h2>${verificarFimDeJogo()}</h2>
        `
    }
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