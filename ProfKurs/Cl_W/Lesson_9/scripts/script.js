const users = [
    {
      id: 1,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      age: 55,
      progress: 10
    },
    {
      id: 2,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      age: 73,
      progress: 40
    },
    {
      id: 3,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      age: 15,
      progress: 25
    },
    {
      id: 4,
      email: "anna.ivanova@reqres.in",
      first_name: "Anna",
      last_name: "Ivanova",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      age: 18,
      progress: 50
    },
    {
      id: 5,
      email: "anton.petrov@reqres.in",
      first_name: "Anton",
      last_name: "Petrov",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
      age: 12,
      progress: 80
    }
  ];


const container = document.querySelector('.container')

// 1. Для каждого объекта сформировтаь карточку пользователя с именем + фамилия и возрастом
// 2. Стилизовать карточки (border, border-radius, padding). А из контейнера сделать flex-контейнер



// users.forEach(({first_name, last_name, age}) => {
//   const cardElem = document.createElement('div');
//   const nameElem = document.createElement('p');
//   const ageElem = document.createElement('p');

//   nameElem.innerText = `Name: ${first_name} ${last_name}`;
//   ageElem.innerText = `Age: ${age}`;

//   cardElem.classList.add('user_card')

//   cardElem.append(nameElem, ageElem);
//   container.append(cardElem);
// });
//==========================================================

// 3. Добавить каждому пользователю почту и сделать ее кликабельной

// users.forEach(({first_name, last_name, age, email}) => {
//     const cardElem = document.createElement('div');
//     const nameElem = document.createElement('p');
//     const ageElem = document.createElement('p');
//     const emailElem = document.createElement('a')
  
//     nameElem.innerText = `Name: ${first_name} ${last_name}`;
//     ageElem.innerText = `Age: ${age}`;
//     emailElem.innerText = email

//     emailElem.setAttribute('href', `mailto:${email}`)
  
//     cardElem.classList.add('user_card') 

//     cardElem.append(nameElem, ageElem, emailElem);
//     container.append(cardElem);
//   });
//==========================================================

// 4. Добавить каждому пользователю аватар.
// 5. Стилизовать аватар - сделать размеры 150х150px (без деформации изображения)

// users.forEach(({first_name, last_name, age, email, avatar}) => {
//     const cardElem = document.createElement('div');
//     const nameElem = document.createElement('p');
//     const ageElem = document.createElement('p');
//     const emailElem = document.createElement('a')
//     const avatarElem = document.createElement('img')
  
//     nameElem.innerText = `Name: ${first_name} ${last_name}`;
//     ageElem.innerText = `Age: ${age}`;
//     emailElem.innerText = email
    
//     // --- можно так:
//     // emailElem.setAttribute('href', `mailto:${email}`)
//     // avatarElem.setAttribute('src', avatar)
//     // avatarElem.setAttribute('alt', ` ${first_name} ${last_name}`)
//     //---------------------------------------------------

//     // --- а можно и так:   
//     emailElem.href = `mailto:${email}`
//     avatarElem.src = avatar
//     avatarElem.alt = `${first_name} ${last_name}`
//     //-----------------------------------------------------
    
  
//     cardElem.classList.add('user_card') 
    

//     cardElem.append(avatarElem, nameElem, ageElem, emailElem);
//     container.append(cardElem);
//   });
  //==============================================================

  // 6. Если возраст пользователя >= 18 и имя пользователя начинается на букву a/A, то покрасить цвет заднего фона карточки в светло-розовый. Всем остальным сделать цвет заднего фона карточки - светло-голубой

  
//   users.forEach(({first_name, last_name, age, email, avatar}) => {
//       const cardElem = document.createElement('div');
//       const nameElem = document.createElement('p');
//       const ageElem = document.createElement('p');
//       const emailElem = document.createElement('a')
//       const avatarElem = document.createElement('img')
    
//       nameElem.innerText = `Name: ${first_name} ${last_name}`;
//       ageElem.innerText = `Age: ${age}`;
//       emailElem.innerText = email

//       emailElem.href = `mailto: ${email}`
//       avatarElem.src = avatar
//       avatarElem.alt = `${first_name} ${last_name}`      
    
//       cardElem.classList.add('user_card')       
      
//       cardElem.style.backgroundColor = age >= 18 && first_name[0].toLowerCase() === 'a' ? 'lightpink' : 'lightskyblue' 

//       cardElem.append(avatarElem, nameElem, ageElem, emailElem);
//       container.append(cardElem);
//     });
    //==========================================================
    
    // ----- Создать в кждай карточке полоску прогресса:     

    users.forEach(({first_name, last_name, age, email, avatar, progress}) => {
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const ageElem = document.createElement('p');
        const emailElem = document.createElement('a')
        const avatarElem = document.createElement('img')
        //----------------------------------------------------
        const progressContainer = document.createElement('div');
        const progressLine = document.createElement('div');
        const progressValue = document.createElement('p');
        //------------------------------------------------------
        
      
        nameElem.innerText = `Name: ${first_name} ${last_name}`;
        ageElem.innerText = `Age: ${age}`;
        emailElem.innerText = email

        cardElem.classList.add('user_card')
        //------------------------------------------
        progressContainer.classList.add('progress_container')  
        progressLine.classList.add('progress_line')
        //-------------------------------------------- 
  
        emailElem.href = `mailto: ${email}`
        avatarElem.src = avatar
        avatarElem.alt = `${first_name} ${last_name}`    
      
          
        
        cardElem.style.backgroundColor = age >= 18 && first_name[0].toLowerCase() === 'a' ? 'lightpink' : 'lightskyblue' 
        //---------------------------------------------------------
        progressLine.style.width = progress + '%'

        progressContainer.append(progressLine, progressValue)
        cardElem.append(avatarElem, nameElem, ageElem, emailElem, progressContainer);
        //--------------------------------------------------------
        container.append(cardElem);              
      });

      
