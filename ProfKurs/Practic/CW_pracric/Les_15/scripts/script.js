// const input = document.querySelector(".search");

// input.addEventListener("input", (event) => {
//     //1 способ:
//     const inputValue = event.target.value;
//     console.log(inputValue);

//     //2 способ:
    // console.log(event.target.value);
// })

// Задача 3 :
// На каждый ввод буквы делать запрос на этот адрес и в консоль вывести всех пользователей
// const input = document.querySelector(".search");

// input.addEventListener('input', (event) => {
// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(json => console.log(json))
// })

// Задача 4:
//  Отфильтровать всех пользователей по имени на предмет наличия слова которое в инпуте в их имени
// И вывести в консоль отфильтрованный массив

const input = document.querySelector(".search");


input.addEventListener("input", (event) => {
    fetch(`https://dummyjson.com/users/`)
      .then((res) => res.json())
      .then((data) => {
        const filteredUsers = data.users.filter((user) => {
          return user.firstName.includes(input.value);
        });
  
        console.log(filteredUsers);
      });
  });
  
