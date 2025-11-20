import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import ForgetPassword from "../pages/authentication/ForgetPassword";
import SendCode from "../pages/authentication/SendCode";
import ResetPassword from "../pages/authentication/ResetPassword";
import Coverage from "../pages/Coverage/Coverage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgetPassword",
        Component: ForgetPassword,
      },
      {
        path: "/enterCode",
        Component: SendCode,
      },
      {
        path: "/resetPassword",
        Component: ResetPassword,
      },
    ],
  },
]);

export default router;
