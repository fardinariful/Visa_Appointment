import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout.jsx';
import Home from './Components/Home.jsx';
import AddVisa from './Components/AddVisa.jsx';
import AllVisa from './Components/AllVisa.jsx';
import VisaDetails from './Components/VisaDetails.jsx';

import AuthProvider from './Components/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import PrivateRoutes from './Components/PrivateRoutes.jsx';
import MyAddedVisa from './Components/MyAddedVisa.jsx';
import MyApplication from './Components/MyApplication.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://visa-navigator-server-zeta.vercel.app/visa')

      },
      {
        path:'/addVisa',
        element: <PrivateRoutes><AddVisa></AddVisa></PrivateRoutes>

      },
      {
        path: '/allVisa',
        element:<AllVisa></AllVisa>,
        loader: ()=> fetch('https://visa-navigator-server-zeta.vercel.app/visa')
      },
      {
        path:'/visaDetails/:id',
        element: <VisaDetails></VisaDetails>,
        loader: ({params})=> fetch(`https://visa-navigator-server-zeta.vercel.app/visa/${params.id}`)
      },
    
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/myAddedVisa/:createdBy',
        element: <PrivateRoutes><MyAddedVisa></MyAddedVisa></PrivateRoutes>,
        loader:({params})=> fetch(`https://visa-navigator-server-zeta.vercel.app/visa/email/${params.createdBy}`)
      },
      {
        path: 'myApplication/:email',
        element: <PrivateRoutes><MyApplication></MyApplication></PrivateRoutes>,
        loader: ({params})=> fetch(`https://visa-navigator-server-zeta.vercel.app/users/${params.email}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
