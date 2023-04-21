let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemDaEstrada = loadImage("./assets/estrada.png");
    imagemDoAtor = loadImage("./assets/ator-1.png");
    imagemDoCarro1 = loadImage("./assets/carro-1.png");
    imagemDoCarro2 = loadImage("./assets/carro-2.png");
    imagemDoCarro3 = loadImage("./assets/carro-3.png");
    somDaTrilha = loadSound("./assets/trilha.mp3");
    somDaColisao = loadSound("./assets/colidiu.mp3");
    somDoPonto = loadSound("./assets/pontos.wav");
    imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro3]
  }