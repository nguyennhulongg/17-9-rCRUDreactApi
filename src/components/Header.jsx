
import productApi from '../api/productApi';
import './header.css'


const Header = (props) => {
  const {productList, setProductList} = props


  const handleDelete = async (id) => {
    try {
      await productApi.delete(id)
      const fetchProductList = async () => {
        try {
          const response = await productApi.getAll();
          setProductList(response);
        } catch(errors) {
          console.log(errors);
        }
      }
  
      fetchProductList();
    } catch (errors){
      console.log(errors);
    }
  }

  return (
    <header>
      <div className="products">
        {productList.map((product) => {
          return ( 
            <div key={product.id} className="product-list">
              <i onClick={() => handleDelete(product.id)} className="fa-solid fa-x"></i>
              
              <p className="product-name">{product.name}</p>
              <div className="price">
                <p className='origin-price'>{product.originalPrice}</p>
                <p className='sale'>{product.salePrice}</p>
              </div>
            </div>
          )
        })}
      </div>
    </header> 
  );
}

export default Header;