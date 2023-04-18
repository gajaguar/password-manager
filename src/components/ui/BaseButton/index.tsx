import { MouseEventHandler, ReactNode } from "react";

import { ButtonTypeProp, FormMethodProp, FormTargetProp } from "../../../types";
import "./index.css";

type BaseButtonProps = {
  autoFocus?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: FormMethodProp;
  formNoValidate?: boolean;
  formTarget?: FormTargetProp;
  id?: string;
  name?: string;
  onClick?: MouseEventHandler;
  type?: ButtonTypeProp;
  value?: string;
};

function BaseButton({
  autoFocus = false,
  children = "Submit",
  disabled = false,
  form,
  formAction,
  formEncType,
  formMethod = "get",
  formNoValidate = false,
  formTarget,
  id,
  name,
  onClick,
  type = "submit",
  value,
}: BaseButtonProps) {
  return (
    <button
      className="btn"
      autoFocus={autoFocus}
      disabled={disabled}
      form={form}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      formNoValidate={formNoValidate}
      formTarget={formTarget}
      id={id}
      name={name}
      onClick={onClick}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
}

export default BaseButton;
