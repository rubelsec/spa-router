import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './components/UserDeatils/UserDetails';

const router=createBrowserRouter([
{path:'/',
element:<Home></Home>,
children:[
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/users',
    loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
    element:<Users></Users>
  },
  {
    path:'/user/:userId',
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    element:<UserDetails></UserDetails>
  }
]
},


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
