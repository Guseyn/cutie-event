'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is emitter
class EmitterWithAdditionalListener extends AsyncObject {
  constructor (emitter, eventName, listener) {
    super(emitter, eventName, listener)
  }

  definedSyncCall () {
    return (emitter, eventName, listener) => {
      emitter.addListener(eventName, listener) // or emitter.on(eventName, listener);
      return emitter
    }
  }
}

module.exports = EmitterWithAdditionalListener
