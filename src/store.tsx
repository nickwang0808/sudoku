import { createContext, ReactNode, useState } from "react";
import validateBoard from "./algorism/validateBoard";
import { initialBoards } from "./data/initialBoard";
import transformInitialBoard, {
  ICell,
} from "./utilities/transformInitialBoard";

interface IStore {
  board: ICell[][];
  status: ReturnType<typeof validateBoard>;
  handleSetBoard: (position: number[], value: number) => void;
  handleValidateBoard: () => void;
}

const BOARD = initialBoards[0];
const initialState: IStore = {
  board: transformInitialBoard(BOARD),
  handleSetBoard: () => {},
  status: {
    isComplete: false,
    isValid: true,
  },
  handleValidateBoard: () => {},
};

export const AppContext = createContext<IStore>(initialState);

export default function BoardProvider({ children }: { children: ReactNode }) {
  const [board, setBoard] = useState<IStore["board"]>(initialState.board);

  const [status, setStatus] = useState<IStore["status"]>(initialState.status);

  const handleSetBoard: IStore["handleSetBoard"] = (position, value) => {
    // console.log(position);

    setBoard((prev) => {
      const [row, col] = position;
      prev[row][col].value = value;
      return prev;
    });
    /* useEffect does not trigger when elem in deep nested obj changes, need to 
    implement usePrevious hook, using this for now */
    setTimeout(() => {
      handleValidateBoard();
    }, 0);
  };

  const handleValidateBoard = () => {
    // run validate board
    const deTransformBoard = board.map((row) =>
      row.map((col) => col.value || 0)
    );

    setStatus(validateBoard(deTransformBoard));
  };

  return (
    <AppContext.Provider
      value={{
        board,
        status,
        handleSetBoard,
        handleValidateBoard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
