import "./Steps.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import "./steps.css";

const Steps = () => (
  <section className="steps-section">
    <div className="steps-container">
      <h2 className="steps-title">How a Tummy Tuck Works</h2>
      <div className="steps-grid">
        <div className="steps-left">
          <h3 className="steps-subtitle">Key Surgical Steps</h3>
          {[
            "Pre-operative markings to guide incision placement and symmetry",
            "Removal of excess abdominal skin and fat",
            "Repair and tightening of stretched abdominal muscles",
            "Repositioning of the belly button when required",
            "Layered closure to support healing",
            "Placement of surgical drains when indicated",
            "Application of compression garments",
          ].map((step, idx) => (
            <div key={idx} className="steps-item">
              <span className="steps-item-num">{`0${idx + 1}`}</span>
              <p className="steps-item-desc">{step}</p>
            </div>
          ))}
        </div>
        <div className="steps-right">
          <p className="steps-quote">
            "By addressing both skin laxity and muscle separation, abdominoplasty achieves results that liposuction alone cannot provide."
          </p>
          <div className="steps-divider"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;
