
import './header.css'

const Header = (props) => {
  const {productList} = props
  console.log(productList);
  return (
    <header>
      <div className="products">
      {productList.map(product => {
        return <div className="product-list">
        <img 
          className="product-img" 
          src= {product.images[0]} alt="" />
        <p className="product-name">{product.name}</p>
        <div className="price">
          <p className='origin-price'>{product.originalPrice}</p>
          <p className='sale'>{product.salePrice}</p>
        </div>
      </div>
      })}
      <div className='line-through'></div>
      </div>
    </header> 
  );
}

export default Header;