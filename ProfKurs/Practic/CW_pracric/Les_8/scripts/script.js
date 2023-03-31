//по тэгу:
// const button = document.querySelector('button')
// или так по классу:
// const button = document.querySelector('.MainButton')
// или по id:
//????
// console.log(button);

// Научить кнопку реагировать на клик: ===============

// button.addEventListener('click', () => {
//     console.log(1);
// })
// --------------------------------------------

// --- Другие события с кнпкой: ----------------------

// button.addEventListener('mouseover', () => {
//     console.log(1);
// })

// button.addEventListener('mouseout', () => {
//     console.log(1);
// })
//===================================================


// --- По клику на кнопку в консоль вывести body ----

// const button = document.querySelector('button')
// const body = document.querySelector('body')

// button.addEventListener('click', () => {   
//     console.log(body);
// })
//=====================================================

// --- Поменять цвет body: --------------------------


// разные способы:
// 1. поменять класс:

// 2. менять стиили:

// --- По клику на кнопку проверить есть ли class red у body или нет: ------------

// const button = document.querySelector('button')
// const body = document.querySelector('body')

// button.addEventListener('click', () => {   
//         console.log(body.classList.contains('red'));
// })
//=====================================================

// --- По клику на кнопку добавлять class для body или убирать - цель чтобы цвет фона body менялся

// 1 способ: --------------------------------------

// const button = document.querySelector('button')

// const body = document.querySelector('body')

// button.addEventListener("click", () => {
  
//     const isRed = body.classList.contains("blue")

//     if(isRed) {
//         body.classList.remove('blue')
//     } else {
//         body.classList.add('blue')
//     }
// })

// 2 способ: -----------------------------------

// const button = document.querySelector('button')

// const body = document.querySelector('body')

// button.addEventListener("click", () => {
//     if (body.classList) {
//         body.classList.add('blue')
//         body.classList.remove('red')
//     } else {
//         body.classList.remove('red')
//         body.classList.add('blue')
//     }})
//===================================================  

// --- По клику на кнопку вывести в консоль body.style
//и поменять цвет body (фона) -----------------

// const button = document.querySelector('button')
// const body = document.querySelector('body')

// button.addEventListener('click', () => {   
//     console.log(body.style.backgroundColor = 'purple')
// })
//==================================================

// --- По клику на кнопку поменять цвет body (фона) ----------------- 

// const button = document.querySelector('button')
// const body = document.querySelector('body')

// button.addEventListener("click", () => {
//     if (body.style.backgroundColor === 'red') {
//         body.style.backgroundColor = 'blue'
//     } else {
//      (body.style.backgroundColor === 'blue') 
//         body.style.backgroundColor = 'red'
//     }
// })
//==================================================

// --- Тоже задание но использовать не  body.style.backgroundColor = "red"; а body.setAttribute("style", "background-color: red;");

const button = document.querySelector('button')
const body = document.querySelector('body')

button.addEventListener("click", () => {
    if (body.style.backgroundColor === 'red') {
        body.setAttribute('style', 'background-color: blue;')
    } else {        
        body.setAttribute("style", "background-color: red;")
    }
})
//================================================================