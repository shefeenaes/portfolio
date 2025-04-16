"use client";

import React, { useState, FormEvent, ChangeEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const dateInput =
      formRef.current?.querySelector<HTMLInputElement>('input[name="date"]');
    if (dateInput) {
      dateInput.value = new Date().toLocaleString();
    }

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          toast.success("Message sent", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: `custom-toast font-kumbhSans`,
          });
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Message not sent, check your network", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: `custom-toast font-kumbhSans`,
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  return (
    <section className="h-[100vh]">
      <ToastContainer />
      <h1 className="text-center m-2 p-4">Contact</h1>
      <div className="flex m-2 p-4">
        <div className="flex-1">
          <div>
            <h3>Social links</h3>
            <ul className="flex gap-4">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
            <h3>Email</h3>
            <h3>Permanent Address</h3>
            <h3>Present Address</h3>
          </div>
        </div>

        <div className="flex-1">
          <h1>Contact Form</h1>
          <form
            ref={formRef}
            onSubmit={handleSendEmail}
            className="flex flex-col gap-2"
          >
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={handleInputChange(setFullName)}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={handleInputChange(setEmail)}
              className="p-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              value={message}
              onChange={handleInputChange(setMessage)}
              className="p-2 border border-gray-300 rounded"
              rows={4}
            />
            <input type="hidden" name="date" />
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
