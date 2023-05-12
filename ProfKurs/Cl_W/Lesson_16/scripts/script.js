//ДЗ
// 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/todos
// 2. Из полученных данных отрисовать карточки (title, status)
// 3. Если задача выполнена, то в статус записать 'done'. Если не выполнена - 'not done'
// 4. Стилизовать карточки, сделать из контейнера грид
// 5. Если задача выполнена, то покрасить ее в зеленый, а если не выполнена, то в серый

// const container = document.querySelector('.container');


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then(json => render(json))

// const render = array => {
//   array.forEach(({ title, completed }) => {
//     const cardElem = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const statusElem = document.createElement('p');

//     const status_text = completed ? 'done' : 'not done';

//     titleElem.innerText = `Title: ${title}`;
//     statusElem.innerText = `Status: ${status_text}`;

//     cardElem.style.backgroundColor = completed ? 'lightgreen' : 'lightgray';

//     cardElem.append(titleElem, statusElem);
//     container.append(cardElem);
//   })
// }
//=============================================================

// 1. Написать функцию, принимающую в качестве аргумента id (число), отправляющую fetch-запрос по ссылке https://jsonplaceholder.typicode.com/users/{id} и выводящую полученные данные в консоль

// const container = document.querySelector('.container');

// const getUser = id => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => res.json())
//     .then(json => console.log(json))
// }

// getUser(1);

//2. Написать функцию, принимающую полученный объект и отрисовывающую карточку пользователя (имя + телефон)

// const container = document.querySelector('.container');


// const getUser = id => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => res.json())
//     .then(json => render(json))
// }

//     getUser(5);

//     const render = json => {
//         const infoElem = document.createElement('p');
//         infoElem.innerText = `${json.name} ${json.phone}`;
//         container.append(infoElem);
// }

// 3. Найти кнопки в документе
// 4. Повесить на кнопки слушатели событий. При клике на левую кнопку мы уменьшаем id_num на 1 и отрисовываем новую карточку (вызываем функцию render с обновленным значением id_num). При клике на правую кнопку мы увеличивает id_num на 1 и отрисовываем новую карточку     

// const container = document.querySelector('.container');
// let id_num = 1

// const getUser = id => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => res.json())
//     .then(json => render(json))
// }

//     getUser(id_num);

//     const render = ({ name, phone}) => {

//         очищает контейнер:
//         container.innerText = ''

//         const infoElem = document.createElement('p');
//         infoElem.innerText = `${name} ${phone}`;
//         container.append(infoElem);
// }

// const left_btn = document.querySelector('.left_btn')
// const right_btn = document.querySelector('.right_btn')

// left_btn.addEventListener('click', () => {
//     //зациклить процесс:
//     if(id_num ===1){
//         id_num = 11
//     }
//     //-----------------
//     getUser(--id_num)
// })    
// right_btn.addEventListener('click', () => {
//      //зациклить процесс:
//     if(id_num === 10){
//     id_num = 0
//     }
//     //------------------
//     getUser(++id_num)    
// })

// 5. Написать функцию, которая принимает в качестве аргумента номер страницы, отправляет запрос по ссылке https://reqres.in/api/users?page={page_num} и выводит в консоль массив с пользователеями



const container = document.querySelector('.container');

const getUser = page_num => {
    fetch(`https://reqres.in/api/users?page=${page_num}`)
    .then(res => res.json())
    .then(json => render(json.data))
}
    getUser(1);

 // 6. Написать функцию render, которая из полученных данных отрисует карточки пользователей (фото + имя) и добавить их в container

const render = data => {

    //  очищает контейнер:
    container.innerText = ''

        const users = data.map(({first_name, avatar}) => {

    const cardElem = document.createElement('div');
    const avatarElem = document.createElement('img');
    const nameElem = document.createElement('p');

    nameElem.innerText = first_name;   

    avatarElem.src = avatar;
    avatarElem.alt = first_name;

    cardElem.append(avatarElem, nameElem);
        return cardElem
    })
    container.append(...users);
   } 

 // 7. В html добавить кнопки 1 и 2 и настроить переключение между страницами по клику на кнопки. По умолчанию при перезагрузке страницы прогружается первая страница   

    const first_btn = document.querySelector('.first_btn');
    const second_btn = document.querySelector('.second_btn');

    first_btn.addEventListener('click', () => getUser(1));
    second_btn.addEventListener('click', () => getUser(2));

    









 
    
    
    






    