const store = require('./../store')
const errorMessage = 'Something went wrong!'

const viewGames = function (data) {
  const games = data.games
  let gamesHtml = ''
  games.forEach(game => {
    gamesHtml += `
      <h4>ID: ${game._id}</h4>
      <p>Cells: ${game.cells}</p>
      <p>Game over?: ${game.over}</p>
    `
  })
  $('#games-display').html(gamesHtml)
}

const newGameButtonPressed = function () {
  $('#game-board').show()
}

const userBackPressed = function () {
  $('#user-info-container').hide()
  $('#user-back-button').hide()
  $('#new-game').hide()
  $('#continue-game').hide()
  $('#press-start-button').show()
}

const onErr = function () {
  // If an error occurs, select the #error-message element
  $('#message').html(errorMessage)
}

module.exports = {
  onErr,
  newGameButtonPressed,
  viewGames,
  userBackPressed
}
