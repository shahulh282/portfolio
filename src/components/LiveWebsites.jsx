import React from 'react';
import { 
  Globe, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { liveWebsites } from '../data/portfolioData';

export default function LiveWebsites() {
  return (
    <section id="live-sites" style={{ background: 'rgba(10, 15, 30, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Globe size={14} />
            <span>Client Deployments</span>
          </div>
          <h2 className="section-title">
            Live <span className="gradient-text">Dynamic Websites</span>
          </h2>
          <p className="section-subtitle">
            A portfolio of live, commercial, academic, and non-profit websites designed, engineered, and maintained for global and regional clients.
          </p>
        </div>

        {/* Live Sites Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {liveWebsites.map((site) => (
            <div 
              key={site.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Status & Category */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.25)'
                    }}
                  >
                    <span 
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        boxShadow: '0 0 8px #10b981'
                      }}
                    />
                    Live Production
                  </span>

                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>
                    {site.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                  {site.title}
                </h3>

                {/* Domain Pill */}
                <a 
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#38bdf8',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    marginBottom: '1rem'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  <span>{site.displayUrl}</span>
                  <ExternalLink size={13} />
                </a>

                {/* Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {site.description}
                </p>

                {/* Highlights pill */}
                <div 
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#e2e8f0',
                    fontSize: '0.82rem',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem'
                  }}
                >
                  <strong style={{ color: '#10b981' }}>Highlights: </strong>
                  {site.highlights}
                </div>
              </div>

              {/* Bottom Tech & Launch button */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {site.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: 'rgba(30, 41, 59, 0.7)',
                        color: '#94a3b8',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Visit Live Site</span>
                  <ExternalLink size={16} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
