import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Clock, 
  Database,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export default function About() {
  const coreCompetencies = [
    {
      title: "Backend & API Engineering",
      desc: "Robust RESTful API architecture in Laravel, CodeIgniter & Node.js with Eloquent ORM and strict MVC design.",
      icon: <Server size={24} style={{ color: '#10b981' }} />
    },
    {
      title: "Advanced Workflow Logic",
      desc: "Hierarchical multi-tier approval systems, asynchronous Queue Workers, automated Cron Jobs, and state-machine engines.",
      icon: <Clock size={24} style={{ color: '#06b6d4' }} />
    },
    {
      title: "Security & RBAC Controls",
      desc: "Fine-grained Role-Based Access Control, JWT tokenization, CSRF/SQLi sanitization, and compliance with government IT standards.",
      icon: <ShieldCheck size={24} style={{ color: '#818cf8' }} />
    },
    {
      title: "Third-Party Integrations",
      desc: "Seamless integration of SMS gateways, transactional Email services, Payment Gateways (Razorpay/Stripe/Mada), and QR workflows.",
      icon: <Cpu size={24} style={{ color: '#f59e0b' }} />
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
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {/* Bio Glass Card */}
          <div 
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.6) 100%)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div 
                  style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981'
                  }}
                >
                  <User size={22} />
                </div>
                <h3 style={{ fontSize: '1.4rem' }}>Professional Summary</h3>
              </div>

              <p style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: '1.25rem' }}>
                {personalInfo.summary}
              </p>
            </div>

            {/* Location Pill & Info */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                <MapPin size={16} style={{ color: '#10b981' }} />
                <span><strong>Current:</strong> {personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Education & Academic Credentials */}
          <div 
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.6) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div 
                style={{
                  padding: '0.6rem',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  color: '#06b6d4'
                }}
              >
                <GraduationCap size={22} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Education & Qualifications</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    background: 'rgba(10, 15, 30, 0.6)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 600 }}>
                      {edu.degree}
                    </h4>
                    <span 
                      style={{
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#34d399',
                        fontWeight: 600
                      }}
                    >
                      {edu.year}
                    </span>
                  </div>
                  <div style={{ color: '#38bdf8', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                    {edu.institution}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies Cards */}
        <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.75rem', color: '#e2e8f0' }}>
          Core Engineering Competencies
        </h3>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {coreCompetencies.map((comp, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {comp.icon}
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#f8fafc' }}>{comp.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {comp.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
