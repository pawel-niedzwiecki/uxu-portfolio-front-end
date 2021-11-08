// import plugin
import React from "react";

// import style
import Col from "./style/style";

// create interface
interface ColComponentProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  children?: JSX.Element | JSX.Element[];
}

// create new component
const ColComponent = ({ children, xs, sm, md, lg, xl, xxl }: ColComponentProps, props: any) => {
  return (
    <>
      <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} {...props}>
        {children}
      </Col>
    </>
  );
};

// export new component
export default ColComponent;
