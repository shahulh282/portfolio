import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Briefcase, 
  Code, 
  Globe, 
  Award,
  MessageCircle
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
    <section id="home" className="hero-section" style={{ position: 'relative' }}>
      {/* Background glow effects */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(90vw, 600px)',
          height: 'min(60vw, 400px)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          
          {/* Status Pill */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              marginBottom: '1.5rem',
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
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#34d399', letterSpacing: '0.02em', wordBreak: 'break-word' }}>
              {personalInfo.status}
            </span>
          </div>

          {/* Name & Title with Typewriter Letter-by-Letter Animation */}
          <h1 
            style={{
              fontSize: 'clamp(2.1rem, 6vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
              minHeight: '1.2em'
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
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              fontWeight: 600,
              color: '#e2e8f0',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              flexWrap: 'wrap'
            }}
          >
            <span>{personalInfo.title}</span>
            <span style={{ color: '#10b981' }}>•</span>
            <span style={{ color: '#38bdf8' }}>5+ Years Experience</span>
          </p>

          <p 
            style={{
              fontSize: 'clamp(0.92rem, 1.8vw, 1.08rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '760px',
              margin: '0 auto 2rem auto',
              padding: '0 0.5rem'
            }}
          >
            Specialized in architecting robust backend infrastructures in <strong style={{ color: '#f8fafc' }}>Laravel, CodeIgniter & Node.js</strong>, crafting responsive dynamic frontends in <strong style={{ color: '#f8fafc' }}>React</strong>, and engineering high-impact government & enterprise workflow platforms.
          </p>

          {/* CTAs Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary btn-lg">
              <span>Explore Projects</span>
              <ArrowRight size={17} />
            </a>

            <a 
              href="/Shahul_Hameed_Resume.pdf" 
              download="Shahul_Hameed_Resume.pdf" 
              className="btn btn-secondary btn-lg"
              style={{ borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>

            <a 
              href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Shahul,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-lg"
              style={{ borderColor: 'rgba(37, 211, 102, 0.4)', color: '#4ade80' }}
            >
              <MessageCircle size={17} />
              <span>WhatsApp Chat</span>
            </a>

            <a href="#contact" className="btn btn-secondary btn-lg">
              <span>Contact Me</span>
            </a>
          </div>

          {/* Key Metric Stats Grid (Responsive 2x2 on Mobile, 4x1 on Desktop) */}
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
      </div>

      <style>{`
        .hero-section {
          padding-top: 8.5rem;
          padding-bottom: 5rem;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          max-width: 960px;
          margin: 0 auto;
        }
        @media (max-width: 960px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .hero-section {
            padding-top: 6.5rem;
            padding-bottom: 3.5rem;
          }
          .hero-cta-group {
            margin-bottom: 2.5rem;
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group .btn {
            width: 100%;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
