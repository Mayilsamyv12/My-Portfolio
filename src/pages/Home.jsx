import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey || 'YOUR_ACCESS_KEY_HERE',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success || result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Web3Forms Error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="reveal reveal-blur text-sm font-medium text-accent tracking-widest uppercase mb-4">Available for work</p>
              <h1 className="reveal reveal-blur d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
                Hi, I'm <span className="text-accent">Mayilsamy</span>
              </h1>
              <p className="reveal reveal-blur d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">
                Full Stack <strong className="font-medium text-zinc-700 dark:text-zinc-300">Developer</strong>. Passionate about building scalable web applications and AI-powered solutions. I specialize in Python, Django, React.
              </p>
              <div className="reveal reveal-scale d3 flex flex-wrap gap-4">
                <a 
                  href="https://drive.google.com/uc?export=download&id=1GXrPF4r18Uscm4l23IbapV7rtSD1KrQ0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm"
                >
                  Download Resume
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm">
                  Get in touch
                </a>
              </div>
              <div className="reveal reveal-scale d4 flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
                <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">3+</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Key Projects</p></div>
                <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">B.E</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Computer Science</p></div>
                <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">Intern</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Full Stack Developer</p></div>
              </div>
            </div>

            <div className="reveal reveal-scale d2 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full">
                <div className="pf w-full h-full rounded-full">
                  <img src="https://avatars.githubusercontent.com/u/259362359?v=4" alt="Mayilsamy — Full Stack Developer" loading="eager" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">Open to projects</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="reveal reveal-blur text-xs font-medium text-accent tracking-widest uppercase mb-3">About me</p>
            <h2 className="reveal reveal-left d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">A bit about who I am</h2>
            <p className="reveal reveal-right d2 text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Hi, I'm Mayilsamy — a Computer Science graduate and aspiring Full Stack Developer specializing in Python, Django, React, JavaScript, HTML, CSS, and REST API development. I enjoy building responsive web applications, solving real-world problems, and continuously learning modern technologies to create impactful software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
            <div className="reveal reveal-scale d3 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-150 dark:border-zinc-800 hover:border-accent transition-colors flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-sm text-zinc-850 dark:text-zinc-200 mb-2">Career Objective</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Focused on securing a software engineering opportunity in Full Stack Web Development and building end-to-end applications.</p>
              </div>
            </div>
            <div className="reveal reveal-scale d3 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-150 dark:border-zinc-800 hover:border-accent transition-colors flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-sm text-zinc-850 dark:text-zinc-200 mb-2">Technical Interests</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Passionate about algorithm development, backend design with Python/Django, frontend UI in React, and AI/ML pipelines.</p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-scale d4 mt-8 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-150 dark:border-zinc-800 max-w-3xl mx-auto">
            <h4 className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-200 mb-4">Professional Strengths</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Analytical Problem Solving
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> End-to-End Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Database Design &amp; Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Collaborative Version Control
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">My Expertise</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Skills &amp; Technologies</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="reveal reveal-scale d1 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
              <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Languages
              </h3>
              <div className="flex flex-wrap gap-2 stag-animate">
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">Python</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">JavaScript</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">SQL</span>
              </div>
            </div>
            <div className="reveal reveal-scale d2 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
              <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Frontend
              </h3>
              <div className="flex flex-wrap gap-2 stag-animate">
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">HTML</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">CSS</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">Bootstrap</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">React.js</span>
              </div>
            </div>
            <div className="reveal reveal-scale d3 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
              <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Backend
              </h3>
              <div className="flex flex-wrap gap-2 stag-animate">
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">Django</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">Django REST</span>
              </div>
            </div>
            <div className="reveal reveal-scale d4 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
              <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Database
              </h3>
              <div className="flex flex-wrap gap-2 stag-animate">
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">MySQL</span>
              </div>
            </div>
            <div className="reveal reveal-scale d5 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
              <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Tools
              </h3>
              <div className="flex flex-wrap gap-2 stag-animate">
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">Git / GitHub</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">VS Code</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">Postman</span>
                <span className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WORK (PROJECTS) ═══ */}
      <section id="work" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="reveal reveal-blur text-xs font-medium text-accent tracking-widest uppercase mb-3">Portfolio</p>
              <h2 className="reveal reveal-left d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">My Projects</h2>
            </div>
            <Link to="/projects" className="reveal reveal-right d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl">
              All projects &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <article className="card-h reveal reveal-scale d1 group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent flex flex-col justify-between h-full">
              <div>
                <div className="pf w-full h-48">
                  <img src="/images/smart_healthcare_mockup.png" alt="Smart Healthcare Hospital Appointment System" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full">React.js</span>
                    <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">JavaScript</span>
                    <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">CSS</span>
                  </div>
                  <a href="https://github.com/Mayilsamyv12/Smart-Healthcare-Hospital-Appointment-System" target="_blank" rel="noopener noreferrer">
                    <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">Smart Healthcare Hospital Appointment System</h3>
                  </a>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    An intelligent booking portal designed for managing patient check-ins, clinical registration, and physician scheduling.
                  </p>
                  <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-xs font-bold text-zinc-750 dark:text-zinc-300 mb-1">Key Features:</p>
                    <ul className="text-[11px] text-zinc-500 dark:text-zinc-400 space-y-1 pl-4 list-disc">
                      <li>Online appointment booking</li>
                      <li>Doctor and patient management</li>
                      <li>Medical records management</li>
                      <li>Pharmacy and laboratory integration</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-4">
                <a href="https://github.com/Mayilsamyv12/Smart-Healthcare-Hospital-Appointment-System" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-white nl">
                  View on GitHub &rarr;
                </a>
              </div>
            </article>

            <article className="card-h reveal reveal-scale d2 group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent flex flex-col justify-between h-full">
              <div>
                <div className="pf w-full h-48">
                  <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" alt="Smart Complaint Ticket System" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full">Python</span>
                    <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">Django</span>
                    <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">MySQL</span>
                  </div>
                  <a href="https://github.com/Mayilsamyv12/Smart_Complaint_Ticket_System" target="_blank" rel="noopener noreferrer">
                    <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">Smart Complaint Ticket System</h3>
                  </a>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    A backend automation system to organize, track, and process customer complaints and support tickets.
                  </p>
                  <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-xs font-bold text-zinc-750 dark:text-zinc-300 mb-1">Key Features:</p>
                    <ul className="text-[11px] text-zinc-500 dark:text-zinc-400 space-y-1 pl-4 list-disc">
                      <li>Ticket creation and tracking</li>
                      <li>Interactive admin dashboard</li>
                      <li>Instant status notifications</li>
                      <li>Secure role-based authentication</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-4">
                <a href="https://github.com/Mayilsamyv12/Smart_Complaint_Ticket_System" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-white nl">
                  View on GitHub &rarr;
                </a>
              </div>
            </article>

            <article className="card-h reveal reveal-scale d3 group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent flex flex-col justify-between h-full">
              <div>
                <div className="pf w-full h-48">
                  <img src="/images/ecommerce_mockup.png" alt="E-Commerce Platform" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full">Django</span>
                    <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">React.js</span>
                    <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">MySQL</span>
                  </div>
                  <a href="https://github.com/Mayilsamyv12/Ecommerce-project" target="_blank" rel="noopener noreferrer">
                    <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">E-Commerce Platform</h3>
                  </a>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    A responsive web storefront highlighting modern client layouts, cart structures, and inventory pipelines.
                  </p>
                  <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-xs font-bold text-zinc-750 dark:text-zinc-300 mb-1">Key Features:</p>
                    <ul className="text-[11px] text-zinc-500 dark:text-zinc-400 space-y-1 pl-4 list-disc">
                      <li>Product catalog and management</li>
                      <li>Dynamic shopping cart logic</li>
                      <li>Scalable order processing</li>
                      <li>Mock payment gateway integration</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-4">
                <a href="https://github.com/Mayilsamyv12/Ecommerce-project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-white nl">
                  View on GitHub &rarr;
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE / INTERNSHIP ═══ */}
      <section id="experience" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Professional History</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Experience &amp; Internship</h2>
          </div>

          <div className="max-w-3xl">
            <div className="reveal d1 relative pl-8 border-l border-zinc-200 dark:border-zinc-800 pb-12">
              <span className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-zinc-950"></span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white">Full Stack Developer Intern</h3>
                  <p className="text-sm text-zinc-400 font-medium">Besant Technologies, Chennai</p>
                </div>
                <span className="text-xs bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full self-start sm:self-center font-bold">
                  Internship
                </span>
              </div>
              <ul className="text-sm text-zinc-500 dark:text-zinc-400 space-y-2.5 list-disc pl-5">
                <li>Smart Complaint & Service Ticket Management System | Python, JavaScript, SQL, HTML, CSS </li>
                <li>Developed a Smart Complaint Ticket System with complaint registration, tracking, and management features using full
