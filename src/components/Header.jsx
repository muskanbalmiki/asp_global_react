import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import Icon from "./Icons.jsx";
import { nav } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-in">
        <a href="#top" aria-label="Home"><Logo /></a>
        <nav className={`nav ${open ? "open" : ""}`}>
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-green nav-cta" href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
