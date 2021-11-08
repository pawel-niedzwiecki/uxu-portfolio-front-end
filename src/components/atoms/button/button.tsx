// Import plugin
import React from "react";

// Import style
import { Button, LinkOut, LinkIn, Sumbit } from "./style/style";

// Import settings style
import settings from "../../../layout/settings";

type Props = {
  type: any;
  content?: any;
  parameters?: any;
  children?: JSX.Element | JSX.Element[] | any;
};

// Create new Component
const ButtonComponent = ({ type, content, parameters, children }: Props) => {
  switch (type) {
    case "button":
      return (
        <Button
          title={content.title}
          style={parameters.style}
          onClick={parameters.onClick}
          disabled={parameters.disabled}
          className={parameters.className}
          theme={{ button: parameters.button, settings: settings }}
        >
          {children}
        </Button>
      );
    case "linkIn":
      return (
        <LinkIn
          to={content.to}
          title={content.title}
          style={parameters.style}
          onClick={parameters.onClick}
          className={parameters.className}
          theme={{ button: parameters.button, settings: settings }}
        >
          {children}
        </LinkIn>
      );
    case "linkOut":
      return (
        <LinkOut
          target="_blank"
          href={content.to}
          title={content.title}
          style={parameters.style}
          onClick={parameters.onClick}
          className={parameters.className}
          theme={{ button: parameters.button, settings: settings }}
        >
          {children}
        </LinkOut>
      );
    case "sumbit":
      return (
        <Sumbit
          type="submit"
          form={parameters.form}
          title={content.title}
          value={content.value}
          style={parameters.style}
          onClick={parameters.onClick}
          disabled={parameters.disabled}
          className={parameters.className}
          theme={{ button: parameters.button, settings: settings }}
        >
          {children}
        </Sumbit>
      );
    default:
      return null;
  }
};

// Export new component
export default ButtonComponent;
