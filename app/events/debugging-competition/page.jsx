import { Code, Braces, Coffee, CurlyBraces } from 'lucide-react';

const DebuggingLanguageSelector = () => {
  const languages = [
    {
      name: "Python",
      link: "https://www.hackerrank.com/code-debugging-a-python",
      icon: <Code size={48} className="mb-4 text-black" />
    },
    {
      name: "C",
      link: "https://www.hackerrank.com/code-debugging-competition",
      icon: <Braces size={48} className="mb-4 text-black" />
    },
    {
      name: "Java",
      link: "https://www.hackerrank.com/code-debugging-1742796456",
      icon: <Coffee size={48} className="mb-4 text-black" />
    },
    {
      name: "C++",
      link: "https://www.hackerrank.com/c-1742741334",
      icon: <CurlyBraces size={48} className="mb-4 text-black" />
    }
  ];

  return (
    <section className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Debugging Competition - Choose Your Language
        </h1>
        <p className="text-xl text-center mb-12 text-gray-700">
          Select your preferred programming language to participate in the debugging competition
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((language) => (
            <a 
              key={language.name} 
              href={language.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-orange-50 border-2 border-black hover:bg-orange-100 transition-colors duration-300"
            >
              {language.icon}
              <span className="text-2xl font-semibold text-black">
                {language.name}
              </span>
              <span className="mt-2 text-gray-600">
                Click to start
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Event Date: 25/03/2025 | Part of the Debugging Competition
          </p>
          <p className="text-gray-700 mt-2">
            Test your skills in identifying and fixing code vulnerabilities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DebuggingLanguageSelector;