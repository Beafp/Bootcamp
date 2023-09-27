var contador = [0,0,0];

function like(index){
contador[index]++; 
var etiqueta = document.querySelector("#likeslbl" + index)
etiqueta.textContent = contador[index] + " Like(s)"
}