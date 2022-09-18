import { useEffect } from 'react';
import { useState } from 'react';
import productApi from './api/productApi';
import './App.css';
import AddProduct from './components/AddProduct';
import Header from './components/Header';


function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        setProductList(response);
      } catch(errors) {
        console.log(errors);
      }
    }

    fetchProductList();
  });

  return (
    <div className="App">
      <div className='nav-bar'>
        <h1>amezon</h1>
      </div>
      <Header productList = {productList}/>
    </div>
  );
}

export default App;
