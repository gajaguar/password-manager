import { MouseEventHandler, ReactNode } from "react";

type FormMethodType = "get" | "post";
type FormTargetType = "_blank" | "_self" | "_parent" | "_top" | string;
type InputType = "button" | "reset" | "submit";
type BaseButtonProps = {
  autoFocus?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: FormMethodType;
  formNoValidate?: boolean;
  formTarget?: FormTargetType;
  id?: string;
  name?: string;
  onClick?: MouseEventHandler;
  type?: InputType;
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
