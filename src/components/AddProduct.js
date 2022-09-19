import { useState } from "react";
import productApi from "../api/productApi";


const AddProduct = (props) => {
  const { productList, setProductList } = props;
  const [addedProduct, setAddedProduct] = useState({})

  const randomId = Math.floor(Math.random() * 10000);

  const newProductName = e => {
    const name = e.target.value 
    setAddedProduct(addedProduct => ({
      ...addedProduct,
        name: name,
        id: randomId,
        originalPrice:53,
        salePrice: 321543637,
        images: [
          'https://media3.scdn.vn/img4/2022/06_22/NojsNMbMOPwDccVbdSJY.jpg'
        ]
    }))
  }
  

  const handleAddProduct = async (e) => {
    e.preventDefault();
    productList.push(addedProduct)
    await productApi.post(productList)
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        setProductList(response);
      } catch(errors) {
        console.log(errors);
      }
    }

    fetchProductList();
    console.log(productList);
  }

  return (
    <form action="">
      <input type="text" onChange={newProductName} placeholder="Enter product's name"/>
      <input type="text" placeholder="Enter product's price"/>
      <button onClick={handleAddProduct}>Add new product</button>
    </form>
  );
}

export default AddProduct;