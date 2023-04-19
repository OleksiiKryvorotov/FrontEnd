
// Задание 2:
// Поймать клик по кнопке
const button = document.querySelector('.btn')

// button.addEventListener('click', () => console.log(123))
//============================================================

// Задание 3:
// По клику на кнопку очистить инпут от текста
const input = document.querySelector('.NewItemInput')

// button.addEventListener('click', () => input.value ='')
//==============================================================

// Задача 5:
// По клику взять то что в инпуте (текст) и добавить его в область для задач. Каждый клик доблавяет новую задачу в столбик

button.addEventListener('click', () => {    
    const item = document.createElement('p')
    item.innerText = input.value
    const addText = document.querySelector('.container')    
    input.value =''
    addText.append(item)
})

