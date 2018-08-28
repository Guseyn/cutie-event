'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsArray
} = require('@cuties/is');
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
