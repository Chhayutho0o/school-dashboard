import React from "react";

interface Props {
  columns: Table[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}

export default function Table({ columns, data, renderRow }: Props) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full mt-4">
        <thead className="sticky top-0 bg-white">
          <tr className="text-left text-gray-500 text-sm">
            {columns.map((col) => (
              <th className={col.className} key={col.accessor}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    </div>
  );
}