stack web technologies.  </li>
                <li>Implemented secure authentication and role-based access control for users and administrators. </li>
                <li>Built RESTful APIs and integrated database operations for efficient ticket handling and status management.</li>
                <li>Designed a responsive and user-friendly interface to improve complaint resolution workflow and user experience. </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EDUCATION ═══ */}
      <section id="education" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Academic Background</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="reveal d1 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-150 dark:border-zinc-800 hover:border-accent transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-accent tracking-widest mb-2 block">2022 - 2026</span>
                <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-2">B.E. Computer Science and Engineering</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Surya Engineering College, Erode, Tamil Nadu</p>
                <div className="text-sm text-zinc-450 dark:text-zinc-400 space-y-2">
                  <p><strong className="text-zinc-700 dark:text-zinc-300">Affiliation:</strong> Anna University, Chennai</p>
                  <p><strong className="text-zinc-700 dark:text-zinc-300">Key Coursework:</strong> Data Structures & Algorithms, DBMS, Software Engineering, Web Technology, Artificial Intelligence & Machine Learning</p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400">CGPA</span>
                <span className="font-display font-bold text-xl text-zinc-900 dark:text-white">7.4 / 10</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section id="certifications" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Credentials</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <article className="reveal d1 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-1">Full Stack Developer</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">IT-ITeS SSC NASSCOM • Certificate</p>
                <span className="text-xs text-zinc-400">Professional Qualification</span>
              </div>
            </article>

            <article className="reveal d2 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-1">Python &amp; MySQL Certification</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Besant Technologies • Course Certificate</p>
                <span className="text-xs text-zinc-400">Technical Course Certification</span>
              </div>
            </article>

            <article className="reveal d3 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-1">Full Stack Development</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Besant Technologies, Chennai • Course Certificate</p>
                <span className="text-xs text-zinc-400">Technical Course Certification</span>
              </div>
            </article>

          </div>

          <div className="reveal d3 flex flex-wrap gap-4 justify-center bg-zinc-50 dark:bg-zinc-900/40 p-8 rounded-3xl border border-zinc-150 dark:border-zinc-800">
            <div className="text-center sm:text-left">
              <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2">Looking for my full background?</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 sm:mb-0">You can view my interactive resume directly in the browser or download a PDF copy for your records.</p>
            </div>
            <div className="flex gap-3 items-center ml-auto mr-auto sm:mr-0 self-center">
              <a 
                href="https://drive.google.com/file/d/1GXrPF4r18Uscm4l23IbapV7rtSD1KrQ0/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-5 py-2.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors text-xs"
              >
                View Resume
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=1GXrPF4r18Uscm4l23IbapV7rtSD1KrQ0" 
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer inline-flex items-center gap-2 bg-accent text-white font-medium px-5 py-2.5 rounded-full hover:bg-accent-light transition-colors text-xs shadow-lg shadow-accent/10"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">

              <div>
                <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Get in touch</p>
                <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">Let's work<br/>together</h2>
                <p className="reveal d2 text-zinc-400 leading-relaxed mb-8">Feel free to reach out to me for project collaborations, internship opportunities, or general inquiries. Let's build something awesome!</p>

                <div className="reveal d3 flex flex-col gap-4">
                  <a href="mailto:mayilsamyv12@gmail.com" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </span>
                    <span className="text-sm">mayilsamyv12@gmail.com</span>
                  </a>
                  <a href="tel:+918825638150" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </span>
                    <span className="text-sm">+91 88256 38150</span>
                  </a>
                  <a href="https://www.linkedin.com/in/mayilsamy12" rel="noopener noreferrer" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </span>
                    <span className="text-sm">linkedin.com/in/mayilsamy12</span>
                  </a>
                  <a href="https://github.com/Mayilsamyv12" rel="noopener noreferrer" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </span>
                    <span className="text-sm">github.com/Mayilsamyv12</span>
                  </a>
                  <div className="group flex items-center gap-3 text-zinc-400">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </span>
                    <span className="text-sm">Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              <div className="reveal d2">
                <form action="#" method="POST" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fname" className="block text-xs font-medium text-zinc-400 mb-1.5">Name <span aria-hidden="true">*</span></label>
                        <input type="text" id="fname" name="name" placeholder="Jane Smith" required autoComplete="name"
                          value={formData.name} onChange={handleChange}
                          className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="femail" className="block text-xs font-medium text-zinc-400 mb-1.5">Email <span aria-hidden="true">*</span></label>
                        <input type="email" id="femail" name="email" placeholder="jane@company.com" required autoComplete="email"
                          value={formData.email} onChange={handleChange}
                          className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="fsubject" className="block text-xs font-medium text-zinc-400 mb-1.5">Subject</label>
                      <input type="text" id="fsubject" name="subject" placeholder="Project inquiry"
                        value={formData.subject} onChange={handleChange}
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="fmessage" className="block text-xs font-medium text-zinc-400 mb-1.5">Message <span aria-hidden="true">*</span></label>
                      <textarea id="fmessage" name="message" rows="4" placeholder="Tell me about your project..." required
                        value={formData.message} onChange={handleChange}
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs">
                        Message sent successfully! I will get back to you soon.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-xs">
                        Something went wrong. Please check that you have configured your Web3Forms access key in your .env file or try again later.
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send message →'}
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
