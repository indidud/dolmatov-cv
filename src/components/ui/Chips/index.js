import React from "react";

import "./styles.scss";

export default function Chips(props) {
  return (
    <div className="chips">
      {props.array.map((item) => (
        <div key={item} className="chip">{item}</div>
      ))}
    </div>
  );
}
