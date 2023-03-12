
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito");


const productos = 


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
