import { FC, ReactNode, memo } from "react";

import { StyleOptions } from "../../../types";
import { getClassName } from "../../../utils";
import "./index.scss";

type BaseTableHeadProps = {
  borderless?: boolean;
  data: ReactNode[];
};

const BaseTableHead: FC<BaseTableHeadProps> = ({
  borderless = false,
  data,
}) => {
  const styleOptions: StyleOptions = { borderless };
  const className = getClassName("base-table__header", styleOptions);
  const headers = data.map((node, index) => (
    <th className={className} key={`${index}-${node}`}>
      {node}
    </th>
  ));
  return (
    <thead>
      <tr className="base-table__row">{headers}</tr>
    </thead>
  );
};

export default memo(BaseTableHead);
