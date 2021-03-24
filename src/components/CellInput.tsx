import styled from "@emotion/styled";
import React from "react";
import { ICell } from "../utilities/transformInitialBoard";

export default function CellInput({
  isEditable,
  possibleValues,
  value,
}: Partial<ICell>) {
  return <StyledInput />;
}

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  margin: 1px;
`;
