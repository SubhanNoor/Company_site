import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import DotField from './components/DotField/DotField';
import MagicBento from './components/MagicBento/MagicBento';
import Stack from './components/Stack/Stack';
import TechStackGlobe from './components/TechStackGlobe';
import rovonexLogo from './assets/LOGO.png';
import proj1 from '../projects/RAG_1.png';
import proj2 from '../projects/OCR.png';
import proj3 from '../projects/Resume.png';
import proj4 from '../projects/PersonFollowing .png';
import proj5 from '../projects/AI powewred.png';
import proj6 from '../projects/full_stack_robot.png';
import proj7 from '../projects/image_segmentation_pipeline.png';
import proj8 from '../projects/Wall.png';
import proj9 from '../projects/face_reco.png';
import proj10 from '../projects/RAg_document_searching.png';
import proj11 from '../projects/resora.jpeg';
import proj12 from '../projects/Find_a_car.png';
import Carousel from './components/Carousel/Carousel';
import type { CarouselItemData } from './components/Carousel/Carousel';
import type { TechItem } from './components/TechStackGlobe';

// Core Technologies Data
const techItems: TechItem[] = [
  {
    name: 'Node.js',
    category: 'Backend',
    slug: 'nodedotjs',
    description: 'Fast, event-driven JavaScript runtime used for building scalable network APIs and real-time backend services.',
    whyUsed: 'High asynchronous processing capabilities and unified language ecosystem.',
    myExperience: 'Orchestrated custom microservice communication networks and high-throughput websocket pipelines.'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    slug: 'typescript',
    description: 'Statically typed superset of JavaScript that compiles directly to production-grade JS.',
    whyUsed: 'Provides complete compile-time type validation, preventing over 90% of structural errors.',
    myExperience: 'Enforced across all client websites and node-based API modules to guarantee reliable data schemas.'
  },
  {
    name: 'React',
    category: 'Frontend',
    slug: 'react',
    description: 'Modern, component-driven UI library for rendering dynamic, reactive user experiences.',
    whyUsed: 'Extremely efficient virtual DOM diffing and a highly reusable state architecture.',
    myExperience: 'Developed scalable client control panels, interactive canvas graphics, and custom chart analytics dashboards.'
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    slug: 'postgresql',
    description: 'Extremely robust, open-source object-relational SQL database engine.',
    whyUsed: 'Supports native JSON query operations alongside traditional relational constraints.',
    myExperience: 'Designed normalized relational schemas and optimized heavy aggregate query execution times.'
  },
  {
    name: 'Docker',
    category: 'Cloud',
    slug: 'docker',
    description: 'Standard containerization platform to bundle application environments consistently.',
    whyUsed: 'Guarantees that local development runs identically to live production workloads.',
    myExperience: 'Created modular multi-container systems to ease local integration testing of microservices.'
  },
  {
    name: 'Kubernetes',
    category: 'Cloud',
    slug: 'kubernetes',
    description: 'Automated orchestration platform for deploying and scaling containerized applications.',
    whyUsed: 'Standardizes self-healing infrastructure, automatic horizontal scaling, and service discovery.',
    myExperience: 'Managed production-level EKS clusters to support auto-scaling services during demand peaks.'
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud',
    slug: 'amazonaws',
    description: 'Industry-leading cloud platform providing highly secure, distributed computing services.',
    whyUsed: 'Broadest range of cloud products, high-availability data centers, and advanced IAM security.',
    myExperience: 'Architected multiple secure, multi-zone environments utilising ECS, EKS, RDS, and CloudFront.'
  },
  {
    name: 'Python',
    category: 'AI/ML',
    slug: 'python',
    description: 'Versatile programming language that supports rapid prototyping and system integration.',
    whyUsed: 'The core ecosystem for state-of-the-art machine learning, data engineering, and AI pipelines.',
    myExperience: 'Created custom analytical modules, data extraction routines, and model inference servers.'
  },
  {
    name: 'PyTorch',
    category: 'AI/ML',
    slug: 'pytorch',
    description: 'Flexible, open-source deep learning framework based on the Torch library.',
    whyUsed: 'Excellent dynamic computational graph building and rich support from huggingface models.',
    myExperience: 'Fine-tuned custom transformers for specialized NLP classifications and object detection models.'
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    slug: 'fastapi',
    description: 'Highly performant Python web framework designed for serving high-throughput microservices.',
    whyUsed: 'Built-in schema validation via Pydantic and automated Swagger documentation generation.',
    myExperience: 'Built secure model execution endpoints for real-time model inference and classification APIs.'
  },
  {
    name: 'Redis',
    category: 'Databases',
    slug: 'redis',
    description: 'Ultra-fast, in-memory key-value data structure store used for caching and session management.',
    whyUsed: 'Sub-millisecond data retrieval speeds to reduce main database loads.',
    myExperience: 'Deployed as a cache layer for API responses and central session storage for authenticated clients.'
  },
  {
    name: 'Google Cloud Platform',
    category: 'Cloud',
    slug: 'googlecloud',
    description: 'Comprehensive set of cloud tools built on Google\'s internal globally distributed hardware.',
    whyUsed: 'Outstanding managed analytics suites, data warehouses, and serverless compute tools.',
    myExperience: 'Set up BigQuery data storage environments and deployed serverless pipelines using Cloud Run.'
  }
];

