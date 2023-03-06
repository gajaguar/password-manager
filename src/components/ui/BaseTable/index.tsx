import { ReactNode } from "react";
import BaseTableHead from "./BaseTableHead";
import BaseTableBody from "./BaseTableBody";

type BaseTableProps = {
  id?: string;
  headers?: Array<ReactNode>;
  data: Array<Array<ReactNode>>;
};

function BaseTable({ id, headers, data }: BaseTableProps) {
  let tableHead;
  if (headers) {
    tableHead = <BaseTableHead data={headers} />;
  }
  return (
    <table id={id}>
      {tableHead}
      <BaseTableBody data={data} />
    </table>
  );
}

export default BaseTable;
