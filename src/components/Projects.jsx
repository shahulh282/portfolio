import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Building2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  QrCode, 
  Cpu,
  Maximize2
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'government', label: 'Govt Portals' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'mobile-backend', label: 'Mobile APIs' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getThumbnailIcon = (type) => {
    switch (type) {
      case 'qr-airport': return <QrCode size={32} style={{ color: '#38bdf8' }} />;
      case 'tn-forest': return <ShieldCheck size={32} style={{ color: '#34d399' }} />;
      case 'epf-engine': return <Cpu size={32} style={{ color: '#818cf8' }} />;
      case 'appraisal-system': return <Layers size={32} style={{ color: '#fbbf24' }} />;
      case 'ecommerce-backend': return <Sparkles size={32} style={{ color: '#f43f5e' }} />;
      default: return <FolderGit2 size={32} style={{ color: '#10b981' }} />;
    }
  };

  return (
    <section id="projects" style={{ background: 'rgba(6, 9, 19, 0.6)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Enterprise & <span className="gradient-text">Flagship Projects</span>
          </h2>
          <p className="section-subtitle">
            Click on any project to explore full architectural blueprints, challenges solved, workflow mechanics, and technical specifications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.45rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="btn btn-sm"
              style={{
                background: activeFilter === filter.id ? '#10b981' : 'rgba(15, 23, 42, 0.85)',
                color: activeFilter === filter.id ? '#ffffff' : 'var(--text-secondary)',
                border: activeFilter === filter.id ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontWeight: activeFilter === filter.id ? 700 : 500,
                boxShadow: activeFilter === filter.id ? '0 4px 15px rgba(16, 185, 129, 0.3)' : 'none'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card glass-card-interactive project-card-item"
              onClick={() => onSelectProject(project)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                cursor: 'pointer',
                background: 'rgba(15, 23, 42, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.08)'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              {/* Card Header Gradient Banner */}
              <div 
                style={{
                  height: '125px',
                  background: `linear-gradient(135deg, ${
                    project.category === 'government' 
                      ? '#064e3b 0%, #0f766e 100%' 
                      : project.category === 'enterprise' && project.id.includes('airport')
                      ? '#1e3a8a 0%, #0284c7 100%'
                      : project.category === 'enterprise'
                      ? '#3730a3 0%, #4f46e5 100%'
                      : '#881337 0%, #be123c 100%'
                  })`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Icon */}
                <div style={{ zIndex: 1 }}>
                  {getThumbnailIcon(project.thumbnail)}
                </div>

                {/* Open details badge indicator */}
                <div 
                  style={{
                    background: 'rgba(0, 0, 0, 0.45)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    zIndex: 1
                  }}
                >
                  <span>Details</span>
                  <Maximize2 size={12} />
                </div>
              </div>

              {/* Card Body */}
              <div 
                style={{
                  padding: '1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Category & Company Metadata */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
                      {project.categoryName}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Building2 size={12} />
                      {project.company}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                    {project.title}
                  </h3>

                  {/* Tagline / Summary */}
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '1.1rem' }}>
                    {project.tagline}
                  </p>

                  {/* Metrics Row */}
                  {project.metrics && (
                    <div 
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '0.4rem',
                        marginBottom: '1.1rem',
                        padding: '0.5rem 0.65rem',
                        background: 'rgba(0, 0, 0, 0.35)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      {project.metrics.map((m, idx) => (
                        <div key={idx} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                            {m.label}
                          </div>
                          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#e2e8f0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer of Card: Tech Stack & CTA */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i} 
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: '#94a3b8',
                          border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '6px',
                          background: 'rgba(16, 185, 129, 0.1)',
                          color: '#10b981',
                        }}
                      >
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      color: '#10b981',
                      fontWeight: 600,
                      fontSize: '0.85rem'
                    }}
                  >
                    <span>View Architecture & Specs</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
