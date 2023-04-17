// 1. При клике на кнопку меняется цвет текста

// const click_btn = document.querySelector('.click_btn')
// const text = document.querySelector('.text')

// click_btn.addEventListener('click', () => text.style.color = 'green')
//=============================================================

// 2. При клике на кнопку в div.container добавляет праграф

// const addParBtn = document.querySelector('.add_par_btn')
// const parContainer = document.querySelector('.container')

// addParBtn.addEventListener('click', () => {
//     const new_par = document.createElement('p')
//     new_par.innerText = 'hello world!'
//     parContainer.append(new_par)
// })
//==============================================================

// 3.Создать два параграфа. При клике на первый параграф, у второго меняется цвет текста на красный и увеличивается шрифт до 20px. При клике на второй параграф, у первого меняется цвет заднего фона на зеленый и цвет текста на белый

// const par_1 = document.querySelector('.par_1')
// const par_2 = document.querySelector('.par_2')

// par_1.addEventListener('click', () => {
//     par_2.style.color = 'red'
//     par_2.style.fontSize = '20px'})


// par_2.addEventListener('click', () => {
//     par_1.style.backgroundColor = 'green'
//     par_1.style.color = 'white'
// })


//==========================================================
//  способ .toggle() - этот тег добавляет или удаляет класс!:
//============================================================

// 4.При клике на кнопку цвет текста меняется на красный. При повторном клике обратно на черный

// const change_color_btn = document.querySelector('.change_color_btn')
// const change_color_text = document.querySelector('.change_color_text')



// change_color_btn.addEventListener('click', () => {
//     change_color_text.classList.toggle('color')
//   });
//=============================================================

//==========================================================
//  способ .toggle() - этот тег добавляет или удаляет класс!:
//============================================================

// 5. При клике на кнопку цвет текста меняется на синий и размер шрифта увеличиваться до 30px. При повторном клике возращать всё, как было:

// const change_color_btn = document.querySelector('.change_color_btn')
// const change_color_text = document.querySelector('.change_color_text')

// change_color_btn.addEventListener('click', () => {    
//     change_color_text.classList.toggle('color')
// })
//==========================================================

// 6. При клике на кнопку содержимое инпута выводится в консоль и очистить поле ввода:

// const show_btn = document.querySelector('.show_btn')
// const show_input = document.querySelector('.show_input')

// show_btn.addEventListener('click', () => {
//     console.log(show_input.value)
//     // Очищает поле ввода:
//     show_input.value = ''
// })
//============================================================

// 7. При клике на кнопку содержимое инпута меняется на !!!

// const show_btn_1 = document.querySelector('.show_btn_1')
// const show_input_1 = document.querySelector('.show_input_1')

// show_btn_1.addEventListener('click', () => show_input_1.value = '!!!')
//===============================================================

// 8. При клике на кнопку менять содержимое инпута на значения из массива

const symbols = ['...', '!!!', '+++', '&&&']

const show_btn_2 = document.querySelector('.show_btn_2')
const show_input_2 = document.querySelector('.show_input_2')
let index = 0

show_btn_2.addEventListener('click', () => {
    show_input_2.value = symbols[index++ % symbols.length]    
})

// Деление с остатком:
// index++ % symbols.length

// 0 % 4 === 0
// 1 % 4 === 1
// 2 % 4 === 2
// 3 % 4 === 3
// 4 % 4 === 0
// 5 % 4 === 1
// 6 % 4 === 2
// 7 % 4 === 3
// 8 % 4 === 0
//==============================================================

// 9. При клике на кнопку изменять цвет фона на черный:

const show_btn_3 = document.querySelector('.show_btn_3');

show_btn_3.addEventListener('click', () => document.body.classList.toggle('back_color'));
//=============================================================


// ДЗ
// 1. При клике на кнопку менять цвет заднего фона на цвет из массива ['pink', 'green', 'blue']
// 2. *При клике на кнопку менять цвет заднего фона на случайный

















