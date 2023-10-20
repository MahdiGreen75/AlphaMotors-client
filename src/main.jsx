import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/routes/Home.jsx';
import SectionBody from './components/SectionBody/SectionBody';
import ProductDetails from './components/routes/ProductDetails';
import DetailsOfButton from './components/routes/DetailsOfButton';
import GenericValueProvider from './providers/GenericValueProvider';
import Update from './components/routes/Update';
import AuthProvider from './providers/AuthProvider';
import Login from './components/routes/Login';
import SignUp from './components/routes/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <SectionBody></SectionBody>
      },
      {
        path: "/service/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/details/:id",
        element: <DetailsOfButton></DetailsOfButton>
      },
      {
        path: "/update/:id",
        element: <Update></Update>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GenericValueProvider>
        <RouterProvider router={router} />
      </GenericValueProvider>
    </AuthProvider>
  </React.StrictMode>,
)
