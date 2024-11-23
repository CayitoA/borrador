
function validarEmail() {
    // Pregunta por el correo electrónico
    let email = prompt("Ingresa tu correo electrónico:");

    // Expresión regular para validar el correo electrónico
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Valida el correo electrónico
    if (regexEmail.test(email)) {
        alert("El correo electrónico ingresado es válido: " + email);
    } else {
        alert("El correo electrónico ingresado no es válido. Por favor, intenta de nuevo.");
    }
}

// Llama a la función
validarEmail();
