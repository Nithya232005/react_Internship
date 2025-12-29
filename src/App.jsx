import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

function App() {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const heroData = {
    name: "Nithya Thangaraju",
    tagline: "Aspiring web Developer"
  };

  const aboutData = {
    bio: `Fresher Software Developer with practical experience in Generative AI and NLP.
Proficient in Java, Flutter, SQL, and OOP, and certified in Microsoft Azure Fundamentals.
Motivated to contribute to real-world projects and grow as a professional developer.`
  };

  const skillsData = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React"},
    { name: "Java" }
  ];

 const projectsData = [
  {
    title: "AI-based FIR Assistant",
    tech: "Python, NLP, MERN Stack",
    duration: "August 2025 – Ongoing",
    description: `Designing a smart assistant that helps police officers automatically identify relevant legal sections and acts based on complaint details.
Implemented NLP techniques to extract key information from written input.
Aimed to reduce manual errors and enhance the efficiency of FIR documentation at police stations.`
  },
  {
    title: "GenAI Powered PDF Query Bot",
    tech: "Python, Streamlit, Groq, PDFPlumber, Transformers",
    duration: "October 2025",
    description: `Developed a Streamlit application that allows users to upload PDF documents and ask questions about their content using an AI model.
Implemented text extraction from PDFs using PDFPlumber and integrated LLaMA models for accurate question answering.
Utilized the Groq API for efficient AI inference and response generation.`
  }
];


  const socialLinks = {
   linkedin: "https://linkedin.com/in/nithya023/",
github: "https://github.com/Nithya232005",
email: "nithyathangaraju23@gmail.com"

  };

  return (
    <>
      <Header links={navLinks} />
      <Hero hero={heroData} />
      <About about={aboutData} />
      <Skills skills={skillsData} />
      <Projects projects={projectsData} />
      <Footer socials={socialLinks} />
    </>
  );
}

export default App;