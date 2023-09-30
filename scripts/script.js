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

const barraDeVida1 = document.getElementById("caixa-coracoes-1")
const barraDeVida2 = document.getElementById("caixa-coracoes-2")

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
    adcQuestao("Qual o minimo de jogadores deve ter em cada time de futebol?", "12",  "6", "7", "5",  "7" ),
    adcQuestao("Qual o menor país do mundo?", "Rússia",  "Brasil", "Vaticano", "Estados Unidos",  "Vaticano" ),
    adcQuestao("Quantas casas decimais tem o número pi?", "Uma",  "Infinitas", "Vinte", "Três",  "Infinitas" ),
    adcQuestao("Qual a escola de magia e bruxaria em que estuda Harry Potter?", "Hogsmeade ",  "Caldeirão Furado", "Hogwarts", "Beco Diagonal",  "Hogwarts" ),
    adcQuestao("Qual o tipo sanguíneo considerado doador universal?", "Tipo O",  "Tipo AB", "Tipo B", "Tipo A",  "Tipo O" ),
    adcQuestao("Em que país nasceu Clarice Lispector?", "Brasil",  "Ucrânia", "Argentina", "Uruguai",  "Ucrânia" ),
    adcQuestao("Quem é o cantor(a) da música “Triller”?", "Rihanna",  "Michael Jackson", "Pabllo Vittar", "Beyoncé",  "Michael Jackson" ),
    adcQuestao("A que temperatura a água ferve a 1 atm de pressão?", "0 °C",  "180 °C", "200 °C", "100 °C",  "100 °C" ),
    adcQuestao("Que cidade brasileira é conhecida por chover todos os dias quase à mesma hora?", "Vitória",  "Salvador", "Belém", "Porto Velho",  "Belém" ),
    adcQuestao("Qual o nome popular do cloreto de sódio?", "Água",  "Sal de cozinha", "Vinagre", "Mel",  "Sal de cozinha" ),
    adcQuestao("Que fruto nasce da oliveira?", "Acerola",  "Açaí", "Azeitona", "Abacate",  "Azeitona" ),
    adcQuestao("Quais as respectivas cores da reciclagem do papel, vidro, metal e plástico?", "Verde, azul, amarelo, vermelho",  "Verde, amarelo, azul e vermelho", "Azul, verde, amarelo e vermelho", "Azul, amarelo, verde e vermelho",  "Azul, verde, amarelo e vermelho" ),
    adcQuestao("Qual país sediará as olimpíadas de 2024?", "Estados Unidos",  "França", "Austrália", "Brasil",  "França" ),
    adcQuestao("Qual é o nome artístico da cantora Larissa de Macedo Machado?", "Larissa Manoela",  "Xuxa", "Ludmilla", "Anitta",  "Anitta" ),
    adcQuestao("Qual das alternativas as palavras estão escritas corretamente?", "reinvindicar, madastra, iogurte",  "reivindicar, madastra, iorgute", "reivindicar, madrasta, iogurte", "reinvindicar, madrasta, iorgute",  "reivindicar, madrasta, iogurte" ),
    adcQuestao("Quantos elementos têm a tabela periódica?", "118",  "106", "128", "135",  "118" ),
    adcQuestao("Qual o nome da galáxia em que a Terra está?", "Galáxia de Andrômeda",  "Galáxia do Rodamoinho", "Via Láctea", "Galáxia do Sombreiro",  "Via Láctea" ),
    adcQuestao("Em que período da pré-história o fogo foi descoberto?", "Período da Pedra Polida",  "Paleolítico", "Mesolítico", "Idade Antiga",  "Paleolítico" ),
    adcQuestao("Qual das alternativas abaixo apenas contêm classes de palavras?", "Oxítona, paroxítona",  "Vogais, semivogais, consoantes", "Artigo, verbo, sintaxe", "Substantivo, verbo, preposição ",  "Substantivo, verbo, preposição " ),
    adcQuestao("Qual é o maior animal terrestre?", "Baleia azul",  "Elefante africano", "Urso polar", "Hipopotámo",  "Elefante africano" ),
    adcQuestao("Qual o nome da maior artéria do nosso corpo?", "Artéria pulmonar",  "Artérias renais", "Artéria aorta", "Artérias caronárias",  "Artéria aorta" ),
    adcQuestao("Qual o oceano que banha o Brasil?", "Pacífico",  "Atlântico", "Índico", "Ártico",  "Atlântico" ),
    adcQuestao("Quanto é zero menos um?", "0",  "1", "89", "-1",  "-1" ),
    adcQuestao("Qual cidade brasileira é conhecida como Terra da Garoa?", "Belém",  "Santa Catarina", "São Paulo", "Brasília",  "São Paulo" ),
    adcQuestao("Qual é a cor que resulta da mistura das cores amarelo e vermelho?", "Laranja",  "Verde", "Roxo", "Rosa",  "Laranja" ),
    adcQuestao("Qual país foi o pioneiro na Revolução Industrial?", "França",  "Alemanha", "Inglaterra", "Itália",  "Inglaterra" ),
    adcQuestao("Qual o maior continente do planeta?", "Europa",  "Ásia", "América", "África",  "Ásia" ),
    adcQuestao("Qual o desenho que contem a fala “Você falou em pipoca?”", "Turma da Mônica",  "Scooby-Doo", "Pica-Pau", "Bob-Esponja",  "Pica-Pau" ),
    adcQuestao("Qual monumento famoso pela sua inclinação?", "Torre de pisa",  "Cristo redentor", "Torre Eiffel", "Estátua da Liberdade",  "Torre de pisa" ),
    //adcQuestao("", "",  "", "", "",  "" ),
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
    const jogadorAtuante = botao.classList[0] === "botao-quiz1"? 1 : 2   //verifica qual jogador selecionou alguma resposta

    desativarBotoes(1)
    desativarBotoes(2)

    const statusAtual = conferirResposta(botao) //executa a função de correção de respostas e passa o status(de acerto ou erro) para a constante statusAtual

    atualizarBarraDeVida(jogadorAtuante, statusAtual)
    atualizarBarrasDeVidaVisual()
    
    removerQuestao(indiceAleatorio)
    setTimeout(carregarPergunta, 600)
    setTimeout(() => punirErro(jogadorAtuante, statusAtual), 601)
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

