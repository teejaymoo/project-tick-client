const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('./../store')
const gameEngine = require('./gameEngine')

const cellClicked = (event) => {
  if (store.gameOver) {
    gameUi.gameOver()
  } else if ($(event.target).text() !== '') {
    gameUi.invalidMove()
  } else {
    const index = $(event.target).data('id')

    gameApi.patchGame(index, store.playerXOrO, false)
      .then(data => {
        $(event.target).text(store.playerXOrO)
        store.boxes[index] = store.playerXOrO
        gameEngine.checkForWinner()
        gameEngine.playerChance()
        gameUi.patch(data)
      })
      .catch(gameUi.onErr)
  }
}

const playGame = () => {
  gameEngine.restartGame()
  gameApi.playGame()
    .then(gameUi.playGameSuccess)
    .catch(gameUi.onErr)
}

const addHandlers = () => {
  $('#new-game').on('click', playGame)
  $('.cell').on('click', cellClicked)
}

module.exports = {
  playGame,
  cellClicked,
  addHandlers
}
