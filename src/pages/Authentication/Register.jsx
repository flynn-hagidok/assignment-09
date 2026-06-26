import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";


const Register = () => {

    const { createUser, userProfile, setUser, user } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState()
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name === "") {
            alert("enter your name")
            return;
        }
        if (name.length < 3) {
            alert("name should be 3 character")
            return;
        }

        const photo = form.photo.value;

        const email = form.email.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("please enter valid email");
            return;
        }

        const password = form.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex) {
            alert("password should be minimun 6 character")
            return;
        }
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(() => {
                userProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...user, displayName: name, photoURL: photo})
                        navigate("/")
                    }).catch(() => { })
            })
            .catch(error => {
                const errorMsg = error.message;
                setError(errorMsg);
            })
    }

    return (
        <div className="h-screen flex justify-center">
            <div className="card bg-secondary w-full max-w-sm m-auto shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Register</h2>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" />

                        {/*photo url */}
                        <label className="label">Name</label>
                        <input type="url" name="photo" className="input" placeholder="PhotoURL" />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Password" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}><FaEye className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer" /></button>
                        </div>

                        {/* forget password */}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <p className="text-center">{error ? "Email already in use!" : ""}</p>
                        <button className="btn btn-neutral mt-4">Register</button>

                        <p className="mt-2 text-center">Already have an acoount? <Link to="/login" className="link link-hover text-primary">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;