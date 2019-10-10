import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header.jsx';
import Product from '../components/Product';
import ProductsContainer from '../components/ProductsContainer';
import Footer from '../components/Footer';

const Productos = [
  {
    "id": "0",
    "name": "Xiaomi",
    "price": "2500",
    "url": "https://images-na.ssl-images-amazon.com/images/I/414mElHTwDL._SX425_.jpg"
  },
  {
    "id": "1",
    "name": "Microsoft Surface Pro",
    "price": "10000",
    "url": "http://cdn.eglobalcentral.com.es/images/detailed/57/microsoft-surface-pro-2017-i7-256gb-8gb-ram-foazlu.jpg"
  },
  {
    "id": "2",
    "name": "Auriculares",
    "price": "500",
    "url": "http://coolbox.es/1608-large_default/auriculares-plegables-bluetooth-coolhead.jpg"
  },
  {
    "id": "3",
    "name": "Xiaomi",
    "price": "2500",
    "url": "https://images-na.ssl-images-amazon.com/images/I/414mElHTwDL._SX425_.jpg"
  },
  {
    "id": "4",
    "name": "Microsoft Surface Pro",
    "price": "10000",
    "url": "http://cdn.eglobalcentral.com.es/images/detailed/57/microsoft-surface-pro-2017-i7-256gb-8gb-ram-foazlu.jpg"
  },
  {
    "id": "5",
    "name": "Auriculares",
    "price": "500",
    "url": "http://coolbox.es/1608-large_default/auriculares-plegables-bluetooth-coolhead.jpg"
  },
  {
    "id": "6",
    "name": "Xiaomi",
    "price": "2500",
    "url": "https://images-na.ssl-images-amazon.com/images/I/414mElHTwDL._SX425_.jpg"
  },
  {
    "id": "7",
    "name": "Microsoft Surface Pro",
    "price": "10000",
    "url": "http://cdn.eglobalcentral.com.es/images/detailed/57/microsoft-surface-pro-2017-i7-256gb-8gb-ram-foazlu.jpg"
  },
  {
    "id": "8",
    "name": "Auriculares",
    "price": "500",
    "url": "http://coolbox.es/1608-large_default/auriculares-plegables-bluetooth-coolhead.jpg"
  },
  {
    "id": "9",
    "name": "Xiaomi",
    "price": "2500",
    "url": "https://images-na.ssl-images-amazon.com/images/I/414mElHTwDL._SX425_.jpg"
  },
  {
    "id": "10",
    "name": "Microsoft Surface Pro",
    "price": "10000",
    "url": "http://cdn.eglobalcentral.com.es/images/detailed/57/microsoft-surface-pro-2017-i7-256gb-8gb-ram-foazlu.jpg"
  },
  {
    "id": "11",
    "name": "Auriculares",
    "price": "500",
    "url": "http://coolbox.es/1608-large_default/auriculares-plegables-bluetooth-coolhead.jpg"
  },
];

const App = () => {
  console.log(Productos);

  return (
    <div className="App">
      <Header />
      <ProductsContainer listName="¡Productos en oferta!">
        {
          Productos.map(item => 
          <Product 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            url={item.url}
            />
          )
        }
      </ProductsContainer>
      <ProductsContainer listName="Productos destacados y más vendidos">
        {
          Productos.map(item => 
          <Product 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            url={item.url}
            />
          )
        }
      </ProductsContainer>
      <Footer />
    </div>
  );
}

export default App;
