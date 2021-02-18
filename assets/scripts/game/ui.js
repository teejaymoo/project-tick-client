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
  $('#games-display').hide()
  $('#game-board').show()
}

const backButtonPressed = function () {
  $('#user-info-container').hide()
  $('#back-button').hide()
  $('#ask-game').hide()
  $('#user-info-button').show()
  $('#header-container').show()
}

const userInfo = function () {
  $('#game-board').hide()
  $('#header-container').hide()
  $('#user-info-button').hide()
  $('#user-info-container').show()
  $('#back-button').show()
}

const onErr = function () {
  // If an error occurs, select the #error-message element
  $('#message').html(errorMessage)
}

module.exports = {
  onErr,
  newGameButtonPressed,
  viewGames,
  backButtonPressed,
  userInfo
}
