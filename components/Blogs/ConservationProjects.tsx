"use client";

import { CircleAlert, ChevronRight } from "lucide-react";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1610879977977-558431b6c054?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Conserving Africa's Cape Floral Kingdom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1711368350082-3255ac8c7c74?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exploring the Majestic World of White Tigers",
  },
];

export default function ConservationProjects() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">
              Our Project
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-md"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Discover Our Global Conservation Projects
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <CircleAlert className="w-6 h-6 text-indigo-400" />
            <button className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow hover:bg-indigo-700 transition-colors">See More</button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Large featured project */}
          <div className="lg:col-span-1 card-hover rounded-2xl overflow-hidden cursor-pointer group relative h-[400px] sm:h-[480px] lg:h-full shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1746211990244-b519e0ddea4b?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Silent Night Flyers: A Closer Look at the Mystical World of Owls
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-sm drop-shadow">
                Fauna & Flora has been using the collective knowledge and
                experience of our people and our partners to protect nature
                across the globe.
              </p>
              <button className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition-colors">
                More Detail
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Side projects */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl overflow-hidden cursor-pointer group relative h-[300px] sm:h-[350px] lg:h-full shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="text-lg sm:text-xl font-bold text-white drop-shadow"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
