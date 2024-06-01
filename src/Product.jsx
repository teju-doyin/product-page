import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import Button from './Button.jsx'
import { useState } from 'react'

const Product = () => {
    const [itemCounter, setItemCounter] = useState(0)
    const handleAdd =()=> setItemCounter(c=>itemCounter+1)
    const handleRemove =()=> setItemCounter(c=>itemCounter-1)
    const handleAddToCart=()=> {
        setItemCounter(0)
    }
  return (
    <div className="product-container  w-10/12 mx-auto">
        <h5 className='text-orange text-sm tracking-wider my-5  '>SNEAKER COMPANY</h5>
        <h1 className='font-semibold text-2xl mb-3 '>Fall Limited Edition <span className='block'>Sneakers</span></h1>
        <p className=' text-darkGrayishBlue max-w-sm  mb-6' >These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
            
        </p>
        <div className="prices flex  items-center gap-3 mb-5">
            <p className='font-semibold text-2xl'>$125.00</p>
            <span className='text-orange bg-paleOrange px-2 rounded-md text-sm self-center'>50%</span>
            <p className='text-grayishBlue line-through justify-items-end ml-auto'>$250.00</p>
        </div>
        <div>
            <div className="quantity flex py-3 mb-4  w-full mx-auto rounded-lg justify-around items-center bg-lightGrayishBlue">
                <img className='cursor-pointer h-1 ' onClick={handleRemove} src={minus} alt="" />
                <p className='font-semibold'>{ itemCounter<0? setItemCounter(0): itemCounter}</p>
                <img className='cursor-pointer h-3 ' onClick={handleAdd} src={plus} alt="" />
            </div>
            <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
    </div>
  )
}

export default Product