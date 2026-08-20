import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Sparkles
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            5+ years building production-grade web systems across government agencies, tech consultancies, and digital product firms.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical connecting line */}
          <div className="timeline-connector-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className="timeline-item"
              >
                {/* Timeline Node Dot */}
                <div 
                  className="timeline-node-dot"
                  style={{
                    background: exp.current 
                      ? 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)' 
                      : '#0f172a',
                    border: exp.current 
                      ? '2.5px solid #10b981' 
                      : '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: exp.current ? '0 0 16px rgba(16, 185, 129, 0.5)' : 'none'
                  }}
                >
                  {exp.current ? <Sparkles size={18} /> : <Building2 size={16} />}
                </div>

                {/* Content Card */}
                <div 
                  className="glass-card timeline-card"
                  style={{
                    flex: 1,
                    borderLeft: exp.current ? '3px solid #10b981' : '1px solid var(--border-subtle)'
                  }}
                >
                  {/* Header */}
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 700 }}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span 
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              padding: '0.15rem 0.55rem',
                              borderRadius: '9999px',
                              background: 'rgba(16, 185, 129, 0.15)',
                              color: '#34d399',
                              border: '1px solid rgba(16, 185, 129, 0.3)'
                            }}
                          >
                            Current Role
                          </span>
                        )}
                      </div>

                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          color: '#38bdf8',
                          fontWeight: 600,
                          fontSize: '0.92rem',
                          marginTop: '0.2rem',
                          flexWrap: 'wrap'
                        }}
                      >
                        <span>{exp.company}</span>
                        <span style={{ color: 'var(--text-muted)' }}>•</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px'
                      }}
                    >
                      <Calendar size={13} style={{ color: '#10b981' }} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 
                          size={15} 
                          style={{ color: '#10b981', flexShrink: 0, marginTop: '0.2rem' }} 
                        />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    {exp.tech.map((t, i) => (
                      <span key={i} className="badge badge-emerald" style={{ fontSize: '0.74rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .timeline-connector-line {
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 19px;
          width: 2px;
          background: linear-gradient(to bottom, #10b981 0%, #06b6d4 50%, #6366f1 100%);
          opacity: 0.35;
        }
        .timeline-item {
          display: flex;
          gap: 1.5rem;
          position: relative;
        }
        .timeline-node-dot {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          borderRadius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          z-index: 2;
        }
        .timeline-card {
          padding: 1.75rem;
        }
        @media (max-width: 640px) {
          .timeline-connector-line {
            left: 15px;
          }
          .timeline-item {
            gap: 0.85rem;
          }
          .timeline-node-dot {
            width: 32px;
            height: 32px;
          }
          .timeline-card {
            padding: 1.25rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
