 import "./Introduction.css";
const Introduction = () => (
  <section className="intro-section">
    <div className="intro-container">
      <div className="intro-text">
        <h2 className="intro-title">
          The Journey to a Firmer Profile
        </h2>
        <p className="intro-paragraph">
         A tummy tuck, medically known as abdominoplasty, is a surgical procedure 
         designed to restore a flatter, firmer abdominal profile by removing excess 
         skin and fat while tightening weakened abdominal muscles. It is most commonly sought after pregnancy, significant weight loss, or age-related skin laxity, situations where
          exercise and diet alone cannot correct the underlying structural changes
        </p>
        <p className="intro-paragraph-secondary">
        This procedure is intended for individuals
         who are already close to a stable weight but struggle with loose abdominal skin,
          muscle separation, or a protruding abdomen that affects comfort, posture, and confidence. 
          When performed correctly, a tummy tuck improves abdominal
        contour, supports core stability, and delivers long-lasting results.
        </p>
        <div className="intro-highlight">
          <p className="highlight-text">
            At Dr. Soma Plastic Surgery, 
            tummy tuck procedures are performed personally by
             Dr. Soma, a certified plastic surgeon with experience in body contouring surgery and structured postoperative care. The approach focuses on safety, anatomical precision, and natural-looking results rather than aggressive overcorrection.
          </p>
        </div>
      </div>
      <div className="intro-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1581594693702-fbdc51b2ad49?auto=format&fit=crop&q=80&w=800"
          alt=""
          className="intro-image"
        />
        <div className="intro-badge">
          <p>Safety & <br />Precision</p>
        </div>
      </div>
    </div>
  </section>
);

export default Introduction;
