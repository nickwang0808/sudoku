import validateBoard from "./validateBoard";

describe("validateBoard", () => {
  it("should fail when the board is not valid", () => {
    const board = [
      [8, 5, 6, 0, 1, 4, 7, 3, 0],
      [0, 9, 0, 0, 0, 0, 0, 0, 0],
      [2, 4, 0, 0, 0, 0, 1, 6, 0],
      [0, 6, 2, 0, 5, 9, 3, 0, 0],
      [0, 3, 1, 8, 0, 2, 4, 5, 0],
      [0, 0, 5, 3, 4, 0, 9, 2, 0],
      [0, 2, 4, 0, 0, 0, 0, 7, 3],
      [0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 8, 6, 3, 0, 1, 9, 4], // dupe 1
    ];

    expect(validateBoard(board).isValid).toEqual(false);
  });
  it("should pass when the board is not completed but valid", () => {
    const board = [
      [4, 0, 0, 0, 5, 0, 8, 0, 0],
      [0, 7, 6, 9, 3, 0, 0, 0, 2],
      [5, 0, 0, 0, 0, 2, 0, 7, 6],
      [0, 1, 8, 7, 0, 0, 0, 0, 3],
      [0, 0, 5, 0, 0, 0, 1, 9, 8],
      [0, 0, 0, 1, 9, 8, 0, 0, 0],
      [6, 9, 0, 0, 8, 0, 2, 0, 0],
      [2, 0, 0, 0, 1, 9, 0, 5, 0],
      [0, 0, 0, 0, 0, 0, 3, 8, 9],
    ];
    expect(validateBoard(board).isValid).toEqual(true);
  });
  it("should fail when the sub grids are not valid", () => {
    const board = [
      [4, 0, 0, 0, 5, 0, 8, 0, 0],
      [0, 4, 6, 9, 3, 0, 0, 0, 2], // dupe 4
      [5, 0, 0, 0, 0, 2, 0, 7, 6],
      [0, 1, 8, 7, 0, 0, 0, 0, 3],
      [0, 0, 5, 0, 0, 0, 1, 9, 8],
      [0, 0, 0, 1, 9, 8, 0, 0, 0],
      [6, 9, 0, 0, 8, 0, 2, 0, 0],
      [2, 0, 0, 0, 1, 9, 0, 5, 0],
      [0, 0, 0, 0, 0, 0, 3, 8, 9],
    ];
    expect(validateBoard(board).isValid).toEqual(false);
  });
});
