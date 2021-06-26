var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var pakin of coleccion)
//cada variable dentro de la coleccion coloquelo en "pakin"
// of para ver el objeto. Si quiero ver el indice: for(var pakin in coleccion)
{
  pakin.mostrar();
}

for(var x of coleccion[0])
{
  console.log(x);
}
