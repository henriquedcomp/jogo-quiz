import {perguntas, imgCoracaoAzul, imgCoracaoVerde} from "./banco_de_dados.js"

//captura no js de elementos do HTML
const pergunta1 = document.getElementById("pergunta1")
const opcao1 = document.getElementById("opcao1")
const opcao2 = document.getElementById("opcao2")
const opcao3 = document.getElementById("opcao3")
const opcao4 = document.getElementById("opcao4")
const barraDeVida1 = document.getElementById("caixa-coracoes-1")

const pergunta2 = document.getElementById("pergunta2")
const opcao1Quiz2 = document.getElementById("opcao1-quiz2")
const opcao2Quiz2 = document.getElementById("opcao2-quiz2")
const opcao3Quiz2 = document.getElementById("opcao3-quiz2")
const opcao4Quiz2 = document.getElementById("opcao4-quiz2")
const barraDeVida2 = document.getElementById("caixa-coracoes-2")

const cronometro = document.getElementById("cronometro")
const quizArea1 = document.getElementById("quiz-area1")
const quizArea2 = document.getElementById("quiz-area2")
const principal = document.querySelector("body")

//declaração da variável que irá receber um valor aleatório para ser usada de índice na lista de perguntas. Isso tem como objetivo selecionar, de forma aleatória, uma pergunta do nosso banco de questões para ser exibida na tela. Como a cada rodada deve-se pegar um valor aleatório de indice para acessar a lista, esse elemento é naturalmente mutável
let indiceAleatorio

//listas representativas das barras de vida dos jogadores
const vidaJogador1 = [1, 1, 1, 1, 1]
const vidaJogador2 = [1, 1, 1, 1, 1]

//lista representativa dos caracteres do cronômetro
const tempo = [0, 0, 0, 0]

//função que é acionada quando um dos botões de resposta do HTML é acionado. Ela chama todas as funções necessárias para prosseguir com o jogo. Desativar os botões, verificar se o jogador acertou ou não...
window.verificarResposta = function (botao) {
    const jogadorAtuante = botao.classList[0] === "botao-quiz1"? 1 : 2   //verifica qual jogador selecionou alguma resposta

    desativarBotoes(1)
    desativarBotoes(2)

    const statusAtual = conferirResposta(botao, indiceAleatorio) //executa a função de correção de respostas e passa o status(de acerto ou erro) para a constante statusAtual

    atualizarBarraDeVida(jogadorAtuante, statusAtual)
    atualizarBarrasDeVidaVisual()
    
    removerQuestao(indiceAleatorio)
    setTimeout(carregarPergunta, 600)
    setTimeout(() => punirErro(jogadorAtuante, statusAtual), 601)
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

//funcao que marca na tela como certa ou errada a alternativa selecionada pelo usuário
function conferirResposta(bto, indice) {
    const respCorreta = perguntas[indice].opcaocorreta

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

//função que atualiza os corações na tela
function atualizarBarrasDeVidaVisual() {
    adicionarElemento(imgCoracaoAzul)(vidaJogador1, barraDeVida1)
    adicionarElemento(imgCoracaoVerde)(vidaJogador2, barraDeVida2)
}

//aplicação da função removerElemento na lista de questões
const removerQuestao = removerElemento(perguntas)

//função que, caso o jogo não tenha se encerrado, configura uma nova pergunta na tela e começa uma nova rodada. Caso o jogo tenha se encerrado, chama a função exibirTelaDeFimDeJogo
function carregarPergunta() {
    if(verificarFimDeJogo() === false) {

        indiceAleatorio = gna(perguntas.length, 0)

        if(perguntas[indiceAleatorio] !== null) {
            reverterMarcacaoBotao("both")

            definirPergunta(indiceAleatorio)

            ativarBotoes(1)
            ativarBotoes(2)

        } else carregarPergunta()

    } else exibirTelaDeFimDeJogo()
}

//função que, no caso do jogador ter errado, desativa os botões de resposta dele por 2s na próxima pergunta
function punirErro(jogador, status) {
    if(status === 0) {
        desativarBotoes(jogador)
        setTimeout(() => ativarBotoes(jogador), 2000)
        setTimeout(() => reverterMarcacaoBotao(jogador), 2000)
    }
}

//função que verifica se o jogo acabou --> Atualmente o único modo do jogo acabar é se o banco de perguntas se esgotar mas em implementações futuras será adicionada uma nova condição
const verificarFimDeJogo = () => {
    if(verificarEmpate(perguntas)) return "EMPATE"
    else {
        if(verificarVidaZerada(vidaJogador1)) return "JOGADOR 2 VENCEU!"
        else if(verificarVidaZerada(vidaJogador2)) return "JOGADOR 1 VENCEU"
    } return false
}

//função que remove a marcação de certo/errado adicionada quando o usuário seleciona uma alternativa
function reverterMarcacaoBotao(jogador) {
    if(jogador === 1) {
        opcao1.style.backgroundColor = "white"
        opcao2.style.backgroundColor = "white"
        opcao3.style.backgroundColor = "white"
        opcao4.style.backgroundColor = "white"
    } else if(jogador === "both") {
        opcao1.style.backgroundColor = "white"
        opcao2.style.backgroundColor = "white"
        opcao3.style.backgroundColor = "white"
        opcao4.style.backgroundColor = "white"

        opcao1Quiz2.style.backgroundColor = "white"
        opcao2Quiz2.style.backgroundColor = "white"
        opcao3Quiz2.style.backgroundColor = "white"
        opcao4Quiz2.style.backgroundColor = "white"
    } else {
        opcao1Quiz2.style.backgroundColor = "white"
        opcao2Quiz2.style.backgroundColor = "white"
        opcao3Quiz2.style.backgroundColor = "white"
        opcao4Quiz2.style.backgroundColor = "white"
    }
}

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

//função que vai atualizando o cronômetro na tela a cada 1s
function configurarCronometro() {
    cronometro.innerHTML = `${tempo[0]}${tempo[1]}:${tempo[2]}${tempo[3]}`
    if(tempo[3]=== 9) {
        if(tempo[2]=== 5) {
            if(tempo[1]=== 9) {
                tempo[0] += 1
                tempo[1] = 0
            } else tempo[1] += 1
            tempo[2] = 0
        } else tempo[2] += 1
        tempo[3] = 0
    } else tempo[3] += 1
}

//função que configura as teclas que serão ouvidas pelo EventListener
function configurarTeclas(event) {
    switch(event.key.toLowerCase()) {
        case "w" : if(!opcao1.disabled) opcao1.click(); else break;
        case "a" : if(!opcao2.disabled) opcao2.click(); else break;
        case "s" : if(!opcao3.disabled) opcao3.click(); else break;
        case "d" : if(!opcao4.disabled) opcao4.click(); else break;
        case "arrowup" : opcao1Quiz2.click()
        case "arrowleft" : opcao2Quiz2.click()
        case "arrowdown" : opcao3Quiz2.click()
        case "arrowright" : opcao4Quiz2.click()
    }
}

//adição do listener para ouvir o pressionar do teclado
document.addEventListener("keydown", configurarTeclas)

//começa o jogo
carregarPergunta()
configurarCronometro()
setInterval(configurarCronometro, 1000)