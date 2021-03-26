export interface ICell {
  isEditable: boolean;
  value: string | undefined;
}

/* transform the board into workable data table, isEditable is used to determine if the cell
can be edited by user, store user input in value, and use possibleValue to store notes */
export default function transformInitialBoard(
  initialBoard: number[][]
): ICell[][] {
  return initialBoard.map((row) =>
    row.map((c) => ({
      isEditable: c === 0 ? true : false,
      value: c === 0 ? "" : String(c),
    }))
  );
}
