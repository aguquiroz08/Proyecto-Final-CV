
let boton_ver = document.getElementById('boton_ver');

let ver = document.getElementById('ver');

boton_ver.addEventListener('click', mostrar);

function mostrar() {
	ver.classList.toggle('ver_mas');
}


let boton_detalle = document.getElementById('boton_detalle');

let detalle = document.getElementById('detalles');

boton_detalle.addEventListener('click', mostrar2);

function mostrar2() {
	detalle.classList.toggle('mostrar');
}

let audioFondo = document.getElementById('audioFondo');
audioFondo.volume = 0.5;