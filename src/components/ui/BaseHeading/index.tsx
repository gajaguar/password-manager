import { ReactNode, createElement } from "react";

import "./index.scss";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type BaseHeadingProps = {
  children?: ReactNode;
  id?: string;
  type?: HeadingType;
};

const BaseHeading = ({ children, id, type = "h2" }: BaseHeadingProps) => {
  const className = `base-heading base-heading--level-${type.charAt(1)}`;
  return createElement(type, { id, className }, children);
};

export default BaseHeading;
