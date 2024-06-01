import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
const MainLayouts = ({cartNumber}) => {

  return (
    <>
        <NavBar cartNumber={cartNumber}/>
        <Outlet/>
    </>
  )
}

export default MainLayouts