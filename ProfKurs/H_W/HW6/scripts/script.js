//  Дан массив с товарами. Для каждого товара создать карточку. Стилизовать карточку (title, price). Если товар есть на складе, то цвет заднего фона сделать зеленым. А если нет - то серым

const products = [
  {
    id: 1,
    title: 'Apple',
    price: 100,
    in_stock: true,
    photo: 'https://www.pngplay.com/wp-content/uploads/4/Apple-PNG-Pic-Background.png'
  },
  {
    id: 2,
    title: 'Orange',
    price: 200,
    in_stock: false,
    photo: 'https://www.boeschbodenspies.com/wp-content/uploads/2017/08/orange.png'
  },
  {
    id: 3,
    title: 'Kiwi',
    price: 150,
    in_stock: true,
    photo: 'https://static.vecteezy.com/system/resources/previews/008/532/603/original/kiwi-fruit-cutout-file-png.png'
  },
  {
    id: 4,
    title: 'Banana',
    price: 300,
    in_stock: false,
    photo: 'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png'
  },
  {
    id: 5,
    title: 'Pineapple',
    price: 400,
    in_stock: false,
    photo: 'https://static.vecteezy.com/system/resources/previews/008/848/362/non_2x/fresh-pineapple-free-png.png'
  }
]

  const cards_container = document.querySelector('.cards_container')

  // products.forEach(el => {
  //   const cardElem = document.createElement('div')
  //   const titleElem = document.createElement('p')
  //   const priceElem = document.createElement('p')

  //   titleElem.innerText = `Title: ${ el.title}`
  //   priceElem.innerText = `Price: ${ el.price}`

  //   cards_container.append(cardElem)
  //   cardElem.append(titleElem, priceElem)    
  // })

  // с деструктуризацией:

  // products.forEach(({title, price}) => {
  //   const cardElem = document.createElement('div')
  //   const titleElem = document.createElement('p')
  //   const priceElem = document.createElement('p')

  //   titleElem.innerText = `Title: ${title}`
  //   priceElem.innerText = `Price: ${price}`

  //   cards_container.append(cardElem)
  //   cardElem.append(titleElem, priceElem)    
  // })

  // дуструтуризация: {title, price, in_stock, photo}:
  products.forEach(({title, price, in_stock, photo}) => {
    const cardElem = document.createElement('div')
    const titleElem = document.createElement('p')
    const priceElem = document.createElement('p')
    const photoElem = document.createElement('img')

    titleElem.innerText = `Title: ${title}`
    priceElem.innerText = `Price: ${price}`

  // вот эти статичные стили лучше вынести в css:
    // cardElem.style.border = '1px solid black'
    // cardElem.style.padding = '10px'
    // cardElem.style.borderRadius = '10px'
    // cardElem.style.textAlign = 'center'

    // а меняющиеся стили лучше писать здесь в DOM:
    cardElem.classList.add('cardElem')
    cardElem.style.backgroundColor = in_stock ? 'Lightgreen' : 'Lightgray'

    photoElem.setAttribute('src', photo)
    photoElem.setAttribute('alt', title)

    cards_container.append(cardElem)
    cardElem.append(photoElem, titleElem, priceElem)    
  })