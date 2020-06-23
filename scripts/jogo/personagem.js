class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

    this.yInicial = height - this.altura;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;

    this.numeroPulos = 0;
  }

  estaNoChao() {
    if (this.y >= this.yInicial) return true;
    return false
  }

  pula() {   
    
    if (this.estaNoChao()) {
      console.log('entrei')
      this.numeroPulos = 1;
      this.velocidadeDoPulo = -30;
    } else {
      this.numeroPulos++;
      console.log('nao entrei')
      if (this.numeroPulos > 2 && this.y < this.yInicial) {
        this.velocidadeDoPulo = this.velocidadeDoPulo;
      } else {
        this.velocidadeDoPulo = -30;
      }
    }
    console.log(this.numeroPulos, this.y, this.yInicial);  
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    // noFill();
    // rect(this.x, this.y, this.largura, this.altura)
    // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura)
    const precisao = .7;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao           
    );

    return false;
  }
  
}