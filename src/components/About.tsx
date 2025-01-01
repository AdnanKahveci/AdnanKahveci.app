const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/AdnanKahveci.app/resim2.jpg"
              alt="Profile"
              className="rounded-lg shadow-md w-full h-auto max-w-md mx-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-[20px] shadow-sm border">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold text-center">Experience</h3>
                <p className="text-gray-600 text-sm text-center mt-1">1+ years</p>
                <p className="text-gray-600 text-sm text-center">Backend Development</p>
              </div>
              
              <div className="bg-white p-4 rounded-[20px] shadow-sm border">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl">👨‍🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-center">Education</h3>
                <p className="text-gray-600 text-sm text-center mt-1">Bachelor's Degree</p>
                <p className="text-gray-600 text-sm text-center">Computer Engineering</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                I am a computer engineering who is passionate about backend development, machine learning, and natural language processing (NLP). I am a proactive and curious individual who enjoys exploring innovative technologies and working collaboratively in team environments.
                Moving forward, my primary goal is to advance my career in backend development and machine learning, combining my expertise in software engineering with my passion for solving complex real-world problems.
              </p>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Technologies I Use:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Programming Languages:</span>
                    <span className="text-sm text-gray-600 ml-2">Python, JavaScript, C, C++</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Frameworks & Libraries:</span>
                    <span className="text-sm text-gray-600 ml-2">Flask, Angular, ReactJS, PyTorch</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Backend Development:</span>
                    <span className="text-sm text-gray-600 ml-2">Node.js, PostgreSQL, MongoDB</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Machine Learning:</span>
                    <span className="text-sm text-gray-600 ml-2">Normalizing Flows, CNNs, Generative Models</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Tools & Hardware:</span>
                    <span className="text-sm text-gray-600 ml-2">STM32, Raspberry Pi, NodeMCU, Qt</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Other Skills:</span>
                    <span className="text-sm text-gray-600 ml-2">TCP/IP Protocols, Network Security, IoT Systems, Natural Language Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;