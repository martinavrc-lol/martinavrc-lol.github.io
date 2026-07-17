'use strict'

/* =============================================================
   menu.js — menu hamburguesa (movil / tablet)
   abre y cierra el panel de navegacion añadiendo/quitando clases
   ============================================================= */


// =================== MENU HAMBURGUESA ===================

// botones y elementos que intervienen en el menu
const burger = document.querySelector(`.Header-burger`)      // abre el menu
const botonCerrar = document.querySelector(`.Header-close`)  // cierra el menu
const menu = document.querySelector(`.Header-ul`)            // panel de navegacion
const links = document.querySelectorAll(`.Header-li a`)      // enlaces del menu

// abre el menu y bloquea el scroll de la pagina de atras
const abrirMenu = () => {
    menu.classList.add(`isOpen`)
    document.body.classList.add(`menuAbierto`)
}

// cierra el menu y libera el scroll
const cerrarMenu = () => {
    menu.classList.remove(`isOpen`)
    document.body.classList.remove(`menuAbierto`)
}

// eventos: abrir con la hamburguesa, cerrar con la X
burger.addEventListener(`click`, abrirMenu)
botonCerrar.addEventListener(`click`, cerrarMenu)

// al tocar cualquier link, tambien se cierra
links.forEach((link) => {
    link.addEventListener(`click`, cerrarMenu)
})
