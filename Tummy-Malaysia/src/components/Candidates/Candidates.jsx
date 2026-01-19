import "./candidates.css";
const Candidates = () => (
  <section className="candidates-section">
    <div className="candidates-container">
      <div className="candidates-left">
        <h2 className="candidates-title">Who Is a Good Candidate?</h2>

        <div className="candidates-block">
          <h4 className="candidates-subtitle suitable">Suitable Candidates Usually Have:</h4>
          <ul className="candidates-list">
            {[
              "Excess abdominal skin",
              "Muscle separation after pregnancy or weight loss",
              "Stable body weight",
              "Good general health & Realistic expectations",
            ].map((item, idx) => (
              <li key={idx} className="candidates-list-item">
                <i className="fas fa-check candidates-icon suitable-icon"></i> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="candidates-block">
          <h4 className="candidates-subtitle not-recommended">A Tummy Tuck May Not Be Recommended If:</h4>
          <ul className="candidates-list">
            {[
              "Future pregnancy is planned",
              "Uncontrolled medical conditions",
              "Weight is unstable or severe obesity is present",
            ].map((item, idx) => (
              <li key={idx} className="candidates-list-item">
                <i className="fas fa-times candidates-icon not-recommended-icon"></i> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="candidates-right">
        <div className="candidates-card-header">
          <h3>Tummy Tuck vs Liposuction</h3>
        </div>
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Tummy Tuck</th>
              <th>Liposuction</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Removes fat", "Yes", "Yes"],
              ["Removes loose skin", "Yes", "No"],
              ["Tightens muscles", "Yes", "No"],
              ["Scarring", "Longer but hidden", "Minimal"],
              ["Downtime", "3–4 weeks", "1–2 weeks"],
              ["Best for", "Loose skin & muscles", "Fat pockets only"],
            ].map((row, idx) => (
              <tr key={idx} className={idx === 5 ? "highlight-row" : ""}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="candidates-footer-note">Clinical overview from: Mayo Clinic – Tummy Tuck (Abdominoplasty)</p>
      </div>
    </div>
  </section>
);

export default Candidates;
