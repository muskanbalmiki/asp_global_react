const steps = [
  ["Source", "We work only with approved, audited and certified manufacturers and vetted suppliers."],
  ["Verify", "Documentation and compliance checks against GMP, REACH, FDA, HACCP, ASTM, EN and JIS where applicable."],
  ["Move", "Free-zone logistics through the UAE, with cold-chain for perishables and secure handling for bulk cargo."],
  ["Deliver", "Dependable supply to distributors, wholesalers, processors and institutional buyers worldwide."],
];

export default function Process() {
  return (
    <section id="process" className="section alt">
      <div className="container">
        <p className="eyebrow">How we work</p>
        <h2>From manufacturer to market, in four steps</h2>
        <div className="steps">
          {steps.map(([t, d], i) => (
            <div className="step" key={t}>
              <span className="dot">{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}