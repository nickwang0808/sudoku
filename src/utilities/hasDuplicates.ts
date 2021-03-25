export default function hasDuplicates(input: number[]) {
  const removeEmptyCells = (input: number[]) => {
    return input.filter((n) => n !== 0);
  };

  const deDuplicated = Array.from(new Set(removeEmptyCells(input)));
  if (removeEmptyCells(input).length === deDuplicated.length) {
    return false;
  }
  return true;
}
