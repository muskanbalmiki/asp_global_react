import { products } from "../data.js";
import { Photo, img, productImg } from "../Images.jsx";

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <p className="eyebrow">Products Overview</p>
        <h2>A diversified portfolio built for global demand</h2>
        <div className="cards">
          {products.map(([t, d], i) => (
            <article className="card" key={t}>
              <Photo src={img[productImg[i]]} alt={t} />
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className="center muted">Every category is supported by strict quality assurance, regulatory compliance and efficient logistics, including cold-chain solutions for perishables and secure handling for bulk cargo.</p>
      </div>
    </section>
  );
}