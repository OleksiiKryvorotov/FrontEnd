//  Создать реакт-приложение, почистить проект от ненужных файлов
// Создать компонент Product
// Из массива объектов products, где каждый объект имеет свойства id, title и price, для каждого из объектов создать компонент Product в компоненте App

import './App.css';
import Product from './components/Product';


function App() {

  const products = [
    {
      id: 1,
      title: 'Guppy',      
      price: 2.99
    },
    {
      id: 2,
      title: 'Black_Molly',      
      price: 3.50
    },
    {
      id: 3,
      title: 'Scalar',      
      price: 15.99
    },
    {
      id: 4,
      title: 'Schwertrager',      
      price: 3.99
    },
    {
      id: 5,
      title: 'Danio',      
      price: 1.99
    }
  ]
  return (
      <div>
        {
          products
          .map(el => <Product title={el.title} price={el.price} key={el.id} />)
        }
      </div>
    )
}      

export default App;
