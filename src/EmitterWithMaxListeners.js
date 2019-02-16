'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is emitter
class EmitterWithMaxListeners extends AsyncObject {
  constructor (emitter, n) {
    super(emitter, n)
  }

  definedSyncCall () {
    return (emitter, n) => {
      return emitter.setMaxListeners(n)
    }
  }
}

module.exports = EmitterWithMaxListeners
