/* eslint-disable max-len */
'use strict'

const fetch = require('node-fetch')
const DARK_SKY_API = 'https://api.darksky.net/forecast/de20cc6dabf0a69b687606902ebb893a/37.7865,-122.4052'

module.exports = (request, reply) => {
  fetch(DARK_SKY_API)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      reply(json.hourly.data[0])
    })
}
