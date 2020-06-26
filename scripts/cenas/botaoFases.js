class BotaoFases {
    constructor (x, y, imagem, altura, largura) {
        this.x = x;
        this.y = y;
        this.imagem = imagem;
        this.altura = altura;
        this.largura = largura;
        this.botaoFase = createImg('imagens/cenario/cenario.png');
        this.botaoFase.size(altura, largura);
        this.botaoFase.mousePressed(() => this._alteraCena());
        this.botaoFase.addClass('botao-seleciona-fase');
    }

    draw() {
        this.botaoFase.position(this.x, this.y);  
    }

    _alteraCena() {
        this.botaoFase.remove();
        cenaAtual = 'jogo'
    }

    hide() {
        this.botaoFase.hide();
    }

    show() {
        this.botaoFase.show();
    }
}