/* eslint-disable no-console */
'use strict'

const next = require('next')
const Hapi = require('hapi')
const Good = require('good')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = new Hapi.Server()

app.prepare().then(() => {
  server.connection({
    port: process.env.PORT || 5000,
    host: '0.0.0.0'
  })

  server.route(routes)

  server.register({
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            response: '*',
            log: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout']
      }
    }
  })

  server.start(() => {
    console.log(`Server started: ${server.info.uri}`)
  })
})

module.exports = server
