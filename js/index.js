import { obtenerDatos, guardarDatos } from './storage.js';
import { Tarea, generarIDTarea } from './models.js';

window.onload = function() {
    pintarTareas();
};

const listaTareas = obtenerDatos('tareas') || [];

const tareasPendientes = listaTareas.filter(tarea => tarea.realizada === false);
const tareasCompletadas = listaTareas.filter(tarea => tarea.realizada === true);

const divPendientes = document.getElementById("lista-pendientes");
const divAcabadas = document.getElementById("lista-acabadas");

const listaCategorias = obtenerDatos('categorias') || [];

function pintarTareas(){
    divPendientes.innerHTML = '';
    divAcabadas.innerHTML = '';

    tareasPendientes.forEach((tarea, index) => {
        const tareaCreada = document.createElement("div");
        tareaCreada.classList.add("tareaCreadaPendiente");

        const categoriaDeLaTarea = listaCategorias.find(cat => cat.nombre === tarea.categoria);
        const colorFondo = categoriaDeLaTarea ? categoriaDeLaTarea.color : "#ccc";

        tareaCreada.innerHTML = `
            <div class="tarea-pendiente-info" id="tarea-${tarea.prioridad}">
                <div class="tarea-info-titulo">
                    <div>${tarea.titulo}</div>
                    <div>${tarea.prioridad}</div>
                </div>
                <div class="tarea-info-categoria" style="background-color: ${colorFondo};">
                    ${tarea.categoria}
                </div>
                <div class="tarea-info-fecha">
                    ${tarea.fecha}
                </div>
                <div class="tarea-info-botones">
                    <div>${tarea.descripcion}</div>
                    <div>
                        <button type="button" class="boton-completarTarea"></button>
                        <button type="button" class="boton-borrarTarea"></button>
                    </div>
                </div>
            </div>
        `
        divPendientes.appendChild(tareaCreada);
    });

    tareasCompletadas.forEach((tarea, index) => {
        const tareaCreada = document.createElement("div");
        tareaCreada.classList.add("tareaCreadaAcabada");

        const categoriaDeLaTarea = listaCategorias.find(cat => cat.nombre === tarea.categoria);
        const colorFondo = categoriaDeLaTarea ? categoriaDeLaTarea.color : "#ccc";

        tareaCreada.innerHTML = `
            <div class="tarea-acabada-info" id="tarea-${tarea.prioridad}">
                <div class="tarea-info-titulo">
                    <div>${tarea.titulo}</div>
                    <div>${tarea.prioridad}</div>
                </div>
                <div class="tarea-info-categoria" style="background-color: ${colorFondo};">
                    ${tarea.categoria}
                </div>
                <div class="tarea-info-fecha">
                    ${tarea.fecha}
                </div>
                <div class="tarea-info-botones">
                    <div>${tarea.descripcion}</div>
                    <div>
                        <button type="button" class="boton-descompletarTarea"></button>
                        <button type="button" class="boton-borrarTarea"></button>
                    </div>
                </div>
            </div>
        `
        divAcabadas.appendChild(tareaCreada);
    })
}