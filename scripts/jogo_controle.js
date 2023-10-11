import {perguntas, vidaJogador1, vidaJogador2, codigoBase, codigoInserido, tempo} from "./banco_de_dados.js"

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
const caixa = document.getElementById("caixa-minijogo")
const carregamento = document.querySelector(".barra-de-tempo")
const principal = document.querySelector("body")

//declaração de lista unitária que irá receber um valor aleatório para ser usada de índice na lista de perguntas. Isso tem como objetivo selecionar, de forma aleatória, uma pergunta do nosso banco de questões para ser exibida na tela. Como a cada rodada deve-se pegar um valor aleatório de indice para acessar a lista, o elemento da lista deve ser mutável
const indiceAleatorio = []

//declaração de variável que será responsável por controlar o limite de tempo que os jogadores têm para realizar uma ação no mini jogo. Como ela precisa ser reatribuída ao decorrer do código, é naturalmente mutável
let variavelDeControle

//função que inicia o jogo, chamando as funções necessárias para tal
const comecarJogo = () => {
    iniciarNovaRodadaQuiz()
    atualizarBarrasDeVidaVisual()
    comecarMiniJogo()
    configurarCronometro()
}

//função que é acionada quando um dos botões de resposta do HTML é acionado. Ela chama todas as funções necessárias para prosseguir com o jogo. Desativar os botões, verificar se o jogador acertou ou não...
window.verificarResposta = (botao) => {
    const jogadorAtuante = botao.classList[0] === "botao-quiz1"? 1 : 2   //verifica qual jogador selecionou alguma resposta

    desativarBotoes()

    const statusAtual = conferirResposta(botao, indiceAleatorio[0]) //executa a função de correção de respostas e passa o status(de acerto ou erro) para a constante statusAtual

    atualizarBarraDeVida(jogadorAtuante, statusAtual)
    atualizarBarrasDeVidaVisual()
    
    //aplicação da função removerElemento na lista de questões
    const removerQuestao = removerElemento(perguntas)

    removerQuestao(indiceAleatorio[0])
    setTimeout(iniciarNovaRodadaQuiz, 400)
}

//função que desativa os botões na tela com base no jogador que lhe é passado como parâmetro
const desativarBotoes = () => {
    opcao1.disabled = true
    opcao2.disabled = true
    opcao3.disabled = true
    opcao4.disabled = true 
    
    opcao1Quiz2.disabled = true
    opcao2Quiz2.disabled = true
    opcao3Quiz2.disabled = true
    opcao4Quiz2.disabled = true

    desativarBotoesVisual()
}

//função que realiza as mudanças visuais na tela quando os botões são desativados
const desativarBotoesVisual = () => {
    opcao1.style.color = "black"
    opcao2.style.color = "black"
    opcao3.style.color = "black"
    opcao4.style.color = "black"

    opcao1.style.backgroundColor = "#b6b4b4"
    opcao2.style.backgroundColor = "#b6b4b4"
    opcao3.style.backgroundColor = "#b6b4b4"
    opcao4.style.backgroundColor = "#b6b4b4"

    opcao1Quiz2.style.color = "black"
    opcao2Quiz2.style.color = "black"
    opcao3Quiz2.style.color = "black"
    opcao4Quiz2.style.color = "black"

    opcao1Quiz2.style.backgroundColor = "#b6b4b4"
    opcao2Quiz2.style.backgroundColor = "#b6b4b4"
    opcao3Quiz2.style.backgroundColor = "#b6b4b4"
    opcao4Quiz2.style.backgroundColor = "#b6b4b4"
}

