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

        tareaCreada.innerHTML = `
            <div class="tarea-pendiente-info">
                <div class="tarea-pendiente-info-titulo">
                    <div>${tarea.titulo}</div>
                    <div>${tarea.prioridad}</div>
                </div>
                <div class="tarea-pendiente-info-categoria" style="background-color: ${categoria.color};">
                    ${tarea.categoria}
                </div>
                <div class="tarea-pendiente-info-fecha">
                    ${tarea.fecha}
                </div>
                <div class="tarea-pendiente-info-botones">
                    <div>${tarea.descripcion}</div>
                    <div>
                        <button type="button" class="boton-completarTarea">
                            
                        </button>
                        <button type="button" class="boton-borrarTarea">
                            
                        </button>
                    </div>
                </div>
            </div>
        `
        divPendientes.appendChild(tareaCreada);
    });

    tareasCompletadas.forEach((tarea, index) => {
        divAcabadas.innerHTML = '<div id="index-tarea-acabada"></div>';
    })
}