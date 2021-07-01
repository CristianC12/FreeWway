let yator = 390;
let xator = 100;
let colidiu = false
let colidiu2 = false
 
function mostraAtor(){
    image(ator,xator,yator,35,30)
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){yator -= 2.5}
  if (keyIsDown(DOWN_ARROW)){yator += 2.5}
  if (keyIsDown(LEFT_ARROW)){xator-=2.5}
  if (keyIsDown(RIGHT_ARROW)){xator+=2.5}
  
}


function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carros.length; i+=1){
    colidiu = collideRectRect(xcarros[i], ycarros[i], comprimentoCarro, alturaCarro, xator, yator, 25,25 )
    if (colidiu){somColisao.play();yator=390 ;meusPontos=0, mortes+=1
    }
  }
}

function verificaColisao2(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carros.length; i+=1){
    colidiu2 = collideRectRect(xcarros2[i], ycarros2[i], comprimentoCarro, alturaCarro, xator, yator, 25,25 )
    if (colidiu2){somColisao.play();yator=390;meusPontos=0; mortes+=1}}

if (meusPontos>record){record=meusPontos}
}
  
