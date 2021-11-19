const thirdbutton = document.querySelector('.thirdbutton')
var delayInMilliseconds = 500;

//code pour le troisime bouton
thirdbutton.addEventListener('click', (e) => {
    setTimeout(function() {
       onclick(window.location='quiz.html')
    }, delayInMilliseconds);
})