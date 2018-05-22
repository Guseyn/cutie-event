'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is (string|symbol)[]
class EventNames extends AsyncObject {

  constructor(emitter) {
    super(emitter);
  }

  definedSyncCall() {
    return (emitter) => {
       return emitter.eventNames();
    }
  }

}

module.exports = EventNames;
