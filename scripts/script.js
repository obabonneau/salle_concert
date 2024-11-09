////////////////
// MENU ACTIF //
////////////////

const liens = document.querySelectorAll("nav ul li a");
const activePage = window.location.pathname.split("/").pop(); // Découpage de la page active et récupération du dernier élément
 
liens.forEach(lien => {
    if (lien.getAttribute("href") === activePage) {
        lien.classList.add("menuActif");
    }
});

//////////////////////////////
// FLECHE SCROLL HAUT PAGE  //
//////////////////////////////

const flecheScroll = document.querySelector(".flecheScroll");

// AU SCROLL, ON AFFICHE LA FLECHE POUR REMONTER EN HAUT DE PAGE
window.addEventListener("scroll", ()=> { 
    if (window.scrollY > 100) { // On controle le scroll au dessus de 100px
        flecheScroll.style.visibility = "visible";
    } else {
        flecheScroll.style.visibility = "hidden";
    }
})

// AU CLICK SUR LA FLECHE, ON REMONTE EN HAUT DE PAGE
flecheScroll.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Pour un défilement doux
    });
});

/////////////////////////////////// 
// TEST DE L'EMAIL DU FORMULAIRE //
///////////////////////////////////

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
const formulaire = document.getElementById("formulaire");
const zoneErreur = document.getElementById("zoneErreur");
let messageErreur = "";

// TEST DU FORMULAIRE SUR L'EVENEMENT SUBMIT
formulaire.addEventListener("submit", (event) => {
    console.log(formulaire);
    
    let testFormulaire = true;

    event.preventDefault(); // Empêche la soumission du formulaire et le rechargement de la page

    // TEST DE l'EMAIL AVEC REGEXP
    const email = document.getElementById("email").value.trim(); //trim() pour retirer les espaces avant et après
    if (!emailRegExp.test(email)){ // Test RegExp
        testFormulaire = false;
        if (!email) { // email vierge
            messageErreur = "Veuillez renseigner votre email";
        } else {
            messageErreur = "Votre email est incorrect";
        }
    }

    // TEST X, Y et Z
    // ...

    // TEST GLOBAL DU FORMULAIRE
    if (testFormulaire) {
        formulaire.submit();
    } else {
        zoneErreur.textContent = messageErreur;
        zoneErreur.style.display = "block";
        setTimeout(() => {
            zoneErreur.style.display = "none";
        }, 2000);
    }
})