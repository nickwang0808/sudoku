import { chunk } from "lodash";
import hasDuplicates from "../utilities/hasDuplicates";

// check for row, col and block for duplicates, if none then pass
export default function validateBoard(board: number[][]) {
  let isValid = true;
  let isComplete = true;

  for (let index = 0; index < board.length; index++) {
    const row = board[index];
    const col = board.map((row) => row[index]);
    // check if therea are 0s in the board
    if (col.includes(0) || row.includes(0)) {
      isComplete = false;
    }
    if (hasDuplicates(row) || hasDuplicates(col)) {
      isValid = false;
      break;
    }
    // check blocks for dupes
    // when we are at defined starting point, build blocks and validate them
    const blockStartIndex = [0, 3, 6];
    if (blockStartIndex.includes(index)) {
      // chunk the rows into 3s
      const topRowChunked = chunk(board[index], 3);
      const midRowChunked = chunk(board[index + 1], 3);
      const botRowChunked = chunk(board[index + 2], 3);

      const block1 = [topRowChunked[0], midRowChunked[0], botRowChunked[0]];
      const block2 = [topRowChunked[1], midRowChunked[1], botRowChunked[1]];
      const block3 = [topRowChunked[2], midRowChunked[2], botRowChunked[2]];
      if (
        hasDuplicates(block1.flat()) ||
        hasDuplicates(block2.flat()) ||
        hasDuplicates(block3.flat())
      ) {
        isValid = false;
        break;
      }
    }
  }

  return { isValid, isComplete };
}
