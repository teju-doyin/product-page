import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
const MainLayouts = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default MainLayouts