import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading text-primary mb-6">About Me</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <img src="/profile.jpg" alt="Profile" className="w-48 h-48 rounded-full mb-6 lg:mb-0 lg:mr-8" />
        <p className="text-lg text-mutedText">
          I am a passionate MERN Stack Developer with a keen interest in building scalable web applications. With expertise in React, Node.js, MongoDB, and Tailwind CSS, I aim to create clean, efficient, and user-friendly solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
