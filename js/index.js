import { obtenerDatos, guardarDatos } from './storage.js';
import { Tarea, generarIDTarea } from './models.js';
import { actualizarGrafico } from './grafics.js';

window.onload = function() {
    pintarTareas();
};


const divPendientes = document.getElementById("lista-pendientes");
const divAcabadas = document.getElementById("lista-acabadas");


function pintarTareas(){
    const listaTareas = obtenerDatos('tareas') || [];
    const listaCategorias = obtenerDatos('categorias') || [];

    const tareasPendientes = listaTareas.filter(tarea => tarea.realizada === false);
    const tareasCompletadas = listaTareas.filter(tarea => tarea.realizada === true);
    divPendientes.innerHTML = '';
    divAcabadas.innerHTML = '';

    tareasPendientes.forEach((tarea) => {
        const tareaCreada = document.createElement("div");
        tareaCreada.classList.add("tareaCreadaPendiente");

        const categoriaDeLaTarea = listaCategorias.find(cat => cat.nombre === tarea.categoria);
        const colorFondo = categoriaDeLaTarea ? categoriaDeLaTarea.color : "#ccc";

        tareaCreada.innerHTML = `
            <div class="tarea-pendiente-info tarea-${tarea.prioridad}">
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
                        <button type="button" class="boton-completarTarea">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#000000" stroke-width="2.4" stroke-linecap="round"></path> </g></svg>
                        </button>
                        <button type="button" class="boton-borrarTarea">
                            <svg width="24px" height="24px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.28"></g><g id="SVGRepo_iconCarrier"><path d="M11.8489 22.6922C11.5862 22.7201 11.3509 22.5283 11.3232 22.2638L10.4668 14.0733C10.4392 13.8089 10.6297 13.5719 10.8924 13.5441L11.368 13.4937C11.6307 13.4659 11.8661 13.6577 11.8937 13.9221L12.7501 22.1126C12.7778 22.3771 12.5873 22.614 12.3246 22.6418L11.8489 22.6922Z" fill="#000000"></path><path d="M16.1533 22.6418C15.8906 22.614 15.7001 22.3771 15.7277 22.1126L16.5841 13.9221C16.6118 13.6577 16.8471 13.4659 17.1098 13.4937L17.5854 13.5441C17.8481 13.5719 18.0387 13.8089 18.011 14.0733L17.1546 22.2638C17.127 22.5283 16.8916 22.7201 16.6289 22.6922L16.1533 22.6418Z" fill="#000000"></path><path clip-rule="evenodd" d="M11.9233 1C11.3494 1 10.8306 1.34435 10.6045 1.87545L9.54244 4.37037H4.91304C3.8565 4.37037 3 5.23264 3 6.2963V8.7037C3 9.68523 3.72934 10.4953 4.67218 10.6145L7.62934 26.2259C7.71876 26.676 8.11133 27 8.56729 27H20.3507C20.8242 27 21.2264 26.6513 21.2966 26.1799L23.4467 10.5956C24.3313 10.4262 25 9.64356 25 8.7037V6.2963C25 5.23264 24.1435 4.37037 23.087 4.37037H18.4561L17.394 1.87545C17.1679 1.34435 16.6492 1 16.0752 1H11.9233ZM16.3747 4.37037L16.0083 3.50956C15.8576 3.15549 15.5117 2.92593 15.1291 2.92593H12.8694C12.4868 2.92593 12.141 3.15549 11.9902 3.50956L11.6238 4.37037H16.3747ZM21.4694 11.0516C21.5028 10.8108 21.3154 10.5961 21.0723 10.5967L7.1143 10.6285C6.86411 10.6291 6.67585 10.8566 6.72212 11.1025L9.19806 24.259C9.28701 24.7317 9.69985 25.0741 10.1808 25.0741H18.6559C19.1552 25.0741 19.578 24.7058 19.6465 24.2113L21.4694 11.0516ZM22.1304 8.7037C22.6587 8.7037 23.087 8.27257 23.087 7.74074V7.25926C23.087 6.72743 22.6587 6.2963 22.1304 6.2963H5.86957C5.34129 6.2963 4.91304 6.72743 4.91304 7.25926V7.74074C4.91304 8.27257 5.34129 8.7037 5.86956 8.7037H22.1304Z" fill="#000000" fill-rule="evenodd"></path></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        `
        /* imagenes svg:
            https://www.svgrepo.com/svg/491477/shape-square

        */
       const btnBorrar = tareaCreada.querySelector(".boton-borrarTarea");
        btnBorrar.addEventListener("click", () => {
            const indiceReal = listaTareas.findIndex(t => t.id === tarea.id);
            
            if(indiceReal !== -1) {
                listaTareas.splice(indiceReal, 1);
                guardarDatos('tareas', listaTareas);
                pintarTareas();
            }
        });

        const btnCompletar = tareaCreada.querySelector(".boton-completarTarea");
        btnCompletar.addEventListener("click", () => {
            const indiceReal = listaTareas.findIndex(t => t.id === tarea.id);
            if(indiceReal !== -1) {
                listaTareas[indiceReal].realizada = true; 
                guardarDatos('tareas', listaTareas);
                pintarTareas();
            }
        });

        divPendientes.appendChild(tareaCreada);
    });

    tareasCompletadas.forEach((tarea, index) => {
        const tareaCreada = document.createElement("div");
        tareaCreada.classList.add("tareaCreadaAcabada");

        const categoriaDeLaTarea = listaCategorias.find(cat => cat.nombre === tarea.categoria);
        const colorFondo = categoriaDeLaTarea ? categoriaDeLaTarea.color : "#ccc";

        tareaCreada.innerHTML = `
            <div class="tarea-acabada-info tarea-${tarea.prioridad}">
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
                        <button type="button" class="boton-descompletarTarea">
                            <svg width="24px" height="24px" viewBox="-1.2 -1.2 26.40 26.40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5Z" fill="#000000"></path> </g></svg>
                        </button>
                        <button type="button" class="boton-borrarTarea">
                            <svg width="24px" height="24px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.28"></g><g id="SVGRepo_iconCarrier"><path d="M11.8489 22.6922C11.5862 22.7201 11.3509 22.5283 11.3232 22.2638L10.4668 14.0733C10.4392 13.8089 10.6297 13.5719 10.8924 13.5441L11.368 13.4937C11.6307 13.4659 11.8661 13.6577 11.8937 13.9221L12.7501 22.1126C12.7778 22.3771 12.5873 22.614 12.3246 22.6418L11.8489 22.6922Z" fill="#000000"></path><path d="M16.1533 22.6418C15.8906 22.614 15.7001 22.3771 15.7277 22.1126L16.5841 13.9221C16.6118 13.6577 16.8471 13.4659 17.1098 13.4937L17.5854 13.5441C17.8481 13.5719 18.0387 13.8089 18.011 14.0733L17.1546 22.2638C17.127 22.5283 16.8916 22.7201 16.6289 22.6922L16.1533 22.6418Z" fill="#000000"></path><path clip-rule="evenodd" d="M11.9233 1C11.3494 1 10.8306 1.34435 10.6045 1.87545L9.54244 4.37037H4.91304C3.8565 4.37037 3 5.23264 3 6.2963V8.7037C3 9.68523 3.72934 10.4953 4.67218 10.6145L7.62934 26.2259C7.71876 26.676 8.11133 27 8.56729 27H20.3507C20.8242 27 21.2264 26.6513 21.2966 26.1799L23.4467 10.5956C24.3313 10.4262 25 9.64356 25 8.7037V6.2963C25 5.23264 24.1435 4.37037 23.087 4.37037H18.4561L17.394 1.87545C17.1679 1.34435 16.6492 1 16.0752 1H11.9233ZM16.3747 4.37037L16.0083 3.50956C15.8576 3.15549 15.5117 2.92593 15.1291 2.92593H12.8694C12.4868 2.92593 12.141 3.15549 11.9902 3.50956L11.6238 4.37037H16.3747ZM21.4694 11.0516C21.5028 10.8108 21.3154 10.5961 21.0723 10.5967L7.1143 10.6285C6.86411 10.6291 6.67585 10.8566 6.72212 11.1025L9.19806 24.259C9.28701 24.7317 9.69985 25.0741 10.1808 25.0741H18.6559C19.1552 25.0741 19.578 24.7058 19.6465 24.2113L21.4694 11.0516ZM22.1304 8.7037C22.6587 8.7037 23.087 8.27257 23.087 7.74074V7.25926C23.087 6.72743 22.6587 6.2963 22.1304 6.2963H5.86957C5.34129 6.2963 4.91304 6.72743 4.91304 7.25926V7.74074C4.91304 8.27257 5.34129 8.7037 5.86956 8.7037H22.1304Z" fill="#000000" fill-rule="evenodd"></path></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        `
        const btnBorrar = tareaCreada.querySelector(".boton-borrarTarea");
        btnBorrar.addEventListener("click", () => {
            const indiceReal = listaTareas.findIndex(t => t.id === tarea.id);
            if(indiceReal !== -1) {
                listaTareas.splice(indiceReal, 1);
                guardarDatos('tareas', listaTareas);
                pintarTareas();
            }
        });

        const btnDesmarcar = tareaCreada.querySelector(".boton-descompletarTarea");
        btnDesmarcar.addEventListener("click", () => {
            const indiceReal = listaTareas.findIndex(t => t.id === tarea.id);
            if(indiceReal !== -1) {
                listaTareas[indiceReal].realizada = false; 
                guardarDatos('tareas', listaTareas);
                pintarTareas();
            }
        });

        divAcabadas.appendChild(tareaCreada);
    })
    actualizarGrafico();
}

