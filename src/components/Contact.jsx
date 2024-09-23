import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://your-server.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <Toaster />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-primary text-center mb-12"
        >
          Contact Me
        </motion.h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-mutedText font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary transition duration-200"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-mutedText font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary transition duration-200"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-mutedText font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary transition duration-200"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
