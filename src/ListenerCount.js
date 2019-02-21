'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class ListenerCount extends AsyncObject {
  constructor (emitter, eventName) {
    super(emitter, eventName)
  }

  syncCall () {
    return (emitter, eventName) => {
      return emitter.listenerCount(eventName)
    }
  }
}

module.exports = ListenerCount
