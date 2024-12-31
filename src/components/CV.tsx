
import { ArrowLeft, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CV = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </button>
          
          <a 
            href="Adnan-Kahveci-CV.pdf" 
            download
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </a>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="Adnan-Kahveci-CV.pdf"
            className="w-full h-[calc(100vh-200px)]"
            title="CV"
          />
        </div>
      </div>
    </div>
  );
};

export default CV;