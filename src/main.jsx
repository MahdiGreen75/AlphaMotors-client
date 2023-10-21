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
import AddProduct from './components/routes/AddProduct';
import AuthProvider from './providers/AuthProvider'
// import Login from './components/routes/Login';
import SignUp from './components/routes/SignUp';
import FormValidationProvider from './providers/FormValidationProvider';
import Login from './components/routes/Login';

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
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FormValidationProvider>
        <GenericValueProvider>
          <RouterProvider router={router} />
        </GenericValueProvider>
      </FormValidationProvider>
    </AuthProvider>
  </React.StrictMode>,
)
