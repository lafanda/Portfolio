import React from 'react';
import LayoutC from "../format/LayoutC";

function Contact() {
    return (
        <LayoutC>

            <h1 className="font-mono text-2xl md:text-3xl lg:text-4xl text-center z-10 mt-12 px-4 sm:px-6 lg:px-0">
                Thanks for taking the time to reach out.
            </h1>
            <h1 className="font-mono text-2xl md:text-3xl lg:text-4xl text-center z-10 px-4 sm:px-6 lg:px-0">
                How Can I Help?
            </h1>

            <form className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-0">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative z-0 mb-5 group">
                        <label htmlFor="name" className="font-mono block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name"
                               className="mt-1 block w-full py-2 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                               required/>
                    </div>
                    <div className="relative z-0 mb-5 group">
                        <label htmlFor="email"
                               className="font-mono block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" name="email" id="email"
                               className="mt-1 block w-full py-2 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                               required/>
                    </div>
                </div>
                <div className="relative z-0 mb-5 group">
                    <label htmlFor="message"
                           className="font-mono block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message"
                              className="mt-1 block w-full h-48 py-2 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                              required></textarea>
                </div>
                <div className="pt-8 flex flex-1 items-center justify-center flex-col relative">
                    <button type="submit"
                            className="text-orange-500 bg-transparent border border-orange-600 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-lg px-10 py-2 text-center transition-colors duration-300 ease-in-out dark:border-orange-600 dark:text-orange-500 dark:hover:bg-orange-600 dark:hover:text-white dark:focus:ring-orange-800">
                        Submit
                    </button>
                </div>

            </form>
        </LayoutC>
    );
}

export default Contact;
