
function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  fases = new Fases();

  botaoGerenciador = new BotaoGerenciador('Iniciar', 
  width/2, height/2);

  botaoFase1 = new BotaoFases(imagemCenario, 0, 0, 300, 100);
  botaoFase1.hide();
  
  frameRate(40);
  cenas = {
    jogo,
    telaInicial,
    fases
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

