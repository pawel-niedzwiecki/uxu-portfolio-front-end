// Import plugin
import React from "react";

// Import style
import Container from "./style/style";

// TypeScript for Props
type Props = {
  size?: string;
  children: JSX.Element | JSX.Element[];
};

// create new component
const ContainerComponent = ({ size, children }: Props, props: any) => {
  return (
    <>
      <Container size={size} {...props}>
        {children}
      </Container>
    </>
  );
};

// export new component
export default ContainerComponent;
