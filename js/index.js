'use strict'

/* =============================================================
   index.js — animaciones del hero (landing)
   1. estrellas flotantes animadas con requestAnimationFrame
   2. aparicion del titulo con IntersectionObserver
   ============================================================= */


// =================== HERO STARS ===================
//
// uso de la IA: la logica de animacion de las estrellas
// (el rebote contra los bordes y el bucle con requestAnimationFrame)
// se desarrollo con ayuda de IA, para entender mejor como mover y
// hacer rebotar los elementos dentro del contenedor.

// todas las estrellas del hero y el contenedor que las limita
const heroStars = document.querySelectorAll('.Hero-star');
const hero = document.querySelector('.Hero-landing');

// a cada estrella le asigno tamaño, posicion y velocidad al azar, y la animo
heroStars.forEach((star) => {

    // tamaño aleatorio entre 3rem y 7rem
    star.style.width = `${(Math.random() * 4 + 3)}rem`;

    // posicion inicial aleatoria dentro del contenedor
    let x = Math.random() * hero.offsetWidth;
    let y = Math.random() * hero.offsetHeight;

    // velocidad aleatoria en cada eje, con direccion (+/-) al azar
    let vx = (Math.random() * 0.8 + 0.4) * (Math.random() < 0.5 ? 1 : -1);
    let vy = (Math.random() * 0.8 + 0.4) * (Math.random() < 0.5 ? 1 : -1);

    // mueve la estrella y la hace rebotar contra los bordes del contenedor
    const animar = () => {

        x += vx;
        y += vy;

        // si toca un borde (horizontal o vertical), invierte la direccion
        if (x <= 0 || x >= hero.offsetWidth - star.offsetWidth) vx *= -1;
        if (y <= 0 || y >= hero.offsetHeight - star.offsetHeight) vy *= -1;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // requestAnimationFrame para una animacion fluida y optimizada
        requestAnimationFrame(animar);

    }

    star.style.position = 'absolute';
    animar();

});


// =================== HERO H1 INTERSECTION ===================

// titulo principal del hero
const heroH1 = document.querySelector('.Hero-h1');

// cuando el titulo entra en pantalla, le agrego la clase que lo hace aparecer
const observerH1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            heroH1.classList.add('isVisible');
        }
    });
}, { threshold: 0.3 });

observerH1.observe(heroH1);
