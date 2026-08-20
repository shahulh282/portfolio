import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  GitBranch, 
  Workflow, 
  Table, 
  RefreshCw, 
  Clock, 
  QrCode, 
  CreditCard, 
  Cloud, 
  FileCode, 
  Boxes, 
  Wind, 
  Palette,
  Network,
  Gauge
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('backend');

  const categories = [
    { id: 'backend', label: 'Backend & APIs', icon: <Server size={17} /> },
    { id: 'frontend', label: 'Frontend & UI', icon: <Layout size={17} /> },
    { id: 'database', label: 'Database & ORM', icon: <Database size={17} /> },
    { id: 'architecture', label: 'Architecture & DevOps', icon: <Cpu size={17} /> },
  ];

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server size={18} className="text-emerald-400" />;
      case 'Cpu': return <Cpu size={18} className="text-cyan-400" />;
      case 'Layers': return <Layers size={18} className="text-indigo-400" />;
      case 'Zap': return <Zap size={18} className="text-amber-400" />;
      case 'Network': return <Network size={18} className="text-rose-400" />;
      case 'Clock': return <Clock size={18} className="text-emerald-400" />;
      case 'Code2': return <Code2 size={18} className="text-cyan-400" />;
      case 'FileCode': return <FileCode size={18} className="text-amber-400" />;
      case 'Layout': return <Layout size={18} className="text-emerald-400" />;
      case 'Palette': return <Palette size={18} className="text-pink-400" />;
      case 'Wind': return <Wind size={18} className="text-cyan-400" />;
      case 'Boxes': return <Boxes size={18} className="text-purple-400" />;
      case 'Database': return <Database size={18} className="text-emerald-400" />;
      case 'Table': return <Table size={18} className="text-blue-400" />;
      case 'Workflow': return <Workflow size={18} className="text-indigo-400" />;
      case 'RefreshCw': return <RefreshCw size={18} className="text-teal-400" />;
      case 'Gauge': return <Gauge size={18} className="text-rose-400" />;
      case 'ShieldCheck': return <ShieldCheck size={18} className="text-emerald-400" />;
      case 'QrCode': return <QrCode size={18} className="text-cyan-400" />;
      case 'CreditCard': return <CreditCard size={18} className="text-amber-400" />;
      case 'GitBranch': return <GitBranch size={18} className="text-orange-400" />;
      case 'Cloud': return <Cloud size={18} className="text-blue-400" />;
      default: return <Code2 size={18} />;
    }
  };

  return (
    <section id="skills" style={{ background: 'rgba(10, 15, 30, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Code2 size={14} />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Battle-tested technical stack mastered through 5+ years of real-world enterprise engineering.
          </p>
        </div>

        {/* Tab Selection */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="btn btn-sm"
              style={{
                background: activeTab === cat.id ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'rgba(15, 23, 42, 0.85)',
                color: activeTab === cat.id ? '#ffffff' : 'var(--text-secondary)',
                border: activeTab === cat.id ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: activeTab === cat.id ? '0 4px 15px rgba(16, 185, 129, 0.3)' : 'none',
                cursor: 'pointer',
                fontWeight: activeTab === cat.id ? 700 : 500
              }}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1rem',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
        >
          {skillsData[activeTab]?.map((skill, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: '1.25rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(15, 23, 42, 0.85)'
              }}
            >
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  flexShrink: 0
                }}
              >
                {getSkillIcon(skill.icon)}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.92rem', color: '#f8fafc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {skill.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#10b981', fontWeight: 600, marginLeft: '0.5rem' }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div 
                  style={{
                    width: '100%',
                    height: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '9999px',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)',
                      borderRadius: '9999px',
                      transition: 'width 0.8s ease-in-out'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Strip */}
        <div 
          className="skills-highlight-strip"
          style={{
            marginTop: '3rem',
            padding: '1.25rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.06) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '1.25rem',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ color: '#10b981', fontWeight: 700, fontSize: '1.1rem' }}>MVC & Clean Architecture</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Maintainable & Scalable Codebases</div>
          </div>
          <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.1)' }} className="hidden sm:block" />
          <div>
            <div style={{ color: '#06b6d4', fontWeight: 700, fontSize: '1.1rem' }}>RESTful APIs & Micro-routes</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>High Throughput & Low Latency</div>
          </div>
          <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.1)' }} className="hidden sm:block" />
          <div>
            <div style={{ color: '#818cf8', fontWeight: 700, fontSize: '1.1rem' }}>Cron & Queue Workers</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Asynchronous Background Processing</div>
          </div>
        </div>

      </div>
    </section>
  );
}
