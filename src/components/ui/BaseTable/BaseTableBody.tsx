import { ReactNode } from "react";

import { StyleOptions, TableStyleOptions } from "../../../types";
import { getClassName } from "../../../utils";

type BaseTableBodyProps = {
  borderless?: boolean;
  data: Array<Array<ReactNode>>;
  striped?: boolean;
};

const getCells = (row: Array<ReactNode>, styleOptions: StyleOptions) => {
  const className = getClassName("base-table__data", styleOptions);
  return row.map((node) => {
    return (
      <td className={className} key={`${node}`}>
        {node}
      </td>
    );
  });
};

const getRows = (
  data: Array<Array<ReactNode>>,
  { borderless, striped }: TableStyleOptions
) => {
  const cellStyleOptions: StyleOptions = [[borderless, "borderless"]];
  const rowStyleOptions: StyleOptions = [
    [borderless, "borderless"],
    [striped, "striped"],
  ];
  const className = getClassName("base-table__row", rowStyleOptions);
  return data.map((row) => (
    <tr className={className} key={`${row}`}>
      {getCells(row, cellStyleOptions)}
    </tr>
  ));
};

const BaseTableBody = ({
  borderless = false,
  data,
  striped = false,
}: BaseTableBodyProps) => (
  <tbody>{getRows(data, { borderless, striped })}</tbody>
);

export default BaseTableBody;
