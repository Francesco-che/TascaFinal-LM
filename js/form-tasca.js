import { Tarea, generarIDTarea } from './models.js';
import {Categoria} from './models.js';
import { obtenerDatos, guardarDatos } from './storage.js';

const selectCategoria = document.getElementById("category");

function cargarCategoriasSelect() {
    const listaCategorias = obtenerDatos('categorias') || [];
    
    listaCategorias.forEach(categoria => {
        const option = document.createElement("option");
        option.value = categoria.nombre;
        option.textContent = categoria.nombre;
        selectCategoria.appendChild(option);
    });
}