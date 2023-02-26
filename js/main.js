

let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerMaterialacustico);

function establecerMaterialacustico() {
  let eleccion = seleccionar.value;

  if (eleccion === 'vibracion') {
    parrafo.textContent = '   Amortiguadores Antivibratorios: SOLUCION TOTAL GARANTIZADA!! Nuestro departamento de ingeniería ha desarrollado una gran variedad de amortiguadores antivibratorios para todo tipo de máquinas. Podemos dividir las máquinas en tres grandes grupos, a saber: 1- Máquinas que trabajan por deformación o golpe (guillotinas, martinetes, balancines, etc.). 2- Máquinas rotativas (compresores, generadores eléctricos, turbinas, etc.). 3- Máquinas que trabajan por arranque de viruta, en general máquinas herramientas tales como tornos, fresadoras, rectificadoras, equipos de mecanizado CNC, etc.'; } 

  else if (eleccion === 'cabinas') {
    parrafo.textContent = 'Nuestras cabinas son totalmente desmontables, y nuestro departamento de ingeniería y diseño brinda al cliente un boceto previo básico que luego es debatido con los operadores de la máquina a cubrir, de manera que el diseño final resulte operativamente apto para el desempeño de la misma.';
  } 
  
  else if (eleccion === 'pantallasacusticas') {
    parrafo.textContent = 'Es muy común la utilización de pantallas acústicas para cubrir las emisiones sonoras originadas en el funcionamiento de equipos (en general turbinas, enfriadores, equipos de A/A. etc.) ubicados en el exterior, en terrazas. En general estos equipos de frío se encuentran emplazados en zonas densamente pobladas y por sus características, muchos de ellos funcionan durante el horario nocturno, generando perturbaciones sonoras que afectan a vecinos.';
  } 
  
  else if (eleccion === 'panelesacusticos') {
    parrafo.textContent = 'Contamos con una amplia gama de paneles acusticos, cada uno fabricado con el mejor material para brindar de esta forma un óptimo servicio de aislación acústica. Los paneles acusticos cuentan con un aspecto poroso y una superficie irregular que hacen que estos paneles acusticos sean un excelente medio para controlar y equilibrar las emisiones sonoras dentro de recintos parcial y totalmente cerrados. Paneles acústicos de absorción para diferentes ambientes.';
  }
  
  else {
    parrafo.textContent = '';
  }
}