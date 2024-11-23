function recopilarDatos() {
    // Pregunta por el nombre
    let nombre = prompt("¿Cuál es tu nombre?");
    if (!nombre) {
        alert("No ingresaste un nombre.");
        return;
    }
    alert("Hola, " + nombre + "!");

    // Pregunta por el RUT
    let rut = prompt("Ingresa tu número de RUT:");
    if (!rut) {
        alert("No ingresaste un RUT.");
        return;
    }

    // Pregunta por la edad
    let edad = prompt("Ingresa tu edad:");
    if (!edad) {
        alert("No ingresaste tu edad.");
        return;
    }

    // Pregunta por el correo electrónico
    let email = prompt("Ingresa tu correo electrónico:");
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
        alert("El correo electrónico ingresado es válido: " + email);
    } else {
        alert("El correo electrónico ingresado no es válido. Por favor, intenta de nuevo.");
    }


    // Pregunta por el número de teléfono
    let telefono = prompt("Ingresa tu número de teléfono:");
    if (!telefono) {
        alert("No ingresaste un número de teléfono.");
        return;
    }

    // Muestra un resumen de la información ingresada
    alert("Has ingresado la siguiente información:\n" +
          "Nombre: " + nombre + "\n" +
          "RUT: " + rut + "\n" +
          "Edad: " + edad + "\n" +
          "Email: " + email + "\n" +
          "Teléfono: " + telefono);
}

// Llama a la función
recopilarDatos();