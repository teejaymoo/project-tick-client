const store = require('./../store')

const playGameSuccess = function (response) {
  $('#game-board').show()

  store.game = response.game
}

const patch = function (response) {
  $('#game-board').show()
}

const onErr = function () {
  $('#game-message').text('Error')
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
}

const winner = function () {
  store.gameOver = true
  $('#game-message').show()

  $('#game-message').text(`${store.playerXOrO} Wins! Click 'Play Game' to play again`).show()

  $(document).ready(function () {
    $('#game-message').delay(2500).fadeOut()
  })
}

const draw = function () {
  store.gameOver = true
  $('#game-message').show()
  $('#game-message').text('DRAW! Click "Play Game" to play again').show()

  $(document).ready(function () {
    $('#game-message').delay(2500).fadeOut()
  })
}

const invalidMove = function () {
  $('#game-message').text('INVALID MOVE: Choose empty spot').show()

  setTimeout(function () {
    $('#game-message').hide()
  }, 2500)
}

const gameOver = function () {
  $('#game-message').text('Game Over - Click "Play Game" to play again').show()

  setTimeout(function () {
    $('#game-message').hide()
  }, 2500)
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
