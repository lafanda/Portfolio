import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="relative bg-blueGray-200 pt-20 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-center lg:text-right justify-center lg:justify-between">
                    <div className="w-full lg:w-6/12 px-4 hidden lg:flex">
                        <div className="flex flex-wrap items-top mb-6">
                            <img src="photos/Initials.png" alt="logo" className="h-16"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-amber-600">Let's keep in touch!</h4>
                        <div className="mt-2 lg:mb-0 mb-6 flex justify-center lg:justify-end">
                            <a href="https://www.linkedin.com/in/yazanhailat/">
                                <button
                                    className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:text-amber-600"
                                    type="button">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </button>
                            </a>
                            <a href="https://github.com/lafanda">
                                <button
                                    className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:text-amber-600"
                                    type="button">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </button>
                            </a>
                            <a href="https://discord.com/users/340224159965511682">
                                <button
                                    className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:text-amber-600"
                                    type="button">
                                    <FontAwesomeIcon icon={faDiscord}/>
                                </button>
                            </a>
                            <a href="https://www.instagram.com/yazan_mmh/">
                                <button
                                    className="bg-white text-gray-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:text-amber-600"
                                    type="button">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300"/>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            © <span id="get-current-year">2021</span> yazanhailat.com
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
