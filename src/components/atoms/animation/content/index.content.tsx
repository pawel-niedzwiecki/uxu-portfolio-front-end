import React from "react";
import { Square } from "./index.content.style";
import { SquareProps } from "./index.content.type";

export const SquareConent = ({ height, typ }: SquareProps) => <Square typ={typ} height={height} />;
