import React from "react";
import Cell from "./Cell";

interface IProps {
  rowData: number[];
}

export default function Row({ rowData }: IProps) {
  return (
    <div className="row">
      {rowData.map((cell) => (
        <Cell data={cell} />
      ))}
    </div>
  );
}
