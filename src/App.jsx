import pmtdLogo from "./assets/pmtd-logo.png";
import pmtdLogoStacked from "./assets/pmtd-logo-stacked.png";
import pmtdSymbolWhite from "./assets/pmtd-logo-white.png";
import {
  Wifi,
  FileText,
  Printer,
  Files,
  MapPin,
  Phone,
  Mail,
  Camera,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <a href="#center" className="header-brand">
          <img src={pmtdLogo} alt="PMTD Internet Services logo" />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#center">Home</a>
          <a href="#services">Services &amp; Prices</a>
          <a href="#about">About Us</a>
          <a href="#contact" className="contact-link">
            Contact
          </a>
        </nav>
      </header>

      <section id="center">
        <div className="hero">
          <img
            src={pmtdLogoStacked}
            className="pmtd-logo"
            alt="PMTD Internet Services logo"
          />
        </div>

        <div className="hero-content">
          <h1>Your Local IT Partner</h1>
          <p>
            Your trusted partner for internet, printing, and computer services.
          </p>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Our Services &amp; Prices</h2>
        <p className="services-intro">Everything you need, all in one place.</p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Internet Browsing</h3>
            <p className="service-price">R10 / hour</p>
          </div>

          <div className="service-card">
            <h3>Document Creation</h3>
            <p className="service-price">R10 / hour</p>
          </div>

          <div className="service-card">
            <h3>Colour Printing</h3>
            <p className="service-price">R5 / A4 page</p>
          </div>

          <div className="service-card">
            <h3>Black &amp; White Printing</h3>
            <p className="service-price">R2 / A4 page</p>
          </div>

          <div className="service-card">
            <h3>Lamination</h3>
            <p className="service-price">R10 / A4 page</p>
          </div>
        </div>

        <div className="services-cta">
          <p>
            Need more details about our services and pricing? Contact us for our
            full price list.
          </p>
          <a href="#contact" className="services-contact-button">
            Contact Us
          </a>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <p className="about-label">ABOUT US</p>

          <h2>Your Everyday Digital Needs, Made Simple.</h2>

          <p>
            At PMTD Internet Services, we make everyday digital tasks easier by
            bringing essential internet and computer services together in one
            convenient place.
          </p>

          <p>
            Whether you're browsing the internet, creating an important
            document, printing paperwork or laminating your pages, we're here to
            help you get it done.
          </p>

          <p>
            From students and job seekers to individuals and local businesses,
            PMTD provides a convenient place to take care of your everyday
            digital needs.
          </p>
        </div>

        <div className="about-features">
          <div className="about-feature">
            <span className="about-icon">
              <Wifi size={24} strokeWidth={1.8} />
            </span>
            <h3>Internet Access</h3>
          </div>

          <div className="about-feature">
            <span className="about-icon">
              <FileText size={24} strokeWidth={1.8} />
            </span>
            <h3>Document Creation</h3>
          </div>

          <div className="about-feature">
            <span className="about-icon">
              <Printer size={24} strokeWidth={1.8} />
            </span>
            <h3>Printing</h3>
          </div>

          <div className="about-feature">
            <span className="about-icon">
              <Files size={24} strokeWidth={1.8} />
            </span>
            <h3>Lamination</h3>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-heading">
          <p className="contact-label">GET IN TOUCH</p>
          <h2>We're Here to Help</h2>
          <p>
            Need help with our services? Visit us in-store or get in touch. We'd
            be happy to assist you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-icon">
              <MapPin size={24} strokeWidth={1.8} />
            </span>
            <h3>Visit Our Store</h3>
            <p>
              2 Marlin Drive,
              <br />
              Hibberdene, KwaZulu-Natal
              <br />
              4220
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2+Marlin+Drive+Hibberdene+KwaZulu-Natal+4220"
              target="_blank"
              rel="noreferrer"
              className="contact-action"
            >
              Get Directions
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <Phone size={24} strokeWidth={1.8} />
            </span>
            <h3>Call Us</h3>
            <p>076 995 8711</p>
            <a href="tel:+27769958711" className="contact-action">
              Call PMTD
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <Mail size={24} strokeWidth={1.8} />
            </span>
            <h3>Email Us</h3>
            <p>pmtdinternet@gmail.com</p>
            <a href="mailto:pmtdinternet@gmail.com" className="contact-action">
              Send an Email
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <Camera size={24} strokeWidth={1.8} />
            </span>
            <h3>Follow Us</h3>
            <p>Connect with PMTD on Instagram for updates.</p>
            <a
              href="https://www.instagram.com/pmtd_internetservices"
              target="_blank"
              rel="noreferrer"
              className="contact-action"
            >
              Visit Instagram
            </a>
          </div>
        </div>

        <div className="business-hours">
          <h3>Business Hours</h3>
          <div className="hours-row">
            <span>Monday – Friday</span>
            <span>08:00 – 16:00</span>
          </div>
          <div className="hours-row">
            <span>Saturday</span>
            <span>08:00 – 13:00</span>
          </div>
          <div className="hours-row">
            <span>Sunday &amp; Public Holidays</span>
            <span>Closed</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src={pmtdSymbolWhite}
              alt="PMTD standalone symbol"
              className="footer-logo"
            />

            <div className="footer-brand-text">
              <h2>PMTD Internet Services</h2>
              <p>Your everyday digital needs, made simple.</p>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#center">Home</a>
            <a href="#services">Services &amp; Prices</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} PMTD Internet Services. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
