// import { useRef } from 'react';
import cart from './images/icon-cart.svg'
import menuIcon from './images/icon-menu.svg'
import closeIcon from './images/icon-close.svg'
import avatar from './images/image-avatar.png'
import Button from './Button.jsx'
import thumbnail from './images/image-product-1-thumbnail.jpg'
import deleteIcon from './images/icon-delete.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar({cartNumber,resetCart}) {
    const [showMenu, setShowMenu]= useState(false)
    const [message, setMessage]= useState('')
    const [items, setItems] = useState(cartNumber)
    const [showCartDetails, setShowCartDetails] = useState(false)
    const [emptyCart, setEmptyCart] = useState(false)
    const [isButtonVisible, setIsButtonVisible] = useState(true)
   
    const handleEmptyCart=()=>{
        
        setEmptyCart(c=>false)
        setIsButtonVisible(v=>false)
        setMessage(m=>'Your checkout was successful ')
        resetCart()
       

    }
    
    const handleDelete=()=>{
        setEmptyCart(c=>false)
        setIsButtonVisible(v=>false)
        setMessage(m=>'Your cart is empty ')

        resetCart()

    }
    const newcartNumber = cartNumber * 125
    const cartTotal = newcartNumber.toFixed(2)
    const handleOpenCart=()=>{
        
        if(cartNumber===0){
            setShowCartDetails(c=>true)
            setEmptyCart(c=>false)
            setIsButtonVisible(v=>false)
            setMessage(m=>'You have no item in your cart')
        }else{
            setShowCartDetails(c=>true)
            setEmptyCart(c=>true)
            setIsButtonVisible(v=>true)
        }

    }
    const handleCloseCart=()=>{
        setShowCartDetails(c=>false)
    }
    const linkActive = ({isActive})=>
            isActive? ' link-active ':'text-black  bottom-border relative' 
    const handleOpenMenu=()=> {
        setShowMenu(o=>!showMenu)
    }
    const handleCloseMenu=()=> {
        setShowMenu(c=>!showMenu)
    }
   
    
   
  return (
    <nav  className=' sticky top-0 w-full mb:'>
        <div className="nav-container py-6 flex justify-between w-11/12 mx-auto border-b border-solid border-grayishBlue ">
            <div className="left-nav flex gap-5 basis-4/5 items-center justify-items-center">
                <img className='cursor-pointer md:hidden' onClick={handleOpenMenu}  src={menuIcon} alt="" />
                <span className="logo text-2xl font-semibold cursor-default">sneakers</span>
                <div className={`fixed side-bar top-0 left-0 h-full w-64 bg-white transform ${showMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                     {/* side-bar side-nav-links*/}
                    <img className={!showMenu?'hidden':' cursor-pointer img w-5 '}onClick={handleCloseMenu} src={closeIcon} alt="" />
                    <ul className={showMenu? "side-nav-links ": '  hidden  relative   md:self-center md:flex md:justify-between md:gap-4  '}>
                        <NavLink className={linkActive} to='/'>Collections</NavLink>
                        <NavLink className={linkActive} to="/men-page">Men</NavLink>
                        <NavLink className={linkActive} to="/women-page">Women</NavLink>
                        <NavLink className={linkActive} to="/about">About</NavLink>
                        <NavLink className={linkActive} to="/contact">Contact</NavLink>
                    
                    </ul>
                </div>
            </div>
            <div className="right-nav relative flex justify-center gap-5 items-center ">
                <span className={cartNumber===0? ' hidden ':'top-0  left-2 text-xs absolute bg-orange text-white px-2 rounded-lg cursor-default '}>
                    {cartNumber}</span>
                <img onClick={handleOpenCart} className='img w-5 h-5 cursor-pointer ' src={cart} alt="cart" />
                <img className=' img w-8 rounded-2xl border border-solid hover:border-orange cursor-pointer transition delay-75' src={avatar} alt="avatar" />
            </div>
        </div>
        <div className={showCartDetails? 'shadow top-16 bg-white right-3 absolute w-[17rem] px-4 md:w-[20rem] z-50 rounded-xl py-5':'hidden'}>
                <div className="flex justify-between items-center">
                    <h5 className='text-black font-semibold ml-3' >Cart</h5>
                    <img onClick={handleCloseCart} width={15} className='cursor-pointer' src={closeIcon} alt="" />
                </div>
                <div className="line my-6 one-px bg-grayishBlue"></div>
                { emptyCart && cartNumber!==0 ? (
                    <div className=''>
                        <div className="cart-items mb-5 flex justify-between gap-5 items-center w-full mx-auto ">
                            <img className='img w-14 rounded' src={thumbnail} alt="" />
                            <div className="item-details text-darkGrayishBlue">
                                <p className=' text-sm  '>Fall Limited Edition Sneakers</p>
                                <p className="price">$125.00 x {cartNumber} <span className='text-black font-semibold'>${cartTotal}</span></p>
                            </div>
                            <img className='img cursor-pointer ' onClick={handleDelete} src={deleteIcon} alt="" />
                        </div>
                    </div>
                
                ):(
                    
                    <p className='  text-darkGrayishBlue  font-semibold w-full py-10 flex justify-center'>{message}</p>
                )

                }
            {isButtonVisible && (
                <Button  onClick={handleEmptyCart} > Checkout</Button>
            )}
        </div>
    </nav>
  )
}
