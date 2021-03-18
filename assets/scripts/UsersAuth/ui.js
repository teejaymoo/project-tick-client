const store = require('./../store')
const errorMessage = 'Something went wrong!'

const signUpSuccess = function (response) {
  $('#message').removeClass()
  $('#message').addClass('success')
  $(document).ready(function () {
    $('#message').text('Thank you for signing up.').fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
}

const signUpFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').show()
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('slow', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  store.user = response.user
}

const logInSuccess = function (response) {
  // storing my user info (id,email,username) into response
  store.user = response.user

  $('#message').removeClass()
  $('#message').addClass('success')
  $(document).ready(function () {
    // function to fade the "Login successful message" after 2 seconds
    $('#message').text('Login Successful!').fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#form-sign-up').hide()
  $('#form-login').hide()
  $('h2').hide()
  $('#Users-auth').hide()
  $('#Whole-user-info').hide()
  $('#header-container').show()
  $('#user-info-button').show()
}

const logInFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
}

const changePasswordSuccess = function () {
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').show()
  $(document).ready(function () {
    $('#message').text('Password updated!').fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#form-change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#form-change-password').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').removeClass()
  $('#message').addClass('success')
  $(document).ready(function () {
    $('#message').text('Sign out successful!.').fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
}

const viewGames = function (response) {
  const games = response.games
  let gamesHtml = ''
  games.forEach(game => {
    gamesHtml += `
      <h4>ID: ${game._id}</h4>
      <p>Cells: ${game.cells}</p>
      <p>Game over?: ${game.over}</p>
    `
  })
  $('#game-display').html(gamesHtml)
  $('#game-display').show()

}

const backButtonPressed = function () {
  $('#user-info-container').hide()
  $('#back-button').hide()
  $('#ask-game').hide()
  $('#close-view-games').hide()
  $('#view-games').hide()
  $('#user-info-button').show()
  $('#header-container').show()
}

const userInfo = function () {
  $('#game-board').hide()
  $('#header-container').hide()
  $('#user-info-button').hide()
  $('#user-info-container').show()
  $('#back-button').show()
  $('#view-games').show()
  $('#close-view-games').show()
  $('#display-message').show()
}

const onErr = function () {
  // If an error occurs, select the #error-message element
  $('#message').html(errorMessage)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onErr,
  viewGames,
  backButtonPressed,
  userInfo
}
