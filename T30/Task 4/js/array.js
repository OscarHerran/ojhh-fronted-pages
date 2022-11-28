var valores = [true, 5, false, "hola", "adios", 2];
var textoMayor, num1, num2;

// USO DEL TYPE OF PARA DETERMINAR LOS VALORES STRING DENTRO DEL ARRAY Y A PARTIR DE ALLÍ DETERMINAR CUÁL CONTIENEN MAYOR LONGITUD

for(let i = 0; i < valores.length; i++){
    if((typeof valores[i]) === 'string'){ //COMPARA SI EL ELEMENTO ES DE UNA CLASE CON EL typeOf
        if(valores[i].length > valores[i + 1]){
            textoMayor = valores[i];
           // console.log("Este es el mayor elemento String " + valores[i]);
        } else {
            textoMayor = valores[i];
            //console.log("Este es el mayor elemento String " + valores[i + 1]);
        } 
    }
}

console.log("Este es el mayor elemento String  : " + textoMayor);
document.getElementById("mayor").innerHTML += "Este es el mayor elemento String  : " + textoMayor

// VALORES BOOLEANS

for(let i = 0; i < valores.length; i++){
    if(typeof valores[i] === "boolean"){
        console.log("LOS OPERADORES NECESARIOS PARA OBTENER UN RESULTADO TRUE SON : TRUE CONJUNCION TRUE");
        console.log("LOS OPERADORES NECESARIOS PARA OBTENER UN RESULTADO FALSE SON : FALSE CONJUNCION TRUE");
    }
}

// OPERACIONES CON NÚMEROS

num1 = valores[1];
num2 = valores[5];

console.log("la suma de los dos elementos es igual a " + (num1 + num2));
document.getElementById("operacion1").innerHTML+= "la suma de los dos elementos es igual a " + (num1 + num2);

console.log("la resta de los dos elementos es igual a " + (num1 - num2));
document.getElementById("operacion2").innerHTML+= "la resta de los dos elementos es igual a " + (num1 - num2);

console.log("la multiplicación de los dos elementos es igual a " + (num1 * num2));
document.getElementById("operacion3").innerHTML+= "la multiplicación de los dos elementos es igual a " + (num1 * num2);

console.log("la división de los dos elementos es igual a " + (num1 / num2));
document.getElementById("operacion4").innerHTML+= "la división de los dos elementos es igual a " + (num1 / num2);

console.log("la potencia de los dos elementos es igual a " + (num1 ** num2));
document.getElementById("operacion5").innerHTML+= "la potencia de los dos elementos es igual a " + (num1 ** num2);