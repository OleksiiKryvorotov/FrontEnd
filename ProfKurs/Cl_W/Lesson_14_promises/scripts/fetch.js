const container = document.querySelector('.container')

//fetch запрос на сервер, всегда возвр. promise(с задержкой)!

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json()) // ответ
//   .then(data => render(data)) // преобр. ответа в формат, с которым удобно работать

// const render = arr => {
//     arr.forEach(({ name, username}) => {
//       const cardElem = document.createElement('div') 
//       const nameElem = document.createElement('p')
//       const userNameElem = document.createElement('p') 
    
//       nameElem.innerText = name
//       userNameElem.innerText = username

//       cardElem.append(nameElem, userNameElem)
//       container.append(cardElem)
//     })
// }    

// 1. Отправить fetch-запрос по ссылке https://jsonplaceholder.typicode.com/photos
// 2. Вывести полученные по запросу данные в консоль

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res => res.json())
// .then(json => console.log(json))

// 3. В container отрисовать карточки фотографий (url, title, albumId) из полученных по запросу данных

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res => res.json())
// .then(json => render(json))

// const render = arr => {
//   arr.forEach(({ url, title, albumId }) => {
//     const cardElem = document.createElement('div');
//     const imgElem = document.createElement('img');
//     const titleElem = document.createElement('p');
//     const albumElem = document.createElement('p');

//     imgElem.src = url;
//     imgElem.alt = title;

//     titleElem.innerText = `Title: ${title}`;
//     albumElem.innerText = `Album ID: ${albumId}`;

//     cardElem.append(imgElem, titleElem, albumElem);
//     container.append(cardElem);
//   })
// }

// 4. Вывести карточки только тех фотографий, чей albumId входит в список 3, 7, 43, 59, 32, 94. Использовать метод includes()

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res => res.json())
// .then(json => render(json))

// const render = arr => {
//   arr.forEach(({ url, title, albumId }) => {
//     if([3, 7, 43, 59, 32, 9].includes(albumId)) {
//     const cardElem = document.createElement('div');
//     const imgElem = document.createElement('img');
//     const titleElem = document.createElement('p');
//     const albumElem = document.createElement('p');

//     imgElem.src = url;
//     imgElem.alt = title;

//     titleElem.innerText = `Title: ${title}`;
//     albumElem.innerText = `Album ID: ${albumId}`;

//     cardElem.append(imgElem, titleElem, albumElem);
//     container.append(cardElem);
//     }
//   })
// }

// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/products
// 2. Вывести полученные по запросу данные (массив products) в консоль

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => console.log(json.products))

// 3. В container отрисовать карточки продуктов (images, title, price), у которых цена >= 500

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => render(json.products))

// const render = arr => {
//   arr.forEach(({ images, title, price }) => {
//     if(price >= 500) {
//     const cardElem = document.createElement('div');
//     const imgElem = document.createElement('img');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');

//     imgElem.src = images;
//     imgElem.alt = title;

//     titleElem.innerText = `Title: ${title}`;
//     priceElem.innerText = `Price: ${price}$`;

//     cardElem.append(imgElem, titleElem, priceElem);
//     container.append(cardElem);
//     }
//   })
// }

// 4. Если у товара рейтинг >= 4.5, то цвет заднего фона у этого товара сделать светло-зеленым. А если меньше - то светло-желтым

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => render(json.products))

const render = arr => {
  arr.forEach(({images, title, price, rating}) => {
    if(price >= 500){
      const cardElem = document.createElement('div');
      const imgElem = document.createElement('img');
      const titleElem = document.createElement('p');
      const priceElem = document.createElement('p');

      imgElem.src = images;
      imgElem.alt = title;

      titleElem.innerText = `Title: ${title}`;
      priceElem.innerText = `Price: ${price}$`;

      cardElem.style.backgroundColor = rating >= 4.5 ? 'lightgreen' : 'lightyellow';

      cardElem.append(imgElem, titleElem, priceElem);
      container.append(cardElem);
    }
  })
}








