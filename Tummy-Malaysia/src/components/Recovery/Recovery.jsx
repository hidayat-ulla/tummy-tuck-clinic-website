import "./recovery.css";
const Recovery = () => (
  <section className="recovery-section">
    <div className="recovery-container">
      <h2 className="recovery-title">Results & Recovery Timeline</h2>
      <div className="recovery-grid">
        {[
          ["Week 1–2", "Swelling, tightness, limited mobility"],
          ["Week 3–4", "Improved comfort and posture"],
          ["Week 6–8", "Visible abdominal flattening"],
          ["Month 3–6", "Final contour emerges"],
        ].map(([week, desc], idx) => (
          <div key={idx} className="recovery-card">
            <h4 className="recovery-week">{week}</h4>
            <p className="recovery-desc">{desc}</p>
          </div>
        ))}
      </div>
      <div className="recovery-note">
Postoperative recovery protocols align with internationally recognized surgical safety and postoperative care standards. In Malaysia, tummy tuck surgery is a regulated medical procedure and must be performed by a registered medical practitioner in a licensed healthcare facility under Ministry of Health Malaysia standards.
      </div>
    </div>
  </section>
);

export default Recovery;
