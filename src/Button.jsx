// import React from 'react'

function Button ({onClick,children}){
  return (
    <button onClick={onClick} className="rounded-lg font-semibold mb-2 py-3 cursor-pointer bg-orange block text-white w-full mx-auto " >{children}</button>
  )
}

export default Button