import Icon from "./Icons.jsx";
import { Photo, img } from "../Images.jsx";
import { stats } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" />
      <div className="container hero-in">
        <div>
          <p className="eyebrow">Dubai, U.A.E · Third-Port & Re-Export Trade</p>
          <h1>Global trade, <span>delivered with confidence.</span></h1>
          <p className="lead">
            We connect trusted manufacturers with fast-growing international markets, reducing sourcing
            risk and creating long-term value across chemicals, food, steel and textiles.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-green">Request a Quote <Icon name="arrow" size={18} /></a>
            <a href="#verticals" className="btn btn-ghost">Explore Verticals</a>
          </div>
        </div>

        {/* RIGHT SIDE: photo collage. Change the photos in src/images.jsx */}
        <div className="collage">
          <figure><Photo src={img.hero1} alt="Container port and cargo ships" /><figcaption>Global logistics</figcaption></figure>
          <figure><Photo src={img.hero2} alt="Chemical and pharmaceutical raw materials" /><figcaption>Chemicals & APIs</figcaption></figure>
          <figure><Photo src={img.hero3} alt="Frozen seafood in cold storage" /><figcaption>Frozen foods</figcaption></figure>
          <div className="badge"><Icon name="pin" size={18} /> Dubai, UAE</div>
        </div>

        <div className="stats">
          {stats.map(([n, l]) => (
            <div key={l}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}