'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is emitter
class EmitterWithAdditionalPrependedListener extends AsyncObject {
  constructor (emitter, eventName, listener) {
    super(emitter, eventName, listener)
  }

  definedSyncCall () {
    return (emitter, eventName, listener) => {
      emitter.prependListener(eventName, listener)
      return emitter
    }
  }
}

module.exports = EmitterWithAdditionalPrependedListener
