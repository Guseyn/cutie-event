'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is function[]
class Listeners extends AsyncObject {
  constructor (emitter, eventName) {
    super(emitter, eventName)
  }

  definedSyncCall () {
    return (emitter, eventName) => {
      return emitter.listeners(eventName)
    }
  }
}

module.exports = Listeners
