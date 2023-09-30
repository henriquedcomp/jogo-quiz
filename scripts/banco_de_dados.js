//lista com as perguntas
const perguntas = [
    adcnQuestao("Qual cidade Sergipana é considerada capital nacional do bordado?", "Simão Dias", "Tobias Barreto", "Laranjeiras", "Malhador", "Tobias Barreto"),
    adcnQuestao("Qual é a cor da caixa-preta do avião?", "Preta", "Amarela", "Laranja", "Azul", "Laranja"),
    adcnQuestao("Qual o minimo de jogadores deve ter em cada time de futebol?", "12",  "6", "7", "5",  "7" ),
    adcnQuestao("Qual o menor país do mundo?", "Rússia",  "Brasil", "Vaticano", "Estados Unidos",  "Vaticano" ),
    adcnQuestao("Quantas casas decimais tem o número pi?", "Uma",  "Infinitas", "Vinte", "Três",  "Infinitas" ),
    adcnQuestao("Qual a escola de magia e bruxaria em que estuda Harry Potter?", "Hogsmeade ",  "Caldeirão Furado", "Hogwarts", "Beco Diagonal",  "Hogwarts" ),
    adcnQuestao("Qual o tipo sanguíneo considerado doador universal?", "Tipo O",  "Tipo AB", "Tipo B", "Tipo A",  "Tipo O" ),
    adcnQuestao("Em que país nasceu Clarice Lispector?", "Brasil",  "Ucrânia", "Argentina", "Uruguai",  "Ucrânia" ),
    adcnQuestao("Quem é o cantor(a) da música “Triller”?", "Rihanna",  "Michael Jackson", "Pabllo Vittar", "Beyoncé",  "Michael Jackson" ),
    adcnQuestao("A que temperatura a água ferve a 1 atm de pressão?", "0 °C",  "180 °C", "200 °C", "100 °C",  "100 °C" ),
    adcnQuestao("Que cidade brasileira é conhecida por chover todos os dias quase à mesma hora?", "Vitória",  "Salvador", "Belém", "Porto Velho",  "Belém" ),
    adcnQuestao("Qual o nome popular do cloreto de sódio?", "Água",  "Sal de cozinha", "Vinagre", "Mel",  "Sal de cozinha" ),
    adcnQuestao("Que fruto nasce da oliveira?", "Acerola",  "Açaí", "Azeitona", "Abacate",  "Azeitona" ),
    adcnQuestao("Quais as respectivas cores da reciclagem do papel, vidro, metal e plástico?", "Verde, azul, amarelo, vermelho",  "Verde, amarelo, azul e vermelho", "Azul, verde, amarelo e vermelho", "Azul, amarelo, verde e vermelho",  "Azul, verde, amarelo e vermelho" ),
    adcnQuestao("Qual país sediará as olimpíadas de 2024?", "Estados Unidos",  "França", "Austrália", "Brasil",  "França" ),
    adcnQuestao("Qual é o nome artístico da cantora Larissa de Macedo Machado?", "Larissa Manoela",  "Xuxa", "Ludmilla", "Anitta",  "Anitta" ),
    adcnQuestao("Qual das alternativas as palavras estão escritas corretamente?", "reinvindicar, madastra, iogurte",  "reivindicar, madastra, iorgute", "reivindicar, madrasta, iogurte", "reinvindicar, madrasta, iorgute",  "reivindicar, madrasta, iogurte" ),
    adcnQuestao("Quantos elementos têm a tabela periódica?", "118",  "106", "128", "135",  "118" ),
    adcnQuestao("Qual o nome da galáxia em que a Terra está?", "Galáxia de Andrômeda",  "Galáxia do Rodamoinho", "Via Láctea", "Galáxia do Sombreiro",  "Via Láctea" ),
    adcnQuestao("Em que período da pré-história o fogo foi descoberto?", "Período da Pedra Polida",  "Paleolítico", "Mesolítico", "Idade Antiga",  "Paleolítico" ),
    adcnQuestao("Qual das alternativas abaixo apenas contêm classes de palavras?", "Oxítona, paroxítona",  "Vogais, semivogais, consoantes", "Artigo, verbo, sintaxe", "Substantivo, verbo, preposição ",  "Substantivo, verbo, preposição " ),
    adcnQuestao("Qual é o maior animal terrestre?", "Baleia azul",  "Elefante africano", "Urso polar", "Hipopotámo",  "Elefante africano" ),
    adcnQuestao("Qual o nome da maior artéria do nosso corpo?", "Artéria pulmonar",  "Artérias renais", "Artéria aorta", "Artérias caronárias",  "Artéria aorta" ),
    adcnQuestao("Qual o oceano que banha o Brasil?", "Pacífico",  "Atlântico", "Índico", "Ártico",  "Atlântico" ),
    adcnQuestao("Quanto é zero menos um?", "0",  "1", "89", "-1",  "-1" ),
    adcnQuestao("Qual cidade brasileira é conhecida como Terra da Garoa?", "Belém",  "Santa Catarina", "São Paulo", "Brasília",  "São Paulo" ),
    adcnQuestao("Qual é a cor que resulta da mistura das cores amarelo e vermelho?", "Laranja",  "Verde", "Roxo", "Rosa",  "Laranja" ),
    adcnQuestao("Qual país foi o pioneiro na Revolução Industrial?", "França",  "Alemanha", "Inglaterra", "Itália",  "Inglaterra" ),
    adcnQuestao("Qual o maior continente do planeta?", "Europa",  "Ásia", "América", "África",  "Ásia" ),
    adcnQuestao("Qual dos desenhos abaixo é especialmente lembrado pela fala: “Você falou em pipoca?”", "Turma da Mônica",  "Scooby-Doo", "Pica-Pau", "Bob-Esponja",  "Pica-Pau" ),
    adcnQuestao("Qual monumento famoso pela sua inclinação?", "Torre de pisa",  "Cristo redentor", "Torre Eiffel", "Estátua da Liberdade",  "Torre de pisa" ),
    //adcnQuestao("", "",  "", "", "",  "" ),
]

//Tags de imagem do HTML em formato de string para serem acessadas pelo Js e adicionadas dinamicamente na tela
const imgCoracaoAzul = '<img class="coracao" src="imagens/coracao-azul.png" alt="Coração Azul">'
const imgCoracaoVerde = '<img class="coracao" src="imagens/coracao-verde.png" alt="Coração Verde">'

export {perguntas, imgCoracaoAzul, imgCoracaoVerde}