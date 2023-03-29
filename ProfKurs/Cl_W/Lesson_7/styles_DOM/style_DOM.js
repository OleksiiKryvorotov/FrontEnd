// DOM - document (эл-т html, к которому можно получить доступ из script.js) object model

// const greeting = document.querySelector('.greeting')
// const container = document.querySelector('.container')

// greeting.style.color = 'red'
// greeting.style.fontSize = '30px'
// greeting.style.backgroundColor = 'lightgreen'

// const par = document.createElement('p') // создать парагр.
// par.innerText = '12345' // Добавить текст
// container.append(par) // Добавить параграф в div, можно несколько эл-тов добавлять!
// par.style.color = 'blue'
// par.style.fontSize = '50px'

// const par2 = document.createElement('p') 
// par2.innerText = 'hello hello'
// par2.style.backgroundColor = 'purple'
// container.append(par2)

//==============================================================

// 1. Внутри container создать карточку товара (div). Внутри карточки товара есть два параграфа - Название и цена товара. Данные произвольные. Добавить карточке рамку, ширина карточки должна быть равна 200px, padding 10px

// 1) сначала найти эл-т

const container = document.querySelector('.container') 

// 2) Создать контейнеры:
const cardElem = document.createElement('div')
const titleElm = document.createElement('p')
const priceElem = document.createElement('p')
// 4) стилизация:
titleElm.innerText = 'Title: iPhone 14 Pro'
priceElem.innerText = 'Price: 1200$'

cardElem.style.border = '1px solid black'
cardElem.style.padding = '10px'
cardElem.style.width = '200px'
cardElem.style.borderRadius = '10px'
cardElem.style.textAlign = 'center'

// 3)Добавить:
cardElem.append(titleElm, priceElem)
container.append(cardElem)

//=========== ДЗ: ==========================================

// 2. Дан массив с товарами. Для каждого товара создать карточку. Стилизовать карточку (title, price). Если товар есть на складе, то цвет заднего фона сделать зеленым. А если нет - то серым

const products = [
    {
      id: 1,
      title: 'Apple',
      price: 100,
      in_stock: true
    },
    {
      id: 2,
      title: 'Orange',
      price: 200,
      in_stock: false
    },
    {
      id: 3,
      title: 'Kiwi',
      price: 150,
      in_stock: true
    },
    {
      id: 4,
      title: 'Banana',
      price: 300,
      in_stock: false
    }
  ]
