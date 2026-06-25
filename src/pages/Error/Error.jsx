import { NavLink } from "react-router";
import errorIcon from "../../assets/errorIcon.png"



const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-secondary space-y-10">
            <title>Error Page</title>
            <link rel="shortcut icon" href={errorIcon} type="image/x-icon" />
            
            <img src={errorIcon} alt="" className="h-60" />
            <div className="text-center">
                <h2 className="text-6xl font-semibold">404</h2>
                <p className="text-2xl">Page Not Found!</p>
            </div>
            <NavLink to="/" className={"btn btn-primary px-10 py-6 text-xl"}>Go Back</NavLink>
        </div>
    );
};

export default Error;