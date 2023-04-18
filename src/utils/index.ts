import { StyleOptions } from "../types";

const addClassModifier = (baseClassName: string, modifierName: string) =>
  `${baseClassName}--${modifierName}`;

export const getClassName = (
  baseClassName: string,
  styleOptions: StyleOptions
): string => {
  const classes = [baseClassName];

  for (const [key, value] of Object.entries(styleOptions)) {
    if (value) {
      classes.push(`${baseClassName}--${key}`);
    }
  }

  return classes.join(" ");
};
