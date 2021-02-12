const store = require('./../store')
const errorMessage = 'Something went wrong!'

const showPw = function (id, el) {
  const ident = document.getElementByTd(id)
  if (ident.type === 'password') {
    ident.type = 'text'
    el.className = 'eye-showpw'
  } else {
    ident.type = 'password'
    el.className = 'eye-showpw'
  }
}

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
  // function to fade the "Login successful message" after 2 seconds
  $('#message').removeClass()
  $('#message').addClass('success')
  $(document).ready(function () {
    $('#message').text('Login Successful!').fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })

  $('#form-sign-up').hide()
  $('#form-login').hide()
  $('h2').hide()
  $('#user-info-container').hide()
  $('#Whole-user-info').show()
  $('#main-header').show()
  $('#game-board').show()
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

// when the user-info button is clicked, it will display the user info
const userInfoButtonPressed = function (response) {
// fuction to enable the 'click' and displaying some form of a drop down type effect.
  $(document).ready(function () {
    $('#user-info-button').click(function () {
      $('#user-info-container').toggle()
    })
  })
}

const changePasswordSuccess = function (response) {
  $('#message').removeClass()
  $('#message').addClass('success')
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
  $('#message').text('Sorry, attempt to change password has failed.')
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  userInfoButtonPressed,
  showPw,
  signOutSuccess,
  signOutFailure
}
