import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MenuPage from "../Pages/MenuPage/MenuPage";
import Order from "../Pages/Order/Order";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <MenuPage /> },
      { path: "order", element: <Order /> },
      { path: "order/:category", element: <Order /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
