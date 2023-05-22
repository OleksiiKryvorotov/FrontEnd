// 1 задача:

// Разделить экран на левый блок и правый блок
// Левый блок будет 300px в ширину, правый блок - гибкий
// В левом будут формы, в правом будут карточки

 //смотри html!

// 2 задача:

// Сверстать первую форму. 
// Цель формы - ввести id продукта, нажать на кнопку, отправить запрос на сервер, получить этот продукт и справа нарисовать карточку продукта 
// В форме должны быть инпут для ввода id и кнопка

 //смотри html!
//-------------------------------------------------- 

// 3 задача:

// JS логика: найти инпут и кнопку, подписать кнопку на событие клика, по клику сделать:

// 1. получить значение инпута где id 
// 2. отправить запрос по адресу   https://dummyjson.com/products/1 - где 1 это должен быть id из инпута
// 3. Вывести пока что в консоль объект полученного продукта

// const button = document.querySelector(".id_form__button");
// const input = document.querySelector(".id_form__input");

// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   // 1. получить значение инпута где id
//   console.log(input.value);

//   fetch(`https://dummyjson.com/products/1${input.value}`)
//   .then(res => res.json())
//   .then(data => console.log(data));
// });
//-----------------------------------------------------

// 4 задача:

// JS логика: продожение 3 задания - надо полученный продукт нарисовать в правом блоке экрана, который для карточек

// Рекомендую использовать метод insertAdjustmentHTML для создания верстки через JS

// Дизайн придумайте сами, но на карточке должно быть фото продукта из свойства images, название продукта из свойства "title", описание из 
// "description" и цена из price
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F4265556-&psig=AOvVaw3d1Jls3c73ClDgJECnHj5X&ust=1684570838042000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjqrMX5gP8CFQAAAAAdAAAAABAE 

// const button = document.querySelector(".id_form__button");
// const input = document.querySelector(".id_form__input");
// const cards = document.querySelector(".cards")


// button.addEventListener("click", (e) => {
//     e.preventDefault();
  
//     // 1. получить значение инпута где id
//     console.log(input.value);
  
//     // 2. отправить запрос по адресу   https://dummyjson.com/products/1 - где 1 это должен быть id из инпута
  
//     fetch(`https://dummyjson.com/products/${input.value}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const title = data.title;
//         const desc = data.description;
//         const price = data.price;
//         const url = data.images[0];
  
//         const html = `
//       <div class="card">
//           <img src="${url}" />
//           <h1>${title}</h1>
//           <p>${desc}</p>
//           <p>Price: ${price}$</p>
//       </div>`;

//         cards.innerHTML = "";
//         cards.insertAdjacentHTML("afterbegin", html);
//       });
//   });


// 5 задача:

// 2 форма в левом блоке. Ее надо сделать под первой формой чуть чуть отступив сверху. Цель формы - вводить туда фильтр по минимальной и максимальной цене, нажимать кнопку и рисовать отфильтрованные карточки в правом блоке

// В рамках этой задачи - делаем только форму. 2 инпута + 1 кнопка




// 6 БОЛЬШАЯ ЗАДАЧА:

// JS логика: найти оба инпута и кнопку из этой формы, подписать кнопку на клик либо подписать форму на submit (по желанию)

// По клику или submit - отправить запрос по адресу https://dummyjson.com/products/ - получить все продукты разджейсоненные разумеется) У вас будет массив из всех продуктов. Осталось их отфильтровать

// Используем метод filter и фильтуем по свойству price. Мин и макс значения берем из инпутов

// И полученный отфильтрованный массив через метод forEach рисуем в правом блоке





