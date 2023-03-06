import { ReactNode } from "react";

type BaseLabelProps = {
  children?: ReactNode;
  htmlFor?: string;
};

function BaseLabel({ children, htmlFor }: BaseLabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

export default BaseLabel;
