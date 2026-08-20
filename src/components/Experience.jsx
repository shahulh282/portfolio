import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ChevronRight,
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
          <div 
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, #10b981 0%, #06b6d4 50%, #6366f1 100%)',
              opacity: 0.4
            }}
            className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  position: 'relative'
                }}
              >
                {/* Timeline Node Dot */}
                <div 
                  style={{
                    flexShrink: 0,
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: exp.current 
                      ? 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)' 
                      : '#0f172a',
                    border: exp.current 
                      ? '3px solid #10b981' 
                      : '2px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    zIndex: 2,
                    boxShadow: exp.current ? '0 0 20px rgba(16, 185, 129, 0.5)' : 'none'
                  }}
                >
                  {exp.current ? <Sparkles size={20} /> : <Building2 size={18} />}
                </div>

                {/* Content Card */}
                <div 
                  className="glass-card"
                  style={{
                    flex: 1,
                    padding: '2rem',
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
                      gap: '0.75rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.3rem', color: '#f8fafc' }}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span 
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              padding: '0.2rem 0.6rem',
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
                          gap: '0.8rem',
                          color: '#38bdf8',
                          fontWeight: 600,
                          fontSize: '1rem',
                          marginTop: '0.25rem'
                        }}
                      >
                        <span>{exp.company}</span>
                        <span style={{ color: 'var(--text-muted)' }}>•</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: '#94a3b8',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px'
                      }}
                    >
                      <Calendar size={14} style={{ color: '#10b981' }} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle2 
                          size={16} 
                          style={{ color: '#10b981', flexShrink: 0, marginTop: '0.25rem' }} 
                        />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    {exp.tech.map((t, i) => (
                      <span key={i} className="badge badge-emerald">
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
    </section>
  );
}
