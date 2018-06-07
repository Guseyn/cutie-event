'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsArray
} = require('@guseyn/cutie-is');
const {
  EventNames
} = require('./../index');

const EventEmitter = require('events');
class CutieEmitter extends EventEmitter {}
const emitter = new CutieEmitter();

new Assertion(
  new IsArray(
    new EventNames(emitter)
  )
).call()
