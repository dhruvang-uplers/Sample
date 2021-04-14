import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { auth } from "../firebase";
// import Store from "../Redux/Store";
// import { emailSignup } from "../Redux/Auth/Actions";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();


        //Store.dispatch(emailSignup(emailRef.current.value, passwordRef.current.value))

        // try {
        //     setLoading(true);
        //     // setError("");
        //     // await signup(emailRef.current.value, passwordRef.current.value);
        //     // history.push("/");
        // } catch {
        //     // setError("Failed to create an account");
        // }
        // setLoading(false);
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="p-5 shadow-md w-96">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl text-center mb-5">Sign up</h3>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Email</label>
                        <input type="email" name="email" ref={emailRef} className="border px-4 py-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Password</label>
                        <input type="password" name="password" ref={passwordRef} className="border px-4 py-2" />
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <button className="bg-indigo-700 text-white px-4 py-2 w-24" disabled={loading}>Login</button>
                        <div>Have an Account? <Link to="/login" className="text-indigo-700">Login Here</Link></div>
                    </div>
                </form>
            </div>
        </div >
    )
}
