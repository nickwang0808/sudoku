import styled from "@emotion/styled";
import React, { useContext } from "react";
import "./App.css";
import Row from "./components/Row";
import { AppContext } from "./store";

export default function App() {
  const {
    board,
    status: { isComplete, isValid },
    resetBoard,
  } = useContext(AppContext);

  return (
    <StyledContainer>
      <h1>{`Board is ${isValid ? "valid" : "invalid"} and ${
        isComplete ? "complete" : "incomplete"
      }`}</h1>
      {board.map((row, i) => (
        <Row row={row} key={i} rowIndex={i} />
      ))}
      <button onClick={resetBoard}>Reset</button>
      <button>Help me</button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 27rem;
  height: 27rem;
  margin: auto;
`;
