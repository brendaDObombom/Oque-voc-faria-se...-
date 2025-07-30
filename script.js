 const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você acorda se depara com uma notícia de que toda tecnologia do mundo foi hakeada e que todos estão perdidos por dependerem totalmente dela. Oque você pensaria?",
        alternativas: [
            {
                texto: "Meu mundo acabou!",
                afirmacao: "No inicio você acha que perdeu tudo que fez em sua vida com a tecnlogia "
            },
            {
                texto: "Preciso resolver isso!",
                afirmacao: "Você quer resolver esse problema para ajudar as áreas que mais se prejudicaram"
            }
        ]
    },
    {
        enunciado: "Com essa notícia você vai atraz de saber como tudo isso começou e descobre uma forma de recuperar tudo com a IA. Oque você decide fazer?",
        alternativas: [
            {
                texto: "Prefiro não usar pois pode ser perigoso",
                afirmacao: "Você não consegue ajudar pois tem medo de usar o desconhecido"
            },
            {
                texto: "Decido usar a IA para me ajudar.",
                afirmacao: "Ela pensa mais rápido e me ajuda a pensar em novas possibilidades aumentando as chances de acertar de primeira."
            }
        ]
    },
    {
        enunciado: "Quando você apresenta a ideia para os outros pensadores eles perguntam como você colocaria isso em prática",
        alternativas: [
            {
                texto: "Digo que colocaria nas mãos de alguém mais experiente e não faria mais nada",
                afirmacao: "Você tem medo de colocar as mãos na massa e acabar dando errado"
            },
            {
                texto: "Falaria que iria acompahar de perto todo o processo ajudando noque eles precisarem.",
                afirmacao: "Com você acompanhando todo o precesso de perto diminiu a probabilidade de errar."
            }
        ]
    },
    {
        enunciado: "Quando os outros estão quase convencidos pedem uma demonstração de como usar a IA para resolver esse preblemão",
        alternativas: [
            {
                texto: "Uso a IA para criar uma imegem demonstrando o passo a passo de todo o processo",
                afirmacao: "Mostrando com imagem a ideia dará mais credibilidade"
            },
            {
                texto: "Tentaria mostrar que o quanto menos usar a IA seria melhor",
                afirmacao: "Como você tem medo de usar coisas desconhecidas prefere o uso minímo de IA"
            }
        ]
    },
    {
        enunciado: "No final sua ideia da certo e todos te pretigiam mas perguntam qual seria sua conclusão depois de tudo ",
        alternativas: [
            {
                texto: "Diria que o uso conciênte da IA podemos conquistar coisas inimaginavéis.",
                afirmacao: "Você desenvolve projetos que incentivam o uso de IA"
            },
            {
                texto: "Você diz que usar tecnologias como IA é extremamente perigoso ",
                afirmacao: "Recomenda a proibição de IA pois pode trazer o fim do mundo "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();