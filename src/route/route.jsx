import { createBrowserRouter } from "react-router";
import RootLayout from "../page/RootLayout";
import Shop from "../page/Shop";
import Cart from "../page/Cart";
import Home from "../page/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [ 
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
