import Product from '../Product.jsx'
import Cart from '../Cart.jsx'

const HomePage = ({ handleAddToCart,itemCounter,handleRemove,handleAdd}) => {
 
  return (
    <>
      <Cart />
      <Product  itemCounter={itemCounter} handleAddToCart={handleAddToCart} handleRemove={handleRemove} handleAdd={handleAdd} />
    </>
  )
}

export default HomePage