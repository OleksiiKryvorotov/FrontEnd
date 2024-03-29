let users = [
    { id: 1, firstname: "John", lastname: "Doe", photo: "https://reqres.in/img/faces/1-image.jpg", age: 25, active: true, email: 'example@gmail.com' },

    { id: 2, firstname: "Jane", lastname: "Smith", photo: "https://reqres.in/img/faces/2-image.jpg", age: 32, active: false, email: 'example2@gmail.com'},

    { id: 3, firstname: "Bob", lastname: "Johnson", photo: "https://reqres.in/img/faces/3-image.jpg", age: 42, active: true, email: 'example3@gmail.com' },

    { id: 4, firstname: "Alice", lastname: "Williams", photo: "https://reqres.in/img/faces/4-image.jpg", age: 28, active: false, email: 'example4@gmail.com' },

    { id: 5, firstname: "David", lastname: "Brown", photo: "https://reqres.in/img/faces/5-image.jpg", age: 35, active: true, email: 'example5@gmail.com' },

    { id: 6, firstname: "Mary", lastname: "Jones", photo: "https://reqres.in/img/faces/6-image.jpg", age: 29, active: true, email: 'example6@gmail.com' },

    { id: 7, firstname: "Peter", lastname: "Lee", photo: "https://reqres.in/img/faces/7-image.jpg", age: 41, active: false, email: 'example7@gmail.com' },

    { id: 8, firstname: "Samantha", lastname: "Kim", photo: "https://reqres.in/img/faces/8-image.jpg", age: 27, active: true, email: 'example8@gmail.com' },

    { id: 9, firstname: "Alex", lastname: "Chen", photo: "https://reqres.in/img/faces/9-image.jpg", age: 33, active: false, email: 'example9@gmail.com' },

    { id: 10, firstname: "Karen", lastname: "Nguyen", photo: "https://reqres.in/img/faces/10-image.jpg", age: 31, active: true, email: 'example10@gmail.com' }
  ];

 // 1. Для каждого объекта массива users создать карточку пользователя (фото, имя + фамилия, возраст). Добавить все карточки в div.cards_container:

    
//  const cards_container = document.querySelector('.cards_container');

// users.forEach(({firstname, lastname, age, photo}) => {
//   const cardElem = document.createElement('div');
//   const nameElem = document.createElement('p');
//   const ageElem = document.createElement('p');
//   const photoElem = document.createElement('img');

//   nameElem.innerText = `User: ${firstname} ${lastname}`;
//   ageElem.innerText = `Age: ${age}`;

//   photoElem.setAttribute('src', photo);
//   photoElem.setAttribute('alt', `${firstname} ${lastname}`);

//   cardElem.append(photoElem, nameElem, ageElem);
//   cards_container.append(cardElem)
// });

//====================================================================

// 2. Стилизовать карточки (border, border-radius, padding, background-color). Если пользователь активный, цвет заднего фона должен быть светло-зеленым и border темно-зеленым, а если не активный - то цвет заднего фона светло-серый, а граница темно-серая:

const cards_container = document.querySelector('.cards_container');

users.forEach(({firstname, lastname, age, photo, active}) => {
  const cardElem = document.createElement('div');
  const nameElem = document.createElement('p');
  const ageElem = document.createElement('p');
  const photoElem = document.createElement('img');

  nameElem.innerText = `User: ${firstname} ${lastname}`;
  ageElem.innerText = `Age: ${age}`;

  photoElem.setAttribute('src', photo);
  photoElem.setAttribute('alt', `${firstname} ${lastname}`);

  cardElem.classList.add('cardElem')
  cardElem.style.backgroundColor = active ? 'Lightgreen' : 'Lightgray'
  cardElem.style.border = active ? '3px solid darkgray' : '3px solid red'

 

  cardElem.append(photoElem, nameElem, ageElem);
  cards_container.append(cardElem) 
});


//==========================================================

// 3. Вывести карточки только тех пользователей, которые старше 30:

// const cards_container = document.querySelector('.cards_container');
// // через filter надо делать!:
// users
// .filter(el => el.age >= 30)

// .forEach(({firstname, lastname, age, photo, active}) => {
//   const cardElem = document.createElement('div');
//   const nameElem = document.createElement('p');
//   const ageElem = document.createElement('p');
//   const photoElem = document.createElement('img');

//   nameElem.innerText = `User: ${firstname} ${lastname}`;
//   ageElem.innerText = `Age: ${age}`;

//   photoElem.setAttribute('src', photo);
//   photoElem.setAttribute('alt', `${firstname} ${lastname}`);

//   cardElem.classList.add('cardElem')
//   cardElem.style.backgroundColor = active ? 'Lightgreen' : 'Lightgray'
//   cardElem.style.border = active ? '3px solid darkgray' : '3px solid red' 

//   cardElem.append(photoElem, nameElem, ageElem);
//   cards_container.append(cardElem) 
// });

//==========================================================

// 4. Добавить элемент почты (кликабельная):

// const cards_container = document.querySelector('.cards_container');

// users.forEach(({firstname, lastname, age, photo, active, email}) => {
//   const cardElem = document.createElement('div');
//   const nameElem = document.createElement('p');
//   const ageElem = document.createElement('p');
//   const photoElem = document.createElement('img');
//   const mailElem = document.createElement('a')

//   nameElem.innerText = `User: ${firstname} ${lastname}`;
//   ageElem.innerText = `Age: ${age}`;
//   mailElem.innerText = email

//   photoElem.setAttribute('src', photo);
//   photoElem.setAttribute('alt', `${firstname} ${lastname}`);
//   mailElem.setAttribute('href', `mailto:${email}`)

//   cardElem.classList.add('cardElem')
//   cardElem.style.backgroundColor = active ? 'Lightgreen' : 'Lightgray'
//   cardElem.style.border = active ? '3px solid darkgray' : '3px solid red'
 

//   cardElem.append(photoElem, nameElem, ageElem, mailElem);
//   cards_container.append(cardElem) 
// });