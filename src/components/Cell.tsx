import styled from "@emotion/styled";
import React, { useState } from "react";
import { ICell } from "../utilities/transformInitialBoard";
import CellInput from "./CellInput";

export default function Cell({ isEditable, possibleValues, value }: ICell) {
  const [inputMode, setInputMode] = useState<"value" | "possibleValues" | null>(
    "possibleValues"
  );
  // keep track of the input here, use a callback to format and sanitize the input
  const [input, setInput] = useState();

  const handleCellClick = (e: React.MouseEvent) =>
    e.ctrlKey ? setInputMode("possibleValues") : setInputMode("value");

  if (!isEditable) {
    return <StyledCellBase>{value}</StyledCellBase>;
  } else if (!!value) {
    return (
      <StyledCellWithNewValue onClick={handleCellClick}>
        <CellInput />
      </StyledCellWithNewValue>
    );
  } else if (possibleValues.length) {
    return (
      <StyledCellWithPossibleValue onClick={handleCellClick}>
        <CellInput />
      </StyledCellWithPossibleValue>
    );
  } else
    return (
      <StyledCellBase onClick={handleCellClick}>
        <CellInput />
      </StyledCellBase>
    );
}

const StyledCellBase = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid red;
  font-size: 2rem;
`;

const StyledCellWithPossibleValue = styled(StyledCellBase)`
  font-size: unset;
`;

const StyledCellWithNewValue = styled(StyledCellBase)`
  color: #292955;
`;
