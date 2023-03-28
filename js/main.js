const opcion = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '24fb4cb4b7msh25ccccab35e8eedp1b192cjsn4ec6e9cba8c7',
		'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
	}
};

fetch('https://cloudlabs-text-to-speech.p.rapidapi.com/voices?language_code=en-US', opcion)
	.then(res => res.json())
	.then(res => console.log(res))
	.catch(mal => console.error(mal));

  const encodedParams = new URLSearchParams();
encodedParams.append("accessToken", "<REQUIRED>");
encodedParams.append("locationId", "<REQUIRED>");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '24fb4cb4b7msh25ccccab35e8eedp1b192cjsn4ec6e9cba8c7',
		'X-RapidAPI-Host': 'SquareECommerceserg-osipchukV1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://squareecommerceserg-osipchukv1.p.rapidapi.com/getTransactions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {

  const response = await fetch("./js/extensions.json");
  const data = await response.json();

  data.forEach((product) => {
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
      
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
      }
    });
  });
  
};


getProducts();


//set item

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//get item


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
    <span class="restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class="sumar"> + </span>
    <p>Total: ${product.cantidad * product.precio}</p>
   `;


    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar")
    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveLocal();
      pintarCarrito();
    });

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
  saveLocal();
  pintarCarrito();


};


const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoCounter();


$(document).ready(function () {

	//Objeto del Banner
	var banner = {
		padre: $('#banner'),
		numeroSlides: $('#banner').children('.slide').length,
		posicion: 1
	}

	//Objeto del slider de info
	var info = {
		padre: $('#info'),
		numeroSlides: $('#info').children('.slide').length,
		posicion: 1
	}

	// Establecemos que el primer slide aparecera desplazado
	banner.padre.children('.slide').first().css({
		'left': 0
	});

	// Establecemos que el primer slide aparecera desplazado
	info.padre.children('.slide').first().css({
		'left': 0
	});

	// Funcion para calcular el alto que tendran los contenedores padre
	var altoBanner = function () {
		var alto = banner.padre.children('.slide').outerHeight();
		banner.padre.css({
			'height': alto + 'px'
		});
	}

	var altoInfo = function () {
		var alto = info.padre.children('.active').outerHeight();
		info.padre.animate({
			'height': alto + 'px'
		});
	}

	// Establecemos que el #contenedor tenga el 100% del alto de la pagina. 
	// Para despues centrarlo verticalente con flexbox.
	var altoContenedor = function () {
		var altoVentana = $(window).height();

		if (altoVentana <= $('.contenedor').outerHeight() + 200) {
			$('#contenedor').css({ 'height': '' });
		} else {
			$('#contenedor').css({ 'height': altoVentana + 'px' });
		}

	}

	// Ejecutamos las funciones para calcular los altos.
	altoBanner();
	altoInfo();
	altoContenedor();

	// Si cambiamos el tamaño de la pantalla se
	// ejecuta esta funcion para saber el nuevo
	// tamaño del elemento padre
	$(window).resize(function () {
		altoBanner();
		altoInfo();
		altoContenedor();
	});

	// Agregamos un puntito por cada slide que tengamos
	$('#info').children('.slide').each(function () {
		$('#botones').append('<span>');
	});

	// Declaramos que el primer elemento inicie con su clase active
	$('#botones').children('span').first().addClass('active');

	// ---------------------------------------
	// ----- Banner
	// ---------------------------------------

	// Boton Siguiente

	$('#banner-next').on('click', function (e) {
		e.preventDefault();

		if (banner.posicion < banner.numeroSlides) {
			// Nos aseguramos de que las demas slides empiecen desde la derecha.
			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			// Quitamos la clase active y se la ponemos al siguiente elemento.Y lo animamos
			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left': 0
			});

			// Animamos el slide anterior para que se deslaza hacia la izquierda
			$('#banner .active').prev().animate({
				'left': '-100%'
			});

			banner.posicion = banner.posicion + 1;
		} else {
			// Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
			$('#banner .active').animate({
				'left': '-100%'
			});

			// Seleccionamos todos los slides que no tengan la clase .active
			// y los posicionamos a la derecha
			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			// Eliminamos la clase active y se la ponemos al primer elemento.
			// Despues lo animamos.
			$('#banner .active').removeClass('active');
			banner.padre.children().first().addClass('active').animate({
				'left': 0
			});

			// Reseteamos la posicion a 1
			banner.posicion = 1;
		}
	});

	// Boton Anterior
	$('#banner-prev').on('click', function (e) {
		e.preventDefault();

		if (banner.posicion > 1) {

			// Nos asegramos de todos los elementos hijos (que no sean) .active
			// se posicionen a la izquierda
			banner.padre.children().not('.active').css({
				'left': '-100%'
			});

			// Deslpazamos el slide activo de izquierda a derecha
			$('#banner .active').animate({
				'left': '100%'
			});

			// Eliminamos la clase active y se la ponemos al slide anterior.
			// Y lo animamos
			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left': 0
			});

			// Reiniciamos la posicion a 1
			banner.posicion = banner.posicion - 1;
		}
		else {

			// Nos aseguramos de que los slides empiecen a la izquierda
			banner.padre.children().not('.active').css({
				'left': '-100%'
			});

			// Animamos el slide activo hacia la derecha
			$('#banner .active').animate({
				'left': '100%'
			});

			// Eliminamos la clase active y se la ponemos al primer elemento.
			// Despues lo animamos.
			$('#banner .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				'left': 0
			});

			// Reseteamos la posicion a 1
			banner.posicion = banner.numeroSlides;
		}

	});

	// ---------------------------------------
	// ----- Slider Info
	// ---------------------------------------
	// Boton Siguiente

	$('#info-next').on('click', function (e) {
		e.preventDefault();

		if (info.posicion < info.numeroSlides) {
			// Nos aseguramos de que las demas slides empiecen desde la derecha.
			info.padre.children().not('.active').css({
				'left': '100%'
			});

			// Quitamos la clase active y se la ponemos al siguiente elemento.Y lo animamos
			$('#info .active').removeClass('active').next().addClass('active').animate({
				'left': 0
			});

			// Animamos el slide anterior para que se deslaza hacia la izquierda
			$('#info .active').prev().animate({
				'left': '-100%'
			});

			// Eliminamos la clase active y se la ponemos al siguiente elemento
			$('.botones').children('.active').removeClass('active').next().addClass('active');

			// Incrementamos la posicion en 1
			info.posicion = info.posicion + 1;
		}
		else {
			// Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
			$('#info .active').animate({
				'left': '-100%'
			});

			// Seleccionamos todos los slides que no tengan la clase .active
			// y los posicionamos a la derecha
			info.padre.children().not('.active').css({
				'left': '100%'
			});

			// Eliminamos la clase active y se la ponemos al primer elemento
			// Despues lo animamos.
			$('#info .active').removeClass('active');
			info.padre.children().first().addClass('active').animate({
				'left': 0
			});

			// Eliminamos la clase active y se la ponemos al primer elemento
			$('.botones').children('.active').removeClass('active');
			$('.botones').children('span').first().addClass('active');

			// Reseteamos la posicion a 1
			info.posicion = 1;
		}

		altoInfo();
	});

	// Boton Anterior
	$('#info-prev').on('click', function (e) {
		e.preventDefault();

		if (info.posicion > 1) {

			// Nos asegramos de todos los elementos hijos (que no sean) .active
			// se posicionen a la izquierda
			info.padre.children().not('.active').css({
				'left': '-100%'
			});

			// Deslpazamos el slide activo de izquierda a derecha
			$('#info .active').animate({
				'left': '100%'
			});

			// Eliminamos la clase active y se la ponemos al slide anterior.
			// Y lo animamos
			$('#info .active').removeClass('active').prev().addClass('active').animate({
				'left': 0
			});

			$('#botones').children('.active').removeClass('active').prev().addClass('active');

			// Reiniciamos la posicion a 1
			info.posicion = info.posicion - 1;
		}
		else {

			// Nos aseguramos de que los slides empiecen a la izquierda
			info.padre.children().not('.active').css({
				'left': '-100%'
			});

			// Animamos el slide activo hacia la derecha
			$('#info .active').animate({
				'left': '100%'
			});

			// Eliminamos la clase active y se la ponemos al primer elemento.
			// Despues lo animamos.
			$('#info .active').removeClass('active');
			info.padre.children().last().addClass('active').animate({
				'left': 0
			});

			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').last().addClass('active');

			// Reseteamos la posicion a 1
			info.posicion = info.numeroSlides;
		}

		altoInfo();
	});
});