var cuadrito = document.getElementById("area_de_dibujo");
var boton = document.getElementById("botoncito");
var limpiar = document.getElementById("clear");
var papel = cuadrito.getContext("2d");
console.log(cuadrito);

document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);
boton.addEventListener("click", espacioCanvas);
limpiar.addEventListener("Limpiar Pizarra",limpiarPizarra);

function espacioCanvas(){
  var anchoCanvas = document.getElementById("ancho");
  var altoCanvas = document.getElementById("alto");
  cuadrito.width = parseInt(anchoCanvas.value);
  cuadrito.height = parseInt(altoCanvas.value);
  var ancho = cuadrito.width;
  var alto = cuadrito.height;

  dibujarLinea("grey",1,1,1,alto, papel);
  dibujarLinea("grey",1,alto,ancho,alto, papel);
  dibujarLinea("grey",ancho,alto,ancho,1, papel);
  dibujarLinea("grey",1,1,ancho,1, papel);
}

var x, y, estado;

function presionarMouse(evento){
  estado = 1;
  x = evento.offsetX;
  y = evento.offsetY;
}

function soltarMouse(evento){
  estado = 0;
  x = evento.offsetX;
  y = evento.offsetY;
}

function dibujarMouse(evento){
  if (estado == 1){
    dibujarLinea("red", x, y, evento.offsetX, evento.offsetY, papel);
    x = evento.offsetX;
    y = evento.offsetY;
    console.log(evento)
  }
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;                   //ancho linea
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
  console.log("funciona");
}


// no funciona. Tendria que guardar los valores de alto/ancho en memoria
function limpiarPizarra(){
  alert("hola");
  papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
}
