import { useState } from "react";
import { NavLink } from "react-router-dom"
import Menu from "./Menu";
import UserMenu from "./UserMenu";
import UserMenuRes from "./UserMenuRes";


export default function Header() {
    const [resMenu, setResMenu] = useState(false)
    return (
        <header className="fixed w-full bg-white  border-b-2 border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <NavLink to="/">
                            <span className="sr-only">PMS</span>
                            <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                        </NavLink>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" onClick={(e) => setResMenu(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                            <span className="sr-only">Open menu</span>

                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10 text-gray-500">
                        <Menu />
                    </nav>
                    <UserMenu />
                </div>
            </div>
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" style={{ "display": resMenu ? 'block' : 'none' }}>
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                            </div>
                            <div className="-mr-2">
                                <button type="button" onClick={(e) => setResMenu(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <UserMenuRes />
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}
