'use strict'

/* =============================================================
   totop.js — boton flotante para volver arriba
   aparece cuando la referencia de arriba deja de verse (scrolleaste)
   y al clickearlo vuelve al inicio con scroll suave.
   (ayuda de la IA)
   ============================================================= */


// =================== BOTON VOLVER ARRIBA ===================

// boton flotante para volver al inicio
const toTop = document.querySelector('.ToTop')

// referencia para detectar el scroll: en la home uso el hero, en el resto el header
const sentinela = document.querySelector('.Hero-landing') || document.querySelector('.Header')

// solo corre si la pagina tiene el boton y la referencia
if (toTop && sentinela) {

    // muestro el boton cuando la referencia deja de verse
    const observerToTop = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            toTop.classList.toggle('isVisible', !entry.isIntersecting)
        })
    })

    observerToTop.observe(sentinela)

    // al hacer click, vuelve arriba de todo con scroll suave
    const volverArribaHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    toTop.addEventListener('click', volverArribaHandler)
}
