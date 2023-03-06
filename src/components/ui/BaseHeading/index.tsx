import { ReactNode } from "react";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type BaseHeadingProps = {
  children?: ReactNode;
  id?: string;
  type?: HeadingType;
};

const headingMap = {
  h1: (id?: string, children?: ReactNode) => <h1 id={id}>{children}</h1>,
  h2: (id?: string, children?: ReactNode) => <h2 id={id}>{children}</h2>,
  h3: (id?: string, children?: ReactNode) => <h3 id={id}>{children}</h3>,
  h4: (id?: string, children?: ReactNode) => <h4 id={id}>{children}</h4>,
  h5: (id?: string, children?: ReactNode) => <h5 id={id}>{children}</h5>,
  h6: (id?: string, children?: ReactNode) => <h6 id={id}>{children}</h6>,
};

function BaseHeading({ children, id, type = "h2" }: BaseHeadingProps) {
  const headingComponent = headingMap[type](id, children);
  return headingComponent;
}

export default BaseHeading;
