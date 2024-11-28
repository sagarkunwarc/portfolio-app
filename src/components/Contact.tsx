"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, message });
    
    // Simulate sending data to a server
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Display the submitted message
    setSubmittedMessage(`Message from ${name} (${email}): ${message}`);

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Contact Me</h2>
      <div className="dark:bg-gray-800 p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="max-w-lg mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
        {submittedMessage && (
          <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-md">
            <h3 className="font-bold mb-2">Submitted Message:</h3>
            <p>{submittedMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

