import React from "react";
import { FormattedMessage } from "react-intl";

import "./styles.scss";

export default function Heading(props) {
  return (
    <span className="heading">
      <FormattedMessage
        id={props.id}
        tagName={props.tagName}
      />
    </span>
  );
}
