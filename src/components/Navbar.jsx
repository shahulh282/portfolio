import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Code2, 
  Send,
  Download
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'live-sites', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Live Sites', href: '#live-sites', id: 'live-sites' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(6, 9, 19, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: isScrolled ? '0.65rem 0' : '1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a 
          href="#home" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.65rem', 
            textDecoration: 'none', 
            color: 'inherit' 
          }}
        >
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
              flexShrink: 0
            }}
          >
            <Code2 size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span>Shahul</span>
              <span style={{ color: '#10b981' }}>.dev</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Full Stack Developer
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.35rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#10b981' : 'var(--text-secondary)',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.55rem' }} className="desktop-cta">
          <a
            href="/Shahul_Hameed_Resume.pdf"
            download="Shahul_Hameed_Resume.pdf"
            className="btn btn-secondary btn-sm"
            title="Download PDF Resume"
            style={{ 
              borderColor: 'rgba(16, 185, 129, 0.4)', 
              color: '#34d399',
              padding: '0.45rem 0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            title="LinkedIn Profile"
            style={{ padding: '0.45rem 0.75rem' }}
          >
            <LinkedInIcon size={15} />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            className="btn btn-primary btn-sm"
          >
            <Send size={14} />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '0.5rem',
            color: '#f8fafc',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: 'rgba(6, 9, 19, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                color: activeSection === link.id ? '#10b981' : '#cbd5e1',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                background: activeSection === link.id ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
              }}
            >
              {link.name}
            </a>
          ))}
          
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap' }}>
            <a
              href="/Shahul_Hameed_Resume.pdf"
              download="Shahul_Hameed_Resume.pdf"
              className="btn btn-secondary btn-sm"
              style={{ flex: 1, color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)', justifyContent: 'center' }}
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Send size={16} />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      )}

      {/* Media query toggles */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
