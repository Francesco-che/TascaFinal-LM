import { obtenerDatos } from './storage.js';

export function actualizarGrafico() {
    const canvas = document.getElementById('graficoTareas');
    if (!canvas) return;

    if (graficoActual) {
        graficoActual.destroy();
    }

    const listaTareas = obtenerDatos('tareas') || [];
    const tareasAcabadas = listaTareas.filter(tarea => tarea.realizada === true);

    const conteoMeses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

