import "./trust.css";
const Trust = () => (
  <section className="trust-section">
    <div className="trust-container">
      {[
        {
          icon: "fas fa-certificate",
          title: "MOH Regulated",
          desc: "Ministry of Health Malaysia framework ensures safety and professional accountability.",
        },
        {
          icon: "fas fa-user-md",
          title: "Dr. Soma",
          desc: "Certified plastic surgeon performing all procedures personally with anatomical precision.",
        },
        {
          icon: "fas fa-hospital",
          title: "Licensed Facilities",
          desc: "Surgery performed only in licensed facilities following high postoperative standards.",
        },
      ].map((item, idx) => (
        <div key={idx} className="trust-card">
          <i className={`${item.icon} trust-icon`}></i>
          <h3 className="trust-title">{item.title}</h3>
          <p className="trust-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Trust;
