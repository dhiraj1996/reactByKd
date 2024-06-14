import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Bag from "./routes/Bag.jsx"
import HomePage from './routes/HomePage.jsx';
import myntraStore from './store/index.js';
import { Provider } from "react-redux";


let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <HomePage/>},
      {path:"/bag", element: <Bag/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
