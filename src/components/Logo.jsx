// Text logo per brand guide: Century Gothic, Blue #162EA6 + Green #00B050
export default function Logo({ light = false }) {
  return (
    <span className="logo" aria-label="ASP Global">
      <span className="logo-mark" style={{ color: light ? "#fff" : "var(--blue)" }}>as</span>
      <span className="logo-mark" style={{ color: "var(--green)" }}>p</span>
      <span className="logo-sub" style={{ color: light ? "#cfd6f5" : "var(--blue)" }}></span>
    </span>
  );
}
