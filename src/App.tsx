import { useState, useEffect } from 'react';
import DotField from './components/DotField/DotField';
import MagicBento from './components/MagicBento/MagicBento';
import Stack from './components/Stack/Stack';
import TechStackGlobe from './components/TechStackGlobe';
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
  github: string;
  linkedin: string;
  image: string;
}

// Grouped Projects Data with Descriptions & Pictures
const projectsData: ProjectItem[] = [
  // AI / ML
  {
    idx: '01',
    name: 'NeuroCommerce',
    desc: 'AI-powered recommendation engine with real-time personalization for e-commerce at scale.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'NeuroCommerce leverages deep neural networks to track customer micro-intent sessions and serve personalized recommendations in sub-50ms. Features custom inference endpoints, product vector matching, and automated real-time performance analytics.',
    github: 'https://github.com/buildlab/neurocommerce',
    linkedin: 'https://linkedin.com/posts/buildlab-neurocommerce-launch',
    image: '/project1.png'
  },
  {
    idx: '02',
    name: 'DocuMind',
    desc: 'RAG-based document intelligence platform for enterprise knowledge management.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'DocuMind is an intelligent Retrieval-Augmented Generation platform that ingests, parses, and extracts structural entities from millions of unstructured text documents. Offers precise semantic query searches and secure custom LLM chat integrations.',
    github: 'https://github.com/buildlab/documind',
    linkedin: 'https://linkedin.com/posts/buildlab-documind-rag',
    image: '/project3.png'
  },
  {
    idx: '03',
    name: 'HealthPulse',
    desc: 'Computer vision system for automated medical imaging analysis and anomaly detection.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'An advanced medical analytics system applying convolutional neural networks to detect microscopic anomalies in high-resolution MRI scans, helping radiologists speed up clinical assessments.',
    github: 'https://github.com/buildlab/healthpulse',
    linkedin: 'https://linkedin.com/posts/buildlab-healthpulse-vision',
    image: '/project1.png'
  },
  {
    idx: '04',
    name: 'SentimentX',
    desc: 'Real-time multi-lingual consumer sentiment monitoring stream for brand intelligence.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Tracks and classifies millions of social media mentions per hour across 14 languages using custom Transformer classification models, outputting live public perception indexes.',
    github: 'https://github.com/buildlab/sentimentx',
    linkedin: 'https://linkedin.com/posts/buildlab-sentimentx-nlp',
    image: '/project3.png'
  },
  {
    idx: '05',
    name: 'VisionFlow',
    desc: 'Automated warehouse inventory tracking system using localized edge cameras.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Edge-deployed object identification systems mapping pallet SKU placements, shipping container tags, and logistics workers protective gear compliance in real-time.',
    github: 'https://github.com/buildlab/visionflow',
    linkedin: 'https://linkedin.com/posts/buildlab-visionflow-edge',
    image: '/project1.png'
  },
  {
    idx: '06',
    name: 'ChatScout',
    desc: 'Intelligent customer support agent with live database actions execution.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'A secure customer assistant that solves issues, executes verified database updates, and changes user details through strict function-calling API integrations.',
    github: 'https://github.com/buildlab/chatscout',
    linkedin: 'https://linkedin.com/posts/buildlab-chatscout-agent',
    image: '/project3.png'
  },
  {
    idx: '07',
    name: 'TextSummarizer',
    desc: 'Enterprise document summarization API with custom legal-jargon parsing.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Fine-tuned LLM model specializing in scanning 100+ page contracts and outputting highly structured brief summaries pointing out crucial corporate risk clauses.',
    github: 'https://github.com/buildlab/textsummarizer',
    linkedin: 'https://linkedin.com/posts/buildlab-text-summarization',
    image: '/project1.png'
  },
  {
    idx: '08',
    name: 'DataSynthesizer',
    desc: 'Generative adversarial network model to synthesize medical patient records.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Generates mock clinical data and synthetic patient files to facilitate open research testing without violating private patient compliance regulations.',
    github: 'https://github.com/buildlab/datasynthesizer',
    linkedin: 'https://linkedin.com/posts/buildlab-synthetic-data',
    image: '/project3.png'
  },
  {
    idx: '09',
    name: 'ForecastAI',
    desc: 'Deep learning time-series model forecasting inventory demand peaks.',
    category: 'AI / ML',
    tag: 'AI',
    longDesc: 'Combines historical sales variables, local weather trends, and economic indicators to calculate optimal manufacturing schedules and minimize overhead storage costs.',
    github: 'https://github.com/buildlab/forecastai',
    linkedin: 'https://linkedin.com/posts/buildlab-demand-forecasting',
    image: '/project1.png'
  },

  // Web
  {
    idx: '10',
    name: 'FleetSync',
    desc: 'Real-time fleet management dashboard with GPS tracking and predictive maintenance analytics.',
    category: 'Web',
    tag: 'Web',
    longDesc: 'FleetSync integrates live IoT tracking coordinates with predictive maintenance schedules, providing operational managers complete logistics visibility and minimizing route delays.',
    github: 'https://github.com/buildlab/fleetsync',
    linkedin: 'https://linkedin.com/posts/buildlab-fleetsync-launch',
    image: '/project2.png'
  },
  {
    idx: '11',
    name: 'TradeFlow',
    desc: 'Real-time financial trading dashboard with live market data and configurable alerts.',
    category: 'Web',
    tag: 'Web',
    longDesc: 'A high-performance trading platform processing order book updates with WebSocket connections and rendering live charts with canvas layout widgets.',
    github: 'https://github.com/buildlab/tradeflow',
    linkedin: 'https://linkedin.com/posts/buildlab-tradeflow-realtime',
    image: '/project2.png'
  },
  {
    idx: '12',
    name: 'DevHub',
    desc: 'Collaborative development space with real-time text and audio integrations.',
    category: 'Web',
    tag: 'Web',
    longDesc: 'A rich collaborative code-sharing environment utilizing WebRTC for instant audio/video and OT (Operational Transformation) for concurrent editing.',
    github: 'https://github.com/buildlab/devhub',
    linkedin: 'https://linkedin.com/posts/buildlab-devhub-collab',
    image: '/project2.png'
  },

  // Cloud
  {
    idx: '13',
    name: 'CloudOps',
    desc: 'Infrastructure automation platform for multi-cloud deployments with Terraform orchestration.',
    category: 'Cloud',
    tag: 'Cloud',
    longDesc: 'Provides visual interface to declare, validate, and orchestrate complex cloud resources on AWS, GCP, and Azure using structured configurations.',
    github: 'https://github.com/buildlab/cloudops',
    linkedin: 'https://linkedin.com/posts/buildlab-cloudops-infra',
    image: '/project2.png'
  },
  {
    idx: '14',
    name: 'KubeGuard',
    desc: 'Real-time security auditing and anomaly detection agent for Kubernetes clusters.',
    category: 'Cloud',
    tag: 'Cloud',
    longDesc: 'Deep eBPF-based runtime monitoring daemon that watches cluster system calls, warning when an container attempts to run malicious actions.',
    github: 'https://github.com/buildlab/kubeguard',
    linkedin: 'https://linkedin.com/posts/buildlab-kubeguard-security',
    image: '/project2.png'
  }
];

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('AI / ML');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  // Testimonial cards elements for Stack 1 (Left)
  const testimonialItemsLeft = [
    (
      <div className="testimonial-card">
        <div>
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"BuildLab delivered our core enterprise dashboard ahead of schedule. Their attention to software architecture and frontend polish is second to none."</p>
        </div>
        <div className="client-info">
          <div className="client-avatar-row">
            <div className="client-monogram-circle">MV</div>
            <div>
              <span className="client-name" style={{ display: 'block' }}>Marcus Vance</span>
              <span className="client-role">Founder, ScaleLabs</span>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div className="testimonial-card">
        <div>
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"They refactored our AWS environments to Kubernetes, reducing hosting costs by 45% while achieving automated failover scaling. True cloud experts."</p>
        </div>
        <div className="client-info">
          <div className="client-avatar-row">
            <div className="client-monogram-circle">ER</div>
            <div>
              <span className="client-name" style={{ display: 'block' }}>Elena Rostova</span>
              <span className="client-role">Head of Infrastructure, CloudCore</span>
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
          <p className="testimonial-text">"The AI integration they built for our asset moderation pipeline has reduced our audit latency by 4x. Phenomenal engineering standards."</p>
        </div>
        <div className="client-info">
          <div className="client-avatar-row">
            <div className="client-monogram-circle">AT</div>
            <div>
              <span className="client-name" style={{ display: 'block' }}>Dr. Aris Thorne</span>
              <span className="client-role">VP of AI, Cognition Corp</span>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div className="testimonial-card">
        <div>
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"Exceptional communications and high technical capacity. They didn't just write code; they understood our business challenges and built the right solutions."</p>
        </div>
        <div className="client-info">
          <div className="client-avatar-row">
            <div className="client-monogram-circle">DK</div>
            <div>
              <span className="client-name" style={{ display: 'block' }}>David K.</span>
              <span className="client-role">CTO, HealthSync</span>
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
            <div className="logo-icon"></div>
            BuildLab
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
        <div className="hero-content">
          <div className="hero-badge">
            <span>✦</span> Premium Software Architecture & AI Engineering
          </div>
          <h1 className="hero-title">
            We Architect <span>Intelligent</span> & Scalable Digital Products
          </h1>
          <p className="hero-subtitle">
            A boutique development studio partnering with visionary teams to deploy production-grade software applications, custom AI systems, and robust cloud infrastructure.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Schedule a Consultation
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Successful Launches</div>
              <div className="stat-desc">Custom products shipped from design to scaling.</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Platform Uptime</div>
              <div className="stat-desc">Resilient microservices monitored 24/7.</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40%</div>
              <div className="stat-label">Cloud Cost Savings</div>
              <div className="stat-desc">Through infrastructure optimization & clustering.</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Retention</div>
              <div className="stat-desc">Long-term engineering partnerships built on trust.</div>
            </div>
          </div>
        </div>
      </section>

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
            enableStars={true}
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
                    {visibleProjects.map(p => (
                      <a
                        href="#"
                        className="project-row"
                        key={p.idx}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProject(p);
                        }}
                      >
                        <span className="project-idx">{p.idx}</span>
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
            
            <div className="project-modal-content">
              <div className="project-modal-header">
                <span className="project-modal-category">{selectedProject.category}</span>
                <h3 className="project-modal-title">{selectedProject.name}</h3>
              </div>
              
              <p className="project-modal-desc">
                {selectedProject.longDesc}
              </p>
              
              <div className="project-modal-footer">
                <div className="project-modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-modal-link-btn" title="View Repository on GitHub">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={selectedProject.linkedin} target="_blank" rel="noopener noreferrer" className="project-modal-link-btn" title="View Case Study on LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
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
                    <p>hello@buildlab.io</p>
                  </div>
                </div>
                <div className="contact-method-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-method-details">
                    <h4>Studio Location</h4>
                    <p>San Francisco, California</p>
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
              <div className="footer-logo-icon"></div>
              BuildLab
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
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Cloud Deployments</a></li>
              <li><a href="#services">AI/ML Models</a></li>
              <li><a href="#services">RAG & Retrieval</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BuildLab Studio. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com" target="_blank" aria-label="X" title="X">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
