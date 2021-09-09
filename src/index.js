
import cipher from './cipher.js';

console.log(cipher);


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
  document.getElementById('mensaje2').value = cipher.encode(texto,clave);
});

//boton decodificar

document.getElementById('decodificar').addEventListener('click', () => {
  let texto = document.getElementById('mensaje1').value;
  let clave = parseInt(document.getElementById('offset').value);
  document.getElementById('mensaje2').value = cipher.decode(texto,clave);
});


