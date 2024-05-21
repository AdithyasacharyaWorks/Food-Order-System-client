import MainPage from "./Container/MainPage"
import store from "./Redux/index.js"
import { Provider } from 'react-redux'
import Cart from "./Container/Cart.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MenuList from "./Container/MenuList.js";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"catogory/menu/:id",
      element:<MenuList />
    }
  ]);

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App
