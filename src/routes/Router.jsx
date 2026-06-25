import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import GamesDetails from "../pages/GameDetails/GamesDetails";
import AuthLayout from "../layouts/AuthLayout";
import Games from "../pages/Games/Games";


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
                    path: "all-games",
                    Component: Games,
                    loader: () => fetch("/allGames.json")
                }
            ]

    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/details/:id",
                Component: GamesDetails,
                loader: () => fetch("/allGames.json")
            }
        ]
    }
])

export default router;