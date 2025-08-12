

import { Card, Typography } from "@material-tailwind/react";
import gsap from "gsap";

const About = () => {
  return (
    <div className="bg-[#0f1629] min-h-screen py-16 text-white flex justify-center items-start">
      <Card className="container mx-auto bg-transparent shadow-none px-6 lg:px-12">
        <h2
          className="text-4xl font-bold text-center py-10 text-[#38bdf8] tracking-wide uppercase"
          data-aos="fade-up"
        >
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Side: Introduction */}
          <div className="flex flex-col justify-between">
            <div>
              <h1
                className="text-4xl uppercase py-5 font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#38bdf8]"
                id="banner-title"
              >
                Who I Am
              </h1>
              {/* <Typography variant="paragraph" className="text-lg leading-8 text-white">
                Hello! I’m{" "}
                <span
                  onMouseEnter={() => gsap.to("#cursor", { scale: 4, duration: 0.3 })}
                  onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                  className="font-bold text-[#10b981]"
                >
                  Noushin Zahan
                </span>
                , a passionate frontend developer specialized in React, Tailwind, Express, and MongoDB. I focus on building clean, responsive, and accessible web applications that offer real value to users.
              </Typography>
              <br />
              <Typography variant="paragraph" className="text-lg leading-8 text-white">
                I'm currently expanding my skills in backend development, diving deeper into Node.js and RESTful API architecture to grow as a full-stack developer. I'm committed to continuous learning, experimenting with UI/UX patterns, and creating seamless user journeys.
              </Typography>
              <br />
              <Typography variant="paragraph" className="text-lg leading-8 text-white">
                Apart from coding, I love contributing to open-source projects, writing clean code, and collaborating with other developers. I’m also passionate about accessibility and strive to make the web inclusive for everyone.
              </Typography> */}
              <Typography variant="paragraph" className="text-lg leading-8 text-white">
                1. Hello! I’m{" "}
                <span
                  onMouseEnter={() => gsap.to("#cursor", { scale: 4, duration: 0.3 })}
                  onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                  className="font-bold text-[#10b981]"
                >
                  Noushin Zahan
                </span>
                , a passionate frontend developer specialized in React, Tailwind, Express, and MongoDB.
              </Typography>
              <br />
              <Typography variant="paragraph" className="text-lg leading-8 text-white">
                2. I began my programming journey focused on building clean, responsive, and accessible web applications that deliver real value to users.
              </Typography>
              <br />
              <Typography variant="paragraph" className="text-lg leading-8 text-white">
                3. I enjoy working on frontend development but am currently expanding my skills into backend technologies like Node.js and RESTful APIs to become a full-stack developer.
              </Typography>
              <br />
              <Typography variant="paragraph" className="text-lg leading-8 text-white">
                4. Outside programming, I love contributing to open-source projects, writing clean code, and collaborating with other developers. I also have interests in accessibility and inclusive web design.
              </Typography>
              <br />
              <Typography variant="paragraph" className="text-lg leading-8 text-white">
                5. I’m committed to continuous learning, experimenting with UI/UX patterns, and creating seamless user experiences, reflecting my passion and personality through every project.
              </Typography>
            </div>
          </div>

          {/* Right Side: Experience and Skills */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="p-5 border-l-4 border-[#10b981] bg-white/5 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-[#10b981] mb-2">Work Experience</h2>
              <div className="text-sm space-y-1">
                <p className="font-semibold">
                  Full-Stack Developer <span className="text-gray-400">– Personal Project</span>
                </p>
                <p className="text-gray-400">March 2025 – Present</p>
                <p className="text-white">Built a MERN stack app with authentication, CRUD, and responsive UI.</p>
              </div>
            </div>

            <div className="p-5 border-l-4 border-[#10b981] bg-white/5 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-[#10b981] mb-2">Open Source</h2>
              <div className="text-sm space-y-1">
                <p className="font-semibold">
                  Contributor <span className="text-gray-400">– GitHub</span>
                </p>
                <p className="text-gray-400">Feb 2025 – Present</p>
                <p className="text-white">Fixed UI bugs & improved design in React-based tools via pull requests.</p>
              </div>
            </div>

            <div className="p-5 border-l-4 border-[#10b981] bg-white/5 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-[#10b981] mb-2">Technical Skills</h2>
              <ul className="list-disc list-inside text-sm space-y-1 text-white">
                <li>React, Tailwind CSS, JavaScript (ES6+)</li>
                <li>Node.js, Express.js, MongoDB</li>
                <li>REST API, JWT Authentication</li>
                <li>Git, GitHub, Figma</li>
              </ul>
            </div>
            <div className="p-5 border-l-4 border-[#10b981] bg-white/5 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-[#10b981] mb-2">Certification</h2>
              <div className="text-sm space-y-1">
                <p className="font-semibold">
                  Programming Hero <span className="text-gray-400">– Full Stack Development</span>
                </p>
                <p className="text-gray-400">Completed in 2025</p>
                <p className="text-white">
                  Completed comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
