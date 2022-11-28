var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2){
   console.log("número1 no es mayor que número2"); 
}

if(numero2 > 0){
    console.log("número2 es positivo"); 
}

if(numero1 < 0 || numero1 != 0 ){
    console.log("número1 es negativo o distinto de cero"); 
}

if((numero1+=1) < numero2){
    console.log("Incrementar en 1 unidad el valor de número1 no lo hace mayor o igual a número2"); 
}