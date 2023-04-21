// 0. Новый js файл для signup страницы подключить где будет логика js для регистрации
// 1. Найти все инпуты
// 2. Как проверить email ли введен? - проверить строку на наличие собачки
// 3. Проверить совпадает ли пароль и проверка пароля - сравнить значения пароля и проверки пароля
// 4. Проверка длины пароля - не меньше 6
// 5. Проверка наличия знаков ! или _
// 6. По результату - если все окей -> прыгаем на гифку, если не окей -> alert(сообщение ошибки)

const email = document.querySelector('.inEmail')
const pass = document.querySelector('.inPass')
const check = document.querySelector('inCheck')

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