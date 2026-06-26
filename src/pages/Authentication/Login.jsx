import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { toast } from "react-toastify";


const Login = () => {

    const { userLogin, userGoogleLogin, passReset } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState()
    const [email, setEmail] = useState("")
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"


    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(() => {
                navigate(from, { replace: true })

            }).catch((error) => {
                const errorMsg = error.message;
                setError(errorMsg)
            })
    }

    const handleGoogleLogin = () => {
        userGoogleLogin()
            .then(() => {
                navigate(from, { replace: true })
            }).catch(() => {

            })
    }

    const resetPass = () => {
        if (!email) {
            toast("Please enter your email first.")
            return;
        }
        passReset(email)
            .then(() => {
                toast("password reset email sent. please check your inbox")
             })
            .catch(() => {
                toast("sorry")
             })
    }

    return (
        <div className="h-screen flex justify-center">
            <div className="card bg-secondary w-full max-w-sm m-auto shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Login</h2>
                    <fieldset className="fieldset">
                        <button onClick={handleGoogleLogin} type="button" className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p className="text-center border-b-2 my-4 border-accent"></p>
                        {
                            error && <p className="text-center text-red-400 font-semibold mt-2 text-md">Please provide correct information!</p>
                        }

                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Password" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}><FaEye className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer" /></button>
                        </div>

                        {/* forget password */}
                        <div><a className="link link-hover" onClick={resetPass}>Forgot password?</a></div>

                        <button className="btn btn-neutral mt-4">Login</button>

                        <p className="mt-2 text-center">Don't have an acoount? <Link to="/register" className="link link-hover text-primary">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;