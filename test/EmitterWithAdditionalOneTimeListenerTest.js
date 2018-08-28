'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  EmitterWithAdditionalOneTimeListener
} = require('./../index');

const EventEmitter = require('events');
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter();

new Assertion(
  new Is(
    new EmitterWithAdditionalOneTimeListener(
      emitter, 'call', () => {}
    ), EventEmitter
  )
).call()
