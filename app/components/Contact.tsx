"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email sent with data:", { fullName, email, message });
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  return (
    <section className="h-[100vh]">
      <h1 className="text-center  m-2 p-4">Contact </h1>
      <div className="flex  m-2 p-4">
        <div className="flex-1">
          <div>
            <h3>Social links</h3>
            <ul className="flex gap-4">
              <li>instagram</li>
              <li>linkedin</li>
              <li>Github</li>
            </ul>
            <h3>Email</h3>
            <h3>Permenant Address</h3>
            <h3>Present Address</h3>
          </div>
        </div>
        <div className="flex-1">
          <h1>Contact Form</h1>
          <form onSubmit={handleSendEmail} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={handleInputChange(setFullName)}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={handleInputChange(setEmail)}
              className="p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your message"
              required
              value={message}
              onChange={handleInputChange(setMessage)}
              className="p-2 border border-gray-300 rounded"
              rows={4}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
