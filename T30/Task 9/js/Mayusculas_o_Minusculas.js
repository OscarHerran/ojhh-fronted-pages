var mayusCont = 0, minusCont = 0, cad;
function esMayuscula(cadena) {
   cad = cadena.value;
   for(let i = 0; i < cad.length; i++) {
     if(cad.charAt(i) == cad.charAt(i).toUpperCase()){ //VERIFICA CARACTER A CARACTER SI ES O NO MAYUSCULAS
        mayusCont++;
     } else if (cad.charAt(i) == cad.charAt(i).toLowerCase()) {
        minusCont++;
     }
    }
    //VERIFICACIÓN DEL CONTEO CON LA EXTENSIÓN DE LA PALABRA

    if(mayusCont == cad.length) {
        document.getElementById('result').innerHTML += "El texto lo componen mayúsculas en su totalidad";
    } else if (minusCont == cad.length) {
        document.getElementById('result').innerHTML += "El texto lo componen minúsculas en su totalidad";
    }  else {
        document.getElementById('result').innerHTML += "El texto lo componen  mayúsculas y minúsculas";
    } 
}