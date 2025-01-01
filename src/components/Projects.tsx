import { GithubIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('mobile'); // 'mobile' | 'tablet' | 'desktop'

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewMode('mobile');
      } else if (width < 1024) {
        setViewMode('tablet');
      } else {
        setViewMode('desktop');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  const getVisibleProjects = () => {
    switch (viewMode) {
      case 'mobile':
        return 1;
      case 'tablet':
        return 2;
      case 'desktop':
        return 3;
      default:
        return 1;
    }
  };

  const visibleProjects = getVisibleProjects();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= projects.length - visibleProjects ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - visibleProjects : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        
        <div className="relative max-w-7xl mx-auto">
          <button 
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.title} 
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <GithubIcon size={16} className="mr-2" />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {[...Array(projects.length - visibleProjects + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;