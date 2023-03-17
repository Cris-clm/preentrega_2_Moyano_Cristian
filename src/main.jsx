import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ItemDetailContainer from "./Components/itemDetailContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ItemRoot from "./routes/item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: "",
  },
  {
    path: "/checkout",
    element: "",
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



