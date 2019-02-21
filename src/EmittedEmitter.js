'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is emitter
class EmittedEmitter extends AsyncObject {
  constructor (emitter, eventName, ...args) {
    super(emitter, eventName, ...args)
  }

  syncCall () {
    return (emitter, eventName, ...args) => {
      emitter.emit(eventName, ...args)
      return emitter
    }
  }
}

module.exports = EmittedEmitter
