const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está deixando a escola quando encontra uma tecnologia surpreendente, um chat que pode responder qualquer questão e gerar áudios e imagens com qualidade hiper-realista. Qual seria seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é de arrepiar!",
                afirmacao: "No começo, sentiu receio sobre o que essa tecnologia poderia causar. "
            },
            {
                texto: "Isso é fantástico!",
                afirmacao: "Desejou entender como aproveitar a IA nas atividades diárias."
            }
        ]
    },
    {
        enunciado: "Com a chegada da Inteligência Artificial, a professora de tecnologia da escola fez uma série de aulas sobre isso. No final, ela pediu que você escrevesse um trabalho sobre o uso da IA na sala de aula. O que você faz?",
        alternativas: [
            {
                texto: "Explore uma ferramenta de busca online que use IA para identificar informações relevantes ao seu trabalho e faça uma explicação clara e simples para facilitar a compreensão.",
                afirmacao: "Conseguiu recorrer à inteligência artificial para coletar dados úteis."
            },
            {
                texto: "Escreva o trabalho baseando-se nas interações com seus colegas, pesquisas pela internet e seu entendimento próprio do tema.",
                afirmacao: "Achou mais prático usar seus próprios meios para escrever o trabalho."
            }
        ]
    },
    {
        enunciado: "Depois de finalizar o trabalho, a professora iniciou uma conversa em sala para discutir como ele foi produzido. Durante o bate-papo, surgiu um tema relevante: como a inteligência artificial pode transformar o trabalho no futuro. Qual seria seu posicionamento?",
        alternativas: [
            {
                texto: "Acredita que a inteligência artificial é uma ferramenta que possibilita a criação de empregos e melhora as aptidões humanas.",
                afirmacao: "Vem fomentando o progresso da inteligência artificial e buscando abrir novos caminhos de emprego dentro desse campo."
            },
            {
                texto: "Estou atento à situação de quem pode perder o emprego para máquinas e defendo a importância de assegurar a proteção desses trabalhadores.",
                afirmacao: "Sua atenção às dificuldades dos trabalhadores impulsionou a criação de um grupo que debate o uso responsável da inteligência artificial."
            }
        ]
    },
    {
        enunciado: "Terminada a conversa, você recebeu o desafio de criar, com recursos digitais, uma imagem que expressasse sua opinião sobre IA. O que acontece a partir daí?",
        alternativas: [
            {
                texto: "Desenvolver uma imagem utilizando um aplicativo de edição visual, como o Paint.",
                afirmacao: "Percebeu que muitos não estão familiarizados com as ferramentas tradicionais e decidiu transmitir seus conhecimentos de design por meio de programas de pintura digital para iniciantes."
            },
            {
                texto: "Desenvolver uma ilustração usando uma plataforma de geração de imagens alimentada por IA.",
                afirmacao: "O processo de criação de trabalhos ficou mais rápido graças aos geradores de imagem, e você agora ensina pessoas que têm problemas para desenhar à mão a usar essas ferramentas."
            }
        ]
    },
    {
        enunciado: "Vocês têm um trabalho de biologia para a próxima semana e ainda estão atrasados. Um colega resolve usar a IA para ajudar, mas o resultado ficou exatamente igual ao texto original do chat. Como você lida com isso?",
        alternativas: [
            {
                texto: "Interagir com o chat por meio de comandos é uma contribuição para o trabalho, logo utilizar todo o texto não é uma questão.",
                afirmacao: "Sem perceber, começou a depender da IA para todas as suas atividades e sente-se preso a essa dependência."
            },
            {
                texto: "O chat representa uma tecnologia avançada, mas é importante lembrar que máquinas erram, tornando a revisão e a contribuição pessoal indispensáveis.",
                afirmacao: "Compreendeu que a IA baseia suas respostas nas orientações da empresa que a desenvolveu e que boa parte do conteúdo gerado pelo chat não era alinhado com suas ideias, por isso entende que os textos devem servir de auxílio, e não ser o produto final. "
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
    caixaPerguntas.textContent = "Em 2055...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
