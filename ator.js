//Código Ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30 );
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;}
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaPosicaoInicial(); 
     if (pontosMaiorQueZero()){
    meusPontos -= 1
  }}
       }
 
}

function voltaPosicaoInicial(){
  yAtor = 366
}

function incluiPonto(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,0));
  text(meusPontos, width / 5, 27);
    
}

function marcaPonto(){
  if (yAtor < 14){
    meusPontos += 1;
  voltaPosicaoInicial();
  } 
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
  
}

function podeSeMover(){
  return yAtor < 366;
}






