'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is emitter
class EmitterWithRemoveEvent extends AsyncObject {

  constructor(emitter, listener) {
    super(emitter, listener);
  }

  // listener is an Event: (event, listener) => {}
  definedSyncCall() {
    return (emitter, listener) => {
       emitter.once('removeListener', listener);
       return emitter;
    }
  }

}

module.exports = EmitterWithRemoveEvent;
