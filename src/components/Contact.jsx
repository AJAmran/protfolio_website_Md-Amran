import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

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
    <section id="contact" className="py-20 bg-white">
      <Toaster />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-mutedText max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or just want to
            say hello, feel free to reach out.
          </p>
        </motion.div>

        {/* Grid Layout: Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 shadow-md border rounded-lg p-10"
          >
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary mb-6 text-center">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  {...register("message", { required: "Message is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                  placeholder="Write your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="w-full bg-primary text-white py-3 rounded-lg shadow-md hover:bg-secondary transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary mb-6 text-center">
                Contact Information
              </h3>
              <p className="text-lg text-mutedText">
                Reach out through any of the following channels:
              </p>
            </div>

            {/* Info Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-primary text-2xl" />
                <span className="text-lg text-gray-700">+123 456 7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-primary text-2xl" />
                <span className="text-lg text-gray-700">
                  info@yourwebsite.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <span className="text-lg text-gray-700">
                  123 Street, Your City
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-primary text-2xl hover:text-secondary transition"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-primary text-2xl hover:text-secondary transition"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-primary text-2xl hover:text-secondary transition"
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
