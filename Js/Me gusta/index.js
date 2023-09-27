var contador = 0;

function like(){
contador++; 
var etiqueta = document.querySelector("#likeslbl")
etiqueta.textContent = contador + " Like(s)"
}