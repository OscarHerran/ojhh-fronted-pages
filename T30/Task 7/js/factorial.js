//VARIABLES GLOBALES
var num = parseInt(prompt("Introduce el número para calcular el factorial"));
var constante = 1;

function factorial() {
    for(let i = 1; i < num; i++){
        constante += constante * i;
    }

    alert("La secuencia factorial de: " + num + " será : " + constante);
    document.getElementById("facto").innerHTML += "La secuencia factorial de: " + num + " será : " + constante;
}

