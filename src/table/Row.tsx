import { ComponentPropsWithoutRef } from "react";
import { TableField } from "./types";

interface RowProps<T> extends ComponentPropsWithoutRef<"tr"> {
  isZebra: boolean;
  item: T;
  fields: TableField<T>[];
}

function Row<T>({ isZebra, item, fields, className, ...rest }: RowProps<T>) {
  return (
    <tr
      className={`data-row ${isZebra ? "data-row--zebra" : ""} ${className}`}
      {...rest}
    >
      {fields.map(({ name, value, variant }) => (
        <td
          className={`data-cell ${variant ? `data-cell--${variant}` : ""}`}
          key={name}
        >
          {typeof value !== "function" ? String(item[value]) : value(item)}
        </td>
      ))}
    </tr>
  );
}

export default Row;
