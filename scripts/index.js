///////////
// POPUP //
///////////

const controleCookie = localStorage.getItem("ctrlCookie"); 
const fontPopUp = document.querySelector(".fontPopUp");

console.log(controleCookie);

// ON CONTROLE AU PREMIER CHARGEMENT SI LE COOCKIE A DEJA ETE ACCEPTE
if (!controleCookie) { // cookie vierge
    fontPopUp.style.visibility = "visible";
}

// DESAFFICHAGE DU POP AU CLICK SUR ACCEPTER
document.getElementById("accepterPopUp").addEventListener("click", () => {
    fontPopUp.style.visibility = "hidden";
    localStorage.setItem("ctrlCookie", "true"); // Cookie validé, on n'affichera plus le popUp
})

// DESAFFICHAGE DU POP AU CLICK SUR REFUSER
document.getElementById("refuserPopUp").addEventListener("click", () => {
    fontPopUp.style.visibility = "hidden";
})