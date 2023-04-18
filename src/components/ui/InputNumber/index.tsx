import { ChangeEvent, FC, memo, useState } from "react";

import { AutoCompleteProp } from "../../../types";
import BaseButton from "../BaseButton";
import BaseIcon from "../BaseIcon";
import SlottedInput from "../SlottedInput";

type InputNumberProps = {
  accept?: string;
  alt?: string;
  autoComplete?: AutoCompleteProp;
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  height?: number;
  id?: string;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
  step?: number;
  value?: string | number;
  width?: number;
};

const clamp = (
  value: number,
  min: number | undefined,
  max: number | undefined
): number => {
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
};

const InputNumber: FC<InputNumberProps> = ({
  accept,
  alt,
  autoComplete,
  autoFocus,
  disabled,
  form,
  height,
  id,
  max,
  maxLength,
  min,
  minLength,
  name,
  pattern,
  placeholder,
  readOnly,
  required,
  size,
  step = 1,
  value,
  width,
}) => {
  const [localValue, setLocalValue] = useState<number>(
    clamp(Number(value), min, max) || 0
  );

  const decreaseValue = () =>
    setLocalValue((prev) => clamp(prev - step, min, max)); // needs fix case when step is decimal
  const increaseValue = () =>
    setLocalValue((prev) => clamp(prev + step, min, max)); // needs fix case when step is decimal
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLocalValue(clamp(Number(e.currentTarget.value), min, max));

  const decreaseButton = (
    <BaseButton type="button" onClick={decreaseValue}>
      <BaseIcon type="remove" />
    </BaseButton>
  );
  const increaseButton = (
    <BaseButton type="button" onClick={increaseValue}>
      <BaseIcon type="add" />
    </BaseButton>
  );

  return (
    <SlottedInput
      accept={accept}
      alt={alt}
      append={increaseButton}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      disabled={disabled}
      form={form}
      height={height}
      id={id}
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
      name={name}
      onChange={handleChange}
      pattern={pattern}
      placeholder={placeholder}
      preppend={decreaseButton}
      readOnly={readOnly}
      required={required}
      size={size}
      step={step}
      type="number"
      value={localValue}
      width={width}
    />
  );
};

export default memo(InputNumber);
