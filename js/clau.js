
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
    
    for( var i = 0; i < links.length; i++){
        links[i].addEventListener("click", closeMenu);
    }

        
})();


// SING UP BTN AND MODAL

var openSingUp = document.getElementById("close-sing-up-btn");
var closeSingUp = document.getElementById("close-modal-btn");
var showSingUp = document.getElementById("sing-up-background");
var selectCountry = document.getElementById("country");
var phoneNumber = document.getElementById("phone-number-input");

function openModal(){
    showSingUp.classList.add("open");
    openSingUp.classList.add("open");
}
function closeModal(){
    showSingUp.classList.remove("open");
    openSingUp.classList.remove("open");
}

openSingUp.addEventListener("click", openModal);
closeSingUp.addEventListener("click", closeModal);


showSingUp.addEventListener("click", function(e){
    if (e.target === showSingUp){
        closeModal();
    }
})
selectCountry.addEventListener("change", function(){
    var prefix = selectCountry.options[selectCountry.selectedIndex].dataset.pref;
    if(prefix && (!phoneNumber.value|| /^\+\d*$/.test(phoneNumber.value))){
        phoneNumber.value = prefix
    }
});

// DONATE

var  donatePin = document.querySelectorAll(".donate-pin");
var pinModalBackground = document.getElementById("pin-modal-background");
var closeDonateModalBtn = document.getElementById("close-pin-modal-btn");
var donatePinModalImg = document.getElementById("pin-modal-img");
var donatePinContent = document.getElementById("pin-modal-content");

function closeDonateModal(){
    pinModalBackground.classList.remove("open");
    document.body.classList.remove("modal-open");
}
for(var i = 0; i < donatePin.length; i++){
    donatePin[i].addEventListener("click", function(){
        var pinImg = this.querySelector("img");
        var pinInfo = this.querySelector(".donate-pin-info");

        donatePinModalImg.src = pinImg.src;
        donatePinModalImg.alt = pinImg.alt;
        donatePinContent.innerHTML = pinInfo.innerHTML;

        pinModalBackground.classList.add("open");
        document.body.classList.add("modal-open");
    });

}
closeDonateModalBtn.addEventListener("click", closeDonateModal);
pinModalBackground.addEventListener("click", function(e){
    if (e.target === pinModalBackground){
        closeDonateModal();
    }
})



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