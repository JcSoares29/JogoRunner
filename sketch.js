
function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();

  botaoGerenciador = new BotaoGerenciador('Iniciar', 
  width/2, height/2);

  frameRate(40);
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

