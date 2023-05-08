// 1. Отправить запрос по ссылке https://dummyjson.com/users и получить массив с данными о пользователях
// 2. Из полученных данных отрисовать карточки пользователей (аватар, имя + фамилия, возраст)
// 3. Стилизовать карточки + сделать из контейнера грид

// const container = document.querySelector('.container')

// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(json => render(json.users))

// const render = array => {
//     array  

//     .forEach(({ firstName, lastName, age, image }) => {
//       const cardElem = document.createElement('div');
//       const nameElem = document.createElement('p');
//       const ageElem = document.createElement('p');
//       const avatarElem = document.createElement('img');
  
//       avatarElem.src = image;
//       avatarElem.alt = `${firstName} ${lastName}`;
  
//       nameElem.innerText = `${firstName} ${lastName}`;
//       ageElem.innerText = `${age} years old`;
  
//       cardElem.append(avatarElem, nameElem, ageElem);
//       container.append(cardElem);
//     })
//   }

//------ отсортировать по возрасту (3 способа): -------------------------    
// array.slice().sort((a, b) => a.age - b.age) // 1 способ
//array.map(el => el).sort((a, b) => a.age - b.age) // 2 способ
//[...array].sort((a, b) => a.age - b.age) // 3 способ  
//----------------------------------------------------------

// 4. Создать кнопку Sort by age. При клике на кнопку все карточки сортируются по возрасту в порядке возрастания

// Нелли сама не знает как.......

// 5. Отсортировать по фамилии (в алфавитном порядке):

const container = document.querySelector('.container')

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(json => render(json.users))

const render = array => {
    array  
    //вот эта сортировка! ----------------------------
    .slice()
    .sort((a, b) => a.lastName.localeCompare(b.lastName))
    //-------------------------------------------------

    .forEach(({ firstName, lastName, age, image }) => {
      const cardElem = document.createElement('div');
      const nameElem = document.createElement('p');
      const ageElem = document.createElement('p');
      const avatarElem = document.createElement('img');
  
      avatarElem.src = image;
      avatarElem.alt = `${firstName} ${lastName}`;
  
      nameElem.innerText = `${firstName} ${lastName}`;
      ageElem.innerText = `${age} years old`;
  
      cardElem.append(avatarElem, nameElem, ageElem);
      container.append(cardElem);
    })
  }

//ДЗ
// 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/todos
// 2. Из полученных данных отрисовать карточки (title, status)
// 3. Если задача выполнена, то в статус записать 'done'. Если не выполнена - 'not done'
// 4. Стилизовать карточки, сделать из контейнера грид
// 5. Если задача выполнена, то покрасить ее в зеленый, а если не выполнена, то в серый
