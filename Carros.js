//variaveis do carro

let xCarros = [600, 600, 600, 600, 600, 600, 660];
let yCarros = [40, 96, 150, 210, 270, 318, 270];
let velocidadeCarros = [3.5, 2.8, 5, 4, 2, 3, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
   for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
   }
}

function movimentaCarro(){
   for (let i = 0; i < xCarros.length; i++){
   xCarros[i] -= velocidadeCarros[i];
   }
}

function retornaCarros(){
   for (let i = 0; i < imagemCarros.length; i++){
   if (passouTela(xCarros[i])){
   xCarros[i] = 600;
  }
 }
}

function passouTela(xCarro){
   return xCarro < - 50;
}
