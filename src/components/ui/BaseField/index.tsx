import { Fragment } from "react";

import { InputTypeProp, InputValueProp } from "../../../types";
import BaseInput from "../BaseInput";
import BaseLabel from "../BaseLabel";
import InputNumber from "../InputNumber";

// evaluate if pass all BaseInput props
type BaseFieldProps = {
  id: string;
  label?: string;
  step?: number;
  type?: InputTypeProp;
  value?: InputValueProp;
};

const BaseField = ({ id, label, step, type, value }: BaseFieldProps) => {
  const inputComponent =
    type === "number" ? (
      <InputNumber id={id} value={Number(value)} step={step} />
    ) : (
      <BaseInput id={id} type={type} value={value} />
    );

  return (
    <Fragment>
      <BaseLabel htmlFor={id}>{label}</BaseLabel>
      {inputComponent}
    </Fragment>
  );
};

export default BaseField;
