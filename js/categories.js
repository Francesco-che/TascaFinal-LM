import {Categoria} from './models.js';
import { obtenerDatos, guardarDatos } from './storage.js';

const btnAñadirCategoria = document.getElementById("btn-añadirCategoria");

btnAñadirCategoria.addEventListener("click", function() {
    event.preventDefault();

    const categoria = document.getElementById("categoria").value;
    const color = document.getElementById("colorPicker").value;
    console.log(`Nombre: ${categoria}, Color: ${color}`);

    const nuevaCategoria = new Categoria(categoria, color);
    console.log("Categoría creada:", nuevaCategoria);

    let listaCategorias = obtenerDatos('categorias');

    if (listaCategorias === null) {
        listaCategorias = [];
    }

    listaCategorias.push(nuevaCategoria);
    guardarDatos('categorias', listaCategorias);
    console.log("Categoría guardada", listaCategorias);
});

function cargarCategorias(){

}
function borrarCategoria(){
    
}
function limpiarCategorias(){
    
}