import { ChangeEventHandler } from "react";

import {
  AutoCompleteProp,
  FormMethodProp,
  FormTargetProp,
  InputTypeProp,
  MinMaxProp,
} from "../../../types";

type BaseInputProps = {
  accept?: string;
  alt?: string;
  autoComplete?: AutoCompleteProp;
  autoFocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: FormMethodProp;
  formTarget?: FormTargetProp;
  height?: number;
  id?: string;
  list?: string;
  max?: MinMaxProp;
  maxLength?: number;
  min?: MinMaxProp;
  minLength?: number;
  multiple?: boolean;
  name?: string;
  onChange?: ChangeEventHandler;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
  src?: string;
  step?: number;
  type?: InputTypeProp;
  value?: string | number;
  width?: number;
};

const BaseInput = ({
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
  onChange,
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
}: BaseInputProps) => (
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
    onChange={onChange}
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

export default BaseInput;
