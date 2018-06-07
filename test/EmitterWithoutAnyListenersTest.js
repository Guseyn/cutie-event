'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  EmitterWithoutAnyListeners
} = require('./../index');

const EventEmitter = require('events');
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter();

new Assertion(
  new Is(
    new EmitterWithoutAnyListeners(
      emitter
    ), EventEmitter
  )
).call()
