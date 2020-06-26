class Fases {
    constructor() {
        this.textoWidth = 0;
        this.textoHeight = 0;
    }

    draw() {
        this._imagemDeFundo();
        this._texto(width/2 - 300, height/ 2 - 200, 'Fase 1:');
        this._botao(width/2 - 300 + this.textoWidth + 50, height/ 2 - 200 - this.textoHeight - 10);
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height)
    }

    _texto(x, y, chamada) {
        fill('#FFF');
        textFont(fonteTelaInicial);
        textAlign(LEFT)
        textSize(50);
        text(chamada, x, y);
        this.textoWidth = textWidth(chamada)
        this.textoHeight = 50
    }

    _botao(x, y) {
        botaoFase1.y = y;
        botaoFase1.x = x;
        botaoFase1.show();
        botaoFase1.draw();
    }
}