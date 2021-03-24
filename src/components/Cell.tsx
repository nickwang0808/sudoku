import styled from "@emotion/styled";
import React from "react";
import { ICell } from "../utilities/transformInitialBoard";

export default function Cell({ isEditable, possibleValues, value }: ICell) {
  const handleCellClick = (e: any) => {
    // check if control was pressed
    // toggle input mode
  };

  if (!isEditable) {
    return <StyledCellBase>{value}</StyledCellBase>;
    // return <StyledCellBase>{value}</StyledCellBase>;
  } else if (!!value) {
    return <StyledCellWithNewValue />;
  } else if (possibleValues.length) {
    return <StyledCellWithPossibleValue />;
  } else return <StyledCellBase />;
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
