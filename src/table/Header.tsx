import { memo } from "react";
import { TableField } from "./types";

function Header({ fields }: { fields: TableField<any>[] }) {
  return (
    <thead className="data-head">
      <tr className="data-header">
        {fields.map(({ name }) => (
          <th className="data-column" key={name}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default memo(Header);
