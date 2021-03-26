import { css } from "@emotion/react";
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
    <StyledRow showBoldBorder={rowIndex === 3 || rowIndex === 6}>
      {row.map((cell, i) => (
        // we keep track of the position by assigning an unique string "row,column" with the index
        <Cell cell={cell} position={[rowIndex, i]} key={`${rowIndex},${i}`} />
      ))}
    </StyledRow>
  );
}

const StyledRow = styled.div<{ showBoldBorder: boolean }>`
  display: flex;
  ${({ showBoldBorder }) =>
    showBoldBorder &&
    css`
      border-top: 5px solid grey;
    `}
`;
