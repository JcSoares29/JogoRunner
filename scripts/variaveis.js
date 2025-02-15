let imagemCenario;
let imagemCenarioReverso;
let imagemPersonagem;
let imagemPersonagemDano;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let imagemVida;
let imagemHUDVida;
let fonteTelaInicial;
let cenario;

let fita;

let jogo;
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let fases;
let botaoGerenciador;
let botaoFase1;
let vida;

let somDoJogo;
let somDoPulo;
let somMorte;

let personagem;
let pontuacao;

let GameOver = false;


const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const matrizInimigoCogumelo = [
  [0, 0],
  [120, 0],
  [240, 0],
  [0, 120],
  [120, 120],
  [240, 120],
]
const matrizInimigoInseto = [
  [0, 0],
  [90, 0],
  [180, 0],
  [0, 70],
  [90, 70],
  [180, 70],
]
const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]
const matrizPersonagemHK = [
  [0, 0],
  [70, 0],
  [140, 0],
  [210, 0],
]
const matrizPersonagemDano = [
  [0, 0],
  [270, 0],
  [540, 0],
  [810, 0],
  [0, 270],
  [270, 270],
  [540, 270],
  [810, 270],
  [0, 540],
  [270, 540],
  [540, 540],
  [810, 540],
]
const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = [];