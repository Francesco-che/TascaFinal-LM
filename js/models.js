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