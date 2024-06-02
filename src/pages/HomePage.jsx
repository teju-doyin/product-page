import Product from '../Product.jsx'
import Cart from '../Cart.jsx'

const HomePage = ({ resetCart,handleAddToCart,itemCounter,handleRemove,handleAdd}) => {
 
  return (
    <>
      <Cart />
      <Product resetCart={resetCart} itemCounter={itemCounter} handleAddToCart={handleAddToCart} handleRemove={handleRemove} handleAdd={handleAdd} />
    </>
  )
}

export default HomePage