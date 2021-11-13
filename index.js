
const theme = document.querySelectorAll('.theme');
const Themebtn = document.querySelector('#Themebtn')

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

Themebtn.addEventListener('click', (e) => {
    onclick(window.location='theme.html')
  })

