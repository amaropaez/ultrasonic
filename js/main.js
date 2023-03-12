
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito");


const productos = [
  {
    id: 1,
    nombre: "panel acustico 50x50x3cm",
    precio: 410,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },

  {
    id: 2,
    nombre: "panel acustico 100x50x3cm",
    precio: 820,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },

  {
    id: 3,
    nombre: "panel acustico 50x50x3.5cm",
    precio: 524.50,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "panel acustico 100x50x3.5cm",
    precio: 1049,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "panel acustico 50x50x5cm",
    precio: 698.50,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "panel acustico 100x50x5cm",
    precio: 1397,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },

  {
    id: 7,
    nombre: "panel acustico 50x50x7cm",
    precio: 995.75,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "panel acustico 100x50x7cm",
    precio: 1991.50,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "panel acustico 50x50x7.5cm",
    precio: 1009.50,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "panel acustico 100x50x7.5cm",
    precio: 2018.50,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_865529-MLA43938604533_102020-F.webp",
    cantidad: 1,
  },

];

let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = " card";
  content.innerHTML = `
    <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">${product.precio} $</p>
      
  `;


  shopContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);


  comprar.addEventListener("click", () => {

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      })
    }

    else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
    }
    console.log(carrito);

    carritoCounter();

  });

});


/***CARRITO*****/

const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex"

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
<h1 class="modal-header-title">Carrito.</h1>
`;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1")
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
   <img src="${product.img}">
   <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    <p>Cantidad: ${product.cantidad}</p>
    <p>Total: ${product.cantidad * product.precio}</p>
   `;


    modalContainer.append(carritoContent);

    console.log(carrito.length);

    let eliminar = document.createElement("span");
    eliminar.innerText = "❎";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });


  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div")
  totalBuying.className = "total-content"
  totalBuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalBuying);


};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const foundId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoCounter();

  pintarCarrito();
};


const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  cantidadCarrito.innerText = carrito.length;
}
