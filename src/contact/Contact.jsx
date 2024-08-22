import React, { useState } from 'react';
import LayoutC from "../format/LayoutC";

function Contact() {
    // State hooks for each form field
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("access_key", process.env.REACT_APP_KEY);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then(res => res.json());

        if (res.success) {
            console.log("Form submitted successfully:", res);
            // Reset the form fields
            setName('');
            setEmail('');
            setMessage('');
            alert("Form submitted successfully!")
        } else {
            console.error("Form submission failed:", res);
        }
    };

    return (
        <LayoutC>
            <h1 className="font-mono text-2xl md:text-3xl lg:text-4xl text-center z-10 mt-12 px-4 sm:px-6 lg:px-0">
                Thanks for taking the time to reach out.
            </h1>
            <h1 className="font-mono text-2xl md:text-3xl lg:text-4xl text-center z-10 px-4 sm:px-6 lg:px-0">
                How Can I Help?
            </h1>
            <form onSubmit={onSubmit} className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-0">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative z-0 mb-5 group">
                        <label htmlFor="name" className="font-mono block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name"
                               value={name} onChange={e => setName(e.target.value)}
                               className="mt-1 block w-full py-2 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                               required/>
                    </div>
                    <div className="relative z-0 mb-5 group">
                        <label htmlFor="email"
                               className="font-mono block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email"
                               value={email} onChange={e => setEmail(e.target.value)}
                               className="mt-1 block w-full py-2 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                               required/>
                    </div>
                </div>
                <div className="relative z-0 mb-5 group">
                    <label htmlFor="message"
                           className="font-mono block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message"
                              value={message} onChange={e => setMessage(e.target.value)}
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
