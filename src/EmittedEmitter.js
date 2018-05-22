'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is emitter
class EmittedEmitter extends AsyncObject {

  constructor(emitter, eventName) {
    super(emitter, eventName, ...args);
  }

  definedSyncCall() {
    return (emitter, eventName, ...args) => {
       emitter.emit(eventName, ...args);
       return emitter;
    }
  }

}

module.exports = EmittedEmitter;
