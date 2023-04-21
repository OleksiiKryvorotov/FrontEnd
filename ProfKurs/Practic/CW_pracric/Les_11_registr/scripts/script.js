const email = document.querySelector('.inEmail')
const pass = document.querySelector('.inPass')

const correctEmail = 'example@gmail.com'
const correctPass = 'qqqmmm'


document.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    const enteredEmail = email.value
    const enteredPass = pass.value
    console.log(enteredEmail, enteredPass);
    if (enteredEmail === correctEmail && enteredPass === correctPass) {
      console.log('Вошли');
      window.location.href='http://127.0.0.1:5500/ProfKurs/Practic/CW_pracric/Les_11_registr/index_img.html'
    } else {
      console.log('Не верно');
    }
  }
})