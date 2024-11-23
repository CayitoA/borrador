function saludarUsuario() {
    // Pregunta al usuario por su nombre
    let nombre = prompt("Ingresa tu nombre:");
    
    // Muestra un mensaje de bienvenida
    if (nombre) {
        alert("Bienvenido, " + nombre + " a Clínica Salud");
    } else {
        alert("No ingresaste un nombre.");
    }
}

// Llama a la función
saludarUsuario();



