import "./safety.css";
const Safety = () => (
  <section className="safety-section">
    <div className="safety-container">
      <h2 className="safety-title">
        Safety, Regulation, and Medical Standards in Malaysia
      </h2>
      <div className="safety-grid">
        {[
          "Licensed Facilities",
          "Registered Practitioners",
          "Safety Protocols",
          "Professional Accountability",
        ].map((item, idx) => (
          <div key={idx} className="safety-card">{item}</div>
        ))}
      </div>
    </div>
  </section>
);

export default Safety;
