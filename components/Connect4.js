import { useReducer } from 'react'
import { Row } from './Row'
import { checkForWin, deepCloneBoard, generateNewBoard } from '../gameUtils'

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'newGame':
      return {
        ...initialGameState,
        board: action.board,
      }
    case 'togglePlayer':
      return {
        ...state,
        currentPlayer: action.nextPlayer,
        board: action.board,
      }
    case 'endGame':
      return {
        ...state,
        gameOver: true,
        message: action.message,
        board: action.board,
      }
    case 'updateMessage':
      return {
        ...state,
        message: action.message,
      }
    default:
      throw Error(`Action "${action.type}" is not a valid action.`)
  }
}
const initialGameState = {
  player1: 1,
  player2: 2,
  currentPlayer: null,
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  gameOver: false,
  message: '',
}
export const Connect4 = ({ importedGameState }) => {
  const [gameState, dispatchGameState] = useReducer(
    gameReducer,
    importedGameState
  )

  const togglePlayer = (board) => {
    const nextPlayer =
      gameState.currentPlayer === gameState.player1
        ? gameState.player2
        : gameState.player1

    dispatchGameState({ type: 'togglePlayer', nextPlayer, board })
  }

  // triggered when a user clicks a cell
  const play = (c) => {
    if (!gameState.gameOver) {
      let board = deepCloneBoard(gameState.board)
      //check if cell is taken by starting at the bottom row and working up
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = gameState.currentPlayer
          break
        }
      }

      // Check status of board
      let result = checkForWin(board)
      if (result === gameState.player1) {
        dispatchGameState({
          type: 'endGame',
          message: 'Player1 (red) wins!',
          board,
        })
      } else if (result === gameState.player2) {
        dispatchGameState({
          type: 'endGame',
          message: 'Player2 (black) wins!',
          board,
        })
      } else if (result === 'draw') {
        dispatchGameState({
          type: 'endGame',
          message: 'Draw Game!',
          board,
        })
      } else {
        togglePlayer(board)
      }
    }
    // it's gameover and a user clicked a cell
    else {
      dispatchGameState({
        type: 'updateMessage',
        message: 'Game Over. Please start a new game.',
      })
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          dispatchGameState({ type: 'newGame', board: generateNewBoard() })
        }}
      >
        New Game
      </button>

      <table>
        <thead></thead>
        <tbody>
          {gameState.board.map((row, i) => (
            <Row key={i} row={row} play={play} />
          ))}
        </tbody>
      </table>

      <p className="message">{gameState.message}</p>
    </div>
  )
}
