'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  EmitterWithNewListenerEvent
} = require('./../index');

const EventEmitter = require('events');
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter();

class NewListenerEvent extends Event {

  constructor() {
    super();
  }

  definedBody(event, listener) {

  }

}

new Assertion(
  new Is(
    new EmitterWithNewListenerEvent(
      emitter, new NewListenerEvent()
    ), EventEmitter
  )
).call()
