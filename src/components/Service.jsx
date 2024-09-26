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
    icon: <FaFileCode className="h-10 w-10 text-primary" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Create websites that provide an optimal viewing experience on any device.",
    icon: <FaMobileAlt className="h-10 w-10 text-primary" />,
  },
  {
    title: "Front-End Development",
    description:
      "Craft visually appealing and user-friendly interfaces to enhance user experience.",
    icon: <FaCode className="h-10 w-10 text-primary" />,
  },
  {
    title: "Back-End Development",
    description:
      "Build secure and scalable server-side logic for robust applications.",
    icon: <FaCloud className="h-10 w-10 text-primary" />,
  },
  {
    title: "Database Integration",
    description:
      "Integrate efficient databases to enhance performance and scalability.",
    icon: <FaDatabase className="h-10 w-10 text-primary" />,
  },
  {
    title: "API Development",
    description:
      "Design and implement custom APIs for seamless communication between services.",
    icon: <FaCode className="h-10 w-10 text-primary" />,
  },
];

export default function Service() {
  return (
    <section id="services" className="bg-background text-text">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <motion.h2
            className="text-3xl text-primary font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Web Development Services
          </motion.h2>
          <motion.p
            className="mt-4 text-mutedText"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Offering a suite of personalized web development services to elevate
            your online presence.
          </motion.p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="block rounded-4xl border border-gray-800 bg-cardBackground p-8 shadow-custom-light transition-transform transform hover:scale-105 hover:border-primary hover:shadow-custom-dark"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="mt-4 text-xl font-bold text-primary">
                {service.title}
              </h2>
              <p className="mt-1 text-sm text-mutedText">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
