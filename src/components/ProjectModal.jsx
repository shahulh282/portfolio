import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Server, 
  ShieldCheck, 
  Workflow,
  Sparkles,
  Building2,
  Zap,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-content">
        
        {/* Modal Top Banner with Gradient & Close Button */}
        <div 
          style={{
            padding: '2.5rem 2.5rem 1.75rem 2.5rem',
            background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f8fafc',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ef4444';
              e.currentTarget.style.borderColor = '#ef4444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            aria-label="Close Project Details"
          >
            <X size={20} />
          </button>

          {/* Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <span className="badge badge-emerald">
              {project.categoryName || 'Enterprise'}
            </span>
            <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Building2 size={15} />
              {project.company}
            </span>
          </div>

          <h2 
            id="modal-project-title"
            style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', 
              color: '#f8fafc', 
              marginBottom: '0.6rem',
              lineHeight: 1.25 
            }}
          >
            {project.title}
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.5 }}>
            {project.tagline}
          </p>

          {/* Key Metrics row in banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '0.75rem',
                marginTop: '1.5rem'
              }}
            >
              {project.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(6, 9, 19, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '2rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Executive Overview */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} style={{ color: '#10b981' }} />
              Executive Overview
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.98rem' }}>
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Split */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            <div 
              style={{
                padding: '1.5rem',
                borderRadius: '14px',
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}
            >
              <h4 style={{ color: '#f87171', fontSize: '1.05rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                The Challenge / Problem
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {project.problemStatement}
              </p>
            </div>

            <div 
              style={{
                padding: '1.5rem',
                borderRadius: '14px',
                background: 'rgba(16, 185, 129, 0.05)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}
            >
              <h4 style={{ color: '#34d399', fontSize: '1.05rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                Engineered Solution
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} style={{ color: '#06b6d4' }} />
              Key Features & Capabilities
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {project.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div 
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '0.15rem'
                    }}
                  >
                    {idx + 1}
                  </div>
                  <span style={{ color: '#e2e8f0', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture */}
          {project.architecture && (
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Workflow size={18} style={{ color: '#818cf8' }} />
                Technical Architecture
              </h3>
              <div 
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: '#070b14',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem'
                }}
              >
                {project.architecture.map((arch, idx) => (
                  <div key={idx} style={{ color: '#38bdf8', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#10b981' }}>▸</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
              Technologies & Tools Used
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(30, 41, 59, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#f8fafc',
                    fontSize: '0.85rem',
                    fontWeight: 500
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div 
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <button 
              onClick={onClose}
              className="btn btn-secondary"
            >
              Close Details
            </button>

            <a 
              href="#contact"
              onClick={onClose}
              className="btn btn-primary"
            >
              <span>Discuss Similar System</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
