import React from "react";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-center text-white">
          Welcome to my portfolio website! I am Purna Siva Sai, a dedicated professional in the field of DevOps.
          Together with Utkarsh, we have built a dynamic and visually appealing portfolio website using JavaScript. I took an
          active role in collaborating with Utkarsh, offering my expertise and contributing to various aspects of the project.
          One of my key contributions to the website was optimizing its functionality. I focused on enhancing the user experience 
          by implementing efficient and seamless navigation throughout the site. Leveraging my knowledge of JavaScript, I ensured 
          that the website delivered a smooth and interactive browsing experience.Furthermore, I played a vital role in deploying
          the portfolio website on Kubernetes, a scalable container orchestration platform. By utilizing GitLab's CI/CD pipeline, 
          I was able to automate the deployment process, enabling the website to auto-scale and handle increased traffic effectively. 
          This robust infrastructure ensures that the website remains highly available and responsive even during periods of high load.
          In addition to my technical skills, I possess a strong attention to detail and a passion for delivering excellence. I take 
          pride in my ability to adapt and learn quickly, which allows me to stay up-to-date with the latest industry trends and technologies.
          I am constantly seeking opportunities to expand my knowledge and improve my skills, ensuring that I can provide the best possible 
          solutions for my clients or employers.Thank you for visiting my portfolio website. Take a moment to explore the projects I have 
          worked on, including the dynamic portfolio website developed with JavaScript and deployed using Kubernetes. I look forward to 
          connecting with you and discussing how my skills and expertise can contribute to your next project or initiative.
            <a href="https://www.youtube.com/@javascriptmastery"> Credit: Adrian -JavaScript Mastery</a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-16">
          <div className="text-left"> {/* Add text-left class */}
            <div className="flex items-center mb-4">
              <FaHome className="text-white mr-2" size={20} />
              <div>
                <p className="text-white">Intern at IIT, Bombay</p>
                <p className="text-white">Powai, 400076.</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMailBulk className="text-white mr-2" size={20} />
              <h4 className="text-white">purnanaidu567@gmail.com</h4>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-white mr-2" size={20} />
              <h4 className="text-white">+91 824-777-3535</h4>
            </div>
            <div className="flex items-center">
              <DiGithubBadge className="text-white mr-2" size={20} />
              <h4 className="text-white">github.com/purna16</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
