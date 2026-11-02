import Icon from "./Icons.jsx";
export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-in">
        <h2>Your growth is our priority. Your supply chain is our responsibility.</h2>
        <a href="#contact" className="btn btn-white">Start the conversation <Icon name="arrow" size={18} /></a>
      </div>
    </section>
  );
}
