import { obtenerDatos } from './storage.js';

export function actualizarGrafico() {
    const canvas = document.getElementById('graficoTareas');
    if (!canvas) return;

    if (graficoActual) {
        graficoActual.destroy();
    }

    const listaTareas = obtenerDatos('tareas') || [];
}

