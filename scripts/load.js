function preload() {
    imagemCenario = loadImage('imagens/cenario/cenario.png');
    imagemCenarioReverso = loadImage('imagens/cenario/cenario-reverso.png');
    imagemPersonagem = loadImage('imagens/personagem/knight.png');
    imagemPersonagemDano = loadImage('imagens/personagem/bruxa-dano.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemInimigo = loadImage('imagens/inimigos/cogumelo.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/inseto.png');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
    imagemVida = loadImage('imagens/assets/imagemVida.png');
    imagemHUDVida = loadImage('imagens/assets/HUDVida.png');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.ttf');
    somDoJogo = loadSound('sons/audio.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somMorte = loadSound('sons/morte.mp3');
    fita = loadJSON('fita/fita.json');
  }