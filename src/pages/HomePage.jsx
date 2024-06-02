import Product from '../Product.jsx'
import Cart from '../Cart.jsx'

const HomePage = ({ resetItemCounter,handleAddToCart,itemCounter,handleRemove,handleAdd}) => {
 
  return (
    <>
      <Cart />
      <Product resetItemCounter={resetItemCounter} itemCounter={itemCounter} handleAddToCart={handleAddToCart} handleRemove={handleRemove} handleAdd={handleAdd} />
    </>
  )
}

export default HomePage