//função que, no caso do jogador ter errado, desativa os botões de resposta dele por 2.5s na próxima pergunta
function punirErro(jogador, status) {
    if(status === 0) {
        desativarBotoes(jogador)
        setTimeout(() => ativarBotoes(jogador), 2500)
        setTimeout(() => reverterMarcacaoBotao(jogador), 2500)
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
    adicionarElemento(`<img class="coracao" src="imagens/coracao-azul.png" alt="Coração Azul">`)(vidaJogador1,barraDeVida1)
    adicionarElemento(`<img class="coracao" src="imagens/coracao-verde.png" alt="Coração Verde">`)(vidaJogador2,barraDeVida2)
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

//função que verifica se o jogo acabou --> Atualmente o único modo do jogo acabar é se o banco de perguntas se esgotar mas em implementações futuras será adicionada uma nova condição
const verificarFimDeJogo = () => {
    if(verificarEmpate(perguntas)) return "EMPATE"
    else {
        if(verificarVidaZerada(vidaJogador1)) return "JOGADOR 2 VENCEU!"
        else if(verificarVidaZerada(vidaJogador2)) return "JOGADOR 1 VENCEU"
    } return false
}

//função que, caso o jogo não tenha se encerrado, configura uma nova pergunta na tela e começa uma nova rodada. Caso o jogo tenha se encerrado, chama a função exibirTelaDeFimDeJogo
function carregarPergunta() {
    if(verificarFimDeJogo() === false) {

        indiceAleatorio = rng(perguntas.length, 0)

        if(perguntas[indiceAleatorio] !== null) {
            reverterMarcacaoBotao("both")

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

//começa o jogo
carregarPergunta()