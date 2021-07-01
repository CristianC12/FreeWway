let comprimentoCarro= 50
let alturaCarro = 40
let xcarros =[600,600,600]
let xcarros2 =[-100,-100,-100]
let ycarros =[340, 287,235]
let ycarros2 =[35,145,90]
let velocidadeCarros=[4.8,3.6,5.2]
let velocidadeCarros2=[-6.2,-6.8,-5.6]

function mostraCarros(){
   
  for(let i=0; i< carros.length;i+=1)
       {image(carros[i],xcarros[i],ycarros[i],comprimentoCarro,alturaCarro)}
}  

function movimentaCarro(){
  for(let i = 0; i <carros.length; i+=1)
{  xcarros[i] -= velocidadeCarros[i]}
}
 function pontoInicialCarro(){
  for(let i = 0; i<xcarros.length; i+=1)  
  {if (xcarros[i]<-45){xcarros[i]=550}}}
 
 
function mostraCarros2(){
   
  for(let i=0; i< carros2.length;i+=1)
       {image(carros2[i],xcarros2[i],ycarros2[i],comprimentoCarro,alturaCarro)}}  

function movimentaCarro2(){
  for(let i = 0; i <carros.length; i+=1)
{  xcarros2[i] -= velocidadeCarros2[i]}
}

 function pontoInicialCarro2(){  
  for(let i = 0; i<xcarros2.length; i+=1)
  {if (xcarros2[i]>550){xcarros2[i]=-50}}}