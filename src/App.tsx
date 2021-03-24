import React from "react";
import "./App.css";
import Row from "./components/Row";
import { initialBoards } from "./data/initialBoard";
import transformInitialBoard from "./utilities/transformInitialBoard";

export default function App() {
  return (
    <div className="App">
      {transformInitialBoard(initialBoards[0]).map((row) => (
        <Row row={row} />
      ))}
    </div>
  );
}
