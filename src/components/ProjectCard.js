import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl group">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
