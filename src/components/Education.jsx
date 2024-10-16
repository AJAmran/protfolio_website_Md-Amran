import { motion } from "framer-motion";

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
    <section id="education" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300"
              aria-label={`${edu.degree} from ${edu.institution}`} // Accessibility improvement
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                {edu.degree}
              </h3>
              <p className="text-lg text-primary font-medium">
                {edu.institution}
              </p>
              <p className="text-slate-500 italic">{edu.duration}</p>
              {edu.grade && (
                <p className="text-sm text-slate-700 mt-1">
                  Grade: {edu.grade}
                </p>
              )}
              <p className="text-slate-700 mt-4">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
