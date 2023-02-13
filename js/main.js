let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerMaterialacustico);

function establecerMaterialacustico() {
  let eleccion = seleccionar.value;

  if (eleccion === 'vibracion') {
    parrafo.textContent = '   Amortiguadores Antivibratorios: SOLUCION TOTAL GARANTIZADA!! Nuestro departamento de ingeniería ha desarrollado una gran variedad de amortiguadores antivibratorios para todo tipo de máquinas. Podemos dividir las máquinas en tres grandes grupos, a saber: <br> 
    • Máquinas que trabajan por deformación o golpe (guillotinas, martinetes, balancines, etc.)
    Dentro de este grupo podemos distinguir, según su condición dinámica (tendencia a desplazarse cuando está trabajando) dos grandes grupos:
    a).- Máquinas que trabajan por deformación o golpe cuya relación masa propia versus esfuerzo dinámico (o de trabajo) determinan que la máquina vibre y transmita esa vibración al piso, pero sin tener tendencia al desplazamiento (la máquina no camina)
    b).- Máquinas que trabajan por deformación o golpe cuya relación masa propia versus esfuerzo dinámico (o de trabajo) determinan que la máquina vibre y transmita esa vibración al piso, y además tengan tendencia al desplazamiento (la máquina camina, y en general se la fija al piso mediante brocas o topes)
    Poseemos la ingeniería y experiencia para desarrollar un sistema anti vibratorio simple, o con limitador para el primer subgrupo de máquinas, y para calcular una base inercial, teniendo en cuenta el comportamiento del terreno para el segundo grupo de máquinas.
    <br></br>
    • Máquinas rotativas (compresores, generadores eléctricos, turbinas, etc.)
    
    • Máquinas que trabajan por arranque de viruta, en general máquinas herramientas tales como tornos, fresadoras, rectificadoras, equipos de mecanizado CNC, etc.
    Las ventajas de utilizar nuestros sistemas anti vibratorios son entre otras:
    • Reducción sensible de las vibraciones transmitidas al piso
    • Mayor duración del herramental
    • Mejor terminación superficial de las piezas
    • Parque móvil que permite una rápida y sencilla reestructuración del Lay Out.'; } 

  else if (eleccion === 'cabinas') {
    parrafo.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
  } 
  
  else if (eleccion === 'pantallasacusticas') {
    parrafo.textContent = 'Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.';
  } 
  
  else if (eleccion === 'panelesacusticos') {
    parrafo.textContent = 'No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.';
  }
  
  else {
    parrafo.textContent = '';
  }
}