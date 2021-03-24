import React from "react";
import "./App.css";
import Row from "./components/Row";
import { initialBoards } from "./data/initialBoard";

export default function App() {
  return (
    <div className="App">
      {initialBoards[0].map((row) => (
        <Row rowData={row} />
      ))}
    </div>
  );
}
