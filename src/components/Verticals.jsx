import { useState } from "react";
import Icon from "./Icons.jsx";
import { verticals } from "../data.js";
import { Photo, img, verticalImg } from "../Images.jsx";

export default function Verticals() {
  const [active, setActive] = useState(verticals[0].id);
  const v = verticals.find((x) => x.id === active);
  return (
    <section id="verticals" className="section alt">
      <div className="container">
        <p className="eyebrow">Our Business Verticals</p>
        <h2>Four sectors. One reliable partner.</h2>
        <div className="tabs" role="tablist">
          {verticals.map((x) => (
            <button key={x.id} role="tab" aria-selected={x.id === active}
              className={x.id === active ? "tab on" : "tab"} onClick={() => setActive(x.id)}>
              <Icon name={x.icon} size={20} /> <span>{x.title.split(" & ")[0]}</span>
            </button>
          ))}
        </div>
        <div className="panel" key={v.id}>
          <Photo className="panel-photo" src={img[verticalImg[v.id]]} alt={v.title} />
          <div className="panel-head">
            <div className="panel-icon"><Icon name={v.icon} size={34} /></div>
            <div><h3>{v.title}</h3><p>{v.text}</p></div>
          </div>
          <div className="groups">
            {v.groups.map((g) => (
              <div className="group" key={g.name}>
                <h4>{g.name}</h4>
                <ul>{g.items.map((i) => <li key={i}><Icon name="check" size={16} />{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="note">{v.note}</p>
        </div>
      </div>
    </section>
  );
}