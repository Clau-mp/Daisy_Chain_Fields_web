
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