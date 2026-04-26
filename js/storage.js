export function guardarDatos(clave, datos) {
    try {
        const datosString = JSON.stringify(datos);
        localStorage.setItem(clave, datosString);
    } catch (error) {
        console.error("Error al guardar en localStorage:", error);
    }
}

export function obtenerDatos(clave) {
    const datosString = localStorage.getItem(clave);
    if (!datosString) return null;

    try {
        return JSON.parse(datosString);
    } catch (error) {
        console.error("Error parseando datos de localStorage:", error);
        return null;
    }
}