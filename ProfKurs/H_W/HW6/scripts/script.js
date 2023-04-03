const products = [
    {
      id: 1,
      title: 'Apple',
      price: 100,
      in_stock: true
    },
    {
      id: 2,
      title: 'Orange',
      price: 200,
      in_stock: false
    },
    {
      id: 3,
      title: 'Kiwi',
      price: 150,
      in_stock: true
    },
    {
      id: 4,
      title: 'Banana',
      price: 300,
      in_stock: false
    }
  ]
  
const productsContainer = document.getElementById('products-container');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  
  const productTitle = document.createElement('h2');
  productTitle.innerText = product.title;
  productCard.appendChild(productTitle);
  
  const productPrice = document.createElement('p');
  productPrice.innerText = `Price: ${product.price}$`;
  productCard.appendChild(productPrice);
  
  if (product.in_stock) {
    productCard.classList.add('in-stock');
  } else {
    productCard.classList.add('out-of-stock');
  }
  
  productsContainer.appendChild(productCard);
});