const selectArchivo = document.getElementById("select-archivo");
const btnSubir = document.getElementById("btn-subir");

btnSubir.addEventListener("click", async () => {
    const nombreArchivo = selectArchivo.value;
    const rutaArchivo = `dades/${nombreArchivo}`;

    try {
        const respuesta = await fetch(rutaArchivo);
        
        if (respuesta.ok == false) {
            throw new Error("no se encontro el archivo");
        }

        let tareasImportadas = [];

        if (nombreArchivo.endsWith('.json')) {
            const tareasArchivo = await respuesta.json();

        } else if (nombreArchivo.endsWith('.xml')) {

        }
        
        const listaTareas = obtenerDatos('tareas') || [];
        const listaCategorias = obtenerDatos('categorias') || [];

        tareasArchivo.forEach(tareaImp => {
            if (!listaCategorias.some(c => c.nombre === tareaImp.categoria.nombre)) {
                listaCategorias.push(tareaImp.categoria);
            }

            if (!listaTareas.some(t => t.id === tareaImp.id)) {
                listaTareas.push({
                    id: tareaImp.id,
                    titulo: tareaImp.titulo,
                    descripcion: tareaImp.descripcion,
                    fecha: tareaImp.fecha,
                    categoria: tareaImp.categoria.nombre,
                    prioridad: tareaImp.prioridad,
                    realizada: tareaImp.realizada
                });
            }
        });

        guardarDatos('categorias', listaCategorias);
        guardarDatos('tareas', listaTareas);

        alert(`✅ Archivo ${nombreArchivo} cargado con éxito`);
        
        pintarTareas(); 

    } catch (error) {
        console.error("error:", error);
        alert(`⚠️ no se encontro el archivo: ${nombreArchivo}`);
    }
})