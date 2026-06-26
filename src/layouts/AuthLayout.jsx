import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";


const AuthLayout = () => {

    const {loading} = useContext(AuthContext)
    const navigation = useNavigation();

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            {
                navigation.state === "loading" ? <Loading></Loading>
                    : <div className="flex flex-col h-screen">
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
            }
        </div>
    );
};

export default AuthLayout;