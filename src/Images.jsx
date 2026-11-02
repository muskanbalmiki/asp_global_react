// Put your photos in  public/images/  with exactly these file names (JPG, ~1200px wide, under 300 KB each).
export const img = {
  hero1: "/images/hero-port.jpg",       // container port / ships (big photo, hero right side)
  hero2: "/images/chemicals.jpg",       // lab / pharma raw materials
  hero3: "/images/frozen-foods.jpg",    // frozen seafood / cold storage
  chemicals: "/images/chemicals.jpg",
  frozen: "/images/frozen-foods.jpg",
  oils: "/images/edible-oils.jpg",
  agri: "/images/agri-commodities.jpg",
  steel: "/images/steel-iron.jpg",
  textiles: "/images/textiles.jpg",
};
// which photo each Verticals tab uses (ids come from data.js)
export const verticalImg = { chemicals: "chemicals", food: "frozen", steel: "steel", textiles: "textiles" };
// which photo each Products card uses, in the same order as data.js -> products
export const productImg = ["chemicals", "frozen", "oils", "agri", "steel", "textiles"];

// Shows a photo; if the file is missing it quietly hides and the gradient behind shows instead.
export function Photo({ src, alt, className = "" }) {
  return (
    <div className={`photo ${className}`}>
      <img src={src} alt={alt} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
    </div>
  );
}