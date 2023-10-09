//lista com as perguntas
const perguntas = [
    adicionarQuestao("Qual cidade Sergipana é considerada capital nacional do bordado?", "Simão Dias", "Tobias Barreto", "Laranjeiras", "Malhador", "Tobias Barreto"),
    adicionarQuestao("Qual é a cor da caixa-preta do avião?", "Preta", "Amarela", "Laranja", "Azul", "Laranja"),
    adicionarQuestao("Qual o minimo de jogadores deve ter em cada time de futebol?", "12",  "6", "7", "5",  "7" ),
    adicionarQuestao("Qual o menor país do mundo?", "Rússia",  "Brasil", "Vaticano", "Estados Unidos",  "Vaticano" ),
    adicionarQuestao("Quantas casas decimais tem o número pi?", "Uma",  "Infinitas", "Vinte", "Três",  "Infinitas" ),
    adicionarQuestao("Qual a escola de magia e bruxaria em que estuda Harry Potter?", "Hogsmeade ",  "Caldeirão Furado", "Hogwarts", "Beco Diagonal",  "Hogwarts" ),
    adicionarQuestao("Qual o tipo sanguíneo considerado doador universal?", "Tipo O",  "Tipo AB", "Tipo B", "Tipo A",  "Tipo O" ),
    adicionarQuestao("Em que país nasceu Clarice Lispector?", "Brasil",  "Ucrânia", "Argentina", "Uruguai",  "Ucrânia" ),
    adicionarQuestao("Quem é o cantor(a) da música “Triller”?", "Rihanna",  "Michael Jackson", "Pabllo Vittar", "Beyoncé",  "Michael Jackson" ),
    adicionarQuestao("A que temperatura a água ferve a 1 atm de pressão?", "0 °C",  "180 °C", "200 °C", "100 °C",  "100 °C" ),
    adicionarQuestao("Que cidade brasileira é conhecida por chover todos os dias quase à mesma hora?", "Vitória",  "Salvador", "Belém", "Porto Velho",  "Belém" ),
    adicionarQuestao("Qual o nome popular do cloreto de sódio?", "Água",  "Sal de cozinha", "Vinagre", "Mel",  "Sal de cozinha" ),
    adicionarQuestao("Que fruto nasce da oliveira?", "Acerola",  "Açaí", "Azeitona", "Abacate",  "Azeitona" ),
    adicionarQuestao("Qual país sediará as olimpíadas de 2024?", "Estados Unidos",  "França", "Austrália", "Brasil",  "França" ),
    adicionarQuestao("Qual é o nome artístico da cantora Larissa de Macedo Machado?", "Larissa Manoela",  "Xuxa", "Ludmilla", "Anitta",  "Anitta" ),
    adicionarQuestao("Quantos elementos têm a tabela periódica?", "118",  "106", "128", "135",  "118" ),
    adicionarQuestao("Qual o nome da galáxia em que a Terra está?", "Galáxia de Andrômeda",  "Galáxia do Rodamoinho", "Via Láctea", "Galáxia do Sombreiro",  "Via Láctea" ),
    adicionarQuestao("Em que período da pré-história o fogo foi descoberto?", "Período da Pedra Polida",  "Paleolítico", "Mesolítico", "Idade Antiga",  "Paleolítico" ),
    adicionarQuestao("Qual das alternativas abaixo apenas contêm classes de palavras?", "Oxítona, paroxítona",  "Vogais, semivogais, consoantes", "Artigo, verbo, sintaxe", "Substantivo, verbo, preposição ",  "Substantivo, verbo, preposição " ),
    adicionarQuestao("Qual é o maior animal terrestre?", "Baleia azul",  "Elefante africano", "Urso polar", "Hipopotámo",  "Elefante africano" ),
    adicionarQuestao("Qual o nome da maior artéria do nosso corpo?", "Artéria pulmonar",  "Artérias renais", "Artéria aorta", "Artérias caronárias",  "Artéria aorta" ),
    adicionarQuestao("Qual o oceano que banha o Brasil?", "Pacífico",  "Atlântico", "Índico", "Ártico",  "Atlântico" ),
    adicionarQuestao("Quanto é zero menos um?", "0",  "1", "89", "-1",  "-1" ),
    adicionarQuestao("Qual cidade brasileira é conhecida como Terra da Garoa?", "Belém",  "Santa Catarina", "São Paulo", "Brasília",  "São Paulo" ),
    adicionarQuestao("Qual é a cor que resulta da mistura das cores amarelo e vermelho?", "Laranja",  "Verde", "Roxo", "Rosa",  "Laranja" ),
    adicionarQuestao("Qual país foi o pioneiro na Revolução Industrial?", "França",  "Alemanha", "Inglaterra", "Itália",  "Inglaterra" ),
    adicionarQuestao("Qual o maior continente do planeta?", "Europa",  "Ásia", "América", "África",  "Ásia" ),
    adicionarQuestao("Qual dos desenhos abaixo é especialmente lembrado pela fala: “Você falou em pipoca?”", "Turma da Mônica",  "Scooby-Doo", "Pica-Pau", "Bob-Esponja",  "Pica-Pau" ),
    adicionarQuestao("Qual monumento famoso pela sua inclinação?", "Torre de pisa",  "Cristo redentor", "Torre Eiffel", "Estátua da Liberdade",  "Torre de pisa" ),
    adicionarQuestao("Qual das seguintes palavras é um palíndromo?", "Ônibus",  "Banana", "Coco", "Arara",  "Arara" ),
    adicionarQuestao("Qual dos elementos químicos a seguir tem maior número atômico?", "Oxigênio",  "Cobalto", "Hidrogênio", "Nitrogênio",  "Cobalto" ),
    adicionarQuestao("Qual o nome do dinossauro presente no universo de Super Mario que teve sua primeira aparição em “Super Mario World”?", "Yoshi",  "Ioshi", "Yochi", "Iochi",  "Yoshi" ),
    adicionarQuestao("Qual dos seguintes jogos não foi lançado para Super Nintendo?", "Super Bomberman 3",  "Pokémon Crystal", "Top Gear", "Super Bomberman 4",  "Pokémon Crystal" ),
    adicionarQuestao("Qual é o menor número dentre estes?", "0",  "0,01", "0,0001", "-0,1",  "-0,1" ),
    adicionarQuestao("Qual a chance de cair 3 num dado padrão de 6 lados?", "3/6",  "1/2", "1/6", "6/3", "1/6" ),
    adicionarQuestao("Qual das seguintes linguagens de programação brasileiras é amplamente utilizada em jogos, estando presente em obras como “Dark Souls II”, “Grim Fandango” e “Roblox”?", "Lua",  "Portugol", "Elixir", "Boo", "Lua" ),
    adicionarQuestao("Qual das seguintes linguagens de programação é uma linguagem de paradigma funcional?", "C",  "Elixir", "Cobol", "Go", "Elixir" ),
    adicionarQuestao("Qual personagem fictício de “Overwatch 2” tem nacionalidade brasileira?", "Lúcio",  "Ana", "Sigma", "Sombra", "Lúcio" ),
    adicionarQuestao("Quem pintou o quadro Monalisa?", "Vincent van Gogh",  "Leonardo da Vinci", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci" ),
    adicionarQuestao("Qual o símbolo químico do ouro?", "Ag",  "Fe", "Au", "O", "Au" ),
    adicionarQuestao("Qual a tangente de 45°?", "0",  "0,5", "1", "1,5", "1" ),
    adicionarQuestao("Qual é a montanha mais alta da América do Sul?", "Monte McKinley",  "Aconcágua", "Kilimanjaro", "Elbrus", "Aconcágua" ),
    adicionarQuestao("Qual a tipagem do pokémon Psyduck?",  "Água e Psíquico", "Água", "Água e Gelo", "Voador", "Água" ),
    adicionarQuestao("Nos jogos do Super Mario, qual o efeito do potencializador da estrela?",  "Invencibilidade", "Vida extra", "Capacidade de planar", "Lançar bolas de fogo", "Invencibilidade" ),
    adicionarQuestao("Quantos lados tem um heptágono?",  "8", "11", "6", "7", "7" ),
    adicionarQuestao("Qual naipe de baralho tem formato de coração?",  "Espadas", "Ouros", "Copas", "Paus", "Copas" ),
    adicionarQuestao("Qual peça do xadrez executa movimento “um-dois” ou “em L”?",  "Cavalo", "Torre", "Bispo", "Rainha", "Cavalo" ),
    adicionarQuestao("Qual a cor complementar do amarelo?",  "Roxo", "Laranja", "Vermelho", "Verde", "Roxo" ),
    adicionarQuestao("Quantas vogais há na palavra “RESISTÊNCIA”?",  "4", "6", "7", "5", "5" ),
    adicionarQuestao("Em pokémon, o tipo normal é super efetivo em qual(is) outros tipos?",  "Lutador", "Fantasma", "Nenhum", "Todos", "Nenhum" ),
    adicionarQuestao("Qual a moeda usada no Reino Unido?",  "Euro", "Dólar", "Libra esterlina", "Real", "Libra esterlina" ),
    adicionarQuestao("1GB equivale a quantos MB?",  "1000MB", "100MB", "124MB", "1024MB", "1024MB" ),
    adicionarQuestao("Qual das seguintes línguas não deriva do latim?",  "Galego", "Português", "Francês", "Grego", "Grego" ),
    adicionarQuestao("Qual a cor, na coleta seletiva, referente ao vidro?",  "Vermelho", "Azul", "Amarelo", "Verde", "Verde" ),
    adicionarQuestao("Qual a principal fonte de energia do organismo humano?",  "Proteínas", "Vitaminas", "Lipídios", "Carboidratos", "Carboidratos" ),
    adicionarQuestao("Quantos átomos de Oxigênio há numa molécula de água?",  "2", "0", "3", "1", "1" ),
    adicionarQuestao("Qual dos seguintes materiais possui maior dureza?",  "Diamante", "Chumbo", "Granito", "Ouro", "Diamante" ),
    adicionarQuestao("Quantos pinos há num jogo de boliche?",  "12", "6", "8", "10", "10" ),
]

//listas representativas das barras de vida dos jogadores
const vidaJogador1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const vidaJogador2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

//listas com os dados do mini jogo
const codigoBase = [null]
const codigoInserido = [null]

//lista representativa dos caracteres do cronômetro
const tempo = [0, 0, 0, 0]

export {perguntas, vidaJogador1, vidaJogador2, codigoBase, codigoInserido, tempo}