const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('./../store')


const pressStart = function () {
  $('#ask-game').show()
}

const newGame = function (event) {
  event.preventDefault()
  const data = '{}'
  api.create(data)
    .then(ui.newGameButtonPressed)
    .catch(ui.onErr)
}

const onUserInfoClicked = function () {
  event.preventDefault()
  ui.userInfo()
}

const onBackButtonPressed = function (event) {
  event.preventDefault()
  ui.backButtonPressed()
}

const onViewGames = function (event) {
  event.preventDefault()
  $('#game-board').hide()
  const form = event.target
  const data = getFormFields(form)
  api.index(data)
    .then(ui.viewGames)
    .catch(ui.onErr)
}
const onCloseViewGames = function () {
  event.preventDefault()
  $('#games-display').hide()
}

const onCellClicked = function (event) {
}

module.exports = {
  onViewGames,
  onCloseViewGames,
  pressStart,
  onBackButtonPressed,
  onUserInfoClicked,
  onCellClicked,
  newGame
}
