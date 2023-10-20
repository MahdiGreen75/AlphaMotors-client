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
        path: "/products/details/:id",
        element: <DetailsOfButton></DetailsOfButton>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GenericValueProvider>
      <RouterProvider router={router} />
    </GenericValueProvider>
  </React.StrictMode>,
)
