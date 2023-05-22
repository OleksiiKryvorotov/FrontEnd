// 1. Создать форму (в html) с тремя полями - имя, фамилия, возраст
// 2. При сабмите формы данные из формы собираются, формируется объект (id, firstname, lastname, age) и добавляется в массив all_workers


const add_workers_form = document.querySelector('.add_workers_form');
// для 3 задачи: ---------------
const workers_container = document.querySelector('.workers_container')
//-----------------------------
// для 6 задачи:
const delete_btn = document.querySelector('.delete_btn');
//--------------------------------------

let all_workers = [];

add_workers_form.addEventListener('submit', e => {
  e.preventDefault();

  const { firstname, lastname, age, avatar, email } = e.target;

  const worker = {
    id: Date.now(),
    firstname: firstname.value,
    lastname: lastname.value,
    age: +age.value,
    // для 5 задания
    avatar: avatar.value,
    email: email.value
    //------------------
  }

  all_workers.push(worker);

//   console.log(all_workers);
  render_cards(all_workers)
  
  e.target.reset()
});

// 3. Отрисовать карточки из массива all_workers

// const render_cards = workers => {
//     workers_container.innerText = '';
//     workers.forEach(({id, firstname, lastname, age}) => {
//       const cardElem = document.createElement('div');
//       const nameElem = document.createElement('p');
//       const ageElem = document.createElement('p');
  
//       nameElem.innerText = `Name: ${firstname} ${lastname}`;
//       ageElem.innerText = `Age: ${age}`;
  
//       cardElem.append(nameElem, ageElem);
//       workers_container.append(cardElem);
//     })
//   }

  // 4. В форму добавить поля для сбора ссылки на аватар и электронную почту
// 5. Отрисовать новые данные в карточке работника


// const render_cards = workers => {
//     workers_container.innerText = '';
//     workers.forEach(({id, firstname, lastname, age, avatar, email }) => {
//       const cardElem = document.createElement('div');
//       const nameElem = document.createElement('p');
//       const ageElem = document.createElement('p');
//       const avatarElem = document.createElement('img');
//       const emailElem = document.createElement('a');
  
//       nameElem.innerText = `Name: ${firstname} ${lastname}`;
//       ageElem.innerText = `Age: ${age}`;
//       emailElem.innerText = email;
  
//       avatarElem.src = avatar;
//       avatarElem.alt = `${firstname} ${lastname}`;
//       emailElem.href = `mailto:${email}`;
  
//       cardElem.append(avatarElem, nameElem, ageElem, emailElem);
//       workers_container.append(cardElem);
//     })
//   }

//   // 6. Создать кнопку удаления всех карточек

//   delete_btn.addEventListener('click', () => {
//     all_workers = [];
//     render_cards(all_workers)
//   });

  // 7. В каждой карточке добавить крестик, который виден только при наведении курсора на карточку. При клике на крестик удаляется карточка

  const render_cards = workers => {
  workers_container.innerText = '';
  workers.forEach(({id, firstname, lastname, age, avatar, email }) => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const avatarElem = document.createElement('img');
    const emailElem = document.createElement('a');
     // для 7 задачи:
    const deleteElem = document.createElement('span');
    //--------------------

    nameElem.innerText = `Name: ${firstname} ${lastname}`;
    ageElem.innerText = `Age: ${age}`;
    emailElem.innerText = email;
     // для 7 задачи:
    deleteElem.innerText = 'X'
    //-----------------------------

    avatarElem.src = avatar;
    avatarElem.alt = `${firstname} ${lastname}`;
    emailElem.href = `mailto:${email}`;
    
    // для 7 задачи:
    deleteElem.addEventListener('click', () => {
        all_workers = all_workers.filter(el => el.id !== id);
        render_cards(all_workers)
     });  
         cardElem.classList.add('cardElem')
    //-----------------------------------------     
    

    cardElem.append(deleteElem, avatarElem, nameElem, ageElem, emailElem);
    workers_container.append(cardElem);
  })
}

delete_btn.addEventListener('click', () => {
    all_workers = [];
    render_cards(all_workers)
  });












