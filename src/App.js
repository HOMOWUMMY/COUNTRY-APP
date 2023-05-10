import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import All from "./components/All";
import Search from "./components/Search";
import Navbar from "./pages/Navbar";
import Currency from "./components/Currency";
import Population from "./components/Population";
import Region from "./components/Region";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <All />
      },
      {
        path: 'search',
        element: <Search />
      },

      {
        path: 'Currency',
        element: <Currency />
      }, 

      {
        path: 'population',
        element: <Population />
      }, 

      {
        path: 'region',
        element: <Region />
      }
    ]
  },
  // {
  //   path: '/population',
  // }

]);
// MPA using react-router-dom 
function App() {


  return (
    <div className="App" style={{ margin: 'auto', width: '80%' }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;