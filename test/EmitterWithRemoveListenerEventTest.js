'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
