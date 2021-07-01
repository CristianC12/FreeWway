let somTrilha;
let somPonto;
let somColisao;
let estrada;

//ator
let ator;


function preload(){
  
  somTrilha = loadSound("sons/trilha.mp3")
  somPonto = loadSound("sons/pontos.mp3")
  somColisao = loadSound("sons/colidiu.mp3")
  estrada = loadImage("imagens/estrada.png")
  ator = loadImage("imagens/ator.png")
  carro1 = loadImage("imagens/carro-1.png")
  carro2 = loadImage("imagens/carro-2.png")
  carro3 = loadImage("imagens/carro-3.png")
  carro4 = loadImage("imagens/carro-4.png")
  carro5 = loadImage("imagens/carro-5.png")
  carro6 = loadImage("imagens/carro-6.png")
  carros = [carro1,carro2,carro3]
  carros2 =[carro4,carro5,carro6]
}
