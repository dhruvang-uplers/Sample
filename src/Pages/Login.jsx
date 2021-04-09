import { Link, useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import { auth } from "../firebase";
import Store from "../Redux/Store";
import { login } from "../Redux/Auth/Actions";

export default function Login() {
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();

        await auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((userCredential) => {
            var user = userCredential.user;
            Store.dispatch(login({
                uid: user.uid,
                username: user.displayName,
                email: user.email,
                refreshToken: user.refreshToken,
                avatar: user.photoURL
            }))
            //history.push("/dashboard");
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error({ errorCode, errorMessage });
        });
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="p-5 shadow-md w-96">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl text-center mb-5">Sign in</h3>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Email</label>
                        <input type="email" name="email" ref={emailRef} className="border px-4 py-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Password</label>
                        <input type="password" name="password" ref={passwordRef} className="border px-4 py-2" />
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <button className="bg-indigo-700 text-white px-4 py-2 w-24">Login</button>
                        <Link to="/#" className="text-indigo-700">Forget Password?</Link>
                    </div>
                </form>
                <div className="text-center mb-5">
                    Need an Account? <Link to="/signup" className="text-indigo-700">Join Now</Link>
                </div>
                <div className="flex items-center justify-center">
                    <hr className="w-24 border-indigo-700" />
                    <span className="mx-4"> OR </span>
                    <hr className="w-24 border-indigo-700" />
                </div>
                <ul className="flex justify-center mt-4">
                    <li className="m-2">
                        <svg width="25" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve">
                            <path style={{ fill: "#FBBB00" }} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z" />
                            <path style={{ fill: "#518EF8" }} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
                            <path style={{ fill: "#28B446" }} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
                            <path style={{ fill: "#F14336" }} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z" />
                        </svg>
                    </li>
                    <li className="m-2">
                        <svg width="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0" fill="#4267b2" />
                            <path d="m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0" fill="#fff" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div >
    )
}
