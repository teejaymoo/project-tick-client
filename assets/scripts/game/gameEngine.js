const store = require('../store')
const gameUi = require('./gameUi')

store.boxes = ['', '', '', '', '', '', '', '', '']
store.playerXOrO = '✘'
store.gameOver = false

const restartGame = function () {
  store.playerXOrO = '✘'
  store.boxes.fill('')
  store.gameOver = false
  $('.cell').text('')
}

const playerChance = function () {
  if (store.playerXOrO === '✘') {
    store.playerXOrO = 'Ø'
  } else {
    store.playerXOrO = '✘'
  }
}
const checkForWinner = function () {
  const winFlag = (store.boxes[0] === store.boxes[1] && store.boxes[1] === store.boxes[2] && store.boxes[0] !== '') ||
                  (store.boxes[3] === store.boxes[4] && store.boxes[4] === store.boxes[5] && store.boxes[4] !== '') ||
                    (store.boxes[6] === store.boxes[7] && store.boxes[7] === store.boxes[8] && store.boxes[7] !== '') ||
                      // Horizontal wins
                      (store.boxes[0] === store.boxes[4] && store.boxes[4] === store.boxes[8] && store.boxes[0] !== '') ||
                        (store.boxes[2] === store.boxes[4] && store.boxes[4] === store.boxes[6] && store.boxes[2] !== '') ||
                          // diagonal ^
                          (store.boxes[0] === store.boxes[3] && store.boxes[3] === store.boxes[6] && store.boxes[0] !== '') ||
                            (store.boxes[1] === store.boxes[4] && store.boxes[4] === store.boxes[7] && store.boxes[1] !== '') ||
                              (store.boxes[2] === store.boxes[5] && store.boxes[5] === store.boxes[8] && store.boxes[2] !== '')
                              // Vertical wins
  const drawFlag = store.boxes.every(spot => {
    return spot !== ''
  })
  if (winFlag) {
    gameUi.winner()
  } else if (drawFlag) {
    gameUi.draw()
  }
}

module.exports = {
  restartGame,
  checkForWinner,
  playerChance
}
