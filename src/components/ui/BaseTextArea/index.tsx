import { ReactNode } from "react";

type WrapType = "hard" | "soft";
type BaseTextAreaProps = {
  autoFocus?: boolean;
  children?: ReactNode;
  cols?: number;
  disabled?: boolean;
  form?: string;
  id?: string;
  maxLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  value?: string;
  wrap: WrapType;
};

function BaseTextArea({
  autoFocus = false,
  children,
  cols,
  disabled = false,
  form,
  id,
  maxLength,
  name,
  placeholder,
  readOnly,
  required = false,
  rows,
  value,
  wrap,
}: BaseTextAreaProps) {
  return (
    <textarea
      autoFocus={autoFocus}
      cols={cols}
      disabled={disabled}
      form={form}
      id={id}
      maxLength={maxLength}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      rows={rows}
      value={value}
      wrap={wrap}
    >
      {children}
    </textarea>
  );
}

export default BaseTextArea;
