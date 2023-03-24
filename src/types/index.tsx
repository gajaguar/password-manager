export type AutoCompleteProp = "on" | "off";
export type ButtonTypeProp = "button" | "reset" | "submit";
export type FormMethodProp = "get" | "post";
export type FormTargetProp = "_blank" | "_self" | "_parent" | "_top" | string;
export type InputTypeProp =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
export type InputValueProp = string | number;
export type MinMaxProp = string | number;
export type StyleOption = [boolean | undefined, string];
export type StyleOptions = StyleOption[];
export type TableStyleOptions = {
  borderless?: boolean;
  striped?: boolean;
};
