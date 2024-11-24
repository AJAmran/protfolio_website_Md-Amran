import { motion } from "framer-motion";
import { GiGraduateCap } from "react-icons/gi";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "The Institution of Engineers, Bangladesh",
    duration: "Running",
    description:
      "Currently pursuing a degree with a focus on software engineering and web development.",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Chattogram Polytechnic Institute",
    duration: "2019 - 2023",
    description:
      "Comprehensive training for diverse sectors. Equips me with skills to thrive as a web developer and contribute to the economy and cultural areas.",
    grade: "3.50/4",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Department of Science",
    duration: "Completed",
    description:
      "Public examination conducted for the successful completion of secondary education.",
    grade: "4.61/5",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Education
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[45px] top-0 bottom-0 w-1 bg-primary"></div>
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12 pl-16"
          >
            {education.map((edu, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Timeline Icon */}
                <span className="absolute left-[-35px] top-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                  <GiGraduateCap />
                </span>
                {/* Content */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-200">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-slate-500 italic">{edu.duration}</p>
                  {edu.grade && (
                    <p className="text-sm text-slate-700 mt-1">
                      Grade: {edu.grade}
                    </p>
                  )}
                  <p className="text-slate-700 mt-4">{edu.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
