import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root.jsx';
import DashBoard from './layout/DashBoard.jsx'
import Afghan from './DashBoard/Afghan.jsx';
import Persian from './DashBoard/Persian.jsx';
import Indian from './DashBoard/Indian.jsx';
import Lamb from './DashBoard/Lamb.jsx';
import TakeAway from './DashBoard/TakeAway.jsx';
import Lunch from './DashBoard/Lunch.jsx';
import Contact from './DashBoard/contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
  },
  {
    path:"/dashBoard",
    element: <DashBoard></DashBoard>,
    children:[
      {index:true , element :<Afghan></Afghan>},
      {path:'persian',element:<Persian></Persian>},
      {path:'indian',element:<Indian></Indian>},
      {path:'lamb',element:<Lamb></Lamb>},
      {path:'takeAway',element:<TakeAway></TakeAway>},
      {path:'lunch',element:<Lunch></Lunch>},
      {path:'contact',element:<Contact></Contact>},
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
