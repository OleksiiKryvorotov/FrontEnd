// 1.  Создать форму с тремя инпутами (title, price, discount 0-1) и кнопкой
// 2. При сабмите форма собирает данные из инпутов, формирует из них объект (id, title, price, discount) и выводит его в консоль

// const add_product_form = document.querySelector('.add_product_form')

// add_product_form.addEventListener('submit', event => {
//     event.preventDefault()
//     const { title, price, discount} = event.target
//     const product = {
//         id: Date.now(),
//         title: title.value,
//         price: +price.value,
//         discount: +discount.value
//     }
//     console.log(product);

//     event.target.reset()
// })

// 3. Создать массив all_products и при сабмите формы добавлять в этот массив сформированный объект
// 4. Из массива all_products отрисовать карточки товаров 
// 5. Стилизовать карточки товаров

const add_product_form = document.querySelector('.add_product_form');
const products_container = document.querySelector('.products_container');


let all_products = [];

add_product_form.addEventListener('submit', event => {
  event.preventDefault();
  const { title, price, discount } = event.target;
  const product = {
    id: Date.now(),
    title: title. value, 
    price: +price.value,
    discount: +discount.value
  }
  all_products.push(product);
  render(all_products);
  event.target.reset()
});

const render = products => {
  products_container.innerText = '';
  products.forEach(({ id, title, price, discount}) => {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const discountElem = document.createElement('p');

    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;
    discountElem.innerText = `Discount: ${discount}`;

    cardElem.append(titleElem, priceElem, discountElem);
    products_container.append(cardElem);
  })
}

  // ДЗ
// 6. Для каждой карточки создать элемент newPriceElem, куда записать значение цены с применением указанной скидки
// 7. Создать кнопку удаления всех товаров
// 8. На каждую карточку повесить кнопку удаления и реализовать удаление карточки по клику на кнопку



