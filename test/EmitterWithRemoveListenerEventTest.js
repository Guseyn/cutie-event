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
  EmitterWithRemoveListenerEvent
} = require('./../index');

const EventEmitter = require('events');
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter();

class RemoveListenerEvent extends Event {

  constructor() {
    super();
  }

  definedBody(event, listener) {

  }

}

new Assertion(
  new Is(
    new EmitterWithRemoveListenerEvent(
      emitter, new RemoveListenerEvent()
    ), EventEmitter
  )
).call()
