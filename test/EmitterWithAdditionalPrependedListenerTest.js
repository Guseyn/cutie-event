'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  EmitterWithAdditionalPrependedListener
} = require('./../index')

const EventEmitter = require('events')
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter()

new Assertion(
  new Is(
    new EmitterWithAdditionalPrependedListener(
      emitter, 'call', () => {}
    ), EventEmitter
  )
).call()
