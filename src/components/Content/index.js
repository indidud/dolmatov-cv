import React from "react";
import { FormattedMessage } from "react-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import Heading from "../ui/Heading";
import ProjectItem from "../ProjectItem";
import Chips from "../ui/Chips";
import { skills, projects } from "../../constants";

import "./styles.scss";

export default function Content(props) {
  return (
    <div className="content">
      <LanguageSwitcher
        locale={props.locale}
        handleLanguageChange={props.handleLanguageChange}
      />
      <Heading id="content.name.title" tagName="h1" />

      <Heading id="content.summary.title" tagName="h3" />
      <FormattedMessage id="content.summary.description" tagName="p" />

      <Heading id="content.education.title" tagName="h3" />
      <FormattedMessage id="content.education.description" tagName="p" />

      <Heading id="content.industries.title" tagName="h3" />
      <FormattedMessage id="content.industries.description" tagName="p" />

      <Heading id="content.tech.title" tagName="h3" />
      <Chips array={skills} />

      <Heading id="content.projects.title" tagName="h1" />
      {projects.map(p => <ProjectItem key={p.name} {...p} />)}
    </div>
  );
}
