import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root.jsx';
import DashBoard from './layout/DashBoard.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
  },
  {
    path:"/dashBoard",
    element: <DashBoard></DashBoard>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
