import { useState, useEffect, useRef } from 'react';
import './ServiceIcons.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Reset subscription status after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const companyHighlights = [
    { icon: 'fa-solid fa-code-branch', count: '50+', label: 'Projects Delivered' },
    { icon: 'fa-solid fa-handshake', count: '30+', label: 'Happy Clients' },
    { icon: 'fa-solid fa-award', count: '5+', label: 'Years Experience' }
  ];

  const quickLinks = [
    { name: 'Services', icon: 'fa-solid fa-cogs', href: '#services' },
    { name: 'About Us', icon: 'fa-solid fa-info-circle', href: '#about' },
    { name: 'Contact', icon: 'fa-solid fa-envelope', href: '#contact' },
    { name: 'Blog', icon: 'fa-solid fa-blog', href: '#blog' },
    { name: 'Careers', icon: 'fa-solid fa-briefcase', href: '#careers' },
    { name: 'Privacy', icon: 'fa-solid fa-shield-alt', href: '#privacy' }
  ];
  return (
    <footer ref={footerRef} className="py-5 mt-5 footer-section position-relative">
      <div className="section-background">
        <div className="gradient-sphere gradient-sphere-blue" style={{ bottom: '-100px', right: '-100px' }}></div>
        <div className="gradient-sphere gradient-sphere-green" style={{ top: '30%', left: '-200px' }}></div>
        <div className="gradient-sphere gradient-sphere-purple" style={{ top: '-100px', right: '30%' }}></div>
      </div>
      
      <div className="container section-content">
        {/* Newsletter Section */}
        <div className="row mb-5">
          <div className="col-lg-6 mx-auto text-center">
            <div className="newsletter-card p-4 rounded-4">
              <h3 className="h4 mb-3">Stay Updated</h3>
              <p className="text-muted mb-4">
                Subscribe to our newsletter for the latest tech insights and updates
              </p>
              <form onSubmit={handleSubscribe} className="d-flex gap-2">
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary btn-glow">
                  {subscribed ? (
                    <span><i className="fas fa-check me-2"></i>Subscribed!</span>
                  ) : (
                    <span><i className="fas fa-paper-plane me-2"></i>Subscribe</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="row mb-5">
          {companyHighlights.map((stat, index) => (
            <div key={index} className="col-md-4 text-center">
              <div className="highlight-card p-4 rounded-4">
                <i className={`${stat.icon} fa-2x mb-3 text-primary`}></i>
                <h4 className="h3 mb-2">{stat.count}</h4>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <h3 className="h4 mb-4">SiliconSynapse</h3>
            <p className="text-muted mb-4">
              Empowering businesses with intelligent AI agents and cutting-edge solutions
              tailored to revolutionize your operations and drive innovation.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.linkedin.com/company/siliconsynapse" className="social-icon-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://x.com/siliconsynapse8" className="social-icon-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="mailto:siliconsynapse8@gmail.com" className="social-icon-link">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-4">
            <h3 className="h4 mb-4">Quick Links</h3>
            <div className="row">
              {quickLinks.map((link, index) => (
                <div key={index} className="col-6 mb-3">
                  <a href={link.href} className="quick-link-item">
                    <i className={`fas ${link.icon} me-2 text-primary`}></i>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-4">
            <h3 className="h4 mb-4">Contact Us</h3>
            <ul className="list-unstyled text-muted">
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-envelope me-3 text-primary"></i>
                <div>
                  <div>siliconsynapse8@gmail.com</div>
                  <small className="text-muted">24/7 Support</small>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-phone me-3 text-primary"></i>
                <div>
                  <div>+91 7668055685</div>
                  <small className="text-muted">Mon-Fri, 9am-6pm</small>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-map-marker-alt me-3 text-primary"></i>
                <div>
                  <div>Bangalore</div>
                  <small className="text-muted">India</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <small className="text-muted">
              © {new Date().getFullYear()} SiliconSynapse. All rights reserved.
            </small>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-muted small">Privacy Policy</a>
              <a href="#" className="text-muted small">Terms of Service</a>
              <a href="#" className="text-muted small">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 