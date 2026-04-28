import { Tarea, generarIDTarea } from './models.js';
import {Categoria} from './models.js';
import { obtenerDatos, guardarDatos } from './storage.js';

const selectCategoria = document.getElementById("category");

window.onload = function() {
    cargarCategoriasSelect();
};

function cargarCategoriasSelect() {
    const listaCategorias = obtenerDatos('categorias') || [];
    
    selectCategoria.innerHTML = '<option value=""></option>';

    listaCategorias.forEach(categoria => {
        const option = document.createElement("option");
        option.value = categoria.nombre;
        option.textContent = categoria.nombre;
        selectCategoria.appendChild(option);
    });
}

const btnCrearTarea = document.getElementById("btn-crearTarea");

btnCrearTarea.addEventListener("click", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;

    if (titulo.trim() === ''){
        alert("⚠️ No puedes dejar el título vacío, por favor introduce un valor válido");
        return;
    }

    const listaTareas = obtenerDatos('tareas') || [];
    const idNuevo = generarIDTarea('listaTareas');
})
