import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef, useEffect } from "react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const formRef = useRef();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("J8xQTtsNvo1iklkx7");
  }, []);

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        "service_xl9nmjv",
        "template_ajepm1c",
        formRef.current,
        "J8xQTtsNvo1iklkx7"
      );

      toast.success("Message sent successfully!", { duration: 4000 });
      reset();
    } catch (error) {
      toast.error(`Failed to send message: ${error.text || error.message}`, {
        duration: 4000,
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)`,
                boxShadow: `0 0 10px rgba(59, 130, 246, 0.2)`,
              }}
              animate={{
                y: [0, Math.random() * 80 - 40],
                x: [0, Math.random() * 80 - 40],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white shadow-md mb-4">
            <FaPaperPlane className="mr-2 h-5 w-5" />
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project idea or looking to collaborate? Send me a message,
            and let&apos;s create something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                  <IoDocumentText className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Send a Message
                </h3>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    {...register("name", {
                      required: "Please enter your name",
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    {...register("message", {
                      required: "Please enter your message",
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <FaPaperPlane className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Contact Details
                </h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-full bg-blue-50 text-blue-600 mt-1">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <a
                      href="tel:+8801857692587"
                      className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      +880 1857 692587
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-full bg-blue-50 text-blue-600 mt-1">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <a
                      href="mailto:mdamranhossen77@gmail.com"
                      className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      mdamranhossen77@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-full bg-blue-50 text-blue-600 mt-1">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Location
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                      Agargaon, Sher-E-Bangla Nagar, Dhaka-1207, Bangladesh
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8"
              >
                <h4 className="text-sm font-medium text-gray-500 mb-4">
                  Connect with Me
                </h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/md-amran-hossen-713574206/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://x.com/MdAmran29290306"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all shadow-sm"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-r from-white/80 to-blue-50/80 rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white">
                  <IoDocumentText className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Download My Resume
                </h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Explore my professional background and skills in detail by
                downloading my resume.
              </p>
              <motion.a
                href="/Resume of Md. Amran Hossen.pdf"
                download
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg shadow-md hover:from-gray-800 hover:to-gray-700 transition-all"
              >
                <IoDocumentText className="h-5 w-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "14px",
            padding: "12px 16px",
            borderRadius: "8px",
          },
          success: {
            style: {
              background: "#10B981",
              color: "white",
            },
          },
          error: {
            style: {
              background: "#EF4444",
              color: "white",
            },
          },
        }}
      />
    </section>
  );
};

export default Contact;
