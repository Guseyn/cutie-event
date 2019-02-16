'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  EmitterWithRemovedListener
} = require('./../index')

const EventEmitter = require('events')
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter()

new Assertion(
  new Is(
    new EmitterWithRemovedListener(
      emitter, 'call', () => {}
    ), EventEmitter
  )
).call()
