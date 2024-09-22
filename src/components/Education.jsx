import React from 'react';

const education = [
  {
    degree: 'BSc in Computer Science',
    institution: 'University of Dhaka',
    duration: '2018 - 2022',
    description: 'Graduated with distinction, specialized in software engineering and web development.'
  },
  {
    degree: 'Diploma in Web Development',
    institution: 'Xinxian Hospitality Training Institute',
    duration: '2022 - 2023',
    description: 'Specialized in MERN stack development.'
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-6">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-mutedText">{edu.institution}</p>
              <p className="text-mutedText italic">{edu.duration}</p>
              <p className="text-mutedText mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
