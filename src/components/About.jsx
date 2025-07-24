import { motion } from "framer-motion";
import { FaUserTie, FaCode, FaTools } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import profileImage from "../assets/Md Amran Hossen (2).png";

const About = () => {
  const stats = [
    {
      value: "2+",
      label: "Years Experience",
      icon: <FaUserTie className="h-5 w-5" />,
    },
    {
      value: "15+",
      label: "Projects Completed",
      icon: <FaCode className="h-5 w-5" />,
    },
    {
      value: "18+",
      label: "Technologies",
      icon: <FaTools className="h-5 w-5" />,
    },
    {
      value: "100%",
      label: "Dedication",
      icon: <IoRocket className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-[length:100px_100px]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                Professional Profile
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                MERN Stack Developer
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I am a passionate full-stack developer specializing in
                  building modern web applications using the MERN stack. With
                  over 3 years of professional experience, I create efficient,
                  scalable solutions that combine technical excellence with
                  exceptional user experiences.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My development philosophy centers on writing clean,
                  maintainable code while staying at the forefront of industry
                  trends. I approach each project with meticulous attention to
                  detail, ensuring robust architecture and intuitive interfaces.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 rounded-lg bg-blue-50 text-blue-600">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Container - Optimized for your 888x1112px image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 relative flex justify-center"
          >
            <div className="relative w-full max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] aspect-[888/1112] rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src={profileImage}
                alt="Md. Amran Hossen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
