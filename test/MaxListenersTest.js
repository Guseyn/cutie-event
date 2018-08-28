'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  MaxListeners
} = require('./../index');

const EventEmitter = require('events');
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter();

new Assertion(
  new IsNumber(
    new MaxListeners(emitter)
  )
).call()
