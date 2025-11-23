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
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyPercel from "../pages/Dashboard/MyPercel/MyPercel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoutes>
            <Rider />
          </PrivateRoutes>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "my-percels",
        Component: MyPercel,
      },
    ],
  },
]);

export default router;
