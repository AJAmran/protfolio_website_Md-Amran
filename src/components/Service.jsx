import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaFileCode,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Define services data
const services = [
  {
    title: "Custom Web Development",
    description:
      "Tailored web development solutions to meet your specific business needs.",
    icon: <FaFileCode className="h-8 w-8 text-primary" aria-hidden="true" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Create websites that provide an optimal viewing experience on any device.",
    icon: <FaMobileAlt className="h-8 w-8 text-primary" aria-hidden="true" />,
  },
  {
    title: "Front-End Development",
    description:
      "Craft visually appealing and user-friendly interfaces to enhance user experience.",
    icon: <FaCode className="h-8 w-8 text-primary" aria-hidden="true" />,
  },
  {
    title: "Back-End Development",
    description:
      "Build secure and scalable server-side logic for robust applications.",
    icon: <FaCloud className="h-8 w-8 text-primary" aria-hidden="true" />,
  },
  {
    title: "Database Integration",
    description:
      "Integrate efficient databases to enhance performance and scalability.",
    icon: <FaDatabase className="h-8 w-8 text-primary" aria-hidden="true" />,
  },
  {
    title: "API Development",
    description:
      "Design and implement custom APIs for seamless communication between services.",
    icon: <FaCode className="h-8 w-8 text-primary" aria-hidden="true" />,
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="bg-white text-text py-8 sm:py-12 lg:py-16 overflow-x-hidden"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-lg text-center mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl text-primary font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Web Development Services
          </motion.h2>
          <motion.p
            className="mt-3 text-base sm:text-lg lg:text-xl text-mutedText"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Offering a suite of personalized web development services to elevate
            your online presence.
          </motion.p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="rounded-lg border border-gray-300 bg-cardBackground p-6 sm:p-8 shadow-md transition-transform transform hover:scale-105 hover:border-primary hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              style={{ maxWidth: "100%" }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="mt-4 text-lg sm:text-xl lg:text-2xl font-bold text-primary text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-mutedText text-center">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
