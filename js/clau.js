
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

    menuOverlay.addEventListener("click", closeMenu)

    var links = drawerMenu.querySelectorAll("a");

    for( var i = 0; i < links.length; i++){
        links[i].addEventListener("click", closeMenu);
    }

        
})();