alert("si no tiene activado el soporte para JavaScript en su navegador, ¿activelo!");

function entra() {
    alert("hola, es el primer script");
    document.getElementById("agrega").innerHTML+="Soy el primer script";
}

function sale() {
    alert("ya no me verás");
    document.getElementById("agrega").innerHTML = " ";
}