'use strict'

/* =============================================================
   deck.js — mazo / carrusel de mockups (paginas de proyecto)
   muestra las capturas apiladas como un mazo de cartas y permite
   pasar de una a otra con los botones prev / next.
   ============================================================= */


// =================== MAZO / CARRUSEL ===================
//
// uso de la IA: quería seguir el concepto de un carrusel, pero
// como las cartas están apiladas una arriba de la otra (no en fila),
// use IA para entender mejor la forma y el orden: como calcular la
// posición de cada carta con el z-index para que la "actual" quede arriba.

// cartas del mazo, botones de navegación y el contador
const cartas = document.querySelectorAll(`.Deck-card`)
const botonSiguiente = document.querySelector(`.Deck-next`)
const botonAnterior = document.querySelector(`.Deck-prev`)
const contadorTexto = document.querySelector(`.Deck-count`)

// índice de la carta que está arriba de todo
let contador = 0

// pone la carta "contador" arriba del mazo y actualiza el número
const mostrar = () => {
    cartas.forEach((carta, i) => {
        // distancia de cada carta respecto de la actual (en orden circular)
        let posicion = (i - contador + cartas.length) % cartas.length
        carta.style.zIndex = cartas.length - posicion
    })

    contadorTexto.textContent = `${contador + 1} / ${cartas.length}`
}

// flecha siguiente: avanza una carta y vuelve al inicio al llegar al final
botonSiguiente.addEventListener(`click`, () => {
    contador = contador + 1
    if (contador >= cartas.length) {
        contador = 0
    }
    mostrar()
})

// flecha anterior: retrocede una carta y salta al final si se pasa del inicio
botonAnterior.addEventListener(`click`, () => {
    contador = contador - 1
    if (contador < 0) {
        contador = cartas.length - 1
    }
    mostrar()
})

// arranca mostrando la primera carta
mostrar()
