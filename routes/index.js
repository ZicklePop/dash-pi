'use strict'

const next = require('next')
const { pathWrapper, defaultHandlerWrapper } = require('../utils/nextWrapper')
const darkSky = require('../methods/darkSky')
const myHotPics = require('../methods/myHotPics')
// const Joi = require('joi')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

module.exports = [
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
]
