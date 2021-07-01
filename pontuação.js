let record=0
let mortes=0
let meusPontos = 0

function pontos(){
  if (yator<25){somPonto.play(),yator=390,xator=100,meusPontos+=1}
  if (yator>390){yator=390}
  if (xator>485){xator=485}
  if (xator<-5){xator=-5}
  fill (0)
  rect(0,0,600,32)
  fill(color(0, 255, 0)) 
  rect(320,3,110,28)
  fill(color(238, 44, 44))
  rect(430,3,110,28)
  fill(color(238, 201, 0))
  rect(210,3,110,28)
  fill(20)
  textSize(20)
  text(meusPontos, 398,27)
  text("pontos:",322,25)
  text(mortes, 490,27)
  text("erros:",432,25)
  text(record,292,27)
  text("recorde:",212,25)
}


  
  
  

