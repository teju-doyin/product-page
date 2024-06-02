import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
const MainLayouts = ({resetCart,cartNumber}) => {

  return (
    <>
        <NavBar resetCart={resetCart} cartNumber={cartNumber}/>
        <Outlet/>
    </>
  )
}

export default MainLayouts