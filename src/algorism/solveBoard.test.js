import { initialBoards } from "../data/initialBoard";
import solveSudoku from "./solveBoard";
import isBoardValid from "./validateBoard";

describe("solveBoard test", () => {
  const board = initialBoards[1];
  const solved = solveSudoku(board);
  it("should return a board with no 0s", () => {
    solved.forEach((row) => {
      expect(row.includes(0)).toEqual(false);
    });
    expect(isBoardValid(solved).isComplete).toEqual(true);
  });
  it("should return a valid board", () => {
    expect(isBoardValid(solved).isValid).toEqual(true);
  });
});
