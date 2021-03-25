export default function solveBoard() {
  // run checkForSingleEmptyCell() and checkForSinglePossibleValue() every run and every time a cell is solved
  // check TMB for cells to fill
  //    remove all notes on filled cells
  //    everytime there is a cell fill, check for possibleValue for single values and convert them to value
  //    recurse TMB if newBoard !== oldBoard
  // then check for LCR for possible solutions same procedure with TMB
  // recursively call with new board
  // before moving on to new number, run the easy checks
}

function easyChecks() {
  checkForSingleEmptyCell();
  checkForSinglePossibleValue();
  // check for conflicts in notes
}

function checkForSingleEmptyCell() {
  // fist check for rows, cols and blocks for 1 empty cells and solve them
  // if (newBoard === oldBoard) return board
}

function checkForSinglePossibleValue() {
  // build array for all possible values, if there is on single value, convert that to value
  // only check single possible value against the block level
}

function cleanPossibleValues() {
  // run after every possibleValue - value promotion clean any possible value inside the same row or col
}

function checkBothAxisForConflict() {
  // run this when a note is in, check for conflicts on both axis
}

function solveTMB() {
  // check horizontal blocks for potential match, put notes in, run single notes algo before return
  // run conflict check before set notes in
}
function solveLCR() {
  // check vertical blocks for potential match, put notes in, run single notes algo before return
  // run conflict check before set notes in
}
