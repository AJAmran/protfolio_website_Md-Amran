import { motion } from "framer-motion";

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

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Work Experience
        </h2>
        <div className="flex md:flex-row flex-col justify-center gap-5">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300"
              aria-label={`${job.title} at ${job.company}`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {job.title}
                </h3>
                <p className="text-lg text-primary font-medium">
                  {job.company}
                </p>
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
