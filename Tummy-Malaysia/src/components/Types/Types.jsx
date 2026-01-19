import "./Types.css";
const Types = () => (
  <section className="types-section">
    <div className="types-container">
      <h2 className="types-title">Types of Tummy Tuck Procedures</h2>
      <div className="types-grid">
        {[
          {
            title: "Full Tummy Tuck",
            points: [
              "Removes excess skin above/below navel",
              "Repairs muscle separation",
              "Repositions the belly button",
              "Most comprehensive correction",
            ],
          },
          {
            title: "Mini Tummy Tuck",
            points: [
              "Targets mild lower-abdominal skin laxity",
              "Smaller incision",
              "Limited or no muscle repair",
              "Suitable for selected patients",
            ],
          },
          {
            title: "Extended Tummy Tuck",
            points: [
              "Addresses skin extending to the flanks",
              "Often chosen after massive weight loss",
              "Improves waistline contour",
              "Clinical assessment required",
            ],
          },
        ].map((type, idx) => (
          <div key={idx} className="types-card">
            <h4 className="types-card-title">{type.title}</h4>
            <ul className="types-card-list">
              {type.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Types;
