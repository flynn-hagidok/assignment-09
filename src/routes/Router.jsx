import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import GamesDetails from "../pages/GameDetails/GamesDetails";
import Games from "../pages/Games/Games";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoutes from "../provider/PrivateRoutes";

import AuthLayout from "../layouts/AuthLayout";
import Loading from "../components/Loading/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error></Error>,
        children:
            [
                {
                    index: true,
                    Component: Home,
                },
                {
                    path: "/all-games",
                    Component: Games,
                    loader: () => fetch("/allGames.json"),
                    hydrateFallbackElement: <Loading></Loading>
                },
            ]

    },
    {
        path: "login",
        Component: Login,
    },
    {
        path: "register",
        Component: Register
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/details/:id",
                element: <PrivateRoutes><GamesDetails></GamesDetails></PrivateRoutes>,
                loader: () => fetch("/allGames.json"),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    }
])

export default router;