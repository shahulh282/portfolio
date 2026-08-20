import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles, 
  Building2
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
        <div className="modal-header-banner">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close Project Details"
          >
            <X size={18} />
          </button>

          {/* Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.65rem', paddingRight: '2.5rem' }}>
            <span className="badge badge-emerald" style={{ fontSize: '0.74rem' }}>
              {project.categoryName || 'Enterprise'}
            </span>
            <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Building2 size={13} />
              {project.company}
            </span>
          </div>

          <h2 
            id="modal-project-title"
            style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 1.9rem)', 
              color: '#f8fafc', 
              marginBottom: '0.45rem',
              lineHeight: 1.25,
              fontWeight: 800
            }}
          >
            {project.title}
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.5 }}>
            {project.tagline}
          </p>

          {/* Key Metrics row in banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '0.5rem',
                marginTop: '1.1rem'
              }}
            >
              {project.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: '0.5rem 0.65rem',
                    borderRadius: '8px',
                    background: 'rgba(6, 9, 19, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 500 }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body-content">
          
          {/* Executive Overview */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Sparkles size={16} style={{ color: '#10b981' }} />
              Executive Overview
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.65, fontSize: '0.92rem' }}>
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Split */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1rem'
            }}
          >
            <div 
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}
            >
              <h4 style={{ color: '#f87171', fontSize: '0.98rem', marginBottom: '0.4rem', fontWeight: 600 }}>
                The Challenge / Problem
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.55 }}>
                {project.problemStatement}
              </p>
            </div>

            <div 
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.05)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}
            >
              <h4 style={{ color: '#34d399', fontSize: '0.98rem', marginBottom: '0.4rem', fontWeight: 600 }}>
                Engineered Solution
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.55 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={16} style={{ color: '#06b6d4' }} />
              Key Features & Capabilities
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {project.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ color: '#e2e8f0', fontSize: '0.86rem', lineHeight: 1.5 }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Layers size={16} style={{ color: '#818cf8' }} />
              Architecture & System Blueprint
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {project.architecture.map((arch, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    borderRadius: '8px',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <Cpu size={14} style={{ color: '#818cf8', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.5 }}>
                    {arch}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack Pills */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: '0.6rem', fontWeight: 600 }}>
              Complete Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  style={{
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#34d399',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    fontWeight: 600
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .modal-header-banner {
          padding: 2rem 2rem 1.5rem 2rem;
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }
        .modal-body-content {
          padding: 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f8fafc;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .modal-close-btn:hover {
          background: #ef4444;
          border-color: #ef4444;
        }
        @media (max-width: 640px) {
          .modal-header-banner {
            padding: 1.25rem 1rem 1rem 1rem;
          }
          .modal-body-content {
            padding: 1.1rem 1rem;
            gap: 1.25rem;
          }
          .modal-close-btn {
            top: 0.85rem;
            right: 0.85rem;
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </div>
  );
}
