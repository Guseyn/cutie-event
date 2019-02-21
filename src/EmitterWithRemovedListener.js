'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is emitter
class EmitterWithRemovedListener extends AsyncObject {
  constructor (emitter, eventName, listener) {
    super(emitter, eventName, listener)
  }

  syncCall () {
    return (emitter, eventName, listener) => {
      emitter.removeListener(eventName, listener)
      return emitter
    }
  }
}

module.exports = EmitterWithRemovedListener
