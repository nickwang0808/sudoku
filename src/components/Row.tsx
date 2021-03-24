import styled from "@emotion/styled";
import React from "react";
import { ICell } from "../utilities/transformInitialBoard";
import Cell from "./Cell";

interface IProps {
  row: ICell[];
}

export default function Row({ row }: IProps) {
  return (
    <StyledRow>
      {row.map((cell) => (
        <Cell {...cell} />
      ))}
    </StyledRow>
  );
}

const StyledRow = styled.div`
  display: flex;
`;
