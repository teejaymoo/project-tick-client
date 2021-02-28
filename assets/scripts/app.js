'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const usersAuthEvents = require('./UsersAuth/events')
const gameEvents = require('./game/gameEvents')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  gameEvents.addHandlers()

  $('#press-start-button').on('click', usersAuthEvents.pressStart)

  $('#view-games').on('click', usersAuthEvents.onViewGames)

  $('#close-view-games').on('click', usersAuthEvents.onCloseViewGames)

  $('#form-sign-up').on('submit', usersAuthEvents.onSignUp)

  $('#form-login').on('submit', usersAuthEvents.onLogIn)

  $('#form-change-password').on('submit', usersAuthEvents.onChangePassword)

  $('#user-info-button').on('click', usersAuthEvents.onUserInfoClicked)

  $('#back-button').on('click', usersAuthEvents.onBackButtonPressed)

  $('#sign-out-button').on('submit', usersAuthEvents.onSignOut)
})
