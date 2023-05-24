import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <MenuPage /> },
    ],
  },
]);
export default router;
