const store = require('./../store')

const playGameSuccess = function (response) {
  $('#game-board').show()

  store.game = response.game
  console.log('Data is :', response)
}

const patch = function (response) {
  $('#game-board').show()
  console.log('Data is :', response)
}

const onErr = function (error) {
  $('#game-message').text('Error')
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  console.error('Error is :', error)
}

const winner = function () {
  store.gameOver = true
  $('#game-message').show()

  $('#game-message').text(`${store.playerXOrO} Wins! Click 'Play Game' to play again`).show()

  $(document).ready(function () {
    $('#game-message').delay(5000).fadeOut()
  })
}

const draw = function () {
  store.gameOver = true
  $('#game-message').show()
  $('#game-message').text('DRAW! Click \'Play Game\' to play again').show()

  $(document).ready(function () {
    $('#game-message').delay(5000).fadeOut()
  })
}

const invalidMove = function () {
  $('#game-message').text('INVALID MOVE: Choose empty spot').show()

  setTimeout(function () {
    $('#game-message').hide()
  }, 4000)
}

const gameOver = function () {
  $('#game-message').text('INVALID MOVE: Game Over - Click \'New Game\' to play again').show()

  setTimeout(function () {
    $('#game-message').hide()
  }, 4000)
}

module.exports = {
  playGameSuccess,
  patch,
  draw,
  winner,
  gameOver,
  invalidMove,
  onErr
}
