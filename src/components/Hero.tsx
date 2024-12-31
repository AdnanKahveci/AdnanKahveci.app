import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Adnan Kahveci</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer & AI Development
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I create beautiful and functional web experiences with a focus on user interaction and responsive design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              >
                Contact Me <ArrowRight className="ml-2" size={20} />
              </a>
              <Link
                to="/cv"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center"
              >
                <FileText className="mr-2" size={20} />
                View CV
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="resim.jpg"
              alt="Profile"
              className="rounded-full w-[400px] h-[400px] object-cover mx-auto shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;