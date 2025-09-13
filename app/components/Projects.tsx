import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Crime & Incident Reporting System",
      description:
        "A web application developed during my internship at the Ethiopian Artificial Intelligence Institute . The system enables reporting, managing, and tracking crime and incident cases.",
      image: "/crime-reporting.jpg", // Replace with your own screenshot later
      technologies: ["Laravel", "Bootstrap", "Blade", "MySQL"],
      githubUrl: "#", // Add repo if public
      liveUrl: "#", // Add live link if hosted
      role: "Full Stack Developer (Team Project)",
      contributions: [
        "Designed and developed core features using Laravel Blade & Bootstrap",
        "Collaborated with team members to integrate reporting and management modules",
        "Tested and debugged functionality to ensure system reliability",
      ],
      features: [
        "Crime and incident reporting",
        "Case management dashboard",
        "User roles & authentication",
        "Data visualization and reports",
      ],
    },
    {
      title: "Afan Oromo Spell Checker",
      description:
        "My graduation project developed as a team. The system provides spell checking for Afan Oromo, including morphological analysis and suggestion generation.",
      image: "/spell-checker.jpg", // Replace with your project image
      technologies: ["Flask", "Python", "Hunspell", "Bootstrap"],
      githubUrl: "#", // Add repo if public
      liveUrl: "#", // Add live link if hosted
      role: "Backend Developer (Team Project)",
      contributions: [
        "Developed backend with Flask framework",
        "Prepared and managed dictionary data",
        "Implemented UI and logic for adding multiple dictionaries",
      ],
      features: [
        "Tokenization & error detection",
        "Morphological analysis & generation",
        "Error correction with suggestions",
        "Support for multiple dictionaries",
      ],
    },
    {
      title: "Personal Learning Projects",
      description:
        "Various small-scale projects created for self-learning and practicing different technologies, frameworks, and concepts.",
      image: "/personal-projects.jpg", // Replace with an abstract/placeholder image
      technologies: ["React", "Node.js", "Next.js", "MySQL"],
      githubUrl: "#", // You can link to your GitHub profile
      liveUrl: "#",
      role: "Independent Developer",
      contributions: [
        "Built CRUD applications using different stacks",
        "Explored UI/UX design with Tailwind and Bootstrap",
        "Practiced backend development with APIs and databases",
      ],
      features: [
        "Full-stack learning projects",
        "Experimentation with different frameworks",
        "Focus on improving coding standards",
      ],
    },
        {
      title: "EAI Professional Projects",
      description:
        "Multiple projects completed at the Ethiopian Artificial Intelligence Institute (EAI), both as an individual and as part of teams, where I contributed as a Full Stack Developer and Backend Developer.",
      image: "/eai-projects.jpg",
      technologies: ["Node.js", "Next.js", "Nest.js", "GraphQL", "REST API", "MongoDB", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      role: "Full Stack & Backend Developer",
      contributions: [
        "Designed and implemented RESTful APIs and GraphQL APIs",
        "Built full-stack applications with Next.js, Node.js, and Nest.js",
        "Integrated frontend and backend systems with optimized database models",
        "Worked in agile teams to deliver production-level solutions",
      ],
      features: [
        "Enterprise-grade web applications",
        "Scalable backend services",
        "API-driven architectures",
        "Modern full-stack development",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-bounce-slow"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            <span className="text-sm md:text-base font-medium text-indigo-400 bg-indigo-900/30 px-3 py-1 rounded-full">
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the professional and academic projects I've worked on, 
            highlighting my role, contributions, and the technologies I used.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
