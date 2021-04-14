import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <>
            <NavLink exact to="/" className="text-base font-medium text-gray-900 hover:text-gray-700" activeClassName="text-indigo-700">Home</NavLink>
            <NavLink to="/about" className="text-base font-medium text-gray-900 hover:text-gray-700" activeClassName="text-indigo-700">About</NavLink>
            <NavLink to="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700" activeClassName="text-indigo-700">Contact</NavLink>
        </>
    )
}
