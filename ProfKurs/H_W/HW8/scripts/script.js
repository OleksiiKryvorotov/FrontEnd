// const add_product_form = document.querySelector('.add_product_form');
// const products_container = document.querySelector('.products_container');


// let all_products = [];

// add_product_form.addEventListener('submit', event => {
//   event.preventDefault();
//   const { title, price, discount } = event.target;
//   const product = {
//     id: Date.now(),
//     title: title. value, 
//     price: +price.value,
//     discount: +discount.value
//   }
//   all_products.push(product);
//   render(all_products);
//   event.target.reset()
// });

// const render = products => {
//   products_container.innerText = '';
//   products.forEach(({ id, title, price, discount}) => {
//     const cardElem = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');
//     const discountElem = document.createElement('p');

//     titleElem.innerText = `Title: ${title}`;
//     priceElem.innerText = `Price: ${price}`;
//     discountElem.innerText = `Discount: ${discount}`;

//     cardElem.append(titleElem, priceElem, discountElem);
//     products_container.append(cardElem);
//   })
// }
 
 
 // ДЗ
// 6. Для каждой карточки создать элемент newPriceElem, куда записать значение цены с применением указанной скидки
// 7. Создать кнопку удаления всех товаров
// 8. На каждую карточку повесить кнопку удаления и реализовать удаление карточки по клику на кнопку

const add_product_form = document.querySelector('.add_product_form');
const products_container = document.querySelector('.products_container');
const delete_all_btn = document.querySelector('.delete_all_btn')


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
    const newPriceElem = document.createElement('p')

    const cross_icon = document.createElement('span')

    const discountedPrice = price * ( 1-discount)
   

    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;
    discountElem.innerText = `Discount: ${discount}`;
    newPriceElem.innerText =`New price: ${discountedPrice}`
    
    cross_icon.innerText = 'X'

         cross_icon.classList.add('cross_icon')
    
         cross_icon.addEventListener('click', () => {
            users = products.filter(el => el.id !== id)
            render(users)
  })

    cardElem.append(titleElem, priceElem, discountElem, newPriceElem, cross_icon);
    products_container.append(cardElem);
  })
}

  delete_all_btn.addEventListener('click', () => {
  all_products = []
  render(all_products)
})