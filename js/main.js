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

// Animación de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de elementos al aparecer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.card, .section-title').forEach((el) => observer.observe(el));

// Efecto de parallax
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax-section');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.backgroundPosition = `50% ${yPos}px`;
    });
});

// Animación de la barra de navegación
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Efecto de hover en las tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Animación de los iconos
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Efecto de carga inicial
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Animación de texto
const textElements = document.querySelectorAll('.animated-text');
textElements.forEach(text => {
    const words = text.textContent.split(' ');
    text.innerHTML = '';
    
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.animationDelay = `${index * 0.1}s`;
        text.appendChild(span);
    });
});
