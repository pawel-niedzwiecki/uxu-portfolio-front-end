// Import plugin
import React from "react";

// Import style
import Row from "./style/style";
import { Style } from "../../../../.cache/loading-indicator/style";

// TypeScript for Props
type Props = {
  children: JSX.Element | JSX.Element[] | any;
};

// create new component
const RowComponent = ({ children }: Props, props: any) => {
  return <Row {...props}>{children}</Row>;
};

// export new component
export default RowComponent;
