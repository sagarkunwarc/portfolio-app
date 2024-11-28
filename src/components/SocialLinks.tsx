// SocialLinks.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const SocialLinks: React.FC = () => (
  <section className="mb-12" data-aos="fade-up">
    <h2 className="text-center mb-12 bg-cover bg-center h-26">
      Connect with Me
    </h2>
    <div className="flex justify-center gap-4">
      <a
        href="https://github.com/sagarkunwarc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/sagarkunwar/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://partner.cloudskillsboost.google/public_profiles/f0d3c4be-0bcb-43a5-8665-bbdaa63b022e"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl"
      >
        <FaGoogle />
      </a>
    </div>
  </section>
);

export default SocialLinks;
