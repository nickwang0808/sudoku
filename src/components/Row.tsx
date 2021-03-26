import styled from "@emotion/styled";
import React from "react";
import { ICell } from "../utilities/transformInitialBoard";
import Cell from "./Cell";

interface IProps {
  row: ICell[];
  rowIndex: number;
}

export default function Row({ row, rowIndex }: IProps) {
  return (
    <StyledRow>
      {row.map((cell, i) => (
        // we keep track of the position by assigning an unique string "row,column" with the index
        <Cell cell={cell} position={[rowIndex, i]} key={`${rowIndex},${i}`} />
      ))}
    </StyledRow>
  );
}

const StyledRow = styled.div`
  display: flex;
`;
