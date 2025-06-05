import React from "react";
import Button from "./Button";

const AboutMe = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20 bg-black text-white">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src="/images/Sarthak.jpg" // Replace with actual path
          alt="Sarthak Kumar"
          className="w-64 h-auto rounded-2xl shadow-lg border border-gray-700"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-2xl text-left">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-white-70 leading-relaxed mb-6">
          I’m <strong>Sarthak Kumar</strong>, a full-stack developer passionate about building efficient, scalable web applications.
          I’ve recently graduated from <strong>IIT Guwahati</strong> with a B.Tech in Chemical Science and Technology, where I blended technical learning with leadership and community impact.
        </p>
        <p className="text-white-70 leading-relaxed mb-6">
          Through SDE internships at <strong>RemarkSkill</strong> and <strong>Abhigyan Academy</strong>, I’ve modernized legacy systems, built secure portals,
          and improved performance by over 40%. My tech stack includes <strong>React, Next.js, Node.js, and MongoDB</strong>, enabling me to deliver full end-to-end solutions.
        </p>
        <p className="text-white-70 leading-relaxed mb-6">
          Beyond tech, I’ve led initiatives for <strong>5000+ students</strong> as a student representative, organized major campus events, and strengthened peer-faculty engagement.
          My mission: to build products that don’t just work — but truly make a difference.
        </p>

     <Button
  text="Download CV"
  className="w-40 h-12"
  downloadLink="/Sarthak_CV.pdf" // File inside public/
  id={null} // So it doesn't try to scroll
/>

      </div>
    </section>
  );
};

export default AboutMe;
