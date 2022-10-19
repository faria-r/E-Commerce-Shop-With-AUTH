import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './Layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Login from './components/LogIn/Login';
import SignUp from './components/Sign Up/SignUp'
import Inventory from './components/Inventory/Inventory';
import { ProductsandCartLoader } from './Loaders/ProductsandCartLoader';
import Shipping from './components/Shipping/Shipping';
import Privateroutes from './Routes/Privateroutes';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          loader:()=>fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/order',
          loader:ProductsandCartLoader,
          element:<Orders></Orders>
        },
        {
          path:'/Inventory',
          element:<Privateroutes><Inventory></Inventory></Privateroutes>
        },
        {
          path:'/shipping',
          element:<Privateroutes><Shipping></Shipping></Privateroutes>
        },
        {
          path:'/about',
          element:<About></About>
              },
              {
                path:'/login',
                element:<Login></Login>
              },
              {
                path:'/signup',
                element:<SignUp></SignUp>
              }
      ]
    },

  ]);
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
