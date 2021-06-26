class Pakiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.tipo = "tierra";

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()         //es implicito que una funcion dentro de una clase es una funcion. No se escribe "function"
  {
      alert(this.nombre);
  }
  mostrar()
  {
    //document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br />");
    document.body.appendChild(this.imagen);
    document.write("<br /> Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
    document.write("<br />");
    //document.write("</p>");
  }
}
