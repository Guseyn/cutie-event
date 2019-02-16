'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  ListenerCount
} = require('./../index')

const EventEmitter = require('events')
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter()

new Assertion(
  new IsNumber(
    new ListenerCount(emitter)
  )
).call()
