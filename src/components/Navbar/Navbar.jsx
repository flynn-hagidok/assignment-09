import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png"
import { useContext, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { AuthContext } from "../../provider/AuthContext";

const Navbar = () => {

    const { user, userLogOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all-games">All Games</NavLink>
        {/* <NavLink to="/download">Download</NavLink> */}
        {/* <NavLink to="/whislist">Whislist</NavLink> */}
    </>

    const [open, setOpen] = useState(false);


    const handleSingOut = () => {
        userLogOut()
            .then(() => {
                navigate("/")
            }).catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-secondary">
            <nav className="flex items-center justify-between lg:p-4 p-2">
                <div className="flex items-center gap-2">
                    {/* menu for sm device */}
                    <span onClick={() => setOpen(!open)} className="cursor-pointer md:hidden">
                        {
                            open ? <IoClose /> : <IoMenu />
                        }
                        <ul className={`flex flex-col absolute top-14 py-2 space-y-3 shadow-md px-4 pb-2 bg-secondary z-1 ${open ? "left-0" : "-left-50"}`}>
                            {links}
                        </ul>
                    </span>

                    <NavLink to="/" className="flex items-center gap-1">
                        <img src={logo} alt="" className="w-9" />
                        <h3 className="lg:text-2xl font-semibold">GameHub</h3>
                    </NavLink>
                </div>

                {/*nav link */}
                <div className="space-x-6 hidden lg:flex anchor">
                    {links}
                </div>

                {/* auth btn & search bar */}
                <div className="flex items-center lg:space-x-4 md:space-x-4 space-x-2">
                    {user ? <>
                        <NavLink to="/"><img src={user.photoURL} alt="" className="w-12 h-12 rounded-[50%] object-fill cursor-pointer" /></NavLink>
                        <NavLink to="/login" onClick={handleSingOut} className="btn bg-primary border-0 lg:px-6 md:px-6">Log Out</NavLink>
                    </> : <>
                        <NavLink to="/login" className="btn bg-primary border-0 lg:px-6 md:px-6">Log In</NavLink>
                        <NavLink to="/register" className="btn bg-primary border-0 lg:px-6 md:px-6">Register</NavLink>
                    </>}
                </div>
            </nav>

            <div className="flex items-center justify-between p-2 px-4">
                <div className="space-x-6 hidden md:flex lg:hidden anchor">
                    {links}
                </div>
            </div>
        </div>
    );
};

export default Navbar;