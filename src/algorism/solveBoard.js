import solve from "@mattflow/sudoku-solver";
import { chunk } from "lodash";
export default function solveSudoku(board) {
  const puzzle = board.flat().flat();
  const solution = chunk(
    chunk(
      solve(puzzle)
        .split("")
        .map((e) => Number(e)),
      9
    ),
    9
  ).flat();

  return solution;
}
