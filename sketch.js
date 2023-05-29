function setup() {
  createCanvas(500, 400);
   mostraCarro();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoCarro();
  passouTodaTela();
  verificaColisao();
  incluiPonto();
  marcaPonto();
}



