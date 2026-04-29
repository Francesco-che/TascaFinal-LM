import { obtenerDatos, guardarDatos } from './storage.js';
import { Tarea, generarIDTarea } from './models.js';

window.onload = function() {
    
};

const listaTareas = obtenerDatos('tareas') || [];

const tareasPendientes = listaTareas.filter(tarea => tarea.realizada === false);
const tareasCompletadas = listaTareas.filter(tarea => tareasCompletadas.realizada === true);

const divPendientes = document.getElementById("lista-pendientes");
const divAcabadas = document.getElementById("lista-acabadas");

function pintarTareas(){
    divPendientes.innerHTML = '<div id="index-tarea-pendiente"></div>';

    tareasPendientes.forEach((tarea, index) => {
        const tareaCreada = document.createElement("div");
        tareaCreada.classList.add("tareaCreadaPendiente");


    });

    tareasCompletadas.forEach((tarea, index) => {
        divAcabadas.innerHTML = '<div id="index-tarea-acabada"></div>';
    })
}