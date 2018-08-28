'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
