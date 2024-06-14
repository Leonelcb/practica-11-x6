// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Comprobar nombre de usuario y contraseña
    if (username === "leonelcbz" && password === "leonel123@") {
        // Redirigir si es correcto
        window.location.href = "nueva_pagina.html"; // Cambia "nueva_pagina.html" por el nombre de tu página
    } else {
        // Mostrar alerta si es incorrecto
        alert("Nombre de usuario o contraseña incorrectos.");
    }
});