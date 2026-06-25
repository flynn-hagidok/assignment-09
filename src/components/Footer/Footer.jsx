import { Link } from "react-router";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className="mt-10 bg-secondary py-10 md:pt-20 pb-10 md:px-10 px-2">
            <div className="md:flex justify-between border-b-2 border-b-base-200 md:px-10 lg:px-20 px-10 pb-10">
                <div className="md:flex flex-col items-center">
                    <img src={logo} alt="" className="w-20" />
                    <h4 className="font-semibold text-2xl">GameHub</h4>
                </div>
                <div className="mt-6 md:mt-0">
                    <h4 className="font-semibold">Terms & Condition</h4>
                    <div className="flex flex-col text-accent mt-2 space-y-2">
                        <Link>Privacy & Policy</Link>
                        <Link>Our Services</Link>
                        <Link>About Us</Link>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <h4 className="font-semibold">Social Links</h4>
                    <div className="flex flex-col text-accent mt-2 space-y-2">
                        <Link to="https://www.facebook.com/veniciusfleming.hagidok?mibextid=ZbWKwL">Facebook</Link>
                        <Link to="https://www.instagram.com/fleminghagidok?igsh=bGIxbWx6OXJlNmoy">Instagram</Link>
                        <Link to="https://github.com/flynn-hagidok">Github</Link>
                        <Link to="https://www.linkedin.com/in/fleming-hagidok27?utm_source=share_via&utm_content=profile&utm_medium=member_android">Linked-In</Link>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center">
                <p>Copyright &copy; 2026</p>
                <p>Developed by - Fleming Hagidok</p>
            </div>
        </div>
    );
};

export default Footer;