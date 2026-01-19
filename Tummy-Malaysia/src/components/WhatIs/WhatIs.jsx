import "./whatis.css";
const WhatIs = () => (
  <section className="whatis-section">
    <div className="whatis-container">
      <div className="whatis-header">
        <h2 className="whatis-title">What Is a Tummy Tuck?</h2>
        <p className="whatis-subtitle">A surgical procedure that addresses three core issues of the abdomen:</p>
      </div>
      <div className="whatis-grid">
        {[
          { num: "01", title: "Excess Skin", desc: "Addressing excess or sagging abdominal skin that lacks elasticity." },
          { num: "02", title: "Stubborn Fat", desc: "Accumulated fat resistant to diet and exercise." },
          { num: "03", title: "Muscle Repair", desc: "Weakened or separated abdominal muscles (diastasis recti)." },
        ].map((item, idx) => (
          <div key={idx} className="whatis-card">
            <div className="whatis-num">{item.num}</div>
            <h3 className="whatis-card-title">{item.title}</h3>
            <p className="whatis-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="whatis-footer">
        <p className="whatis-footer-text">During the procedure,
             excess skin and fat are removed, and the abdominal 
             muscles are tightened to restore a flatter, firmer abdominal wall. 
             In many cases, the belly button is repositioned to maintain natural proportions. 
             Major medical institutions, including leading surgical bodies and academic hospitals, describe abdominoplasty as a well-established and effective procedure when patient selection, surgical technique,
             and recovery planning are appropriately managed.</p>
        <p className="whatis-footer-note">A tummy tuck is not a weight-loss surgery. It is a contour-restoring procedure.</p>
      </div>
    </div>
  </section>
);

export default WhatIs;
