var letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
var dni, letra, aux;

function myDni(){
    dni = prompt("Ingrese DNI");
    letra = prompt("Ingrese letra").toUpperCase();
    let resto, letraUbicada;

    if(dni < 0 || dni > 99999999) {
        alert("El número de DNI no es válido, hasta pronto...");
    } else {
        resto = dni % 23;
        letraUbicada = letrasDNI[resto];
        if(letraUbicada == letra) {
            alert("Letra y número de DNI correctos");
        } else {
            alert("Letra y número de DNI incorrectos");
        }
    }

}
