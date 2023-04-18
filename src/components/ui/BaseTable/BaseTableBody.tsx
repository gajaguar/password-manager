import { FC, ReactNode, memo } from "react";

import { StyleOptions, TableStyleOptions } from "../../../types";
import { getClassName } from "../../../utils";

type BaseTableBodyProps = {
  borderless?: boolean;
  data: ReactNode[][];
  striped?: boolean;
};

const getCells = (
  row: ReactNode[],
  styleOptions: StyleOptions,
  rowIndex: number
) => {
  const className = getClassName("base-table__data", styleOptions);
  return row.map((node, cellIndex) => (
    <td className={className} key={`${rowIndex}-${cellIndex}`}>
      {node}
    </td>
  ));
};

const getRows = (
  data: ReactNode[][],
  { borderless, striped }: TableStyleOptions
) => {
  const cellStyleOptions: StyleOptions = { borderless };
  const rowStyleOptions: StyleOptions = { borderless, striped };
  const className = getClassName("base-table__row", rowStyleOptions);
  return data.map((row, rowIndex) => (
    <tr className={className} key={rowIndex}>
      {getCells(row, cellStyleOptions, rowIndex)}
    </tr>
  ));
};

const BaseTableBody: FC<BaseTableBodyProps> = ({
  borderless = false,
  data,
  striped = false,
}) => {
  return <tbody>{getRows(data, { borderless, striped })}</tbody>;
};

export default memo(BaseTableBody);
