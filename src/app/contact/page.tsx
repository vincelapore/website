import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">
        Feel free to reach out to me using the form below.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-700 rounded bg-gray-800" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-700 rounded bg-gray-800" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" rows={4} className="w-full p-2 border border-gray-700 rounded bg-gray-800"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Send</button>
      </form>
    </div>
  );
} 