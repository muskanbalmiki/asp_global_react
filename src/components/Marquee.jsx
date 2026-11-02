const items = ["Pharma Raw Materials", "Agrochemicals", "Frozen Foods", "Edible Oils", "Grains & Pulses", "Spices", "Steel & Iron", "Apparel Fabrics", "Home Textiles"];
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}
