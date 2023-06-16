import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Donate from './Components/Donate/Donate';
import Take from './Components/Take/Take';
import Products from './Components/Products/Products';
import GeneratePin from './Components/GeneratePin/GeneratePin';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/donate',
          element: <Donate></Donate>
        },
        {
          path: '/take',
          element: <Take></Take>
        },
        {
          path: '/products',
          loader: () => fetch('products.json'),
          element: <Products></Products>
        },
        {
          path: '/generatepin',
          element: <GeneratePin></GeneratePin>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
