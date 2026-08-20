import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Terminal, 
  CheckCircle2, 
  Briefcase, 
  Code, 
  Globe, 
  Award,
  Layers,
  Database,
  ExternalLink,
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

  const getStatIcon = (iconName) => {

    switch (iconName) {
      case 'Briefcase': return <Briefcase size={20} className="text-emerald-400" />;
      case 'Code': return <Code size={20} className="text-cyan-400" />;
      case 'Globe': return <Globe size={20} className="text-indigo-400" />;
      case 'Award': return <Award size={20} className="text-amber-400" />;
      default: return <Sparkles size={20} />;
    }
  };

  return (
    <section id="home" style={{ paddingTop: '8.5rem', paddingBottom: '5rem', position: 'relative' }}>
      {/* Background glow effects */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Main Hero Info */}
          <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
            
            {/* Status Pill */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: '1.75rem',
              }}
              className="animate-glow"
            >
              <span 
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34d399', letterSpacing: '0.02em' }}>
                {personalInfo.status}
              </span>
            </div>

            {/* Name & Title with Typewriter Letter-by-Letter Animation */}
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
                minHeight: '1.2em'
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text" style={{ position: 'relative' }}>
                {displayedName}
                <span 
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '0.85em',
                    backgroundColor: '#10b981',
                    marginLeft: '4px',
                    verticalAlign: 'baseline',
                    animation: 'blinkCursor 0.9s infinite',
                    boxShadow: '0 0 8px #10b981'
                  }}
                />
              </span>
            </h1>


            <p 
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                fontWeight: 600,
                color: '#e2e8f0',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '760px',
                margin: '0 auto 2.25rem auto'
              }}
            >
              Specialized in architecting robust backend infrastructures in <strong style={{ color: '#f8fafc' }}>Laravel, CodeIgniter & Node.js</strong>, crafting responsive dynamic frontends in <strong style={{ color: '#f8fafc' }}>React</strong>, and engineering high-impact government & enterprise workflow platforms.
            </p>

            {/* CTAs */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3.5rem'
              }}
            >
              <a href="#projects" className="btn btn-primary btn-lg">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="/Shahul_Hameed_Resume.pdf" 
                download="Shahul_Hameed_Resume.pdf" 
                className="btn btn-secondary btn-lg"
                style={{ borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <a 
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Shahul,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-lg"
                style={{ borderColor: 'rgba(37, 211, 102, 0.4)', color: '#4ade80' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Chat</span>
              </a>

              <a href="#contact" className="btn btn-secondary btn-lg">
                <span>Contact Me</span>
              </a>
            </div>

            {/* Key Metric Stats Row */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.25rem',
                maxWidth: '960px',
                margin: '0 auto'
              }}
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '1.5rem 1.25rem',
                    textAlign: 'center',
                    background: 'rgba(15, 23, 42, 0.8)',
                    borderColor: 'rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div 
                    style={{
                      fontSize: '2.4rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      color: index === 0 ? '#10b981' : index === 1 ? '#06b6d4' : index === 2 ? '#818cf8' : '#f59e0b',
                      lineHeight: 1,
                      marginBottom: '0.4rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
