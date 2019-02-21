'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is emitter
class EmitterWithoutAnyListeners extends AsyncObject {
  constructor (emitter, eventName) {
    super(emitter, eventName)
  }

  syncCall () {
    return (emitter, eventName) => {
      emitter.removeAllListeners(eventName)
      return emitter
    }
  }
}

module.exports = EmitterWithoutAnyListeners
