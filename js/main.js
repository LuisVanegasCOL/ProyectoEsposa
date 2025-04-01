"use strict";
// Manejo de la verificación de la respuesta y redirección al contenido
document.addEventListener('DOMContentLoaded', () => {
    // Comprobamos si ya se ha realizado el acceso correctamente
    const accesoValido = localStorage.getItem('acceso') === 'true';
    if (accesoValido) {
        // Mostrar navbar y contenido normal
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.style.display = 'block';
        }
        const content = document.getElementById('content');
        if (content) {
            content.style.display = 'block';
        }
    }
    else {
        // Mostrar formulario de acceso
        document.getElementById('accessForm').style.display = 'block';
    }
    // Lógica de verificación del formulario de acceso
    const form = document.getElementById('accessForm');
    const errorMessage = document.getElementById('errorMessage');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const respuesta = document.getElementById('filtro').value.toLowerCase();
        if (respuesta === 'milan') {
            localStorage.setItem('acceso', 'true');
            window.location.href = 'nuestra-historia.html';
        }
        else {
            errorMessage.style.display = 'block';
        }
    });
});
