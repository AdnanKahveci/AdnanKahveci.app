import { Github, Linkedin, Mail } from 'lucide-react';

const KaggleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="32"
    height="32"
    fill="currentColor"
    className="text-blue-600 mb-3"
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-12 text-lg">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of these platforms!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <a
              href="https://github.com/AdnanKahveci"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="text-gray-800 mb-3" size={32} />
              <span className="text-gray-600">GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/adnan-kahveci-8404b2218/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin className="text-blue-600 mb-3" size={32} />
              <span className="text-gray-600">LinkedIn</span>
            </a>
            <a
              href="https://kaggle.com/adnankahveci"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <KaggleIcon />
              <span className="text-gray-600">Kaggle</span>
            </a>
            <a
              href="mailto:kahveciadnan138@gmail.com"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="text-red-500 mb-3" size={32} />
              <span className="text-gray-600">Email</span>
            </a>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;