import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>

      {/* Contact Form */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="mt-2 w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="mt-2 w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subject Input */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="mt-2 w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="mt-2 w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-telegram text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
