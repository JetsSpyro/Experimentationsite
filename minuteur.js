const startingMinutes = 0.1;
let time = startingMinutes * 60;
var delayInMilliseconds = 500;
var delayInMilliseconds2 = 2000;
const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
	setTimeout(function() {
        const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
	if(time === 0){
	   countdownEl.innerHTML = "0:00";
	   setTimeout(function() {
		countdownEl.innerHTML = "0:00";
		window.location='quizOF.html'
	 }, delayInMilliseconds2);
    }
      
}, delayInMilliseconds);

    }