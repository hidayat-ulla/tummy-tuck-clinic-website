import "./FAQ.css";
const FAQ = () => {
  const faqs = [
    ["What is a tummy tuck?", "A tummy tuck is a surgical procedure that removes excess abdominal skin and fat while tightening weakened abdominal muscles."],
    ["Is a tummy tuck the same as liposuction?", "No. Liposuction removes fat only, while a tummy tuck also removes loose skin and tightens muscles."],
    ["Is tummy tuck surgery safe?", "When performed by a certified plastic surgeon in a regulated facility, it is considered a safe and well-established procedure."],
    ["How long does recovery take?", "Most patients return to daily activities within 2–4 weeks, with final results visible over 3–6 months."],
    ["Will there be a scar?", "Yes, but it is placed low on the abdomen and typically hidden by underwear or swimwear."],
    ["Are tummy tuck results permanent?", "Results are long-lasting if body weight remains stable."],
    ["Can pregnancy affect tummy tuck results?", "Yes. Pregnancy can stretch the abdomen again, so surgery is best after completing childbearing."],
    ["Who should consider a tummy tuck?", "Patients with loose abdominal skin, muscle laxity, stable weight, and realistic expectations."],
    ["Can a tummy tuck improve posture?", "Yes. Muscle repair can enhance core support and posture."],
    ["Can it be combined with other procedures?", "Yes. It is commonly combined with liposuction for enhanced contouring."],
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map(([q, a], idx) => (
          <details key={idx} className="faq-item">
            <summary className="faq-question">
              {`${idx + 1}) ${q}`}
              <i className="fas fa-plus faq-icon"></i>
            </summary>
            <div className="faq-answer">{a}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
