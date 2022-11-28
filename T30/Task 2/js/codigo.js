var mensaje = "Hola Mundo! \nQué facil es incluir 'comillas simples' \ny ''comillas dobles''";

alert(mensaje);
document.getElementById("agrega").innerHTML = mensaje;

function entra() {
  document.getElementById("agrega").innerHTML = mensaje;
}

function sale() {
  alert("ya no me verás");
  document.getElementById("agrega").innerHTML = " ";
}