const config = require('../config')
const store = require('./../store')

const playGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: ''
  })
}

const patchGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game._id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

module.exports = {
  playGame,
  patchGame

}
