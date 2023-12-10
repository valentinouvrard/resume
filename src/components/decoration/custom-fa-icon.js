import React from "react";
import { withTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomFAIcon(props) {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      color={props.color ? props.color : props.theme.palette.primary}
    />
  );
}

export default withTheme(CustomFAIcon);
