import {categoria} from './models';

const btnAñadirCategoria = document.getElementById("btn-añadirCategoria");

btnAñadirCategoria.addEventListener("click", function() {
    const categoria = document.getElementById("categoria").value;
    const color = document.getElementById("colorPicker").value;
    console.log(`Nombre: ${nombre}, Color: ${color}`);
});