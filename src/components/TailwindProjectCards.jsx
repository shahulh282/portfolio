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
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Database,
  Server,
  Zap
} from 'lucide-react';
import { projects, liveWebsites } from '../data/portfolioData';

export default function TailwindProjectCards({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('enterprise'); // 'enterprise' or 'live'
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'government', label: 'Govt Portals' },
    { id: 'enterprise', label: 'Enterprise Systems' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'mobile-backend', label: 'Mobile APIs' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getThumbnailIcon = (type) => {
    switch (type) {
      case 'qr-airport': return <QrCode className="w-8 h-8 text-cyan-400" />;
      case 'tn-forest': return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case 'epf-engine': return <Cpu className="w-8 h-8 text-indigo-400" />;
      case 'appraisal-system': return <Layers className="w-8 h-8 text-amber-400" />;
      case 'ecommerce-backend': return <Sparkles className="w-8 h-8 text-rose-400" />;
      default: return <FolderGit2 className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <FolderGit2 className="w-4 h-4" />
          <span>LinkedIn Portfolio Case Studies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Featured Projects & <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Architectures</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Production systems, government infrastructure, and high-load APIs engineered by <strong className="text-slate-200">M. Shahul Hameed</strong>.
        </p>
      </div>

      {/* Tab Switcher: Enterprise Case Studies vs Live Client Websites */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
          <button
            onClick={() => setActiveTab('enterprise')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'enterprise'
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Server className="w-4 h-4" />
            Flagship Case Studies ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('live')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'live'
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Client Websites ({liveWebsites.length})
          </button>
        </div>
      </div>

      {/* Category Filter for Case Studies */}
      {activeTab === 'enterprise' && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* PROJECT CARDS GRID */}
      {activeTab === 'enterprise' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between cursor-pointer backdrop-blur-sm overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 opacity-75 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Icon + Company/Category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                    {getThumbnailIcon(project.thumbnail)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.categoryName}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      {project.company}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2">
                  {project.title}
                </h3>

                {/* Tagline / Problem */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.tagline}
                </p>

                {/* Metrics / Key highlights pills */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-5 py-2 px-3 rounded-lg bg-slate-950/50 border border-slate-800/80">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">{m.label}</div>
                        <div className="text-xs font-bold text-slate-200 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Tech Stack & CTA */}
              <div className="pt-4 border-t border-slate-800/80 mt-2">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Action Link */}
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    View Architecture Blueprint
                  </span>
                  <div className="p-1 rounded-md bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* LIVE WEBSITES CARDS */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {liveWebsites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {site.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {site.title}
                </h3>
                <span className="text-xs font-mono text-cyan-400/80 mb-3 block truncate">
                  {site.displayUrl}
                </span>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {site.description}
                </p>

                <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80 mb-4 text-xs text-slate-300">
                  <span className="text-cyan-400 font-semibold">Key Highlights: </span>
                  {site.highlights}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {site.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Visit Live Website</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
