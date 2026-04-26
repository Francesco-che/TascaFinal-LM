export function guardarDatos(clave, datos) {
    try {
        const datosString = JSON.stringify(datos);
        localStorage.setItem(clave, datosString);
    } catch (error) {
        console.error("Error al guardar en localStorage:", error);
    }
}