const customCategoryColors = {
  'Frontend': 'var(--gold-primary, #b37d22)',
  'Backend': '#4b96f3',
  'Cloud': '#12a45a',
  'Databases': '#de9412',
  'AI/ML': '#a239f4'
};

interface ProjectItem {
  idx: string;
  name: string;
  desc: string;
  category: string;
  tag: string;
  longDesc: string;
  image: string;
}

// Grouped Projects Data with Descriptions & Pictures
const projectsData: ProjectItem[] = [
  {
    idx: '01',
    name: 'RAG Chatbot (Document Q&A)',
    desc: 'Ask questions from your PDFs, websites, or databases and get accurate answers with source citations.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Ask questions from your PDFs, websites, or databases and get accurate answers with source citations. No more manual searching through documents.',
    image: proj1
  },
  {
    idx: '02',
    name: 'Contract & Document Parsing → CRM Auto-Fill',
    desc: 'Reads contracts, lease agreements, and inspection reports, pulls out key fields, and fills your CRM automatically.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Reads contracts, lease agreements, and inspection reports, pulls out key fields, and fills your CRM automatically. Cut manual data entry by 80%. Paid for itself in the first week.',
    image: proj2
  },
  {
    idx: '03',
    name: 'AI Resume Screener & Candidate Ranker',
    desc: 'Reads resumes in any format, ranks candidates against your job description, and books interviews automatically.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Reads resumes in any format, ranks candidates against your job description, and books interviews automatically. Cut HR screening time by 80%.',
    image: proj3
  },
  {
    idx: '04',
    name: 'On-Device Real-Time Threat Detection',
    desc: 'Live camera threat detection running fully offline on local hardware.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Live camera threat detection running fully offline on local hardware. Flags threats in under 100ms at 22 FPS. Zero cloud costs.',
    image: proj4
  },
  {
    idx: '05',
    name: 'End-to-End Automated Recruitment Pipeline',
    desc: 'Posts jobs, screens resumes, ranks candidates, finds hiring contacts, and books interviews — all automatically.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Posts jobs, screens resumes, ranks candidates, finds hiring contacts, and books interviews — all automatically. Cut time-to-hire by 70% with zero manual work.',
    image: proj5
  },
  {
    idx: '06',
    name: 'Custom Robot Control Dashboard (UR20)',
    desc: 'A clean web interface to control industrial robots in real time.',
    category: 'Web',
    tag: 'Web',
    longDesc: 'A clean web interface to control industrial robots in real time. Replaces the clunky default controller with live telemetry and mission control. Built with React, Node.js, and PostgreSQL.',
    image: proj6
  },
  {
    idx: '07',
    name: 'Custom Image Segmentation Pipeline',
    desc: 'Accurately identifies and isolates objects in images for inspection or automation.',
    category: 'Cloud',
    tag: 'Cloud',
    longDesc: 'Accurately identifies and isolates objects in images for inspection or automation. Fine-tuned on custom data and deployed on AWS for scale.',
    image: proj7
  },
  {
    idx: '08',
    name: 'Blueprint & Drawing Data Extraction',
    desc: 'Reads architectural drawings and pulls out key engineering info automatically.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Reads architectural drawings and pulls out key engineering info automatically. Handles complex layouts accurately and saves hours of manual work.',
    image: proj8
  },
  {
    idx: '09',
    name: 'Face Recognition & Emotion Detection',
    desc: 'Finds faces in images or live camera feed, identifies people, and detects emotions in real time.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Finds faces in images or live camera feed, identifies people, and detects emotions in real time. Ready to plug into security or attendance systems.',
    image: proj9
  },
  {
    idx: '10',
    name: 'Multi-Document Research Summarizer',
    desc: 'Upload multiple documents, ask one question, get one answer with citations showing exactly which file it came from.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Upload multiple documents, ask one question, get one answer with citations showing exactly which file it came from. Handles multiple users at once without mixing their data.',
    image: proj10
  },
  {
    idx: '11',
    name: 'Resora – University Resource Management System',
    desc: 'Manages rooms, timetables, bookings, and departments in one place.',
    category: 'Web',
    tag: 'Web',
    longDesc: 'Manages rooms, timetables, bookings, and departments in one place. Admins, teachers, and students each get their own view. Built with Node.js, React, and MS SQL Server.',
    image: proj11
  },
  {
    idx: '12',
    name: 'FindACar – AI Car Condition Grader',
    desc: 'Analyzes used car images and listings and gives each car an objective grade (A+ to C).',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Analyzes used car images and listings and gives each car an objective grade (A+ to C). No more manually checking every listing for damage. 87% damage detection accuracy, ready to integrate with platforms like PakWheels.',
    image: proj12
  }
];

