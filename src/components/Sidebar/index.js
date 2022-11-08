import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SocialIcon } from "react-social-icons";
import { contacts } from "../../constants";

import "./styles.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <StaticImage src="../../images/avatar.jpg" alt="me" className="avatar" />
      <div className="contacts">
        {contacts.map((link) => (
          <SocialIcon key={link} url={link} />
        ))}
      </div>
    </div>
  );
}
