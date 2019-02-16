'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsArray
} = require('@cuties/is')
const {
  Listeners
} = require('./../index')

const EventEmitter = require('events')
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter()

new Assertion(
  new IsArray(
    new Listeners(emitter)
  )
).call()
