import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Clock
} from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export default function About() {
  const coreCompetencies = [
    {
      title: "Backend & API Engineering",
      desc: "Robust RESTful API architecture in Laravel, CodeIgniter & Node.js with Eloquent ORM and strict MVC design.",
      icon: <Server size={22} style={{ color: '#10b981' }} />
    },
    {
      title: "Advanced Workflow Logic",
      desc: "Hierarchical multi-tier approval systems, asynchronous Queue Workers, automated Cron Jobs, and state-machine engines.",
      icon: <Clock size={22} style={{ color: '#06b6d4' }} />
    },
    {
      title: "Security & RBAC Controls",
      desc: "Fine-grained Role-Based Access Control, JWT tokenization, CSRF/SQLi sanitization, and compliance with government IT standards.",
      icon: <ShieldCheck size={22} style={{ color: '#818cf8' }} />
    },
    {
      title: "Third-Party Integrations",
      desc: "Seamless integration of SMS gateways, transactional Email services, Payment Gateways (Razorpay/Stripe/Mada), and QR workflows.",
      icon: <Cpu size={22} style={{ color: '#f59e0b' }} />
    }
  ];

  return (
    <section id="about" style={{ background: 'rgba(10, 15, 30, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <User size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">
            Architecting Scalable Solutions with <span className="gradient-text">Passion & Precision</span>
          </h2>
          <p className="section-subtitle">
            5+ years of delivering high-concurrency web systems, government portals, and dynamic client platforms.
          </p>
        </div>

        {/* Top Grid: Bio + Education */}
        <div className="about-grid">
          {/* Bio Glass Card */}
          <div 
            className="glass-card about-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.6) 100%)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <div 
                  style={{
                    padding: '0.5rem',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981'
                  }}
                >
                  <User size={20} />
                </div>
                <h3 style={{ fontSize: '1.3rem' }}>Professional Summary</h3>
              </div>

              <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '1.25rem' }}>
                {personalInfo.summary}
              </p>
            </div>

            {/* Location Pill & Info */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                <MapPin size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                <span><strong>Current:</strong> {personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Education & Academic Credentials */}
          <div 
            className="glass-card about-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.6) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div 
                style={{
                  padding: '0.5rem',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  color: '#06b6d4'
                }}
              >
                <GraduationCap size={20} />
              </div>
              <h3 style={{ fontSize: '1.3rem' }}>Education & Qualifications</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: '1.1rem',
                    background: 'rgba(10, 15, 30, 0.6)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '0.98rem', color: '#f8fafc', fontWeight: 600 }}>
                      {edu.degree}
                    </h4>
                    <span 
                      style={{
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#34d399',
                        fontWeight: 600
                      }}
                    >
                      {edu.year}
                    </span>
                  </div>
                  <div style={{ color: '#38bdf8', fontSize: '0.86rem', marginBottom: '0.4rem', fontWeight: 500 }}>
                    {edu.institution}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies Cards */}
        <h3 style={{ fontSize: '1.35rem', textAlign: 'center', marginBottom: '1.5rem', color: '#e2e8f0' }}>
          Core Engineering Competencies
        </h3>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1rem'
          }}
        >
          {coreCompetencies.map((comp, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
              }}
            >
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {comp.icon}
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#f8fafc' }}>{comp.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.55 }}>
                {comp.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: 1.75rem;
          margin-bottom: 2.75rem;
        }
        .about-card {
          padding: 2.25rem;
        }
        @media (max-width: 640px) {
          .about-card {
            padding: 1.35rem 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
