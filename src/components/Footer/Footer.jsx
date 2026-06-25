import { Link } from "react-router";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className="mt-10 bg-secondary py-10 md:pt-20 pb-10 md:px-10 px-2">
            <div className="md:flex justify-between border-b-2 md:px-10 lg:px-20 px-10 pb-10">
                <div className="md:flex flex-col items-center">
                    <img src={logo} alt="" className="w-20" />
                    <h4 className="font-semibold text-2xl">GameHub</h4>
                </div>
                <div className="mt-6 md:mt-0">
                    <h4 className="font-semibold">Terms & Condition</h4>
                    <div className="flex flex-col text-accent mt-2 space-y-2">
                        <Link>Private & Policy</Link>
                        <Link>Our Services</Link>
                        <Link>About Us</Link>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <h4 className="font-semibold">Social Links</h4>
                    <div className="flex flex-col text-accent mt-2 space-y-2">
                        <Link>Facebook</Link>
                        <Link>Instagram</Link>
                        <Link>Github</Link>
                        <Link>Link-In</Link>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center">
                <p>Copyright &copy; 2026</p>
                <p>Develop by - Fleming Hagidok</p>
            </div>
        </div>
    );
};

export default Footer;