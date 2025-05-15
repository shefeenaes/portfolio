"use client";

import React, { useState, FormEvent, ChangeEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { contact } from "../data/contact";
import {
  MailIcon,
  UserIcon,
  MessageSquareIcon,
  LoaderCircle,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
} from "lucide-react";
import Header from "./ui/Header";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleSendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
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
      )
      .finally(() => setLoading(false));
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  return (
    <section className="min-h-screen py-10 px-4 flex flex-col items-center ">
      {/* <section className="min-h-screen py-10 px-4 flex flex-col items-center bg-gray-50 dark:bg-gray-900"></section> */}
      <ToastContainer />
      {/* <h1 className="text-4xl font-bold mb-10 text-center">Contact Me</h1> */}
      <Header title="contact" />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-primary-light">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {"shefeena.e.s@gmail.com"}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-primary-light">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <a
                    href={"#"}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {`tel: +971 506338702`}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-primary-light">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {"Salah Al Din, Diera, Dubai"}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div className="mt-12" variants={itemVariants}>
              <h4 className="font-medium text-lg mb-3">Connect with me</h4>
              <div className="flex space-x-4">
                {contact.social.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <platform.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <form ref={formRef} onSubmit={handleSendEmail} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="flex items-center text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                <UserIcon className="w-4 h-4 mr-2" />
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={handleInputChange(setFullName)}
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                <MailIcon className="w-4 h-4 mr-2" />
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                value={email}
                onChange={handleInputChange(setEmail)}
                placeholder="your@email.com"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                <MessageSquareIcon className="w-4 h-4 mr-2" />
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={message}
                onChange={handleInputChange(setMessage)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input type="hidden" name="date" />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-all font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <SendIcon className="w-5 h-5 mr-2" />
              {loading ? (
                <>
                  <LoaderCircle className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Email"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
