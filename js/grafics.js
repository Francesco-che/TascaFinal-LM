import { obtenerDatos } from './storage.js';

let graficoActual = null;

export function actualizarGrafico() {
    const canvas = document.getElementById('graficoTareas');
    if (!canvas) return;

    if (graficoActual) {
        graficoActual.destroy();
    }

    const listaTareas = obtenerDatos('tareas') || [];
    const tareasAcabadas = listaTareas.filter(tarea => tarea.realizada === true);
    const conteoMeses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    tareasAcabadas.forEach(tarea => {
        const partesFecha = tarea.fecha.split('-'); 
        if (partesFecha.length >= 2) {
            const indiceMes = parseInt(partesFecha[1], 10) - 1; 
            conteoMeses[indiceMes]++; 
        }
    });

    graficoActual = new Chart(canvas, {
        type: 'line', 
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Tareas relizadas',
                data: conteoMeses,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1.5,
                tension: 0,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: false,
                        boxWidth: 40
                    }
                }
            }
        }
    });
}

