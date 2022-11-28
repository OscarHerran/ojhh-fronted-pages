var num;

function calcula(valor){
    num = valor.value;
    if(num % 2 == 0) {
      document.getElementById("result").innerHTML += " es un número par";
    } else {
       document.getElementById("result").innerHTML += " es un número impar";
    }
}
