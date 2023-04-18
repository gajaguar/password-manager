import { ReactNode } from "react";

import { StyleOptions } from "../../../types";
import { getClassName } from "../../../utils";
import BaseTableBody from "./BaseTableBody";
import BaseTableHead from "./BaseTableHead";
import "./index.scss";

type BaseTableProps = {
  borderless?: boolean;
  data: ReactNode[][];
  headers?: ReactNode[];
  id?: string;
  striped?: boolean;
};

const BaseTable = ({
  borderless,
  data,
  headers,
  id,
  striped,
}: BaseTableProps) => {
  const styleOptions: StyleOptions = { borderless };
  const className = getClassName("base-table", styleOptions);
  let tableHead;
  if (headers) {
    tableHead = <BaseTableHead data={headers} borderless={borderless} />;
  }
  return (
    <table className={className} id={id}>
      {tableHead}
      <BaseTableBody data={data} striped={striped} borderless={borderless} />
    </table>
  );
};

export default BaseTable;
