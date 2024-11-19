import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaFileCode,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web Development",
    description:
      "Tailored web development solutions to meet your specific business needs.",
    icon: <FaFileCode className="h-8 w-8 text-primary" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Create websites that provide an optimal viewing experience on any device.",
    icon: <FaMobileAlt className="h-8 w-8 text-primary" />,
  },
  {
    title: "Front-End Development",
    description:
      "Craft visually appealing and user-friendly interfaces to enhance user experience.",
    icon: <FaCode className="h-8 w-8 text-primary" />,
  },
  {
    title: "Back-End Development",
    description:
      "Build secure and scalable server-side logic for robust applications.",
    icon: <FaCloud className="h-8 w-8 text-primary" />,
  },
  {
    title: "Database Integration",
    description:
      "Integrate efficient databases to enhance performance and scalability.",
    icon: <FaDatabase className="h-8 w-8 text-primary" />,
  },
  {
    title: "API Development",
    description:
      "Design and implement custom APIs for seamless communication between services.",
    icon: <FaCode className="h-8 w-8 text-primary" />,
  },
];

export default function Service() {
  return (
    <section id="services" className="bg-white text-text">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-lg text-center">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-primary font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Web Development Services
          </motion.h2>
          <motion.p
            className="mt-3 text-sm sm:text-base lg:text-lg text-mutedText"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Offering a suite of personalized web development services to elevate
            your online presence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="block rounded-lg border border-gray-300 bg-cardBackground p-6 sm:p-8 shadow-md transition-transform transform hover:scale-105 hover:border-primary hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex justify-center mb-3">{service.icon}</div>
              <h2 className="mt-3 text-base sm:text-lg lg:text-xl font-bold text-primary text-center">
                {service.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm lg:text-base text-mutedText text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
