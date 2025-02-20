
import Home from './assets/components/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './assets/components/AboutPage'
import ContactPage from './assets/components/ContactPage'
import BlogPage from './assets/components/BlogPage'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<AboutPage/>
    },
    {
      path:'/contact',
      element:<ContactPage/>
    },
    {
      path:'/blog',
      element:<BlogPage/>
    },

  ]
)



function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
