'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  EmitterWithNewListenerEvent
} = require('./../index')

const EventEmitter = require('events')
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter()

class NewListenerEvent extends Event {
  constructor () {
    super()
  }

  definedBody (event, listener) {

  }
}

new Assertion(
  new Is(
    new EmitterWithNewListenerEvent(
      emitter, new NewListenerEvent()
    ), EventEmitter
  )
).call()
