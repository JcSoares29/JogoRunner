class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, imagemCenarioReverso, 3);
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagemHK,
            imagemPersonagem, 0, 80, 70, 152, 70, 152);
        const inimigo = new Inimigo(
            matrizInimigo, imagemInimigo, width - 52, 80, 52, 52,
            104, 104, 10, 100
        );
        const inimigoVoador = new Inimigo(
            matrizInimigoVoador, imagemInimigoVoador,
            width - 52, 280, 100, 75,
            200, 150, 10, 100
        );
        const inimigoGrande = new Inimigo(
            matrizInimigoGrande, imagemInimigoGrande,
            width, 60, 200, 200, 400, 400, 10, 100
        );

        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)

        somDoJogo.loop();
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            const pulos = personagem.pula();
            if (pulos <= 2) somDoPulo.play();
        }
    }

    draw() {
        cenario.exibe();
        pontuacao.exibe();
        personagem.exibe();
        personagem.aplicaGravidade();
      
        if (!GameOver) {
          pontuacao.adicionarPonto();
          cenario.move();
      
          const inimigo = inimigos[this.inimigoAtual];
          const inimigoVisivel = inimigo.x < -inimigo.largura;
      
          inimigo.exibe();
          inimigo.move();
      
          if (inimigoVisivel) {
            this.inimigoAtual++;
            if (this.inimigoAtual > 2) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(10, 30));
          }
      
          if (personagem.estaColidindo(inimigo)) {
            GameOver = true;
            personagem = new Personagem(matrizPersonagemDano,
              imagemPersonagemDano, 0, 80, 110, 135, 270, 270)
            somDoJogo.stop()
            somMorte.loop();
          }
        } else {
          if (personagem.loop) {
            image(imagemGameOver, width / 2 - 200, height / 3);
            noLoop();
          }
        }
    }
}