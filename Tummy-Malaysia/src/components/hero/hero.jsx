import "./hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Hero = () => {
  return (
    <header className="hero">
      <img
        // src="https://images.unsplash.com/photo-1579154273821-390407f3536d?auto=format&fit=crop&q=80&w=2000"
        // alt="Medical Aesthetic"
        // className="hero-bg"
      />

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            Expert Body Contouring
          </span>

          <h1 className="hero-title">
            TUMMY TUCK IN <br />
            <span>MALAYSIA</span>
          </h1>

          <p className="hero-text">
            Restore a Flatter, Firmer Abdomen with Surgical Precision
          </p>

          <div className="hero-buttons">
            <a href="#consultation" className="btn-primary">
              Book a Consultation Today
            </a>

            <a
              href="//"
              className="btn-secondary"
            >
              <i className="fa-brands fa-whatsapp"></i>

              Chat with Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
