type AutoCompleteType = "on" | "off";
type FormMethodType = "get" | "post";
type FormTargetType = "_blank" | "_self" | "_parent" | "_top" | string;
type InputType =
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
type MinMaxType = string | number | undefined;
type BaseInputProps = {
  accept?: string;
  alt?: string;
  autoComplete?: AutoCompleteType;
  autoFocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: FormMethodType;
  formTarget?: FormTargetType;
  height?: number;
  id?: string;
  list?: string;
  max?: MinMaxType;
  maxLength?: number;
  min?: MinMaxType;
  minLength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
  src?: string;
  step?: number;
  type?: InputType;
  value?: string | number;
  width?: number;
};

function BaseInput({
  accept,
  alt,
  autoComplete,
  autoFocus,
  checked,
  disabled,
  form,
  formAction,
  formEncType,
  formMethod,
  formTarget,
  height,
  id,
  list,
  max,
  maxLength,
  min,
  minLength,
  multiple,
  name,
  pattern,
  placeholder,
  readOnly,
  required,
  size,
  src,
  step,
  type = "text",
  value,
  width,
}: BaseInputProps) {
  return (
    <input
      accept={accept}
      alt={alt}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      checked={checked}
      disabled={disabled}
      form={form}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      formTarget={formTarget}
      height={height}
      id={id}
      list={list}
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
      multiple={multiple}
      name={name}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      size={size}
      src={src}
      step={step}
      type={type}
      value={value}
      width={width}
    />
  );
}

export default BaseInput;
