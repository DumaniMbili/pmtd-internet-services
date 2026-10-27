import pmtdLogo from "./assets/pmtd-logo.png";
import pmtdLogoStacked from "./assets/pmtd-logo-stacked.png";
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
    </>
  );
}

export default App;
