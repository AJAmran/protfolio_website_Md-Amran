import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

// Helper function to calculate dynamic years and months of experience
const calculateDuration = (startDate, endDate = new Date()) => {
  const start = new Date(startDate);
  const end = endDate === null ? new Date() : new Date(endDate);
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  let totalYears = years;
  let totalMonths = months;

  if (months < 0) {
    totalYears -= 1;
    totalMonths += 12;
  }

  const yearText =
    totalYears > 0 ? `${totalYears} yr${totalYears > 1 ? "s" : ""}` : "";
  const monthText =
    totalMonths > 0 ? `${totalMonths} mo${totalMonths > 1 ? "s" : ""}` : "";

  return `${yearText}${yearText && monthText ? " " : ""}${monthText}`;
};

const experience = [
  {
    title: "Web Developer",
    company: "Bangabandhu International Conference Center",
    startDate: "2024-02-01",
    endDate: null,
    expertise: "IT (Application)",
    description:
      "Developing and maintaining web applications, integrating modern technologies such as React.js, Tailwind CSS, and Node.js to enhance user experience and improve internal systems.",
  },
  {
    title: "Computer Operator",
    company: "Road to Public University (Admission Coursing Center)",
    startDate: "2022-09-08",
    endDate: "2023-12-01",
    expertise: "Microsoft Office, Google Workspace, IT Support",
    description:
      "Managed IT support and computer operations, utilizing Microsoft Office and Google Workspace for data management, document design, and client service, while ensuring efficient processes and troubleshooting assistance.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="md:py-8 lg:py-16 py-6 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-bold text-center mb-10">
          Work Experience
        </h2>
        <div className="flex md:flex-row flex-col justify-center gap-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 w-full max-w-md hover:shadow-xl transition-shadow duration-300"
              aria-label={`${job.title} at ${job.company}`}
            >
              <div className="flex items-center mb-4">
                {/* Job Icon */}
                <div className="text-primary text-3xl mr-4">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-slate-500 italic">
                  {new Date(job.startDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                  {" - "}
                  {job.endDate
                    ? new Date(job.endDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })
                    : "Present"}
                  {" ("}
                  {calculateDuration(job.startDate, job.endDate)}
                  {")"}
                </p>
                <p className="text-sm text-slate-600 font-medium">
                  {job.expertise}
                </p>
              </div>
              <p className="text-slate-700 mt-4">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
