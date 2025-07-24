import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCode,
  FaCloud
} from "react-icons/fa";
import { motion } from "framer-motion";
import { IoRocketSharp } from "react-icons/io5";

const services = [
  {
    title: "Custom Web Development",
    description: "Bespoke solutions crafted with cutting-edge technologies tailored to your business objectives.",
    icon: <FaLaptopCode className="h-5 w-5" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Responsive Web Design",
    description: "Flawless adaptive designs that deliver optimal viewing experiences across all devices.",
    icon: <FaMobileAlt className="h-5 w-5" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Front-End Development",
    description: "Engaging user interfaces built with React, Next.js and modern component architectures.",
    icon: <FaCode className="h-5 w-5" />,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Back-End Development",
    description: "Scalable server solutions powered by Node.js, Express and cloud-native patterns.",
    icon: <FaServer className="h-5 w-5" />,
    color: "from-rose-500 to-rose-600"
  },
  {
    title: "Database Solutions",
    description: "Optimized data management systems with MongoDB, PostgreSQL and efficient schemas.",
    icon: <FaDatabase className="h-5 w-5" />,
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "API Development",
    description: "High-performance REST and GraphQL APIs with robust security and documentation.",
    icon: <FaCloud className="h-5 w-5" />,
    color: "from-indigo-500 to-indigo-600"
  }
];

const Service = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-[length:100px_100px]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-4">
            <IoRocketSharp className="mr-2" />
            Services Overview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Development Services
          </h2>
          <p className="text-lg text-gray-600">
            End-to-end solutions designed to transform your digital vision into reality
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.color}"></div>
              <div className="relative p-8 h-full">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 bg-gradient-to-br ${service.color}`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to start your project?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Let&#39;s collaborate to build something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;