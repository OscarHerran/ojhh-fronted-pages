var texto;
function esPalindromo(cadena) {
    texto = cadena.value;
    texto = texto.toLowerCase().replace(/\s/g,""); //CDEPURANOS LA CADENA A MINUSCULAS Y SIN ESPACIOS O VALORES DE POR MEDIO
    let contrary = texto.split("").reverse().join(""); 

    if(texto == contrary) {
        document.getElementById('result').innerHTML+= " Es un palíndromo";
    } else {
        document.getElementById('result').innerHTML+= " No es un palíndromo";
    } 
}