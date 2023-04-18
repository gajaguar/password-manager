/* eslint-disable react/jsx-key */
import { Fragment } from "react";

import BaseField from "../../../ui/BaseField";
import BaseHeading from "../../../ui/BaseHeading";
import BaseInput from "../../../ui/BaseInput";
import BaseTable from "../../../ui/BaseTable";

const propsTableHeaders = ["Name", "Type", "Options", "Required", "Default"];
const propsTableData = [
  [
    "accept",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "alt",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "autoComplete",
    "string",
    ["on", "off"],
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "autoFocus",
    "boolean",
    [true, false],
    <BaseInput type="checkbox" readOnly disabled />,
    "false",
  ],
  [
    "checked",
    "boolean",
    [true, false],
    <BaseInput type="checkbox" readOnly disabled />,
    "false",
  ],
  [
    "disabled",
    "boolean",
    [true, false],
    <BaseInput type="checkbox" readOnly disabled />,
    "false",
  ],
  [
    "form",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "formAction",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "formEncType",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "formMethod",
    "string",
    ["get", "post"],
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "formTarget",
    "string",
    ["_blank", "_self", "_parent", "_top", "string"],
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "height",
    "number",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "id",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "list",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "max",
    ["string", "number"],
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "maxLength",
    "number",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "min",
    ["string", "number"],
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "minLength",
    "number",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "multiple",
    "boolean",
    [true, false],
    <BaseInput type="checkbox" readOnly disabled />,
    "false",
  ],
  [
    "name",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "onChange",
    "function",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "pattern",
    "function",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "placeholder",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "readOnly",
    "boolean",
    [true, false],
    <BaseInput type="checkbox" readOnly disabled />,
    "false",
  ],
  [
    "required",
    "boolean",
    [true, false],
    <BaseInput type="checkbox" readOnly disabled />,
    "false",
  ],
  [
    "size",
    "number",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "src",
    "string",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "step",
    "number",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "type",
    "string",
    [
      "button",
      "checkbox",
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "hidden",
      "image",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "reset",
      "search",
      "submit",
      "tel",
      "text",
      "time",
      "url",
      "week",
    ],
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "value",
    ["string", "number"],
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
  [
    "width",
    "number",
    "",
    <BaseInput type="checkbox" readOnly disabled />,
    "undefined",
  ],
];

const BaseInputDoc = () => (
  <Fragment>
    <BaseHeading type={"h3"}>
      <code>BaseInput</code>
    </BaseHeading>
    <BaseHeading type={"h4"}>Props</BaseHeading>
    <BaseTable headers={propsTableHeaders} data={propsTableData} striped />
    <BaseField type="number" id="my-field" label="my label" step={0.1} />
  </Fragment>
);

export default BaseInputDoc;
