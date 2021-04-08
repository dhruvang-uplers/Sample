import { NavLink } from "react-router-dom";
export default function UserMenuRes() {
    const user = null;
    let Menu;
    if (user) {
        Menu = <nav className="grid gap-y-8">
            <NavLink to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">Your profile</NavLink>
            <NavLink to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">Your projects</NavLink>
            <NavLink to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">Help</NavLink>
            <NavLink to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">Settings</NavLink>
            <button to="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">Sign Out</button>
        </nav>
    } else {
        Menu = <div>
            <NavLink to="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign up</NavLink>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer? <NavLink to="/login" className="text-indigo-600 hover:text-indigo-500">Sign in</NavLink>
            </p>
        </div>
    }
    return (
        <>{Menu}</>
    )
}
