import Logo from "./Logo.jsx";
import { company, nav } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-in">
        <div><Logo light /><p>Third-port & re-export trading across chemicals, food, steel and textiles.</p></div>
        <div><h4>Quick Links</h4>{nav.map(([l, id]) => <a key={id} href={`#${id}`}>{l}</a>)}</div>
        <div><h4>Contact</h4><p>{company.address}</p><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></div>
      </div>
      <div className="copy">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
    </footer>
  );
}
