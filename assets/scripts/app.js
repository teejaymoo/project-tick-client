'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const usersAuthEvents = require('./UsersAuth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const cells = document.querySelectorAll('.cells')

$(() => {
  for (const cell of cells) {
    $(cell).on('click', gameEvents.onCellClicked)
  }

  $('#press-start-button').on('click', gameEvents.pressStart)

  $('#new-game').on('click', gameEvents.newGame)

  $('#view-games').on('click', gameEvents.onViewGames)

  $('#close-view-games').on('click', gameEvents.onCloseViewGames)

  $('#form-sign-up').on('submit', usersAuthEvents.onSignUp)

  $('#form-login').on('submit', usersAuthEvents.onLogIn)

  $('#form-change-password').on('submit', usersAuthEvents.onChangePassword)

  $('#user-info-button').on('click', gameEvents.onUserInfoClicked)

  $('#back-button').on('click', gameEvents.onBackButtonPressed)

  $('#sign-out-button').on('submit', usersAuthEvents.onSignOut)
})
