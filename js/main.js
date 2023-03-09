const productos = [
  {nombre: "panel acustico 50x50x3cm", precio: 410},
  {nombre: "panel acustico 100x50x3cm", precio: 820},
  {nombre: "panel acustico 50x50x3.5cm", precio: 524.50},
  {nombre: "panel acustico 100x50x3.5cm", precio: 1049},
  {nombre: "panel acustico 50x50x5cm", precio: 698.50},
  {nombre: "panel acustico 100x50x5cm", precio: 1397},
  {nombre: "panel acustico 50x50x7cm", precio: 995.75},
  {nombre: "panel acustico 100x50x7cm", precio: 1991.50},
  {nombre: "panel acustico 50x50x7.5cm", precio: 1009.50},
  {nombre: "panel acustico 100x50x7.5cm", precio: 2018.50},
];

let carrtio = []

let seleccion = prompt("hola desea comprar algun producto si o no")

while(seleccion !="si" && seleccion !="no"){
  alert("por favor ingresar si o no")
  seleccion = prompt("hola desea comprar algo si o no")
}

if(seleccion == "si"){
  alert("a continuacion nuestra lista de productos")
  let todoslosproductos = productos.maps(
    (producto) => producto.nombre + "" + producto.precio + "$"
    );
    
  alert(todoslosproductos.join(" - "))
}