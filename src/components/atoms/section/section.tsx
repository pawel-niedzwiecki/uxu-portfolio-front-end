// Import plugin
import React from "react";

// Import settings style
import settings from "../../../layout/settings";

// Import style
import Section from "./style/style";

// TypeScript for Props
type Props = {
  children: JSX.Element | JSX.Element[];
};

// Create new component
const SectionComponent = ({ children }: Props) => {
  return (
    <>
      <Section theme={settings}>{children}</Section>
    </>
  );
};

// Export new component
export default SectionComponent;
