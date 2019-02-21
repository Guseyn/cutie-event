'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is emitter
class EmitterWithNewListenerEvent extends AsyncObject {
  constructor (emitter, listener) {
    super(emitter, listener)
  }

  // listener is an Event: (event, listener) => {}
  syncCall () {
    return (emitter, listener) => {
      emitter.once('newListener', listener)
      return emitter
    }
  }
}

module.exports = EmitterWithNewListenerEvent
