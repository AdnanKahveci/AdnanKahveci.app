import { GithubIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      title: 'Glow Model Training',
      description: 'A generative flow model implementation for image generation using PyTorch. Focused on training Glow model on medical image datasets with features like LU decomposition and affine coupling.',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80',
      technologies: ['Python', 'PyTorch', 'CUDA', 'Machine Learning', 'Deep Learning'],
      githubLink: 'https://github.com/AdnanKahveci/graduation-project',
    },
    {
      title: 'PCB Order System',
      description: 'A comprehensive system for managing PCB orders and tracking their production status. Built with modern web technologies for efficient order processing.',
      image: 'https://images.unsplash.com/photo-1601132359864-c974e79890ac?auto=format&fit=crop&q=80',
      technologies: ['TypeScript', 'React', 'Node.js', 'Database'],
      githubLink: 'https://github.com/AdnanKahveci/pcb-order-system',
    },
    {
      title: 'Drug Side Effects Analysis',
      description: 'Analysis tool for studying and predicting drug side effects using machine learning techniques. Helps in understanding medication interactions and potential risks.',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas'],
      githubLink: 'https://github.com/AdnanKahveci/Drug-Side-Effects-Analysis',
    },
    {
      title: 'Normalizing Flow GLOW',
      description: 'Implementation of Normalizing Flows and GLOW models for generative modeling. Focuses on probability distribution transformation and deep learning.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      technologies: ['Python', 'Deep Learning', 'PyTorch', 'Statistics'],
      githubLink: 'https://github.com/AdnanKahveci/NF-GLow',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        
        <div className="relative max-w-7xl mx-auto">
          <button 
            onClick={prevSlide}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              <div className="flex">
                {projects.map((project) => (
                  <div key={project.title} className="w-1/3 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed min-h-[6.5rem]">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-gray-700 text-sm"
                          >
                            <GithubIcon size={14} className="mr-1" /> Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {[...Array(projects.length - 2)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;