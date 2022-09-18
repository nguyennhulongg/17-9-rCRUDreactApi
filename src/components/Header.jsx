
import productApi from '../api/productApi';
import './header.css'


const Header = (props) => {
  const {productList} = props


  const handleDelete = async (id) => {
    try {
      await productApi.delete(id)
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
              <img 
                className="product-img" 
                src= {product.images[0]} alt="" />
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