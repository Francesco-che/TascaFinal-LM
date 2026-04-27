import {Categoria} from './models';

const btnAñadirCategoria = document.getElementById("btn-añadirCategoria");

btnAñadirCategoria.addEventListener("click", function() {
    const categoria = document.getElementById("categoria").value;
    const color = document.getElementById("colorPicker").value;
    console.log(`Nombre: ${nombre}, Color: ${color}`);

    const nuevaCategoria = new Categoria(nombre, color);
    console.log("Categoría creada en memoria:", nuevaCategoria);
});