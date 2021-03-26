import styled from "@emotion/styled";
import React, { useContext } from "react";
import "./App.css";
import Row from "./components/Row";
import { AppContext } from "./store";

export default function App() {
  const {
    board,
    status: { isComplete, isValid },
    handleValidateBoard,
  } = useContext(AppContext);

  return (
    <StyledContainer>
      <h1>{`Board is ${isValid ? "valid" : "invalid"}`}</h1>
      <h1>{`Board is ${isComplete ? "complete" : "incomplete"}`}</h1>
      {board.map((row, i) => (
        <Row row={row} key={i} rowIndex={i} />
      ))}
      <button onClick={handleValidateBoard}>Check for mistakes</button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 36rem;
  height: 36rem;
  margin: auto;
`;
