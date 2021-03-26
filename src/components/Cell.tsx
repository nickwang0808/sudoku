import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
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
  const [input, setInput] = useState(value ?? "");
  useEffect(() => {
    handleSetBoard(position, Number(input));
  }, [input]);

  const handleSetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = Number(value);
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!range.includes(newValue)) {
      // alert("input nuber between 1 - 9");
      setInput("");
      return;
    }
    setInput(newValue);
  };

  if (!isEditable) {
    return <StyledCellBase value={value} disabled />;
  }
  return (
    <StyledCellWithInput
      value={input}
      type="text"
      maxLength={1}
      onChange={handleSetInput}
    />
  );
}

const StyledCellBase = styled.input`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid red;
  font-size: 2rem;
  text-align: center;
`;

const StyledCellWithInput = styled(StyledCellBase)`
  color: #5353b4;
`;
