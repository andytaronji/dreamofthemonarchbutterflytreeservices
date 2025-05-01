'use client';

import Image from 'next/image';
import { useState } from 'react';

// Define the project type
type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  date: string;
};

// Sample portfolio projects
const projects: Project[] = [
  {
    id: 1,
    title: "Large Oak Removal",
    category: "Tree Removal",
    description: "Safe removal of a 100-year-old oak tree that was damaged during a storm and posed a risk to the nearby home.",
    image: "https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939113/IMG_5405_w2nrdy.heic",
    location: "Buckhead, Atlanta",
    date: "March 2025"
  },
  {
    id: 2,
    title: "Residential Tree Pruning",
    category: "Tree Pruning",
    description: "Comprehensive pruning of multiple trees on a residential property to improve aesthetics and safety.",
    image: "https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939112/IMG_3543_qaqtoq.heic",
    location: "Decatur, GA",
    date: "January 2025"
  },
  {
    id: 3,
    title: "Emergency Storm Cleanup",
    category: "Emergency Services",
    description: "Rapid response to clear fallen trees and branches after a severe thunderstorm affected multiple properties.",
    image: "https://images.unsplash.com/photo-1517660029921-0cbea2f15f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    location: "Marietta, GA",
    date: "February 2025"
  },
  {
    id: 4,
    title: "Commercial Property Maintenance",
    category: "Tree Health",
    description: "Ongoing tree health management for a large commercial property, including treatment for disease and pest control.",
    image: "https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939141/IMG_2758_utbttx.heic",
    location: "Alpharetta, GA",
    date: "Ongoing"
  },
  {
    id: 5,
    title: "Multiple Stump Grinding",
    category: "Stump Grinding",
    description: "Removal of multiple tree stumps to prepare a property for new landscaping and construction.",
    image: "https://res.cloudinary.com/di4phdven/image/upload/q_auto/v1745941605/Armadale_Castle_-_tree_stump_z4lqcz.jpg",
    location: "Sandy Springs, GA",
    date: "December 2024"
  },
  {
    id: 6,
    title: "Historic Property Tree Care",
    category: "Tree Pruning",
    description: "Specialized pruning and care for heritage trees on a historic property, preserving their health and appearance.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    location: "Inman Park, Atlanta",
    date: "November 2024"
  }
];

// Categories for filtering
const categories = ["All", "Tree Removal", "Tree Pruning", "Stump Grinding", "Emergency Services", "Tree Health"];

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Open project modal
  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  // Close project modal
  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-monarch-green">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Portfolio background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our recent tree care projects and see the quality of our work firsthand.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-monarch-green text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-monarch-dark">{project.title}</h3>
                    <span className="text-xs font-medium bg-monarch-yellow/20 text-monarch-orange px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.location}</span>
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button 
                onClick={closeProject}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-monarch-dark">{selectedProject.title}</h2>
                <span className="text-sm font-medium bg-monarch-yellow/20 text-monarch-orange px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{selectedProject.location}</p>
                </div>
                <div>
                  <p className="text-gray-500">Date</p>
                  <p className="font-medium">{selectedProject.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-monarch-yellow">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-monarch-dark mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-monarch-dark/80 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote on any of our professional tree services.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-3">
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
}
