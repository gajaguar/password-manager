import { StyleOptions } from "../types";

const addClassModifier = (baseClassName: string, modifierName: string) =>
  `${baseClassName}--${modifierName}`;

export const getClassName = (
  elementClassName: string,
  styleOptions: StyleOptions
) => {
  let className = elementClassName;
  styleOptions.forEach((element) => {
    const [isActive, classModifier] = element;
    if (isActive) {
      className = `${className} ${addClassModifier(
        elementClassName,
        classModifier
      )}`;
    }
  });
  return className;
};
