
const theme = document.querySelectorAll('.theme');
const bigbutton = document.querySelector('.bigbutton')
var delayInMilliseconds = 500;

bigbutton.addEventListener('click', (e) => {
    setTimeout(function() {
        onclick(window.location='theme.html')
      }, delayInMilliseconds);
  })

theme.forEach((item) =>
item.addEventListener("click", (e) => {
  console.log('yes');
  document.body.classList.remove('blackTheme', 'greenTheme')
  switch (e.target.id) {
    case "black":
      document.body.classList.add("blackTheme");
      break;
    case "green":
      document.body.classList.add("greenTheme");
      break;
    default:
      null;
  }
})
);

