import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/Footer.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/Menu.css";
import Index from './components/Index';
import Pruebas from './views/Pruebas';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Index/>
    },
    {
      path:"/testing",
      element:<Pruebas/>,
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
