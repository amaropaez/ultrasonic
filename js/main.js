const productos = [
  { nombre: "panel acustico 50x50x3cm", precio: 410 },
  { nombre: "panel acustico 100x50x3cm", precio: 820 },
  { nombre: "panel acustico 50x50x3.5cm", precio: 524.50 },
  { nombre: "panel acustico 100x50x3.5cm", precio: 1049 },
  { nombre: "panel acustico 50x50x5cm", precio: 698.50 },
  { nombre: "panel acustico 100x50x5cm", precio: 1397 },
  { nombre: "panel acustico 50x50x7cm", precio: 995.75 },
  { nombre: "panel acustico 100x50x7cm", precio: 1991.50 },
  { nombre: "panel acustico 50x50x7.5cm", precio: 1009.50 },
  { nombre: "panel acustico 100x50x7.5cm", precio: 2018.50 },
];

let carrito = []

let seleccion = prompt("hola desea comprar algun producto si o no")

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingresar si o no")
  seleccion = prompt("hola desea comprar algo si o no")
}

if (seleccion == "si") {
  alert("a continuacion nuestra lista de productos")
  let todoslosproductos = productos.map(
    (producto) => producto.nombre + "" + producto.precio + "$"
  );

  alert(todoslosproductos.join(" - "))
}
else if (seleccion == "no") {
  alert("gracias por visitarnos, hasta pronto!!")
}

while (seleccion != "no") {
  let producto = prompt("agrega un producto a tu carrito")
  let precio = 0

  if (producto == "panel acustico 50x50x3cm" || producto == "panel acustico 100x50x3cm" ||
    producto == "panel acustico 50x50x3.5cm" || producto == "panel acustico 100x50x3.5cm"
    || producto == "panel acustico 50x50x5cm" || producto == "panel acustico 100x50x5cm"
    || producto == "panel acustico 50x50x7cm" || producto == "panel acustico 100x50x7cm"
    || producto == "panel acustico 50x50x7.5cm" || producto == "panel acustico 100x50x7.5cm") {
    switch (producto) {
      case "panel acustico 50x50x3cm":
        precio = 410
        break
      case "panel acustico 100x50x3cm":
        precio = 820
        break
      case "panel acustico 50x50x3.5cm":
        precio = 524.50
        break
      case "panel acustico 100x50x3.5cm":
        precio = 1049
        break
      case "panel acustico 50x50x5cm":
        precio = 698.50
        break
      case "panel acustico 100x50x5cm":
        precio = 1397
        break
      case "panel acustico 50x50x7cm":
        precio = 995.75
        break
      case "panel acustico 100x50x7cm":
        precio = 1991.50
        break
      case "panel acustico 50x50x7.5cm":
        precio = 1009.50
        break
      case "panel acustico 100x50x7.5cm":
        precio = 2018.50
        break
    }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

    carrito.push({ producto, unidades, precio })
    console.log(carrito)
  } else {
    alert("no tenemos ese producto")
  }

  seleccion = prompt("desea seguir comprando?")
  
  while (seleccion === "no") {
    alert("gracias por tu compra!")

    carrito.forEach((carritoFinal) => {
    
      console.log('producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}')
    })
    break;
  }   
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log('el total a pagar por su compra es : ${total}')
