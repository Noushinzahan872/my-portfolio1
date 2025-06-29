import { Card, Typography } from "@material-tailwind/react";
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaPaintBrush, FaServer, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-[#10b981]" />,
    title: "Web Development",
    description: "Full-stack web apps using React, Node.js, and modern frameworks.",
    points: [
      "Custom Web Apps",
      "Progressive Web Apps",
      "Single Page Applications",
      "Server-Side Rendering",
    ],
  },
  {
    icon: <FaMobileAlt className="text-3xl text-[#10b981]" />,
    title: "Responsive Design",
    description: "Mobile-first websites that work seamlessly on all screen sizes.",
    points: [
      "Mobile Optimization",
      "Cross-Browser Compatibility",
      "Touch-Friendly Interfaces",
      "Adaptive Layouts",
    ],
  },
  {
    icon: <FaShoppingCart className="text-3xl text-[#10b981]" />,
    title: "E-Commerce Solutions",
    description: "Build e-commerce platforms with payment and inventory management.",
    points: [
      "Shopping Cart Systems",
      "Payment Gateway Integration",
      "Product Management",
      "Order Tracking",
    ],
  },
  {
    icon: <FaPaintBrush className="text-3xl text-[#10b981]" />,
    title: "UI/UX Implementation",
    description: "Pixel-perfect design to code from Figma, Sketch, Adobe XD.",
    points: [
      "Figma to React",
      "Design System Creation",
      "Component Libraries",
      "Animation & Interactions",
    ],
  },
  {
    icon: <FaServer className="text-3xl text-[#10b981]" />,
    title: "Backend Development",
    description: "Robust server-side apps with REST API, GraphQL, and DB design.",
    points: [
      "API Development",
      "Database Design",
      "Authentication Systems",
      "Real-time Features",
    ],
  },
  {
    icon: <FaCloud className="text-3xl text-[#10b981]" />,
    title: "Cloud Deployment",
    description: "Deploy apps on Vercel, Railway with CI/CD & performance tools.",
    points: [
      "CI/CD Pipelines",
      "Docker Containers",
      "Performance Optimization",
      "Scalable Services",
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-[#0f1629] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#10b981] to-[#38bdf8] text-transparent bg-clip-text uppercase">
          My Services
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Comprehensive web development services to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="bg-white/5 backdrop-blur-md border-l-4 border-[#10b981] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col justify-between"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#10b981] mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{service.description}</p>
            <ul className="text-sm list-disc list-inside text-gray-400 space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;