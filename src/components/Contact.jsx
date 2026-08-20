import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink, 
  MessageCircle, 
  Clock
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Construct mailto link
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you need an enterprise web application, high-throughput RESTful API architecture, or dynamic full-stack development, I am ready to collaborate.
          </p>
        </div>

        {/* Contact Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          
          {/* Left Column: Direct Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Phone Card */}
            <div 
              className="glass-card contact-info-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Direct Phone</div>
                  <a 
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', textDecoration: 'none', display: 'block', wordBreak: 'break-word' }}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="btn btn-secondary btn-sm"
                title="Copy phone number"
                style={{ padding: '0.45rem', flexShrink: 0 }}
              >
                {copiedPhone ? <Check size={15} style={{ color: '#10b981' }} /> : <Copy size={15} />}
              </button>
            </div>

            {/* Email Card */}
            <div 
              className="glass-card contact-info-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    color: '#06b6d4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Direct Email</div>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', textDecoration: 'none', display: 'block', wordBreak: 'break-all' }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="btn btn-secondary btn-sm"
                title="Copy email address"
                style={{ padding: '0.45rem', flexShrink: 0 }}
              >
                {copiedEmail ? <Check size={15} style={{ color: '#10b981' }} /> : <Copy size={15} />}
              </button>
            </div>

            {/* WhatsApp Direct Chat Card */}
            <a 
              href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Shahul,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-info-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
                borderColor: 'rgba(37, 211, 102, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(37, 211, 102, 0.2)',
                    color: '#25d366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#4ade80', fontWeight: 600 }}>Instant WhatsApp Chat</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                    +91 90920 52320
                  </div>
                </div>
              </div>

              <ExternalLink size={16} style={{ color: '#4ade80', flexShrink: 0 }} />
            </a>

            {/* LinkedIn Card */}
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-info-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, rgba(10, 102, 194, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
                borderColor: 'rgba(10, 102, 194, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(10, 102, 194, 0.2)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <LinkedInIcon size={22} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 600 }}>LinkedIn Profile</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    shahul-hameed-m-54ab3793
                  </div>
                </div>
              </div>

              <ExternalLink size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
            </a>

            {/* Location Info */}
            <div 
              className="glass-card contact-info-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontWeight: 600, fontSize: '0.88rem' }}>
                <MapPin size={16} />
                <span>Locations</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                <strong>Current:</strong> {personalInfo.location}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <strong>Home:</strong> {personalInfo.hometown}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div 
            className="glass-card contact-form-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '0.35rem' }}>
                Send a Direct Message
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Fill out the form below to initiate email communication directly.
              </p>

              {formSubmitted && (
                <div 
                  style={{
                    padding: '0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34d399',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.88rem'
                  }}
                >
                  <Check size={16} />
                  <span>Opening your email client to send message...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 500 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#f8fafc',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 500 }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#f8fafc',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 500 }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Role / Project Inquiry"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#f8fafc',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 500 }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#f8fafc',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <Send size={16} />
                  <span>Send Message Directly</span>
                </button>
              </form>
            </div>

            <div 
              style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-muted)',
                fontSize: '0.8rem'
              }}
            >
              <Clock size={14} style={{ color: '#10b981', flexShrink: 0 }} />
              <span>Typical response time: within 2 to 4 hours</span>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .contact-info-card {
          padding: 1.35rem 1.25rem;
        }
        .contact-form-card {
          padding: 2.25rem;
        }
        @media (max-width: 640px) {
          .contact-info-card {
            padding: 1.1rem 0.9rem;
          }
          .contact-form-card {
            padding: 1.35rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
