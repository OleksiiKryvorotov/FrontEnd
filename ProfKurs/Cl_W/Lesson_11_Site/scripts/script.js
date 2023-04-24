const category_flex_block = document.querySelector('#category_flex_block')

const categories_flex_data = [
    {
      id: 1,
      category: "Women's",
      img: 'media/category_women.png'
    },
    {
      id: 2,
      category: "Men's",
      img: 'media/category_men.png'
    },
    {
      id: 3,
      category: "Kids'",
      img: 'media/category_child.png'
    }
  ]

  categories_flex_data.forEach(({category, img}) => {
    const cardElem = document.createElement('div')
    const imgElem = document.createElement('div')
    const categoryElem = document.createElement('p')

    categoryElem.innerText = category
    cardElem.classList.add('category_card')
    imgElem.style.backgroundImage = `url('${img}')`
    // imgElem.style.height = '390px'
    // imgElem.style.width = '390px'


    cardElem.append(imgElem, categoryElem)
    category_flex_block.append(cardElem)
  })

  // NEW_ARRIVAKS_BLOCK:

  const new_arrivals_container = document.querySelector('.new_arrivals_container')

  const new_arrivals_data = [
    {
      id: 1,
      img: 'media/cap.png',
      title: 'Black and white sport cap',
      price: '15.00'
    },
    {
      id: 2,
      img: 'media/glasses.png',
      title: 'Metal bridge sunglasses',
      price: '20.00'
    },
    {
      id: 3,
      img: 'media/body.png',
      title: 'Green baby romper',
      price: '18.95'
    },
    {
      id: 4,
      img: 'media/pants.png',
      title: 'Mid-rise slim cropped fit jeans',
      price: '98.10'
    },
    {
      id: 5,
      img: 'media/ears_rings.png',
      title: 'Red dangle earrings',
      price: '45.30'
    },
    {
      id: 6,
      img: 'media/Baby shoes with laces.png',
      title: 'Baby shoes with laces',
      price: '77.54'
    }
  ]

  new_arrivals_data.forEach(({ img, title, price }) => {
    const cardElem = document.createElement('div');
    const imgELem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const heartElem = document.createElement('p');
  
    imgELem.style.backgroundImage = `url('${img}')`;
    cardElem.classList.add('new_arrival_card');
    heartElem.classList.add('fa-regular')
    heartElem.classList.add('fa-heart')
    heartElem.classList.add('heartElem')
    titleElem.classList.add('new_arrival_title');
    priceElem.classList.add('new_arrival_price');

    heartElem.addEventListener('click', () => heartElem.classList.toggle('liked'));

  
    titleElem.innerText = title;
    priceElem.innerText = `$${price}`;

    imgELem.append(heartElem)
    cardElem.append(imgELem, titleElem, priceElem);
    new_arrivals_container.append(cardElem);
  });


  
