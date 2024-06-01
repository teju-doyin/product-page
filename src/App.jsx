// import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import CollectionsPage from './pages/CollectionsPage.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts/>}>
        <Route  index path='/' element={ <HomePage/> }/>
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
