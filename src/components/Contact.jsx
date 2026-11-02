import { useState } from "react";
import Icon from "./Icons.jsx";
import { company } from "../data.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", company: "", email: "", interest: "Chemicals & Pharma", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // Opens the visitor's email app with the form filled in (works on any host, no backend).
  // To receive form data directly instead, see README: "Make the form send emails".
  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nCompany: ${f.company}\nEmail: ${f.email}\nInterest: ${f.interest}\n\n${f.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Website enquiry - " + f.interest)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h2>Looking for a reliable global sourcing partner?</h2>
          <p className="muted">For business enquiries, partnerships or product information, reach out and we will respond promptly.</p>
          <ul className="info">
            <li><Icon name="pin" /><span>{company.name}<br />{company.address}</span></li>
            <li><Icon name="mail" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><Icon name="phone" /><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></li>
          </ul>
          <a className="btn btn-green" target="_blank" rel="noreferrer" href={`https://wa.me/${company.whatsapp}`}>Chat on WhatsApp</a>
        </div>
        <form className="form" onSubmit={submit}>
          <label>Full name<input required value={f.name} onChange={set("name")} /></label>
          <label>Company<input value={f.company} onChange={set("company")} /></label>
          <label>Email<input type="email" required value={f.email} onChange={set("email")} /></label>
          <label>Interested in
            <select value={f.interest} onChange={set("interest")}>
              <option>Chemicals & Pharma</option><option>Food & Agri</option>
              <option>Steel & Iron</option><option>Textiles</option><option>Other</option>
            </select>
          </label>
          <label>Message<textarea rows="4" required value={f.message} onChange={set("message")} /></label>
          <button className="btn btn-blue" type="submit">Send Enquiry <Icon name="arrow" size={18} /></button>
        </form>
      </div>
    </section>
  );
}
