type Cell = {
  name: string;
}

type Board = Cell[][]

const board: Board = []

const initialBoard = [
  [{ name: '0' }, { name: '1' }, { name: '0' },],
  [{ name: '1' }, { name: '1' }, { name: '1' },],
  [{ name: '1' }, { name: '1' }, { name: '1' },],
  [{ name: '1' }, { name: '1' }, { name: '1' },],
  [{ name: '0' }, { name: '1' }, { name: '0' },],
]

const nextTick = (prevBoard: Board): Board => {
  const newBoard = prevBoard;
  prevBoard.forEach((line, y) => {
    line.forEach((cell, x) => {
      checkNeighbors(x, y, newBoard)
    })
  })
  return newBoard;
}

const checkNeighbors = (row: number, column: number, prevBoard: Board) => {

}

const printBoard = (board: Board): void => {
  board.forEach((row) => {
    const line = []
    row.forEach((cell) => {
      line.push(cell.name)
    })
    line.join()
    console.log(line);
  })
}

const newBoard = nextTick(initialBoard);
printBoard(newBoard);