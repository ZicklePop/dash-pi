'use strict'

const fetch = require('node-fetch')
const MY_HOT_PICS = 'http://myhot.pics/?format=json'

module.exports = (request, reply) => {
  fetch(MY_HOT_PICS)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      const images = json.images.filter((el) => el.keywords.indexOf('NSFW') < 0)
      reply(images[Math.floor(Math.random() * images.length)])
    })
}
