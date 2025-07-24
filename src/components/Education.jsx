import { motion } from "framer-motion";
import { GiGraduateCap } from "react-icons/gi";
import { IoBookOutline, IoSchoolOutline } from "react-icons/io5";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "The Institution of Engineers, Bangladesh",
    duration: "2023 - Present",
    description: "Currently pursuing advanced studies in software engineering with a focus on modern web technologies and system architecture.",
    icon: <IoSchoolOutline className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Chattogram Polytechnic Institute",
    duration: "2019 - 2023",
    description: "Comprehensive technical education covering programming fundamentals, database systems, and software development methodologies.",
    grade: "GPA: 3.50/4.00",
    icon: <GiGraduateCap className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Science Department",
    duration: "2017 - 2019",
    description: "Completed with distinction, laying the foundation for technical education with strong mathematics and science background.",
    grade: "GPA: 4.61/5.00",
    icon: <IoBookOutline className="h-6 w-6" />,
    color: "bg-green-100 text-green-600"
  }
];

const Education = () => {
  return (
    <section id="education" className="relative py-16 sm:py-20 lg:py-24 bg-gray-50">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500 to-purple-500 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Educational Background
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and formal training in computer science
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 left-6 md:left-1/2 w-4 h-4 rounded-full ${item.color.replace('bg-', 'bg-').replace('text-', 'border-')} border-4 border-white transform -translate-x-1/2 z-10`}></div>
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.color} mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      {item.duration}
                    </p>
                    {item.grade && (
                      <p className="text-sm font-medium text-gray-700 mb-3">
                        {item.grade}
                      </p>
                    )}
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;