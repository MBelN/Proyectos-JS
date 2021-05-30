var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d")

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};

console.log(teclas);
document.addEventListener("keydown", moverCerdo);
 
// Tengo que redibujar el tile antes que cada animal, asi estos no quedan por debajo
// Tengo que crear una variable que me avise que "tail" ya esta cargado
// esto se detecta por el "load".
// Cada imagen va a tener diferentes atributos: url, y si ya cargo (a traves de objetos literales o json)

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false,
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
};

var cantidad = aleatorio(3, 5);
var movimiento = 20;
var cx = 150, cy = 150;

//POSICIONES FIJAS DE LAS VACAS CREADAS, GUARDADAS EN UNA MATRIZ
var posFijaVacas = [
    [2],
    [maxVacas]//definición de variables para X y Y
  ]

console.log(cantidad);  //para ver la cantidad de vacas que aparecen

fondo.imagen = new Image();    //creamos una nueva imagen. Hasta ahora solo cargabamos imagenes ya hechas
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);   //load no necesita (evento)

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
    fondo.cargaOK = true,
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true,
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOK = true,
    dibujar();
}

function moverCerdo(evento)
{
    switch (evento.keyCode){
      case teclas.UP://restar a y
        cy = cy - movimiento;
        if(cy < 0) cy = 0;
        dibujar();
      break;
      case teclas.DOWN://sumar a y
        cy = cy + movimiento;
        if(cy > 420) cy = 420;
        dibujar();
      break;
      case teclas.LEFT://restar a x
        cx = cx - movimiento;
        if(cx < 0) cx = 0;
        dibujar();
      break;
      case teclas.RIGHT://Sumar a y
        cx = cx + movimiento;
        if(cx > 420)cx = 420;
        dibujar();
      break;
      default:
        console.log("No se realiza ninguna accion.");
    }
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }  
    if(vaca.cargaOK)
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7); 
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        } 
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, cx, cy);
    } 
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}