import cloneDeep from "lodash.clonedeep";
import sample from "lodash.sample";
import { createContext, ReactNode, useEffect, useState } from "react";
import isBoardValid from "./algorism/isBoardValid";
import solveSudoku from "./algorism/solveBoard.js";
import { initialBoards } from "./data/initialBoard";
import transformInitialBoard, {
  ICell,
} from "./utilities/transformInitialBoard";

interface IStore {
  board: ICell[][];
  status: ReturnType<typeof isBoardValid>;
  handleSetBoard: (position: number[], value: string) => void;
  handleValidateBoard: () => void;
  resetBoard: () => void;
  handleSolveSudoku: () => void;
}

const BOARD = sample(initialBoards)!;
const initialState: IStore = {
  board: transformInitialBoard(BOARD),
  handleSetBoard: () => {},
  status: {
    isComplete: false,
    isValid: true,
  },
  handleValidateBoard: () => {},
  resetBoard: () => {},
  handleSolveSudoku: () => {},
};

export const AppContext = createContext<IStore>(initialState);

export default function BoardProvider({ children }: { children: ReactNode }) {
  const [board, setBoard] = useState<IStore["board"]>(initialState.board);

  const [status, setStatus] = useState<IStore["status"]>(initialState.status);

  const handleSetBoard: IStore["handleSetBoard"] = ([row, col], value) => {
    // console({ value });

    setBoard((prev) => {
      /* without redux, we have to manually manage deep cloning objects, in real world app,
      we should avoid useState with deep trees */
      const tempBoard = cloneDeep(prev);
      tempBoard[row][col].value = value;
      return tempBoard;
    });
  };

  const handleValidateBoard = () => {
    // run validate board
    const deTransformBoard = board.map((row) =>
      row.map(({ value }) => (value !== "" ? Number(value) : 0))
    );
    setStatus(isBoardValid(deTransformBoard));
  };

  const handleSolveSudoku = () => {
    const deTransformBoard = board.map((row) =>
      row.map(({ value }) => (value ? Number(value) : 0))
    );
    try {
      const solvedBoard = solveSudoku(deTransformBoard);
      setBoard(transformInitialBoard(solvedBoard));
    } catch {
      alert("board could not be solved, try resetting it");
    }
  };

  useEffect(() => {
    // console("board changed");
    handleValidateBoard();
  }, [board]);

  const resetBoard = () => setBoard(transformInitialBoard(BOARD));

  return (
    <AppContext.Provider
      value={{
        board,
        status,
        handleSetBoard,
        handleValidateBoard,
        resetBoard,
        handleSolveSudoku,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
