import { Code, Server, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-blue-600" size={24} />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS','HTML/CSS']
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-green-600" size={24} />,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      title: 'AI Development',
      icon: <Brain className="text-purple-600" size={24} />,
      skills: ['TensorFlow', 'PyTorch', 'Machine Learning', 'NLP', 'Computer Vision', 'Data Analysis']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;