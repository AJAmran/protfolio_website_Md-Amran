import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-sm">&copy; 2024 Md. Amran Hossen. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
