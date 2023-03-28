import { PropsWithChildren } from "react";

function Table({ children }: PropsWithChildren) {
  return <table className="data-table">{children}</table>;
}

export default Table;
