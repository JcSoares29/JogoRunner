class Jogo {
    constructor() {
        this.indice = 0;   
        this.mapa = fita.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, imagemCenarioReverso, 3);
        vida = new Vida(fita.configuracoes.vidaMaxima, 
          fita.configuracoes.vidaInicial);
        pontuacao = new Pontuacao();


        personagem = new Personagem(matrizPersonagemHK,
            imagemPersonagem, 0, 80, 70, 152, 70, 152);
        const inimigo = new Inimigo(
            matrizInimigoCogumelo, imagemInimigo, width - 52, 80, 90, 90,
            120, 120, 10
        );
        const inimigoVoador = new Inimigo(
            matrizInimigoInseto, imagemInimigoVoador,
            width - 52, 280, 80, 55,
            90, 70, 10
        );
        const inimigoGrande = new Inimigo(
            matrizInimigoGrande, imagemInimigoGrande,
            width, 60, 200, 200, 400, 400, 10
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
        image(imagemHUDVida, 10, 10, 135, 85);
        pontuacao.exibe();
        personagem.exibe();
        personagem.aplicaGravidade();

        vida.draw();
      
        if (!GameOver) {
          pontuacao.adicionarPonto();
          cenario.move();
          const linhaAtual = this.mapa[this.indice];
          const inimigo = inimigos[linhaAtual.inimigo];
          const inimigoVisivel = inimigo.x < -inimigo.largura;
          inimigo.velocidade = linhaAtual.velocidade;     

          inimigo.exibe();
          inimigo.move();
      
          if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
          }
      
          if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            if (vida.vidas === 0) {
              GameOver = true;
            }
          }
        } else {          
          if (personagem.loop) {
            somDoJogo.stop();
            somMorte.loop();
            image(imagemGameOver, width / 2 - 200, height / 3);
            noLoop();
          }
        }
    }
}