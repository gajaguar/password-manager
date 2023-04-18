import { Fragment } from "react";

import BaseHeading from "../../../ui/BaseHeading";
import BaseInput from "../../../ui/BaseInput";
import BaseTable from "../../../ui/BaseTable";

const propsTableHeaders = ["Name", "Type", "Options", "Required", "Default"];
const propsTableData = [
  [
    "type",
    "string",
    ["h1", "h2", "h3", "h4", "h5", "h6"],
    // eslint-disable-next-line react/jsx-key
    <BaseInput type="checkbox" readOnly disabled />,
    "h2",
  ],
];

function BaseHeadingDoc() {
  return (
    <Fragment>
      <BaseHeading type={"h3"}>
        <code>BaseHeading</code>
      </BaseHeading>
      <BaseHeading type={"h4"}>Props</BaseHeading>
      <BaseTable headers={propsTableHeaders} data={propsTableData} striped />
      <BaseHeading type={"h4"}>Code</BaseHeading>
      <pre>
        {`<BaseHeading type={'h1'}>This is an h1 header.</BaseHeading>\n`}
        {`<BaseHeading>This is an h2 heading (default)</BaseHeading>\n`}
        {`<BaseHeading type={'h3'}>This is an h3 header.</BaseHeading>\n`}
        {`<BaseHeading type={'h4'}>This is an h4 header.</BaseHeading>\n`}
        {`<BaseHeading type={'h5'}>This is an h5 header.</BaseHeading>\n`}
        {`<BaseHeading type={'h6'}>This is an h6 header.</BaseHeading>`}
      </pre>
      <BaseHeading type="h4">Example</BaseHeading>
      <div>
        <BaseHeading type={"h1"}>This is an h1 header.</BaseHeading>
        <BaseHeading>This is an h2 heading (default)</BaseHeading>
        <BaseHeading type={"h3"}>This is an h3 header.</BaseHeading>
        <BaseHeading type={"h4"}>This is an h4 header.</BaseHeading>
        <BaseHeading type={"h5"}>This is an h5 header.</BaseHeading>
        <BaseHeading type={"h6"}>This is an h6 header.</BaseHeading>
      </div>
    </Fragment>
  );
}

export default BaseHeadingDoc;
