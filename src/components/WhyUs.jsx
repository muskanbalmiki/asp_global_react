import Icon from "./Icons.jsx";
import { why } from "../data.js";

export default function WhyUs() {
  return (
    <section id="why" className="section dark">
      <div className="container">
        <p className="eyebrow light">Why Choose ASP Global?</p>
        <h2>Confidence, continuity and value in every transaction</h2>
        <div className="why-grid">
          {why.map(([t, d]) => (
            <div className="why" key={t}>
              <span className="tick"><Icon name="check" size={18} /></span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
