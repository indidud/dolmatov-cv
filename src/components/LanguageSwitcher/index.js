import React from "react";
import { languages } from "../../constants";

import "./styles.scss";

export default function LanguageSwitcher(props) {
  console.log(props, "LanguageSwitcher");

  const onChange = (e) => {
    props.handleLanguageChange(e.target.className);
  };

  const options = languages.map(({ code }) => {
    if (code != props.locale) {
      return (
        <li key={code} onClick={onChange}>
          <div value={code} className={code}></div>
        </li>
      );
    }
  });

  return (
    <div className="language-switcher">
      <div className={props.locale}></div>
      <ul className="dropdown">{options}</ul>
    </div>
  );
}
