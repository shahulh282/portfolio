import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Briefcase, 
  Code, 
  Globe, 
  Award,
  MessageCircle,
  FileText,
  CheckCircle2,
  Terminal,
  Layers
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenProjectModal }) {
  const fullName = personalInfo.name || "M. Shahul Hameed";
  const [displayedName, setDisplayedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedName('');
    setIsTypingComplete(false);

    const timer = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 90);

    return () => clearInterval(timer);
  }, [fullName]);

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow effects */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(95vw, 900px)',
          height: 'min(70vw, 550px)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Hero Grid: Text & CTAs on Left/Center, Photo Avatar on Right/Center */}
        <div className="hero-main-layout">
          
          {/* Left Column: Intro text, Title, Tags, Action Buttons */}
          <div className="hero-content-col">
            
            {/* Status Pill */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                marginBottom: '1.25rem',
                maxWidth: '100%'
              }}
              className="animate-glow"
            >
              <span 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  flexShrink: 0
                }}
              />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#34d399', letterSpacing: '0.02em' }}>
                {personalInfo.status}
              </span>
            </div>

            {/* Name with Typewriter Letter-by-Letter Animation */}
            <h1 
              style={{
                fontSize: 'clamp(2.3rem, 5.5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                marginBottom: '1rem',
                letterSpacing: '-0.03em'
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text" style={{ position: 'relative', display: 'inline-block' }}>
                {displayedName}
                <span 
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '0.8em',
                    backgroundColor: '#10b981',
                    marginLeft: '3px',
                    verticalAlign: 'baseline',
                    animation: 'blinkCursor 0.9s infinite',
                    boxShadow: '0 0 8px #10b981'
                  }}
                />
              </span>
            </h1>

            {/* Subtitle / Role */}
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
                fontWeight: 600,
                color: '#e2e8f0',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}
            >
              <span>{personalInfo.title}</span>
              <span style={{ color: '#10b981' }}>•</span>
              <span style={{ color: '#38bdf8' }}>5+ Years Experience</span>
            </p>

            <p 
              style={{
                fontSize: 'clamp(0.94rem, 1.7vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '620px'
              }}
            >
              Specialized in architecting robust backend infrastructures in <strong style={{ color: '#f8fafc' }}>Laravel, CodeIgniter & Node.js</strong>, crafting high-performance dynamic frontends in <strong style={{ color: '#f8fafc' }}>React</strong>, and engineering mission-critical government & enterprise workflow platforms.
            </p>

            {/* CTAs Action Buttons */}
            <div className="hero-cta-group">
              <a 
                href="/Shahul_Hameed_Resume.pdf" 
                download="Shahul_Hameed_Resume.pdf" 
                className="btn btn-primary btn-lg"
                title="Download Shahul Hameed Resume PDF"
                style={{ 
                  boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)'
                }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <a href="#projects" className="btn btn-secondary btn-lg">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Shahul,%20I%20saw%20your%20portfolio%20and%20resume.%20I%20would%20like%20to%20connect.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-lg"
                style={{ borderColor: 'rgba(37, 211, 102, 0.4)', color: '#4ade80' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>

              <a href="#contact" className="btn btn-secondary btn-lg">
                <span>Contact</span>
              </a>
            </div>

          </div>

          {/* Right Column: AI Enhanced Profile Photo Card with Floating Tech Badges */}
          <div className="hero-photo-col">
            <div className="hero-photo-wrapper">
              
              {/* Outer decorative glowing ring */}
              <div className="photo-glow-ring" />

              {/* Main Photo Card */}
              <div className="photo-inner-card">
                <img 
                  src="/shahul-hameed.jpg" 
                  alt="M. Shahul Hameed - Full Stack Web Application Developer" 
                  className="hero-avatar-img"
                  loading="eager"
                  width="380"
                  height="380"
                />

                {/* Bottom Overlay Label */}
                <div className="photo-caption-bar">
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#f8fafc' }}>
                      M. Shahul Hameed (MCA)
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                      Full Stack Web Developer
                    </div>
                  </div>
                  <a 
                    href="/Shahul_Hameed_Resume.pdf" 
                    download="Shahul_Hameed_Resume.pdf" 
                    className="photo-resume-btn"
                    title="Download Resume"
                  >
                    <Download size={14} />
                    <span>CV</span>
                  </a>
                </div>
              </div>

              {/* Floating Badge 1: Experience */}
              <div className="floating-badge badge-top-left">
                <div className="badge-icon-box" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981' }}>
                  <Briefcase size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Experience</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>5+ Years</div>
                </div>
              </div>

              {/* Floating Badge 2: Tech Stack */}
              <div className="floating-badge badge-bottom-right">
                <div className="badge-icon-box" style={{ background: 'rgba(6, 182, 212, 0.2)', color: '#06b6d4' }}>
                  <Layers size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Specialization</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>Laravel • React • Node</div>
                </div>
              </div>

              {/* Floating Badge 3: Verified Badge */}
              <div className="floating-badge badge-bottom-left">
                <div className="badge-icon-box" style={{ background: 'rgba(129, 140, 248, 0.2)', color: '#818cf8' }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Govt & Enterprise</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#c084fc' }}>Production Ready</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Key Metric Stats Grid (Responsive 4x1 on Desktop, 2x2 on Mobile) */}
        <div className="hero-stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: '1.25rem 1rem',
                textAlign: 'center',
                background: 'rgba(15, 23, 42, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <div 
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: index === 0 ? '#10b981' : index === 1 ? '#06b6d4' : index === 2 ? '#818cf8' : '#f59e0b',
                  lineHeight: 1,
                  marginBottom: '0.35rem'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 5rem;
        }
        .hero-main-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 3.5rem;
        }
        .hero-content-col {
          text-align: left;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        
        /* Photo Card Styles */
        .hero-photo-col {
          display: flex;
          justifyContent: center;
          align-items: center;
        }
        .hero-photo-wrapper {
          position: relative;
          width: 100%;
          max-width: 360px;
          aspect-ratio: 1 / 1;
        }
        .photo-glow-ring {
          position: absolute;
          inset: -12px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.6) 0%, rgba(6, 182, 212, 0.4) 50%, rgba(129, 140, 248, 0.5) 100%);
          filter: blur(14px);
          opacity: 0.75;
          animation: pulseGlow 6s ease-in-out infinite alternate;
          z-index: 0;
        }
        @keyframes pulseGlow {
          0% { opacity: 0.5; transform: scale(0.98); }
          100% { opacity: 0.9; transform: scale(1.02); }
        }
        .photo-inner-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          background: #0f172a;
          border: 2px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
        .hero-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
          display: block;
        }
        .photo-inner-card:hover .hero-avatar-img {
          transform: scale(1.04);
        }
        .photo-caption-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(6, 9, 19, 0.95) 0%, rgba(6, 9, 19, 0.75) 70%, transparent 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 1.25rem 1rem 0.85rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 2;
        }
        .photo-resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.35rem 0.65rem;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-size: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .photo-resume-btn:hover {
          background: #10b981;
          color: #04070f;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.55rem 0.85rem;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          z-index: 3;
          animation: floatSlow 4s ease-in-out infinite alternate;
        }
        .badge-top-left {
          top: -12px;
          left: -18px;
          animation-delay: 0s;
        }
        .badge-bottom-right {
          bottom: 25px;
          right: -24px;
          animation-delay: 1.5s;
        }
        .badge-bottom-left {
          bottom: -15px;
          left: -15px;
          animation-delay: 0.8s;
        }
        .badge-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }

        /* Stats Grid */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .hero-main-layout {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-content-col {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .badge-top-left { left: 0px; top: -10px; }
          .badge-bottom-right { right: 0px; }
          .badge-bottom-left { display: none; }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 6.5rem;
            padding-bottom: 3.5rem;
          }
          .hero-photo-wrapper {
            max-width: 290px;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group .btn {
            width: 100%;
            justify-content: center;
          }
          .floating-badge {
            padding: 0.4rem 0.65rem;
          }
          .badge-top-left {
            top: -10px;
            left: -5px;
          }
          .badge-bottom-right {
            bottom: 15px;
            right: -5px;
          }
        }
      `}</style>
    </section>
  );
}
