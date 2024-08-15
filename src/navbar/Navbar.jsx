import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  pt-10"> {/* Increased padding */}
                <a href="https://flowbite.com/" className="flex items-center space-x-4 rtl:space-x-reverse"> {/* Increased space */}
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo"/> {/* Increased height */}
                </a>
                <div className="flex md:order-2 space-x-4 md:space-x-0 rtl:space-x-reverse">
                    <button type="button"
                            className="text-orange-100 bg-transparent border border-orange-400 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-lg px-6 py-2 text-center transition-colors duration-300 ease-in-out dark:border-orange-600 dark:text-orange-500 dark:hover:bg-orange-600 dark:hover:text-white dark:focus:ring-orange-800"> {/* Increased text size, padding */}
                        Say Hello
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
