'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is emitter
class EmitterWithAdditionalOneTimeListener extends AsyncObject {
  constructor (emitter, eventName, listener) {
    super(emitter, eventName, listener)
  }

  syncCall () {
    return (emitter, eventName, listener) => {
      emitter.once(eventName, listener)
      return emitter
    }
  }
}

module.exports = EmitterWithAdditionalOneTimeListener
