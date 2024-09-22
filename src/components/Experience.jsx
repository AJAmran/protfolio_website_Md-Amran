import React from 'react';

const experience = [
  {
    title: 'Executive Sous Chef',
    company: 'Bangabandhu International Conference Center',
    duration: 'March 2024 - Present',
    description: 'Leading the kitchen team, managing large events, and creating innovative recipes.'
  },
  {
    title: 'Web Developer',
    company: 'X-Group Chain Restaurant & Hospitality',
    duration: 'Jan 2022 - Feb 2024',
    description: 'Developed an internal management platform using the MERN stack for hospitality management.'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-6">Work Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-mutedText">{job.company}</p>
              <p className="text-mutedText italic">{job.duration}</p>
              <p className="text-mutedText mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
