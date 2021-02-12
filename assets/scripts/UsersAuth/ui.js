const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thank you for signing up.')
}

const signUpFailure = function (response) {
  $('#message').text('Sorry, sign up failed.')
  store.user = response.user
  console.log(store)
}

const logInSuccess = function (response) {
  // storing my user info (id,email,username) into response
  store.user = response.user
  $('#message').text('Login Successful!')
  $('#form-sign-up').hide()
  $('#form-login').hide()
  $('h2').hide()
  console.log(store)
}

const logInFailure = function (response) {
  $('#message').text('Sorry, log in failed.')
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure
}
