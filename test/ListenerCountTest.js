'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  ListenerCount
} = require('./../index');

const EventEmitter = require('events');
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter();

new Assertion(
  new IsNumber(
    new ListenerCount(emitter)
  )
).call()
