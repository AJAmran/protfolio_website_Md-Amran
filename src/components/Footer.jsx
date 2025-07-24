import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoDocumentText } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
      href: "https://github.com/AJAmran",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
      href: "https://www.linkedin.com/in/md-amran-hossen-713574206/",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
      href: "https://x.com/MdAmran29290306",
      label: "Twitter",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />,
      text: "mdamranhossen77@gmail.com",
      href: "mailto:mdamranhossen77@gmail.com",
    },
    {
      icon: <FaPhone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />,
      text: "+880 1857 692587",
      href: "tel:+8801857692587",
    },
    {
      icon: <IoDocumentText className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />,
      text: "Download Resume",
      href: "/Resume of Md. Amran Hossen.pdf",
      download: true,
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-5"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-white tracking-tighter">
              Md. Amran Hossen
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-sans font-normal text-gray-400 leading-relaxed max-w-xs sm:max-w-sm">
              Professional MERN Stack Developer creating modern web applications
              with cutting-edge technologies.
            </p>
            <nav
              aria-label="Social media links"
              className="flex space-x-3 sm:space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  whileHover={{ y: -3 }}
                  className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 sm:space-y-5"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-tight">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm md:text-base font-sans font-medium text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-5"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-tight">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-gray-500">{info.icon}</span>
                  {info.download ? (
                    <a
                      href={info.href}
                      download
                      className="text-xs sm:text-sm md:text-base font-sans font-medium text-gray-400 hover:text-white transition"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <a
                      href={info.href}
                      className="text-xs sm:text-sm md:text-base font-sans font-medium text-gray-400 hover:text-white transition"
                    >
                      {info.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 sm:space-y-5"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-tight">
              Location
            </h3>
            <address className="not-italic text-xs sm:text-sm md:text-base font-sans font-normal text-gray-400 leading-relaxed">
              Agargaon, Sher-E-Bangla Nagar
              <br />
              Dhaka-1207, Bangladesh
            </address>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-800 text-center text-xs sm:text-sm md:text-base font-sans font-normal text-gray-500"
        >
          <p>© {currentYear} Md. Amran Hossen. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
