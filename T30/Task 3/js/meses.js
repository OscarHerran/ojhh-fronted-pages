//array de los meses
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(meses.length);

//recorrido e impresion con ciclo for
for(let i = 0; i < meses.length; i++){
    document.getElementById("month").innerHTML+= "<li>" + meses[i] + "</li>";
    console.log(meses[i]);
}
    