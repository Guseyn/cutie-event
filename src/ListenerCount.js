'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class ListenerCount extends AsyncObject {

  constructor(emitter, eventName) {
    super(emitter, eventName);
  }

  definedSyncCall() {
    return (emitter, eventName) => {
       return emitter.listenerCount(eventName);
    }
  }

}

module.exports = ListenerCount;
