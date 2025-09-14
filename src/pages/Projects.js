import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/images/project1.jpg",
      title: "Skyline Residency",
      description:
        "A premium residential project with modern architecture and eco-friendly designs.",
    },
    {
      id: 2,
      image: "/images/project2.jpg",
      title: "Metro Plaza",
      description:
        "A commercial complex designed for offices, retail, and co-working spaces.",
    },
    {
      id: 3,
      image: "/images/project3.jpg",
      title: "Green Valley Villas",
      description:
        "Luxury villas with sustainable features surrounded by lush greenery.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gray-100 px-6 py-20 md:py-32"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
          Our <span className="text-blue-600">Projects</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          A glimpse of some of our successfully delivered residential and
          commercial projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