//função que marca na tela como certa ou errada a alternativa selecionada pelo usuário
const conferirResposta = (bto, indice) => {
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
const atualizarBarraDeVida = (jogador, status) => {
    if(status === 0) {
        if(jogador === 1) causarDano(vidaJogador1)
        else causarDano(vidaJogador2)
    } else {
        if(jogador === 1) causarDano(vidaJogador2)
        else causarDano(vidaJogador1)
    }
}

//função que atualiza os corações na tela
const atualizarBarrasDeVidaVisual = () => {
    adicionarElemento("", '<img class="coracao" src="imagens/coracao-azul.png" alt="Coração Azul">')(vidaJogador1, barraDeVida1)
    adicionarElemento("", '<img class="coracao" src="imagens/coracao-verde.png" alt="Coração Verde">')(vidaJogador2, barraDeVida2)
}

//função que, caso o jogo não tenha se encerrado, configura uma nova pergunta na tela e começa uma nova rodada. Caso o jogo tenha se encerrado, chama a função exibirTelaDeFimDeJogo
const iniciarNovaRodadaQuiz = () => {
    if(verificarFimDeJogo() === false) {

        indiceAleatorio[0] = numeroAleatorio(perguntas.length)

        if(perguntas[indiceAleatorio[0]] !== null) {
            reverterMarcacaoBotao()

            definirPergunta(indiceAleatorio[0])

            ativarBotoes()

        } else iniciarNovaRodadaQuiz()

    } else exibirTelaDeFimDeJogo()
}

//função que verifica se o jogo acabou
const verificarFimDeJogo = () => {
    if(verificarEmpate(perguntas)) return "EMPATE!"
    else {
        if(verificarVidaZerada(vidaJogador1)) return "JOGADOR 2 É O MAIS SÁBIO!"
        else if(verificarVidaZerada(vidaJogador2)) return "JOGADOR 1 É O MAIS SÁBIO!"
    } return false
}

//função que remove a marcação de certo/errado adicionada quando o usuário seleciona uma alternativa
const reverterMarcacaoBotao = () => {
    opcao1.style.backgroundColor = "white"
    opcao2.style.backgroundColor = "white"
    opcao3.style.backgroundColor = "white"
    opcao4.style.backgroundColor = "white"

    opcao1Quiz2.style.backgroundColor = "white"
    opcao2Quiz2.style.backgroundColor = "white"
    opcao3Quiz2.style.backgroundColor = "white"
    opcao4Quiz2.style.backgroundColor = "white"
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
const ativarBotoes = () => {
    opcao1.disabled = false
    opcao2.disabled = false
    opcao3.disabled = false
    opcao4.disabled = false

    opcao1Quiz2.disabled = false
    opcao2Quiz2.disabled = false
    opcao3Quiz2.disabled = false
    opcao4Quiz2.disabled = false
}

//exibe uma tela improvisada de fim de jogo
const exibirTelaDeFimDeJogo = () => {
    principal.innerHTML = 
    `
    <main id="tela-fim-de-jogo">
        <div class="fim">
            <h1>Fim de Jogo!</h1>
            <h2>${tempo[0]}${tempo[1]}:${tempo[2]}${tempo[3]}</h2>
        </div>
        <div class="resultado">
            <h2>${verificarFimDeJogo()}</h2>
        </div>
        <div>
            <a href="https://precious-moxie-ab8abe.netlify.app/jogo_marcacao.html" rel="prev" hreflang="pt-br"><button id="botao">Reiniciar</button></a>
        </div>
    </main>
    `
}

//função que vai atualizando o cronômetro na tela
const configurarCronometro = () => {
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

    if(verificarFimDeJogo() === false) setTimeout(configurarCronometro, 1000)
}

//função que inicia o mini jogo, chamando as funções necessárias para tal
const comecarMiniJogo = () => {
    if(verificarFimDeJogo() === false) {
        codigoBase[0] = numeroAleatorio(2)
        anularLista(codigoInserido)
    
        adicionarElemento(`<div class="botao-minijogo-azul"></div>`, `<div class="botao-minijogo-verde"></div>`)(codigoBase, caixa)

        resetarContagem()
    }
}

//função que é chamada quando os jogadores interagem no mini jogo. Ela adiciona um caractere na lista que representa a resposta do usuário e em seguida chama a função que confere se a entrada foi correta
const inserirCodigoResposta = (caractere, codigo, base, indice = 0) => {
    if(indice === 5) return
    else if(codigo[indice] === null) {
        codigo[indice] = caractere
        marcarBotao(caractere, indice)
        verificarErro(base, codigo)
    }
    else inserirCodigoResposta(caractere, codigo, base, indice + 1)
}

//função que apaga o botão na tela caso a entrada tenha sido a correta para dar um feedback para o jogador
const marcarBotao = (caractere, indice) => {
    if(caractere === 0) caixa.children[indice].style.backgroundColor = "black"
    else caixa.children[indice].style.backgroundColor = "black"
} 

//função que verifica se a entrada do usuário foi correta no mini jogo
const verificarErro = (lista1, lista2, indice = 0) => {
    if(indice === lista1.length) setTimeout(comecarMiniJogo, 100)
    else if(lista1[indice] === lista2[indice]) verificarErro(lista1, lista2, indice + 1)
    else if(lista2[indice] !== null) {
        if(lista2[indice] === 0) {
            recuperarVida(vidaJogador2)
            recuperarVida(vidaJogador2)
            atualizarBarrasDeVidaVisual()
        }
        else {
            recuperarVida(vidaJogador1)
            recuperarVida(vidaJogador1)
            atualizarBarrasDeVidaVisual()
        }
        setTimeout(comecarMiniJogo, 100)
    }
}

//função que verifica se os jogadores excederam o tempo-limite para dar alguma entrada no mini jogo
const verificarAusencia = (codigo, base, indice = 0) => {
    if(indice === codigo.length) return
    if(codigo[indice] !== null) verificarAusencia(codigo, base, indice + 1)
    else {
        variavelDeControle = setTimeout(() => {
            if(base[indice] === 0) {
                recuperarVida(vidaJogador2)
                recuperarVida(vidaJogador2)
                atualizarBarrasDeVidaVisual()
            }
            else {
                recuperarVida(vidaJogador1)
                recuperarVida(vidaJogador1)
                atualizarBarrasDeVidaVisual()
            }
            comecarMiniJogo()
        }, 4500)
    }
}

//função que reseta a contagem do tempo-limite para os jogadores darem alguma entrada no mini jogo
const resetarContagem = () => {
    clearTimeout(variavelDeControle)
    carregamento.classList.remove("carregamento")
    verificarAusencia(codigoInserido, codigoBase)
    setTimeout(() => carregamento.classList.add("carregamento"), 20)
}

//função que configura as teclas que serão ouvidas pelo "EventListener"
const configurarTeclas = (event) => {
    switch(event.key.toLowerCase()) {
        case "w" : opcao1.click()
        case "a" : opcao2.click()
        case "s" : opcao3.click()
        case "d" : opcao4.click()
        case "arrowup" : opcao1Quiz2.click()
        case "arrowleft" : opcao2Quiz2.click()
        case "arrowdown" : opcao3Quiz2.click()
        case "arrowright" : opcao4Quiz2.click()
    }
    //teclas relacionadas ao mini jogo
    if(event.keyCode === 32) {
        inserirCodigoResposta(0, codigoInserido, codigoBase)
        resetarContagem()
    }
    if(event.key === "Enter") {
        inserirCodigoResposta(1, codigoInserido, codigoBase)
        resetarContagem()
    }
}

//desativa os eventos de teclado para não ocorrer eventuais problemas na página
document.addEventListener("keydown", (event) => event.preventDefault())

//adição do "listener" para ouvir o pressionar do teclado
document.addEventListener("keydown", configurarTeclas)

//exibe as regras do jogo com a API SweetAlert
await Swal.fire({
    title: 'REGRAS DE JOGO',
    html: '<p style="text-align: justify">Acerto de pergunta >> Causa dano <br> Erro de pergunta >> Perde vida <br><br> Se não apertar o botão do mini jogo na sua vez, recuperará dois pontos de vida do adversário!!</p>',
    icon: 'warning',
    confirmButtonText: 'OK'
})

//execução da função que começa o jogo
comecarJogo()