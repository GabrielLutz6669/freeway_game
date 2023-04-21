//variaveis do ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
    if (keyIsDown(87)){
      yAtor -= 3
    }
    if (keyIsDown(83)){
      if(podeMover()){
      yAtor += 3
      }
    }
   }

   function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        voltaInicio();
        somDaColisao.play();
        if (pontosMaiorQueZero()){
        meusPontos -= 1;
        }
      }
    }
  }
  
  function voltaInicio(){
    yAtor = 366;
  }

  function mostraPontos(){
    textAlign(CENTER)
    textSize(25)
    fill(color(128,0,128))
    text(meusPontos, width / 5, 27)
  }

  function marcaPontos(){
    if (yAtor < 15){
      meusPontos += 1;
      somDoPonto.play();
      voltaInicio();
    }
  }

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeMover(){
  return yAtor < 366;
}