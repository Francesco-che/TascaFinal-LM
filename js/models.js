export class Categoria {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
}

export class Tarea {
    constructor(id, titulo, descripcion, fecha, categoria, prioridad) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.categoria = categoria;
        this.prioridad = prioridad;
        this.realizada = false; // al crear una tarea, sale como no hecha
    }
}

export function generarIDTarea(tareas){
    if (!tareas || tareas.length === 0) {
        return "task-001";
    }
    const ultimaTarea = tareas[tareas.length - 1];
    const numeroString = ultimaTarea.id.slice(5);
    const nuevoNumero = parseInt(numeroStr, 10) + 1;
    const nuevoNumeroString = nuevoNumero.toString().padStart(3, '0');
    
    return `task-${nuevoNumeroString}`;
}