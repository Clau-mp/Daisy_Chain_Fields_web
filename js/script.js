
// INTRO

(function(){
    var intro = document.getElementById("intro");
    if(!intro){
        document.body.classList.remove("intro-active");
        return;
    }
    var seen = false;
    try { seen = sessionStorage.getItem("introSeen") === "1";} catch(e){}
    function endIntro(){
        if (intro.parentNode) intro.remove();
        document.body.classList.remove("intro-active");
    }
    if (seen){
        endIntro();
        return;
    }
    try { sessionStorage.setItem("introSeen", "1");} catch(e){}
    intro.addEventListener("animationend", function(e){
        if (e.target === intro) endIntro();
    });
    setTimeout(endIntro, 8000);
})();

// Menu hamburguesa

(function (){
    'use strict';

    var iconMenu = document.getElementById("iconMenu");
    var drawerMenu = document.getElementById("drawerMenu");
    var menuOverlay = document.getElementById("menuOverlay");

    function openMenu () {
        iconMenu.classList.add("active");
        drawerMenu.classList.add("open");
        document.body.classList.add("menu-open");
    }

    function closeMenu (){
        iconMenu.classList.remove("active");
        drawerMenu.classList.remove("open");
        document.body.classList.remove("menu-open");
    }

    function toggleMenu () {
        if (drawerMenu.classList.contains("open")){
            closeMenu();
        } else{ openMenu();}


    }

   if ( iconMenu && drawerMenu){
    iconMenu.addEventListener("click", function(){
        if (drawerMenu.classList.contains("open")){
            closeMenu();
        } else{ openMenu();}
    })}

   if(menuOverlay){ menuOverlay.addEventListener("click", closeMenu)}

   if(drawerMenu){var links = drawerMenu.querySelectorAll("a");
    
    for( var i = 0; i < links.length; i++){
        links[i].addEventListener("click", closeMenu);
    }

      
    }
        
})();


// SING UP BTN AND MODAL

var openSingUp = document.getElementById("close-sing-up-btn");
var closeSingUp = document.getElementById("close-modal-btn");
var showSingUp = document.getElementById("sing-up-background");
var selectCountry = document.getElementById("country");
var phoneNumber = document.getElementById("phone-number-input");

function openModal(){
    if (showSingUp) showSingUp.classList.add("open");
    if (openSingUp) openSingUp.classList.add("open");
}
function closeModal(){
    if (showSingUp) showSingUp.classList.remove("open");
   if (openSingUp) openSingUp.classList.remove("open");
}

if (openSingUp) openSingUp.addEventListener("click", openModal);
if (closeSingUp) closeSingUp.addEventListener("click", closeModal);

if(showSingUp){
    showSingUp.addEventListener("click", function(e){
        if (e.target === showSingUp){
            closeModal();
        }
    })
}
if(selectCountry && phoneNumber){
    selectCountry.addEventListener("change", function(){
        var prefix = selectCountry.options[selectCountry.selectedIndex].dataset.pref;
        if(prefix && (!phoneNumber.value|| /^\+\d*$/.test(phoneNumber.value))){
            phoneNumber.value = prefix
        }
    });
}

// Hero

document.addEventListener("DOMContentLoaded", function(){
    var photos = document.querySelectorAll(".hero-photos-container .hero-photo");
    var currentIndex = 0;
    var intervalTime = 3000;

    if (photos.length > 0){
        function changePhotos() {
            photos[currentIndex].classList.remove("hero-photo-activate");
            currentIndex = (currentIndex + 1) % photos.length;
            photos[currentIndex].classList.add("hero-photo-activate");
        }

    setInterval (changePhotos, intervalTime)
    }
    

});

// flower cards

document.addEventListener("DOMContentLoaded", () => {
    const cardSingUpBtn = document.getElementById("card-sing-up-btn");
    if (cardSingUpBtn){
        cardSingUpBtn.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            openModal();
        });
        
    }
});
// BADGES HOME

(function(){
    const images = [
        "media/photos/festival_chapas_decoration/badge-1.webp",
        "media/photos/festival_chapas_decoration/badge-2.png",
        "media/photos/festival_chapas_decoration/badge-3.png",
        "media/photos/festival_chapas_decoration/badge_4.png",
        "media/photos/festival_chapas_decoration/badge-05.png",
        "media/photos/festival_chapas_decoration/badge_6.png",
    ];
    const track =document.getElementById("badgesTrack");
    if (!track) return;
    const html = images
    .map(src => `<div class="badge"><img src="${src}" alt=""></div>`)
    .join("");

    const speed = 60;
    let x = 0;
    let last = performance.now();
    let setWidth = 0;

    function tick(now){
        const dt = (now - last) / 1000;
        last = now;

        x -= speed * dt;
        if(x <= -setWidth) x += setWidth;
        track.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(tick);
    }
    window.addEventListener("load", () => {
        track.innerHTML = html;
        setWidth = track.scrollWidth;
        const repeats = Math.ceil(window.innerWidth * 1.3 / setWidth) + 2;
        track.innerHTML = html.repeat(repeats);
        last = performance.now();
        requestAnimationFrame(tick);
    });
})();

// DONATE

var  donatePin = document.querySelectorAll(".donate-pin");
var pinModalBackground = document.getElementById("pin-modal-background");
var closeDonateModalBtn = document.getElementById("close-pin-modal-btn");
var donatePinModalImg = document.getElementById("pin-modal-img");
var donatePinContent = document.getElementById("pin-modal-content");

function closeDonateModal(){
    if (pinModalBackground) pinModalBackground.classList.remove("open");
    document.body.classList.remove("modal-open");
}
if (donatePin.length > 0 && pinModalBackground && donatePinModalImg && donatePinContent){
  for(var i = 0; i < donatePin.length; i++){
        donatePin[i].addEventListener("click", function(){
            var pinImg = this.querySelector("img");
            var pinInfo = this.querySelector(".donate-pin-info");
            if(pinImg && pinInfo){
                donatePinModalImg.src = pinImg.src;
                donatePinModalImg.alt = pinImg.alt;
                donatePinContent.innerHTML = pinInfo.innerHTML;

                pinModalBackground.classList.add("open");
                document.body.classList.add("modal-open");
            }
        });

    }
}
if (closeDonateModalBtn){closeDonateModalBtn.addEventListener("click", closeDonateModal);}
if (pinModalBackground){pinModalBackground.addEventListener("click", function(e){
    if (e.target === pinModalBackground){
        closeDonateModal();
    }
})}

// Tickets

/* ---------- 1. DATOS Y ELEMENTOS ---------- */
document.addEventListener("DOMContentLoaded", function(){
    var entradas = document.querySelectorAll('.ticket-price');
    var resumenLista = document.querySelector('#resumen-lista');

    if(entradas.length > 0 && resumenLista){
        var GASTOS_POR_ENTRADA = 1.5;
        var MAXIMO_POR_TIPO = 10;

        var totalEntradasTexto = document.querySelector('#total-entradas');
        var subtotalTexto = document.querySelector('#subtotal');
        var gastosTexto = document.querySelector('#gastos');
        var totalTexto = document.querySelector('#total');

        var  botonComprar = document.querySelector('#boton-comprar');
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
    }
});

// MAPA
document.addEventListener("DOMContentLoaded", function(){
    var modalMap = document.getElementById("modal-mapa");
    var miniaturaMap =document.getElementById("miniatura-mapa");

    if(miniaturaMap && modalMap){
        miniaturaMap.addEventListener("click", function(){
            modalMap.showModal();
        });
        modalMap.addEventListener("click", function(){
            modalMap.close();
        });
    }
});