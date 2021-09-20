
import cipher from './cipher.js';


document.getElementById('mensaje1').addEventListener('keyup', function() {
  this.value = this.value.toUpperCase();
});


//botón limpiar

document.getElementById('limpiar').addEventListener('click', function() {
  document.getElementsByClassName('texto')[0].value = '';
  document.getElementsByClassName('texto')[1].value = '';
  document.getElementsByClassName('texto')[2].value = '';
});


//botón codificar

document.getElementById('codificar').addEventListener('click', () => {
  let texto = document.getElementById('mensaje1').value;
  let clave = parseInt(document.getElementById('offset').value);
  document.getElementById('mensaje2').value = cipher.encode(clave,texto);
});

//boton decodificar

document.getElementById('decodificar').addEventListener('click', () => {
  let texto = document.getElementById('mensaje1').value;
  let clave = parseInt(document.getElementById('offset').value);
  document.getElementById('mensaje2').value = cipher.decode(clave,texto);
});


