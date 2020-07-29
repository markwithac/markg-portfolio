const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
 
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMsgTxt = document.querySelector('[data-winning-msg-txt]')
const winningMsgElement = document.getElementById('winningMsg')
const restartBtn = document.getElementById('restartBtn')
let circleTurn 

startGame()
restartBtn.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)

    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMsgElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target  // which cell we clicked on
  const curClass = circleTurn ? CIRCLE_CLASS : X_CLASS  // return curClass as circle otherwhise x 
  placeMark(cell, curClass)
  if (checkWin(curClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function placeMark(cell, curClass) {
  cell.classList.add(curClass) // add cur class to cell
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(curClass) {  // check all winning combinations to see if some of the winnings comibinations are met by the current combinations
  return WINNING_COMBINATIONS.some(combination => { // return true if any of the vlaues inside are true 
    return combination.every(index => {
      return cellElements[index].classList.contains(curClass)
    })
  })
}
 
function endGame(draw) {
  if (draw){
    winningMsgTxt.innerText = 'Draw'
  } else {
    winningMsgTxt.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMsgElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) ||
    cell.classList.contains(CIRCLE_CLASS)
  })
}