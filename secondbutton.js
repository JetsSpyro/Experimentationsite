const secondbutton = document.querySelector('.secondbutton')
var delayInMilliseconds = 500;

//code pour le deuxieme bouton
secondbutton.addEventListener('click', (e) => {
    setTimeout(function() {
       onclick(window.location='minuteur.html')
    }, delayInMilliseconds);
})