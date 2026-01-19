 import "./WhyChanges.css";
const WhyChanges = () => (
  <section className="why-section">
    <div className="why-container">
      <div className="why-text">
        <h2 className="why-title">
          Why the Abdomen Changes After Pregnancy or Weight Loss
        </h2>
        <p className="why-paragraph">
         The abdomen undergoes significant structural stress during pregnancy and major 
         weight fluctuations. Skin fibers stretch beyond their elastic limit, and the rectus abdominal 
         muscles can separate along the midline, a condition known as diastasis recti.
        </p>
        <div className="why-list">
          {[
            "Skin often does not retract fully",
            "Muscle separation does not resolve with exercise alone",
            "Fat distribution becomes uneven",
            "Core support weakens, affecting posture and back comfort",
          ].map((item, idx) => (
            <div key={idx} className="why-list-item">
              <i className="fas fa-chevron-right why-icon"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="why-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
          alt="Health Care"
          className="why-image"
        />
      </div>
    </div>
  </section>
);

export default WhyChanges;
