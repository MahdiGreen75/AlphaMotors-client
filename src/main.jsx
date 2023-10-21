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
import SignUp from './components/routes/SignUp';
import FormValidationProvider from './providers/FormValidationProvider';
import Login from './components/routes/Login';
import PrivateRoute from './components/routes/PrivateRoute';
import MyCart from './components/routes/MyCart';
import CartProdiver from './providers/CartProvider';
import ErrorPage from './components/routes/ErrorPage';
import SuccessMessage from './components/routes/SuccessMessage';
// import EmailProvider from './providers/EmailProvider';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/myCart",
        loader: () =>fetch("https://alpha-motors-server.vercel.app/getCart"),
        element: <MyCart></MyCart>
      },
      {
        path: "/_",
        element: <SuccessMessage></SuccessMessage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FormValidationProvider>
        <GenericValueProvider>
          <CartProdiver>
            <RouterProvider router={router} />
          </CartProdiver>
        </GenericValueProvider>
      </FormValidationProvider>
    </AuthProvider>
  </React.StrictMode>,
)
