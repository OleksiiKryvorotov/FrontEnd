// Submit - событие - отправка данных

// const add_user_form = document.querySelector('.add_user_form')


// add_user_form.addEventListener('submit', (event) => {
//     event.preventDefault() // предотвращает поведение по умолчанию, в данном случае предотвращает обновление страницы:
//     console.log(event.target.firstname.value);
//     console.log(event.target.age.value);


//      // event.target - ссылка на эл-т, с которым происходит событие, firstname - ссылка на атрибут,  value - показывает, что введено в поле ввода 

//     // а можно кроче щаписать если сделать деструктур-цию:
    
//     const { firstname, age } = event.target

//     console.log(firstname.value);
//     console.log(age.value);

//     event.target.reset()
// })

// Сделаем карточки, котрые будут появляться внизу под формой (формируем объекты и добаляем в новый массив):
const add_user_form = document.querySelector('.add_user_form')
const container = document.querySelector('.container');
 // для 2-го задания:
const delete_all_btn = document.querySelector('.delete_all_btn')
//-----------------------------


const users = []

add_user_form.addEventListener('submit', (event) => {
    event.preventDefault()

const { firstname, age } = event.target

const user = {
    id: Date.now(),
    // Date.now генерирует число в млсек - можно делать уникальные id!
    firstname: firstname.value,
    age: +age.value // преобр. из строки в число - ставим '+' перед age!
}

users.push(user)
// для 1-го задания вставляем это (вызываем ф-цию render_cards!
render_cards(users) 
//---------------------------------------

console.log(users);

event.target.reset()
})

// 1. Отрисовать карточки с двумя парагр.(firstname, age) в div

// смтори выше - нужно вставить вызов ф-ции render_cards!

const render_cards = users => {
    container.innerText = '' 

users.forEach(({ firstname, age }) => {
    const cardElem = document.createElement('div');
    const firstnameElem = document.createElement('p');
    const ageElem = document.createElement('p');
  
    firstnameElem.innerText = `Name: ${firstname}`;
    ageElem.innerText = `Age: ${age}`;
  
    cardElem.append(firstnameElem, ageElem);
    container.append(cardElem);
  })            
}

// 2. При клике на кнопку очистить все карточки:

// смтори выше - для 2-го задания
delete_all_btn.addEventListener('click', () => {
    users_data = []
    render_cards(users_data)
})

// 3. Удалить какую-то конкретную карточку

// const render_cards = users => {
//     container.innerText = '' 

// users.forEach(({ id, firstname, age}) => {
//     const cardElem = document.createElement('div');
//     const firstnameElem = document.createElement('p');
//     const ageElem = document.createElement('p');
//     // добавим:
//     const cross_icon = document.createElement('span')
//     //-------------------
  
//     firstnameElem.innerText = `Name: ${firstname}`;
//     ageElem.innerText = `Age: ${age}`;

//      // добавим:
//      cross_icon.innerText = 'X'

//      cross_icon.classList.add('cross_icon')

//      cross_icon.addEventListener('click', () => {
//         users = users.filter(el => el.id !== id)
//         render_cards(users)
//      })
//      //----------------------------------------     
  
//     cardElem.append(firstnameElem, ageElem, cross_icon);
//     container.append(cardElem);
//   })            
// }

// delete_all_btn.addEventListener('click', () => {
//     users_data = []
//     render_cards(users_data)
// })



