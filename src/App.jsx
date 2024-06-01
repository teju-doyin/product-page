// import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import CollectionsPage from './pages/CollectionsPage.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { useState } from 'react'

function App() {
  const testText = 'this means lifting states works'
  const [itemCounter, setItemCounter] = useState(0)
  const [cartNumber,setCartNumber]= useState(0)
  const handleAddToCart=()=> {
    setCartNumber(itemCounter)
    setItemCounter(0)
  }
  const handleAdd =()=> setItemCounter(c=>itemCounter+1)
  const handleRemove =()=> setItemCounter(c=>itemCounter-1)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts cartNumber={cartNumber}/>}>
        <Route  index path='/' element={ <HomePage itemCounter={itemCounter} handleAddToCart={handleAddToCart} handleRemove={handleRemove} handleAdd={handleAdd}  /> }/>
        <Route  index path='/' element={ <CollectionsPage/> }/>
        <Route  index path='*' element={ <NotFoundPage/> }/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
