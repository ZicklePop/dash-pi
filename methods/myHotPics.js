'use strict'

const fetch = require('node-fetch')
const MY_HOT_PICS = 'http://myhot.pics/?format=json'

// Fisher Yates Shuffle
function shuffle(r) {
  for (let f, n, o = r.length; 0 !== o; )
    n = Math.floor(Math.random() * o), o -= 1, f = r[o], r[o] = r[n], r[n] = f
  return r
}

module.exports = (request, reply) => {
  fetch(MY_HOT_PICS)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      const images = json.images.filter((el) => el.keywords.indexOf('NSFW') < 0)
      reply(shuffle(images)[0])
    })
}