// Toggle this flag to true to enable project mockup/screenshots in the detail modals
const SHOW_PROJECT_IMAGES = false;

// Toggle this flag to true to enable the Carousel Stats section under the hero block
const SHOW_STATS_SECTION = false;

// Typewriter Component for Hero Title descriptors
function Typewriter({ words, speed = 80, delay = 2200 }: { words: string[], speed?: number, delay?: number }) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const activeWord = words[currentWordIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, speed / 1.8);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.slice(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, words, speed, delay]);

  return (
    <span className="typewriter-container">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

const statItems: CarouselItemData[] = [
  {
    id: 1,
    number: '15+',
    title: 'Successful Launches',
    description: 'Custom products shipped from design to scaling.',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" className="carousel-icon" style={{ width: '18px', height: '18px' }}>
        <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
        <path d="M12 2C7.5 2 4 5.5 4 10c0 4.5 3 7.5 8 12 5-4.5 8-7.5 8-10c0-4.5-3.5-8-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    id: 2,
    number: '99.9%',
    title: 'Platform Uptime',
    description: 'Resilient microservices monitored 24/7.',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" className="carousel-icon" style={{ width: '18px', height: '18px' }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  },
  {
    id: 3,
    number: '40%',
    title: 'Cloud Cost Savings',
    description: 'Through infrastructure optimization & clustering.',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" className="carousel-icon" style={{ width: '18px', height: '18px' }}>
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    id: 4,
    number: '100%',
    title: 'Client Retention',
    description: 'Long-term engineering partnerships built on trust.',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" className="carousel-icon" style={{ width: '18px', height: '18px' }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('AI / ML');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statsActiveIndex, setStatsActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatsActiveIndex(prev => (prev + 1) % statItems.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Replace 'YOUR_PUBLIC_KEY' below with your actual EmailJS Public Key from the Account tab in the dashboard
      emailjs.send(
        'service_d1ss6b7',
        'template_93fbpds',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'MuSURu1O_VcuiadCp'
      )
        .then(() => {
          setFormSubmitted(true);
          setTimeout(() => {
            setFormSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
          }, 5000);
        })
        .catch((error) => {
          console.error('Email failed to send:', error);
        });
    }
  };

  // Testimonial cards elements for Stack 1 (Left)
  const testimonialItemsLeft = [
    (
      <div className="testimonial-card">
        <div>
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"Built a clean, real-time web dashboard to control our UR20 industrial arm. Replaced the clunky hardware pendant with a modern interface, making robot control and telemetry tracking seamless."</p>
        </div>
        <div className="client-info">
          <div className="client-avatar-row">
            <div className="client-monogram-circle">WR</div>
            <div>
              <span className="client-name" style={{ display: 'block' }}>Wild Robotics</span>
              <span className="client-role">Operations Lead</span>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div className="testimonial-card">
        <div>
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"The RAG Chatbot and Document Q&A system has revolutionized our database search. Being able to ask questions directly to our files and get instant answers with citations has saved us hours."</p>
        </div>
        <div className="client-info">
          <div className="client-avatar-row">
            <div className="client-monogram-circle">A</div>
            <div>
              <span className="client-name" style={{ display: 'block' }}>Angel</span>
              <span className="client-role">Technical Lead</span>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  // Testimonial cards elements for Stack 2 (Right)
  const testimonialItemsRight = [
    (
      <div className="testimonial-card">
        <div>
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"Developed and deployed an objective AI Car Condition Grader model with 87% damage detection accuracy. Highly recommend for high-performance computer vision pipelines."</p>
        </div>
        <div className="client-info">
          <div className="client-avatar-row">
            <div className="client-monogram-circle">H</div>
            <div>
              <span className="client-name" style={{ display: 'block' }}>Henry</span>
              <span className="client-role">Product Director</span>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return (
    <>
      {/* Navigation Header */}
      <header className={headerScrolled ? 'scrolled' : ''}>
        <div className="header-container">
          <a href="#" className="logo">
            <img src={rovonexLogo} alt="Rovonex Logo" className="logo-img" />
            Rovonex
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#technologies">Tech Stack</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="header-cta">
            Work With Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-background">
          <DotField
            dotRadius={2.3}
            dotSpacing={18}
            bulgeStrength={20}
            glowRadius={120}
            sparkle={false}
            waveAmplitude={0.5}
            gradientFrom="rgba(26, 18, 11, 0.85)"
            gradientTo="rgba(26, 18, 11, 0.5)"
            glowColor="rgba(26, 18, 11, 0.22)"
          />
        </div>
        <motion.div
          className="hero-content"
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.div
            className="hero-badge"
            variants={{
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <span>✦</span> Premium Software Architecture & AI Development
          </motion.div>
          <motion.h1
            className="hero-title"
            variants={{
              initial: { opacity: 0, y: 25 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            We Architect <span><Typewriter words={['Intelligent', 'Production-Grade', 'Future-Proof', 'High-Performance', 'Scalable']} /></span> Digital Products
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            variants={{
              initial: { opacity: 0, y: 25 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            A boutique development studio partnering with visionary teams to deploy production-grade software applications, custom AI systems, and robust cloud infrastructure.
          </motion.p>
          <motion.div
            className="hero-actions"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <a href="#contact" className="btn btn-primary">
              Schedule a Consultation
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      {SHOW_STATS_SECTION && (
        <section className="stats-section">
          <div className="section-container stats-carousels-container">
            <Carousel
              items={statItems}
              baseWidth={350}
              autoplay={true}
              autoplayDelay={3200}
              pauseOnHover={true}
              loop={true}
              startIndex={0}
              controlledIndex={statsActiveIndex}
            />
            <Carousel
              items={statItems}
              baseWidth={350}
              autoplay={true}
              autoplayDelay={3200}
              pauseOnHover={true}
              loop={true}
              startIndex={1}
              controlledIndex={(statsActiveIndex + 1) % statItems.length}
            />
            <Carousel
              items={statItems}
              baseWidth={350}
              autoplay={true}
              autoplayDelay={3200}
              pauseOnHover={true}
              loop={true}
              startIndex={2}
              controlledIndex={(statsActiveIndex + 2) % statItems.length}
            />
          </div>
        </section>
      )}

      {/* Services Bento Grid Section */}
      <section id="services">
        <div className="section-container">
          <div className="section-tag-wrapper">
            <span className="section-tag">Capabilities</span>
            <span className="section-tag-right">What we do</span>
          </div>
          <h2 className="section-title-left">Interactive Digital Capabilities</h2>
          <p className="section-desc-left">
            We cover the full spectrum of software design, integrating smart automation and clean code to bring your ideas to life.
          </p>
          <MagicBento
            textAutoHide={false}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="179, 125, 34"
          />
        </div>
      </section>

      {/* Projects Section - Segmented by active category tabs */}
      <section id="projects">
        <div className="section-container">
          <div className="section-tag-wrapper">
            <span className="section-tag">Our Work</span>
            <span className="section-tag-right">{projectsData.length} total</span>
          </div>
          <h2 className="section-title-left">Projects We Shipped</h2>
          <p className="section-desc-left">
            A selection of production-grade software applications, machine learning platforms, and robust cloud configurations.
          </p>

          {/* Category Tabs */}
          <div className="project-filter-bar">
            {['AI / ML', 'Web', 'Cloud'].map(category => (
              <button
                key={category}
                className={`project-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setIsExpanded(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div style={{ width: '100%' }}>
            {(() => {
              const categoryProjects = projectsData.filter(p => p.category === activeCategory);
              const visibleProjects = isExpanded ? categoryProjects : categoryProjects.slice(0, 8);
              const hasMore = categoryProjects.length > 8;

              return (
                <div className="project-category-group" style={{ width: '100%' }}>
                  <div className="projects-list">
                    {visibleProjects.map((p, index) => (
                      <a
                        href="#"
                        className="project-row"
                        key={p.idx}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProject(p);
                        }}
                      >
                        <span className="project-idx">{String(index + 1).padStart(2, '0')}</span>
                        <span className="project-name">{p.name}</span>
                        <span className="project-desc-text">{p.desc}</span>
                        <div>
                          <span className="project-tag-badge">{p.tag}</span>
                        </div>
                        <span className="project-arrow">→</span>
                      </a>
                    ))}
                  </div>

                  {hasMore && !isExpanded && (
                    <button
                      className="project-filter-btn"
                      style={{ marginTop: '0.5rem', display: 'inline-flex', alignSelf: 'flex-start' }}
                      onClick={() => setIsExpanded(true)}
                    >
                      View all projects &darr;
                    </button>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            {SHOW_PROJECT_IMAGES && (
              <div className="project-modal-image-wrapper">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="project-modal-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="project-modal-img-fallback">
                  <div className="fallback-ui-sim">
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                      <span className="sim-dot red"></span>
                      <span className="sim-dot yellow"></span>
                      <span className="sim-dot green"></span>
                    </div>
                    <div className="sim-title">{selectedProject.name} Dashboard Mockup</div>
                  </div>
                </div>
              </div>
            )}

            <div className="project-modal-content">
              <div className="project-modal-header">
                <span className="project-modal-category">{selectedProject.category}</span>
                <h3 className="project-modal-title">{selectedProject.name}</h3>
              </div>

              <p className="project-modal-desc">
                {selectedProject.longDesc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Globe Tech Stack Section */}
      <section id="technologies" className="tech-section">
        <div className="section-container">
          <div className="section-tag-wrapper">
            <span className="section-tag">Our Tools</span>
            <span className="section-tag-right">Stack</span>
          </div>
          <h2 className="section-title-left">The Tech Stack We Rely On</h2>
          <p className="section-desc-left">
            We build with industry-standard, high-performance technologies, selecting the optimal tool for each application's unique parameters.
          </p>
          <div className="tech-globe-container">
            <TechStackGlobe
              items={techItems}
              height={500}
              categoryColors={customCategoryColors}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonial-section">
        <div className="section-container">
          <div className="section-tag-wrapper">
            <span className="section-tag">Client Feedback</span>
            <span className="section-tag-right">Reviews</span>
          </div>
          <h2 className="section-title-left">What Our Clients Say</h2>
          <p className="section-desc-left">
            We partner closely with start-up founders and enterprise managers. Here is their honest assessment of our contributions.
          </p>

          <div className="testimonials-dual-grid">
            <div className="testimonial-stack-wrapper">
              <Stack
                randomRotation={true}
                sensitivity={160}
                sendToBackOnClick={true}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                cards={testimonialItemsLeft}
              />
              <div className="testimonial-caption">CLICK CARD · AUTO-CYCLES</div>
            </div>

            <div className="testimonial-stack-wrapper">
              <Stack
                randomRotation={true}
                sensitivity={160}
                sendToBackOnClick={true}
                autoplay={true}
                autoplayDelay={4500}
                pauseOnHover={true}
                cards={testimonialItemsRight}
              />
              <div className="testimonial-caption">CLICK CARD · AUTO-CYCLES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-tag" style={{ alignSelf: 'flex-start' }}>Get In Touch</div>
              <h3>Let's Build Something Extraordinary Together</h3>
              <p>
                Have an upcoming product launch, legacy code refactor, or complex ML integration challenge? Contact us to review your technical requirements.
              </p>
              <div className="contact-methods">
                <div className="contact-method-item">
                  <div className="contact-icon">✉</div>
                  <div className="contact-method-details">
                    <h4>Direct Email</h4>
                    <p><a href="mailto:musmannoor2004@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>musmannoor2004@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-method-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-method-details">
                    <h4>Studio Location</h4>
                    <p>Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about the software, AI model, or infrastructure scaling you are planning to build..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {formSubmitted ? 'Message Sent Successfully ✓' : 'Send Project Inquiry'}
              </button>
              {formSubmitted && (
                <p style={{ fontSize: '0.85rem', color: 'var(--gold-secondary)', textAlign: 'center', marginTop: '0.5rem', fontWeight: 600 }}>
                  Thank you! We will get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-small">
        <div className="footer-container">
          <div className="footer-info">
            <a href="#" className="footer-logo">
              <img src={rovonexLogo} alt="Rovonex Logo" className="logo-img" />
              Rovonex
            </a>
            <p>
              Boutique software architecture studio building high-performance web products, AI integrations, and resilient cloud systems.
            </p>
          </div>
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#technologies">Tech Stack</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Capabilities</h4>
            <ul>
              <li><a href="#services">AI/ML Models</a></li>
              <li><a href="#services">Computer Vision</a></li>
              <li><a href="#services">RAG & Cognitive Search</a></li>
              <li><a href="#services">Web Development</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Rovonex Studio. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/muhammad-usman-noor-b2a497236/" target="_blank" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
