
function setup() {
  createCanvas(520, 420);
  somTrilha.loop()
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarros();
  mostraCarros2()
  movimentaCarro()
  movimentaCarro2()
  movimentaAtor()
  pontoInicialCarro()
  pontoInicialCarro2()
  pontos()
  verificaColisao()
  verificaColisao2()

}