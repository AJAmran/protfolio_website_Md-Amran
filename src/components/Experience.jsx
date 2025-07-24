import { motion } from "framer-motion";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

const experience = [
  {
    title: "Web Developer",
    company: "X-group Chain Restaurant and Hospitality Management",
    startDate: "2024-02-01",
    endDate: null,
    expertise: "React.js, Tailwind CSS, Node.js",
    description:
      "Develop and maintain web applications using modern technologies to enhance user experience and streamline internal systems. Implement responsive designs and optimize application performance.",
    icon: <FaLaptopCode className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Computer Operator",
    company: "Road to Public University",
    startDate: "2022-09-08",
    endDate: "2023-12-01",
    expertise: "Microsoft Office, Google Workspace, IT Support",
    description:
      "Managed IT operations including system maintenance, document management, and client support. Streamlined processes using productivity tools and provided technical troubleshooting.",
    icon: <FaServer className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-600",
  },
];

const Experience = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const calculateDuration = (startDate, endDate = null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return [
      years > 0 && `${years} yr${years > 1 ? "s" : ""}`,
      remainingMonths > 0 &&
        `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`,
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24 bg-gray-50"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-[length:100px_100px]"></div>
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
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-4">
            <IoRocketSharp className="mr-2" />
            Professional Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional roles and contributions over the years
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 left-6 md:left-1/2 w-4 h-4 rounded-full ${job.color
                    .replace("bg-", "bg-")
                    .replace(
                      "text-",
                      "border-"
                    )} border-4 border-white transform -translate-x-1/2 z-10`}
                ></div>

                {/* Experience card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full ${job.color} mb-4`}
                    >
                      {job.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {job.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      {formatDate(job.startDate)} -{" "}
                      {job.endDate ? formatDate(job.endDate) : "Present"}
                      {" • "}
                      <span className="font-medium">
                        {calculateDuration(job.startDate, job.endDate)}
                      </span>
                    </p>
                    <div className="mb-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                        {job.expertise}
                      </span>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
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

export default Experience;
