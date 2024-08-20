import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left justify-between">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-amber-600">Let's keep in touch!</h4>
                        <div className="mt-2 lg:mb-0 mb-6">
                            <button
                                className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </button>
                            <button
                                className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                            <button
                                className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <FontAwesomeIcon icon={faDiscord} />
                            </button>
                            <button
                                className="bg-white text-gray-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <FontAwesomeIcon icon={faInstagram} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top justify-end mb-6">
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"></span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">put smth here</a>
                                    </li>
                                </ul>
                            </div>
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
