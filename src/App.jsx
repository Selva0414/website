import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  ChevronDown,
  Radio,
  Clock,
  Briefcase,
  UserCheck,
  Menu,
  X,
  Sparkles,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Play,
  Flame,
  Award,
  BookOpen,
  HelpCircle,
  TrendingUp,
  Star,
  Users,
  Compass,
  ArrowUp
} from 'lucide-react';
import {
  PARTNER_LOGOS,
  HERO_STATS,
  RECOGNITIONS,
  WHY_US_CARDS,
  REVIEWS,
  FOOTER_DATA
} from './data';
import './App.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bootcampDropdown, setBootcampDropdown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal State for interactive Enroll
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Active FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  // Live Visitor Counter
  const [liveVisitors, setLiveVisitors] = useState(148);

  // Typewriter effect for words
  const words = ["Unforgettable", "Interesting", "Clever", "Practical", "Interactive"];
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Scroll Progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
      setShowScrollTop(currentScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fluctuate live visitors realistically
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(120, prev + delta);
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Typewriter logic
  useEffect(() => {
    const fullWord = words[textIndex % words.length];
    const typingSpeed = isDeleting ? 65 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  // Trigger celebration confetti on button action
  const handleEnrollClick = (courseTitle) => {
    setSelectedCourseForEnroll(courseTitle);
    setEnrollModalOpen(true);
    setFormSubmitted(false);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 }
    });
    setTimeout(() => {
      setEnrollModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  const communitySlides = [
    {
      title: "Community meet-up Perungudi - Chennai",
      badge: "Over 500+ Attendees",
      desc: "Live code walkthroughs, project reviews, and face-to-face mentorship with Naveen and top industry leaders.",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Full Stack Hackathon & Demo Day",
      badge: "24-Hour Building Sprint",
      desc: "Students presenting production-ready AI and MERN startups to venture recruiters and senior architects.",
      img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Alumni Networking & Placement Gala",
      badge: "94% Placement Rate",
      desc: "Celebrating students placed at Freshworks, Zoho, Cognizant, Eurofins and US Startups.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
    }
  ];

  const faqs = [
    {
      q: "How does Error Makes Clever's teaching method differ from other platforms?",
      a: "Instead of following pre-baked slides, we live code everything from scratch. When errors happen, we debug them live together so you understand real-world engineering troubleshooting and retain 10x more logic."
    },
    {
      q: "Are the bootcamps suitable for non-computer science students or working professionals?",
      a: "Yes! Over 60% of our students come from non-IT backgrounds or are working in other domains. The curriculum starts from absolute ground zero and scales up step-by-step."
    },
    {
      q: "What kind of projects will I have in my portfolio?",
      a: "You'll build real-world SaaS apps: Full Stack AI platforms, Payment integrated e-commerce with Stripe, microservices deployed to AWS Cloud with Docker & Kubernetes, and modern Next.js 15 apps."
    },
    {
      q: "Do you offer placement support & mock interviews?",
      a: "Yes, every enrolled student receives resume screening, 1-on-1 mock technical interviews, DSA practice sessions, and direct recruitment drives through our 120+ hiring network."
    }
  ];

  return (
    <div className="emc-page">
      {/* Scroll Progress Bar at the very top */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Floating WhatsApp Action with Ripple Animation */}
      <a
        href="https://api.whatsapp.com/send?phone=919876543210"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float pulse-ring"
        aria-label="Chat on WhatsApp"
      >
        <span className="tooltip-whatsapp">Chat with Counselor</span>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.8-.37-4.02-1.07l-.29-.17-2.98.78.8-2.9-.19-.3a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.65.81-.8 1-.15.19-.29.21-.54.08-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.49-.07.82-.67 1.47-1.32.18-.32.18-.6.13-.67-.05-.07-.21-.12-.46-.25z"/>
        </svg>
      </a>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          className="scroll-top-btn floating-bounce"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Top Notification Announcement Ticker */}
      <div className="top-announcement-strip">
        <div className="container strip-content">
          <span className="live-status-pill">
            <span className="live-pulsing-green"></span>
            LIVE
          </span>
          <span className="strip-text">
            <strong>Next Cohort Starts in 4 Days!</strong> Limited seats for AI & Full Stack Batches.
          </span>
          <span className="live-visitor-count">
            <Users size={14} className="text-amber-400" /> {liveVisitors} aspiring coders viewing right now
          </span>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="emc-header">
        <div className="container header-container">
          <a href="#" className="emc-logo-link">
            <div className="emc-logo-badge logo-hover-scale">
              <svg width="42" height="42" viewBox="0 0 60 60" fill="none">
                <path d="M30 6L6 18L30 30L54 18L30 6Z" fill="#1e293b" />
                <path d="M50 20.5V36H53V19L50 20.5Z" fill="#f59e0b" />
                <circle cx="51.5" cy="38" r="2.5" fill="#f59e0b" />
                <path d="M14 24.5V37C14 43 21 47 30 47C39 47 46 43 46 37V24.5L30 32.5L14 24.5Z" fill="#334155" opacity="0.15" />
                <text x="21" y="44" fontFamily="Impact, Arial Black, sans-serif" fontSize="26" fill="#1e293b" fontWeight="bold">E</text>
              </svg>
            </div>
            <div className="logo-text-block">
              <span className="logo-main-text">Error Makes Clever</span>
              <span className="logo-sub-text">Error Makes Clever</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={`emc-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#" className="nav-item active-nav">Home</a>
            
            <div
              className="nav-item dropdown-nav"
              onMouseEnter={() => setBootcampDropdown(true)}
              onMouseLeave={() => setBootcampDropdown(false)}
            >
              <span className="dropdown-trigger">
                Live Bootcamp <ChevronDown size={14} className={`dropdown-icon ${bootcampDropdown ? 'icon-rotated' : ''}`} />
              </span>
              {bootcampDropdown && (
                <div className="dropdown-menu animate-fade-down">
                  <a href="#ai-bootcamp" className="dropdown-item" onClick={() => setBootcampDropdown(false)}>
                    <div className="item-title">AI Full Stack Developer Bootcamp</div>
                    <span className="item-badge-pill">Popular</span>
                  </a>
                  <a href="#offline-bootcamp" className="dropdown-item" onClick={() => setBootcampDropdown(false)}>
                    <div className="item-title">Full Stack Web Development (Offline)</div>
                    <span className="item-sub">Chennai Center</span>
                  </a>
                  <a href="#devops-bootcamp" className="dropdown-item" onClick={() => setBootcampDropdown(false)}>
                    <div className="item-title">DevOps with AWS Cloud Bootcamp</div>
                    <span className="item-sub">Live Online</span>
                  </a>
                </div>
              )}
            </div>

            <a href="#courses" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Crash Courses</a>
            <a href="#reviews" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Student Reviews</a>
            <a href="#why-us" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#faq" className="nav-item" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            
            {/* Navigation links */}
          </nav>

          <div className="header-actions">
            <button className="emc-btn-login ripple-btn" onClick={() => handleEnrollClick("Student Portal")}>
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-text-content">
            <div className="hero-badge-tag shine-effect">
              <Sparkles size={15} className="text-amber-500 animate-spin-slow" />
              <span>South India's #1 Tech Learning Revolution</span>
            </div>

            <h1 className="hero-main-heading">
              <span className="heading-bar glow-bar"></span>
              Helping you become outstanding <br />
              by Making Tech <span className="highlight-blue gradient-text-anim">{currentText}</span>
              <span className="typewriter-cursor">|</span>
            </h1>

            {/* Stats row with hover-lift micro-interactions */}
            <div className="hero-stats-row">
              {HERO_STATS.map((s, idx) => (
                <div key={idx} className="stat-unit stat-interactive-card">
                  <span className="stat-big-val stat-counter">{s.value}</span>
                  <span className="stat-unit-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta-buttons">
              <a href="#courses" className="btn-hero-primary ripple-btn">
                Explore Bootcamps <ArrowRight size={17} />
              </a>
              <a href="https://www.youtube.com/@ErrorMakesClever" target="_blank" rel="noreferrer" className="btn-hero-secondary">
                <Play size={16} fill="currentColor" /> Free YouTube Lessons
              </a>
            </div>
          </div>

          {/* Interactive Interactive Mosaic Grid with dynamic light hover */}
          <div className="hero-grid-pattern">
            <div className="mosaic-grid">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className={`mosaic-cell ${i % 3 === 0 ? 'cell-tinted' : ''} ${i === 7 || i === 14 || i === 20 ? 'cell-darker' : ''} hover-tile`}
                  style={{ animationDelay: `${(i % 5) * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Partners Continuous Marquee Stream */}
        <div className="partners-banner">
          <div className="container">
            <p className="partners-title">Where do our students work?</p>
            <div className="partners-row-wrapper marquee-scroll">
              <div className="partners-stream">
                {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, idx) => (
                  <div key={idx} className="partner-brand partner-hover-pill">
                    {p.name === "Tata" && (
                      <svg width="24" height="20" viewBox="0 0 24 24" fill="#475569">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-2.83-.48-4-2.54-4-2.54l1.41-1.42s1.08 1.44 2.59 1.76V11.8c-2.31-.62-3.8-1.57-3.8-3.41 0-1.92 1.55-3.32 3.8-3.69V4h2v.7c2.19.38 3.32 1.83 3.32 1.83l-1.39 1.43s-.88-1.02-2.12-1.31v2.85c2.51.7 4 1.76 4 3.55 0 2.01-1.61 3.42-3.81 3.88z" />
                      </svg>
                    )}
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section" id="courses">
        <div className="container">
          <span className="section-label-orange">OUR PROGRAM</span>
          <h2 className="section-big-title">
            Discover Our Premier, Top-Rated <br />
            Learning Program
          </h2>

          <div className="programs-stack">
            {/* Card 1: AI Full Stack Developer Bootcamp */}
            <div className="program-card dark-navy-card glowing-hover-card" id="ai-bootcamp">
              <div className="program-card-header">
                <div className="badges-group">
                  <span className="tag-ai-pill pulse-badge">NEW · AI POWERED</span>
                  <span className="tag-startup-pill">Startup Incubated</span>
                </div>
              </div>

              <div className="program-main-row">
                <div className="program-info-col">
                  <div className="program-title-with-icon">
                    <div className="icon-ai-box floating-element">
                      <Sparkles size={24} color="#ffffff" />
                    </div>
                    <h3 className="card-program-title text-white">AI Full Stack Developer Bootcamp</h3>
                  </div>
                  <p className="card-program-desc text-slate-300">
                    A 4-month + 1-month internship AI Full Stack Engineering Bootcamp, designed by a start-up
                    to take you from Frontend, Backend, Database and AI to Deployment.
                  </p>
                </div>

                <div className="tech-logo-badges">
                  <div className="tech-white-box tech-tilt" title="React"><span className="tech-react-icon">⚛️</span></div>
                  <div className="tech-white-box tech-tilt" title="Next.js"><span className="tech-bold-icon">N</span></div>
                  <div className="tech-white-box tech-tilt" title="Node.js"><span className="tech-node-icon">JS</span></div>
                  <div className="tech-white-box tech-tilt" title="PostgreSQL"><span className="tech-pg-icon">🐘</span></div>
                  <div className="tech-white-box tech-tilt" title="OpenAI API"><span className="tech-ai-icon">✴️</span></div>
                </div>
              </div>

              <div className="skills-pill-row">
                {["React", "Next.js", "Node.js", "PostgreSQL", "AI Integration", "Stripe", "Docker", "Deployment"].map((s, idx) => (
                  <span key={idx} className="skill-bubble-dark hover-scale-sm">{s}</span>
                ))}
              </div>

              <div className="program-card-footer">
                <div className="footer-perks-list text-slate-200">
                  <span className="perk-label"><Radio size={15} className="text-red-400 animate-pulse" /> Live Classes</span>
                  <span className="perk-label"><Clock size={15} /> 4 Months + 1 Month Internship</span>
                  <span className="perk-label"><Briefcase size={15} /> Placement Assistance</span>
                  <span className="perk-label"><UserCheck size={15} /> Live Mentor Support</span>
                </div>
                <button
                  className="btn-purple-enroll ripple-btn"
                  onClick={() => handleEnrollClick("AI Full Stack Developer Bootcamp")}
                >
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Card 2: Classroom Full Stack Program */}
            <div className="program-card cream-card glowing-hover-card" id="offline-bootcamp">
              <div className="program-card-header">
                <span className="tag-orange-badge">CLASSROOM PROGRAM</span>
              </div>

              <div className="program-main-row">
                <div className="program-info-col">
                  <div className="program-title-with-icon">
                    <div className="icon-orange-box floating-element">
                      <Laptop size={24} color="#ea580c" />
                    </div>
                    <h3 className="card-program-title text-slate-900">
                      Full Stack Web Development Bootcamp (Offline)
                    </h3>
                  </div>
                  <p className="card-program-desc text-slate-700">
                    Classroom-based Full Stack Training with in-person mentors and hands-on projects, built to launch your developer career. Classes Mon, Wed & Fri and Sunday, 4:00 PM - 5:30 PM.
                  </p>
                </div>

                <div className="tech-logo-badges">
                  <div className="tech-plain-logo tech-tilt"><strong>node</strong></div>
                  <div className="tech-black-box tech-tilt">ex</div>
                  <div className="tech-react-colored tech-tilt">⚛️</div>
                  <div className="tech-mongo-leaf tech-tilt">🍃</div>
                </div>
              </div>

              <div className="skills-pill-row">
                {[
                  { name: "HTML", bg: "#fef3c7" },
                  { name: "CSS", bg: "#e0f2fe" },
                  { name: "JavaScript", bg: "#fef9c3" },
                  { name: "TailwindCSS", bg: "#cffafe" },
                  { name: "ReactJS", bg: "#dbeafe" },
                  { name: "NodeJS", bg: "#dcfce7" },
                  { name: "ExpressJS", bg: "#e2e8f0" },
                  { name: "MongoDB", bg: "#bbf7d0" }
                ].map((s, idx) => (
                  <span key={idx} className="skill-bubble-pastel hover-scale-sm" style={{ backgroundColor: s.bg }}>
                    {s.name}
                  </span>
                ))}
              </div>

              <div className="program-card-footer">
                <div className="footer-perks-list text-slate-700">
                  <span className="perk-label"><Radio size={15} /> Offline In-Person</span>
                  <span className="perk-label"><Clock size={15} /> 4 Months</span>
                  <span className="perk-label"><Briefcase size={15} /> Placement Assistance</span>
                  <span className="perk-label"><UserCheck size={15} /> Live Mentor Support</span>
                </div>
                <button
                  className="btn-orange-enroll ripple-btn"
                  onClick={() => handleEnrollClick("Full Stack Web Development (Offline)")}
                >
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Card 3: DevOps with AWS Cloud */}
            <div className="program-card cyan-card glowing-hover-card" id="devops-bootcamp">
              <div className="program-main-row">
                <div className="program-info-col">
                  <div className="program-title-with-icon">
                    <div className="icon-green-box floating-element">
                      <span className="cloud-icon">☁️</span>
                    </div>
                    <h3 className="card-program-title text-slate-900">
                      DevOps with AWS Cloud Bootcamp
                    </h3>
                  </div>
                  <p className="card-program-desc text-slate-700">
                    DevOps with AWS Cloud Bootcamp offers industry-led training to fast-track your shift into high-demand cloud and automation roles.
                  </p>
                </div>

                <div className="tech-logo-badges">
                  <div className="tech-plain-logo tech-tilt"><strong>aws</strong></div>
                  <div className="tech-plain-logo tech-tilt">♾️ CI/CD</div>
                  <div className="tech-plain-logo tech-tilt">🐳 docker</div>
                  <div className="tech-plain-logo tech-tilt">🤵 jenkins</div>
                </div>
              </div>

              <div className="skills-pill-row">
                {[
                  { name: "AWS", bg: "#cffafe" },
                  { name: "CI/CD", bg: "#f3e8ff" },
                  { name: "Docker", bg: "#ffedd5" },
                  { name: "Jenkins", bg: "#fef3c7" },
                  { name: "Cloud Computing", bg: "#e0f2fe" },
                  { name: "Grafana", bg: "#e0e7ff" },
                  { name: "Linux", bg: "#ffe4e6" },
                  { name: "Prometheus", bg: "#fef9c3" }
                ].map((s, idx) => (
                  <span key={idx} className="skill-bubble-pastel hover-scale-sm" style={{ backgroundColor: s.bg }}>
                    {s.name}
                  </span>
                ))}
              </div>

              <div className="program-card-footer">
                <div className="footer-perks-list text-slate-700">
                  <span className="perk-label"><Radio size={15} /> Live Classes</span>
                  <span className="perk-label"><Clock size={15} /> 3 Months</span>
                  <span className="perk-label"><Briefcase size={15} /> Placement Assistance</span>
                  <span className="perk-label"><UserCheck size={15} /> Live Mentor Support</span>
                </div>
                <button
                  className="btn-blue-enroll ripple-btn"
                  onClick={() => handleEnrollClick("DevOps with AWS Cloud Bootcamp")}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Badges Bar */}
      <section className="recognitions-bar">
        <div className="container recognitions-grid">
          {RECOGNITIONS.map((r, idx) => (
            <div key={idx} className="recognition-card card-interactive-lift">
              <Award size={18} className="text-amber-500 mr-2" />
              <span>{r}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section" id="why-us">
        <div className="container">
          <span className="section-label-orange text-center">WHY US</span>
          <h2 className="section-big-title text-center">
            Why We're the Best Choice for <br />
            Your Learning
          </h2>

          <div className="why-us-grid">
            {WHY_US_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="why-card card-interactive-lift"
                style={{ backgroundColor: card.bg, borderColor: card.border }}
              >
                <div className="card-top-indicator">0{idx + 1}</div>
                <h4 className="why-card-title">{card.title}</h4>
                <p className="why-card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Community Carousel Slider */}
      <section className="community-section">
        <div className="container">
          <span className="section-label-orange text-center">COMMUNITY</span>
          <h2 className="section-big-title text-center">Join a global movement.</h2>
          <p className="section-subtext text-center">
            Our vibrant community produces content, teaches courses, and leads events all over
          </p>

          <div className="community-carousel-card">
            <div className="carousel-slide-content animate-fade-in" key={currentSlide}>
              <div
                className="event-photo-placeholder"
                style={{ backgroundImage: `url(${communitySlides[currentSlide].img})` }}
              >
                <div className="event-photo-overlay">
                  <span className="event-badge">{communitySlides[currentSlide].badge}</span>
                  <h3 className="event-title-heading">{communitySlides[currentSlide].title}</h3>
                  <p className="event-caption">{communitySlides[currentSlide].desc}</p>
                </div>
              </div>
              <p className="carousel-caption-sub">{communitySlides[currentSlide].title}</p>
            </div>
            
            {/* Interactive dot controls */}
            <div className="carousel-dots">
              {communitySlides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  className={`dot-btn ${currentSlide === dotIdx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews Masonry Section */}
      <section className="reviews-section" id="reviews">
        <div className="container">
          <span className="section-label-orange text-center">TESTIMONIALS</span>
          <h2 className="section-big-title text-center">What Our Students Say</h2>
          
          <div className="reviews-masonry">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="review-brick review-interactive-hover">
                <div className="review-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="review-quote-text">{rev.text}</p>
                <div className="review-user-row">
                  <img src={rev.avatar} alt={rev.author} className="review-avatar" />
                  <div className="review-meta">
                    <span className="review-author-name">{rev.author}</span>
                    <span className="review-source-tag">{rev.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <span className="section-label-orange text-center">GOT QUESTIONS?</span>
          <h2 className="section-big-title text-center">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? 'faq-open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`faq-chevron ${activeFaq === idx ? 'chevron-rotated' : ''}`} />
                </div>
                {activeFaq === idx && (
                  <div className="faq-answer animate-fade-down">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Sticky CTA Banner */}
      <section className="ready-cta-banner">
        <div className="container ready-cta-layout">
          <div>
            <h3 className="ready-cta-heading">Ready to Master Coding Without Fear?</h3>
            <p className="ready-cta-sub">Join 35,000+ engineers learning to debug and build production software.</p>
          </div>
          <button className="btn-cta-launch ripple-btn" onClick={() => handleEnrollClick("Flagship Cohort")}>
            Get Instant Syllabus & Access <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Giant Pitch Black Footer with Watermark */}
      <footer className="emc-footer">
        <div className="container">
          <div className="footer-watermark">
            ERROR MAKES CLEVER
          </div>

          <div className="footer-columns-grid">
            <div className="footer-col">
              <h5 className="footer-col-title">Our Free Courses</h5>
              <ul className="footer-menu">
                {FOOTER_DATA.freeCourses.map((c, i) => (
                  <li key={i}><a href="#">{c}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">Quick Links</h5>
              <ul className="footer-menu">
                {FOOTER_DATA.quickLinks.map((l, i) => (
                  <li key={i}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">Error Makes Clever</h5>
              <ul className="footer-menu">
                {FOOTER_DATA.companyLinks.map((m, i) => (
                  <li key={i}><a href="#">{m}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col footer-app-col">
              <div className="app-badge-box">
                <div className="store-pill card-interactive-lift">
                  <span>📱 Download App on Play Store</span>
                </div>
                <div className="store-pill card-interactive-lift">
                  <span>🍎 Download App on App Store</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-row">
            <div className="copyright-text">
              © 2025 Nxtspire Education Private Limited • <a href="#">Terms of Use</a> • <a href="#">Privacy</a> • enquiry@errormakesclever.com
            </div>
            <div className="footer-social-icons">
              <a href="https://youtube.com/@ErrorMakesClever" target="_blank" rel="noreferrer" className="social-pill">YouTube</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill">LinkedIn</a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="social-pill">Discord</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Enrollment Modal */}
      {enrollModalOpen && (
        <div className="modal-backdrop" onClick={() => setEnrollModalOpen(false)}>
          <div className="modal-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setEnrollModalOpen(false)}>
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="modal-icon-header">
                  <Sparkles size={28} className="text-amber-500" />
                </div>
                <h3 className="modal-title">Join {selectedCourseForEnroll}</h3>
                <p className="modal-subtitle">Enter your details to receive instant curriculum brochures and scholarship status.</p>
                <form className="modal-form" onSubmit={handleEnrollSubmit}>
                  <div className="form-group">
                    <label>Your Full Name</label>
                    <input type="text" placeholder="e.g. Karthikeyan" required />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="karthik@gmail.com" required />
                  </div>
                  <button type="submit" className="btn-modal-submit ripple-btn">
                    Confirm & Reserve My Seat 🚀
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success-state">
                <CheckCircle2 size={54} className="text-emerald-500 animate-bounce" />
                <h3 className="modal-title mt-4">Seat Reserved Successfully!</h3>
                <p className="modal-subtitle">Our academic counselor will reach out on WhatsApp within 10 minutes with your syllabus.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
