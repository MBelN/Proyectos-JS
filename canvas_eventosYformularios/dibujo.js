var texto = document.getElementById("texto_lineas");
var tamaño = document.getElementById("tamaño");
var boton = document.getElementById("botoncito");
var color = document.getElementById("color").value;
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");                 //getContext: funcion del obj canvas. Permite obtener el area donde se va a dibujar

boton.addEventListener("click",dibujoPorClick);                              //cuando se ejecuta el boton. Aca ejecuctar es hacer "click" (podria ser ponerse arriba del boton por ej)
//si se pone dibujoPorClick() ejecuta la funcion en ese momento. Nosotros queremos que se ejecute con el click, entonces va sin ()

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();                                //empezar un trazo
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial,y_inicial);              //mover el lapiz donde arranca la linea. Arranca en el punto x=100, y=100
  lienzo.lineTo(x_final,y_final);              //hasta donde va la linea
  lienzo.stroke();                     //es el "dibujar" la linea
  lienzo.closePath();
}

function dibujoPorClick()
{
  d.width = parseInt(tamaño.value);
  d.height = parseInt(tamaño.value);
  var ancho = d.width;
  var alto = d.height;
  var color = document.getElementById("color").value

  var lineas = parseInt(texto.value);           //para obtener el # que pongo en la cajita
  var l = 0;
  var y_in, x_fin;
  var colorcito = color;
  var espacio = ancho/lineas;
  var borde = ancho -1;


  //queremos una linea cada 10 pixeles y tenemos un cuadrado de 300x300 pixeles = 30 lineas en totoal como limite
  //x_inicial e y_final no se modifican


  //while(l < lineas)
  for(l = 0; l < lineas; l++)                    //arranca en l=0; condicion - como en el while; el codigo se ejecuta cada vez que hay un ciclo
  {
    y_in = espacio * l;                          //ancho/lineas=espacio entre lineas (=coordenadas del punto inicial y final)
    x_fin = espacio * (l + 1);
    dibujarLinea(colorcito, 0, y_in, x_fin, ancho)
    dibujarLinea(colorcito, ancho, y_in, x_fin, 0)
    dibujarLinea(colorcito, 0, y_in, ancho-x_fin, 0)
    dibujarLinea(colorcito, ancho, y_in, ancho-x_fin, ancho)
    console.log("Linea " + l);
  //l++;                          //l++ es lo mismo que: l = l + 1 (solo funciona con 1). Esto es para el while
  }

  dibujarLinea(colorcito, 1, 1, 0, borde);      //para hacer los bordes redondeados
  dibujarLinea(colorcito, 1, borde, borde, borde);
  dibujarLinea(colorcito, borde, 1, borde, borde);
  dibujarLinea(colorcito, 1, 1, borde, 1);
}
