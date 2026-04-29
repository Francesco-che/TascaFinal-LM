import { obtenerDatos, guardarDatos } from './storage.js';
import { Tarea, generarIDTarea } from './models.js';

window.onload = function() {
    
};

const listaTareas = obtenerDatos('tareas') || [];

const tareasPendientes = listaTareas.filter(tarea => tarea.realizada === false);

const tareasCompletadas = listaTareas.filter(tarea => tareasCompletadas.realizada === true);