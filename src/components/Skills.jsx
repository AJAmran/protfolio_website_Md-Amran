import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'MongoDB', icon: FaDatabase },
  ];

  return (
    <section id="skills" className="bg-background py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map(skill => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className="text-4xl text-primary mb-4" />
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
