let tarea1 = (numero) => {
  document.writeln("<h1>Ejercicio 1</h1>");
  document.writeln(
    "<h3>Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero</h3>"
  );
  for (let i = 1; i !== numero + 1; i++) {
    for (let e = 0; e < i; e++) {
      if (i != 0) {
        //interprete que habia que hacerlo asi y no en consola
        document.write(e + 1);
        
      }
    }
    
    document.writeln("<br>");
  }
  document.writeln("<hr>");
};
/*
------------------------------------------------------------------------------------------------------------------------------
*/
let Array1 = [];
let Array2 = [];
let Array3 = [];

//no acepta valores no definidos
let tarea2 = (Array1, Array2) => {
  document.writeln("<h1>Ejercicio 2</h1>");
  document.writeln(
    "<h3>Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos</h3>"
  );
  //reinicia el array 3 por si se llama varias veces a la función
  Array3 = [];

  //define la cantidad de vueltas del for
  let resultado = Array1.length;
  if (Array1.lenght < Array2.lenght) resultado = Array2.lenght;


  for (let i = 0; i < resultado; i++) {
    for (let e = 0; e < resultado; e++) {
      if (Array1[i] == Array2[e]) {
        Array3.push(Array1[i]);
      }
    }
  }

  //reinicia el array 1 y 2 por si se llama varias veces a la función 
  Array1 = [];
  Array2 = [];
  document.writeln(Array3);
  document.writeln("<hr>");
};

/*
------------------------------------------------------------------------------------------------------------------------------
*/
/*
-------Ejercicio resuelto como la primera presentacion------
3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe 
“ya existe xxx con yyy unidades”
*/

//Al tener que colocar unidades interprete hacer una clase para cada objeto
class Producto {
  Nombre = [];
  Cantidad = [];
  Precio = [];
  MontoTotalPro;
  agregarProductos(Nombre, Precio, Cantidad) {
    if(this.Nombre.includes(Nombre) === false){
      this.Nombre.push(Nombre);
      this.Cantidad.push(Cantidad)
      this.Precio.push(Precio)
      this.MontoTotalPro = Cantidad * Precio
      console.log(this.MontoTotalPro)
    }else{
      console.log('ya existe'+ this.Nombre +' con '+ this.Cantidad +'unidades');
    }
    
  }
}

class Carrito {
  productos = [];
  montoTotal = 0;
  agregarUnProducto(Producto) {
    if(this.productos.includes(Producto.Nombre) === false){
      this.productos.push(Producto.Nombre);
      console.log(this.productos)
      this.montoTotal = this.montoTotal + Producto.MontoTotalPro;
      console.log(this.montoTotal)
      console.log(Producto.MontoTotalPro)
    }else{
      console.log('ya existe '+ Producto.Nombre +' con '+ Producto.Cantidad +' unidades');
    }
  }
  //no sabia si mostrarlo en consola o en el documento asi que puse ambos 
  mostrarDocument() {
    document.write("<br> Los productos son: ");
    document.write(this.productos);
    document.write("<br> El monto total es: ");
    document.writeln(this.montoTotal);
  }

  mostrarConsole() {
    console.log("Los productos son: ");
    console.log(this.productos);
    console.log("El monto total es: ");
    console.log(this.montoTotal);
  }
}
/*
Ejemplo de uso
let leche = new Producto()
leche.agregarProductos('leche',10,2)

let carritosEjemplo = new Carrito()
carritosEjemplo.agregarUnProducto(leche)

*/





/*
------Ejercicio resuelto con los cambios dichos en slack------

3.3)Agregar al ejercicio anterior una validación para no permitir duplicados 
e imprimir un mensaje si el item ya existe "ya existe el producto xxx"

//Resultado esperado
let carrito = {
    montoTotal: 10,
    productos: ["Leche"],
    agregarProductos(Nombre, Precio, Unidad){
        
    }
}
*/
class Carrito2 {
  productos = [];
  montoTotal = 0;
  agregarProductos2(Nombre, Precio,Unidad){
    if(this.productos.includes(Nombre) === false){
    this.productos.push(Nombre);
    this.montoTotal = this.montoTotal + (Precio * Unidad);
    }else{
      
      console.log('ya existe el producto '+ Nombre );
    }
  }
  mostrarDocument() {
    document.write("<br> Los productos son: ");
    document.write(this.productos);
    document.write("<br> El monto total es: ");
    document.writeln(this.montoTotal);
  }
  mostrarConsole() {
    console.log("Los productos son: ");
    console.log(this.productos);
    console.log("El monto total es: ");
    console.log(this.montoTotal);
  }
}
/*
Ejemplo 
let carrito2Ejemplo = new Carrito2();
carrito2Ejemplo.agregarProductos('leche',10,2);
carrito2Ejemplo.mostrarConsole();
carrito2Ejemplo.mostrarDocument();
*/