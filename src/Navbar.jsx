// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div>
            <nav className="flex items-center bg-[#000000] h-28 fixed w-full z-20 top-0 left-0" style={{ borderBottomLeftRadius: '60px', borderBottomRightRadius: '60px' }}>
                <div className="flex flex-wrap items-center justify-between mx-auto p-4" style={{ width: '80%' }}>
                    <a href="" className="flex items-center">
                        <span className="font-medium text-white antialiased self-center text-5xl whitespace-nowrap dark:text-white">GAMER HUB 404</span>
                    </a>
                    <div className="flex md:order-2">
                        <Link to="/mobile-app/login">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                        </Link>
                        <Link to="/mobile-app/signup">
                            <button type="button" className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                        </Link>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            onClick={toggleNavbar}
                            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${isNavbarOpen ? 'active' : ''}`}
                            aria-controls="navbar-sticky"
                            aria-expanded={isNavbarOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto ${isNavbarOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <Link to="/mobile-app/">
                                <li>
                                    <a className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300" aria-current="page">Home</a>
                                </li>
                            </Link>
                            <Link to="/mobile-app/leaderboard">
                                <li>
                                    <a className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LeaderBoard</a>
                                </li>
                            </Link>
                            <Link to="/mobile-app/profile">
                                <li>
                                    <a className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

