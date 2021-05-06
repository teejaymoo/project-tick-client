// assigning my api file to a variable to make the file accessible
const api = require('./api')
// assigning my ui file to a variable to make the file accessible
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  // prevent page to refresh on us
  event.preventDefault()

  // get data from html form
  const form = event.target
  const data = getFormFields(form)

  // send data to api for sign up
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onLogIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.logIn(data)
    .then(ui.logInSuccess)
    .catch(ui.logInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onViewGames = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.index(data)
    .then(ui.viewGames)
    .catch(ui.onErr)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onSignOut,
  onViewGames
}
