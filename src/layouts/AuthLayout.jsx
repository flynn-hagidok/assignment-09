import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const AuthLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <header>
                <Navbar></Navbar>
            </header>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;