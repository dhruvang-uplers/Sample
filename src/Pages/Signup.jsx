import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="p-5 shadow-md w-96">
                <form>
                    <h3 className="text-2xl text-center mb-5">Sign up</h3>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Email</label>
                        <input type="email" name="email" className="border px-4 py-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Password</label>
                        <input type="password" name="password" className="border px-4 py-2" />
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <button className="bg-indigo-700 text-white px-4 py-2 w-24">Login</button>
                        <div>Have an Account? <Link to="/login" className="text-indigo-700">Login Here</Link></div>
                    </div>
                </form>
            </div>
        </div >
    )
}
