'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const usersAuthEvents = require('./UsersAuth/events')
const gameEvents = require('./game/gameEvents')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  gameEvents.addHandlers()

  $('#view-games').on('click', usersAuthEvents.onViewGames)

  $('#form-sign-up').on('submit', usersAuthEvents.onSignUp)

  $('#form-login').on('submit', usersAuthEvents.onLogIn)

  $('#show-sign-up').click(function () {
    $('#form-sign-up').toggle('fast')
    $('#form-login').toggle('fast')
    $('#show-sign-up').toggle('fast')
    $('#show-login').toggle('fast')
  })

  $('#show-login').click(function () {
    $('#form-sign-up').toggle('fast')
    $('#form-login').toggle('fast')
    $('#show-login').toggle('fast')
    $('#show-sign-up').toggle('fast')
  })

  $('#form-change-password').on('submit', usersAuthEvents.onChangePassword)

  $('#sign-out-button').on('submit', usersAuthEvents.onSignOut)
})
