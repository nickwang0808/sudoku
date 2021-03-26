import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useContext } from "react";
import { AppContext } from "../store";
import { ICell } from "../utilities/transformInitialBoard";

interface IProps {
  cell: ICell;
  position: number[];
}

export default function Cell({
  cell: { isEditable, value },
  position,
}: IProps) {
  const { handleSetBoard } = useContext(AppContext);

  /* use local state to manage the input, prevent undefined in input */

  const handleSetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = Number(value);
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!range.includes(newValue)) {
      // alert("input nuber between 1 - 9");
      handleSetBoard(position, value);
      return;
    }
    handleSetBoard(position, value);
  };

  if (!isEditable) {
    return (
      <StyledCellBase
        showBoldBorder={position[1] === 3 || position[1] === 6}
        value={value}
        disabled
      />
    );
  }
  return (
    <StyledCellWithInput
      showBoldBorder={position[1] === 3 || position[1] === 6}
      value={value}
      type="text"
      maxLength={1}
      onChange={handleSetInput}
    />
  );
}

const StyledCellBase = styled.input<{ showBoldBorder: boolean }>`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid grey;
  font-size: 2rem;
  text-align: center;
  color: #5353b4;

  ${({ showBoldBorder }) =>
    showBoldBorder &&
    css`
      border-left: 5px solid grey;
    `}
`;

const StyledCellWithInput = styled(StyledCellBase)`
  color: unset;
`;
