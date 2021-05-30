class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
  }
}
function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {

    if(dinero>0)
    {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
          papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero -= (bi.valor*papeles);
    }

  }

  if(dinero > 0)
  {
    resultado.innerHTML = "No tengo dinero";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br/>" + "<img src=" + e.imagen.src + " />" + "<hr />";

      }
    }
  }
}

var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";
imagenes["5"] = "5.png";
imagenes["1"] = "1.png";

var caja = [];
var entregado = [];
caja.push( new Billete(100,50) );
caja.push( new Billete(50,50) );
caja.push( new Billete(20,60) );
caja.push( new Billete(10,100) );
caja.push( new Billete(5,300) );
caja.push( new Billete(1,500) );

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
