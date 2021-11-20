// import plugin
import React from "react";

// import style
import { Square } from "./style/styled";

interface SquareProps {
  typ?: string;
  height: number;
}

// create component
export const SquareConent = ({ height, typ }: SquareProps) => <Square typ={typ} height={height} />;
