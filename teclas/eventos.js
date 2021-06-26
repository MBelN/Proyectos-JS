var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};  //este obtejo/bloque de codigo VA con ; al final. ES "una sola" linea de codigo

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);      //las flachas estan en toda la pantalla no solo en el canvas
//keydown es cuando se presiona la tecla. keyup cuando soltamos la tecla
//aca usamos el up xq en el down si mantengo apretada la tecla se marcan muchos eventos

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;                                                     //cada vez que muevo el teclado, se recuerda el punto inicial
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);                 //para hacer un punto

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;                   //ancho linea
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
//los eventos no necesitan parametros, son opcionales. Pero si le agrego el parametro "evento"
//voy a obtener datos, en este caso: que tecla fue oprimida
{
  // if(evento.keyCode == teclas.UP)
  // {
  //   console.log("vamo' pa arriba");
  // }
  var colorcito = "green";
  var movimiento = 1;                 //me voy a mover 10 pixeles siempre
  switch (evento.keyCode) {            //entre () el evento que cambia
    case teclas.DOWN:                  //entre el breack y el case es lo que se dispara
      //console.log("abajo");
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
    //default:                            //es como el "else". Todo lo que sea != a keyCode
      console.log("otra tecla");
    break;                              //no es obligatorio ponerlo
  }
}
