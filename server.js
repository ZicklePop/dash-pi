/* eslint-disable no-console */
'use strict'

const next = require('next')
const Hapi = require('hapi')
const Good = require('good')
const darkSky = require('./methods/darkSky')
const myHotPics = require('./methods/myHotPics')
const nextWrapper = require('./utils/nextWrapper')

const pathWrapper = nextWrapper.pathWrapper
const defaultHandlerWrapper = nextWrapper.defaultHandlerWrapper
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = new Hapi.Server()

app.prepare().then(() => {
  server.connection({
    port: process.env.PORT || 5000,
    host: '0.0.0.0'
  })

  server.route([
    {
      method: 'GET',
      path: '/{p*}',
      config: {
        handler: defaultHandlerWrapper(app)
      }
    },
    {
      method: 'GET',
      path: '/api/weather',
      config: {
        pre: [
          { method: darkSky, assign: 'weather' }
        ],
        handler: (req, reply) => {
          return reply(req.pre.weather)
        }
      }
    },
    {
      method: 'GET',
      path: '/api/gif',
      config: {
        pre: [
          { method: myHotPics, assign: 'gif' }
        ],
        handler: (req, reply) => {
          return reply(req.pre.gif)
        }
      }
    }
  ])

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
