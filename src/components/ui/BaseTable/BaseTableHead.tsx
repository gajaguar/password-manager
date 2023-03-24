import { ReactNode } from "react";

import { StyleOptions } from "../../../types";
import { getClassName } from "../../../utils";
import "./index.scss";

type BaseTableHeadProps = {
  borderless?: boolean;
  data: Array<ReactNode>;
};

const BaseTableHead = ({ borderless = false, data }: BaseTableHeadProps) => {
  const styleOptions: StyleOptions = [[borderless, "borderless"]];
  const className = getClassName("base-table__header", styleOptions);
  const headers = data.map((node) => (
    <th className={className} key={`${node}`}>
      {node}
    </th>
  ));
  return (
    <thead>
      <tr className="base-table__row">{headers}</tr>
    </thead>
  );
};

export default BaseTableHead;
