import "./Benefits.css";
const Benefits = () => (
  <section className="benefits-section">
    <div className="benefits-container">
      <div className="benefits-left">
        <h3 className="benefits-title">Benefits of Tummy Tuck Surgery</h3>
        <ul className="benefits-list">
          {[
            "Removes loose, sagging abdominal skin",
            "Tightens weakened abdominal muscles",
            "Improves abdominal contour and firmness",
            "Enhances posture and core stability",
            "Produces long-lasting results with stable weight",
            "Can be combined with liposuction for refinement",
          ].map((benefit, idx) => (
            <li key={idx} className="benefits-item">
              <i className="fas fa-plus-circle benefits-icon"></i> {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="benefits-right">
        <h3 className="benefits-right-title">Post-Operative Recovery</h3>
        <p className="benefits-right-desc">After surgery, patients typically receive:</p>
        <ul className="benefits-right-list">
          {[
            "Compression garment for 6–8 weeks",
            "Pain relief medication",
            "Drain care instructions",
            "Wound care guidance",
            "Scheduled follow-up visits",
          ].map((item, idx) => (
            <li key={idx} className="benefits-right-item"> {item}</li>
          ))
          }
        </ul>
        <p className="benefits-right-note">
        Early walking is encouraged to support circulation, while strenuous activity is restricted during healing. Discomfort is commonly described as tightness rather than sharp pain. Clinical guidance aligned with: World Health Organization.
        </p>
      </div>
    </div>
  </section>
);

export default Benefits;
