import React from "react";
import { FormattedMessage } from "react-intl";
import Heading from "../ui/Heading";
import Chips from "../ui/Chips";

import "./styles.scss";

export default function ProjectItem(props) {
  console.log(props);
  return (
    <div className="project-item">
      <div className="project-item-header">
        <Heading id={props.name} tagName="h3" />
        <div className="project-item-header-duration">
          <Heading id="content.project-item.duration.title" tagName="h4" />
          <Heading id={props.duration} tagName="h4" />
        </div>
      </div>
      <FormattedMessage id={props.description} />
      <div className="project-item-info">
        <div className="project-item-info-item">
          <Heading id="content.project-item.team.title" tagName="h4" />
          <FormattedMessage id={props.members} />
        </div>
        <div className="project-item-info-item">
          <Heading id="content.project-item.position.title" tagName="h4" />
          <FormattedMessage id={props.position} />
        </div>
      </div>
      <Heading id="content.project-item.responsibilities.title" tagName="h4" />
      <ul>
        {props.responsibilities.map((r) => (
          <li key={r}>
            <FormattedMessage id={r} />
          </li>
        ))}
      </ul>
      <Heading id="content.project-item.tech.title" tagName="h4" />
      <Chips array={props.tech}/>
    </div>
  );
}
