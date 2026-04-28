import {Categoria} from './models.js';
import { obtenerDatos, guardarDatos } from './storage.js';

const btnAñadirCategoria = document.getElementById("btn-añadirCategoria");

btnAñadirCategoria.addEventListener("click", function() {
    event.preventDefault();
    
    const categoria = document.getElementById("categoria").value;

    if (categoria == null || categoria.trim() == ''){
        event.preventDefault();
        alert("⚠️ No puedes dejar el nombre vacío, introduce un nombre válido");
    } else {
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

    cargarCategorias();
    }
});

function cargarCategorias(){
    const contenedorCategorias = document.getElementById("lista-categorias");
    contenedorCategorias.innerHTML = '';

    const listaCategorias = obtenerDatos('categorias') || []; // investigue y || [] sirve para asegurar que lea el array aunque este vacio (y devuelva null)

    listaCategorias.forEach((categoria, index) => {
        const nuevaCategoria = document.createElement("div");
        nuevaCategoria.classList.add("categoriaCreada");

        nuevaCategoria.innerHTML = `
            <div class="categoria-info">
                <div style="background-color: ${categoria.color};" class="nueva-categoria-color"></div>
                <span class="nueva-categoria-contenido">${categoria.nombre}</span>
            </div>
        `;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("red-button");

        btnEliminar.addEventListener("click", function() {
            const storageCategorias = obtenerDatos('categorias') || [];
            storageCategorias.splice(index, 1);
            guardarDatos('categorias', storageCategorias);
            cargarCategorias();
        });

        const contenedorInterno = nuevaCategoria.querySelector(".nueva-categoria-div");

        nuevaCategoria.appendChild(btnEliminar);
        contenedorCategorias.appendChild(nuevaCategoria);
    })
}