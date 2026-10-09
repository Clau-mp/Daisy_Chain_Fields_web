/* ---------- 1. DATOS Y ELEMENTOS ---------- */

var GASTOS_POR_ENTRADA = 1.5;
var MAXIMO_POR_TIPO = 10;

var entradas = document.querySelectorAll('.ticket-price');

var resumenLista = document.querySelector('#resumen-lista');
var totalEntradasTexto = document.querySelector('#total-entradas');
var subtotalTexto = document.querySelector('#subtotal');
var gastosTexto = document.querySelector('#gastos');
var totalTexto = document.querySelector('#total');

var botonComprar = document.querySelector('#boton-comprar');
var mensaje = document.querySelector('#mensaje');

/* ---------- 2. FUNCIONES DE AYUDA ---------- */

function formatearPrecio(numero) {
    return numero.toFixed(2).replace('.', ',') + ' €';
}

function leerPrecio(entrada) {
    var texto = entrada.querySelector('.entrada__precio').textContent;
    texto = texto.replace('€', '').replace(/\./g, '').replace(',', '.').trim();
    return parseFloat(texto);
}

function leerNombre(entrada) {
    return entrada.querySelector('h2').textContent.trim().replace(/\.$/, '');
}

function leerCantidad(entrada) {
    var cantidad = entrada.querySelector('.contador__cantidad');
    return parseInt(cantidad.textContent, 10);
}

function escribirCantidad(entrada, numero) {
    var cantidad = entrada.querySelector('.contador__cantidad');
    cantidad.textContent = numero;
}

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = 'mensaje mensaje--' + tipo;
}

function borrarMensaje() {
    mensaje.textContent = '';
    mensaje.className = 'mensaje';
}

/* ---------- 3. CÁLCULO DEL TOTAL ---------- */

function actualizarTotal() {
    var totalEntradas = 0;
    var subtotal = 0;
    var lineasResumen = '';

    for (var i = 0; i < entradas.length; i++) {
        var entrada = entradas[i];

        var precio = leerPrecio(entrada);
        var nombre = leerNombre(entrada);
        var cantidad = leerCantidad(entrada);
        var subtotalEntrada = precio * cantidad;

        // Botones: no bajar de 0 ni pasar del máximo
        entrada.querySelector('.contador__boton--menos').disabled = (cantidad === 0);
        entrada.querySelector('.contador__boton--mas').disabled = (cantidad === MAXIMO_POR_TIPO);

        if (cantidad > 0) {
            entrada.classList.add('is-seleccionada');
            lineasResumen = lineasResumen +
                '<li><span>' + cantidad + ' × ' + nombre + '</span>' +
                '<strong>' + formatearPrecio(subtotalEntrada) + '</strong></li>';
        } else {
            entrada.classList.remove('is-seleccionada');
        }

        totalEntradas = totalEntradas + cantidad;
        subtotal = subtotal + subtotalEntrada;
    }

    var gastos = totalEntradas * GASTOS_POR_ENTRADA;
    var total = subtotal + gastos;

    if (lineasResumen === '') {
        resumenLista.innerHTML = '<li class="resumen__vacio">Todavía no has elegido ninguna entrada.</li>';
    } else {
        resumenLista.innerHTML = lineasResumen;
    }

    totalEntradasTexto.textContent = totalEntradas;
    subtotalTexto.textContent = formatearPrecio(subtotal);
    gastosTexto.textContent = formatearPrecio(gastos);
    totalTexto.textContent = formatearPrecio(total);

    botonComprar.disabled = (totalEntradas === 0);
}

/* ---------- 4. BOTONES + Y − DE CADA ENTRADA ---------- */

function conectarContador(entrada) {
    var botonMenos = entrada.querySelector('.contador__boton--menos');
    var botonMas = entrada.querySelector('.contador__boton--mas');

    botonMas.addEventListener('click', function () {
        var cantidad = leerCantidad(entrada);
        if (cantidad < MAXIMO_POR_TIPO) {
            escribirCantidad(entrada, cantidad + 1);
            borrarMensaje();
            actualizarTotal();
        }
    });

    botonMenos.addEventListener('click', function () {
        var cantidad = leerCantidad(entrada);
        if (cantidad > 0) {
            escribirCantidad(entrada, cantidad - 1);
            borrarMensaje();
            actualizarTotal();
        }
    });
}

for (var i = 0; i < entradas.length; i++) {
    conectarContador(entradas[i]);
}

// BOTON COMPRAR

botonComprar.addEventListener('click', function () {
    for (var i = 0; i < entradas.length; i++) {
        escribirCantidad(entradas[i], 0);
    }
    actualizarTotal();
    mostrarMensaje('¡Gracias por tu compra!', 'ok');
});