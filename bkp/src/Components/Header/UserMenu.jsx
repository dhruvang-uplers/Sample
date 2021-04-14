import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Store from "../../Redux/Store";
import { auth } from "../../firebase";

export default function UserMenu() {
    const [user, setUser] = useState(Store.getState().AuthReducer)
    const [userMenu, setUserMenu] = useState(false)
    const userMenuNode = useRef();

    function handleClickOutside(e) {
        e.preventDefault();
        if (userMenuNode.current && userMenuNode.current.contains(e.target)) { return; }
        setUserMenu(false);
    }

    useEffect(() => {
        userMenu ? document.addEventListener("mousedown", handleClickOutside) : document.removeEventListener("mousedown", handleClickOutside);
        Store.subscribe(() => setUser(Store.getState().AuthReducer))
    }, [userMenu])

    function logout() {
        auth.signOut().then(() => {
            //dispatch(receiveLogout());
        }).catch(error => {
            //dispatch(logoutError());
        });
    }

    let Menu;

    if (user.isAuthenticated) {
        Menu = <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="relative" ref={userMenuNode} >
                <button type="button" onClick={e => setUserMenu(!userMenu)} className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
                    <span>{user.user.user.username || user.user.user.email}</span>
                    <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className={"absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 " + (userMenu ? 'block' : 'hidden')}>
                    <NavLink to="/" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-700 hover:text-white">your profile</NavLink>
                    <NavLink to="/" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-700 hover:text-white">Your projects</NavLink>
                    <NavLink to="/" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-700 hover:text-white">Help</NavLink>
                    <NavLink to="/" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-700 hover:text-white">Settings</NavLink>
                    <button onClick={logout} className="w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-700 hover:text-white">Sign Out</button>
                </div>
            </div>
        </div >
    } else {
        Menu = <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <NavLink to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</NavLink>
            <NavLink to="/signup" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign up</NavLink>
        </div>
    }
    return (
        <>{Menu}</>
    )
}
