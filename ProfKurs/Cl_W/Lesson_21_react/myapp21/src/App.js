
import './App.css';
// для 1-4 задач:
// import Product from './components/Product';
// import { products } from'./data/products_data';
//  для 5и 6 задачи:
import ProductsContainer  from './components/ProductsContainer';



function App() {
  // Массив для 3 задачи,  но лучше создать в отдельном файле (4 зажача - смотри - products_data):
  
// const products = [
//   {
//     id: 1,
//     title: 'Product 1',
//     price: 10.99
//   },
//   {
//     id: 2,
//     title: 'Product 2',
//     price: 19.99
//   },
//   {
//     id: 3,
//     title: 'Product 3',
//     price: 7.99
//   },
//   {
//     id: 4,
//     title: 'Product 4',
//     price: 14.99
//   },
//   {
//     id: 5,
//     title: 'Product 5',
//     price: 9.99
//   }
// ];
// ----------------------------------------------------
  
  return (
    <div>
      {/* 1 и 2 задачи: */}
      {/* <Product title="Product 1" price="$10" />
      <Product title="Product 2" price="$20" />
      <Product title="Product 3" price="$30" /> */}
      {/* ------------------------------------------------- */}

      {/* 3 задача: */}      
     {/* {
      products.map(el => <Product key={el.id} title={el.title} price={el.price} />) 
      } */}

      {/* //4 задача: или так можно - создает объединенный props: */}
      {/* {products.map(el => <Product key={el.id} {...el} />)
     } */}
     {/* -------------------------------------------------- */}

     {/* 5 и 6 задачи: */}
     <ProductsContainer />
    </div>   
  );
  }

export default App;
