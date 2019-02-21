'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is (string|symbol)[]
class EventNames extends AsyncObject {
  constructor (emitter) {
    super(emitter)
  }

  syncCall () {
    return (emitter) => {
      return emitter.eventNames()
    }
  }
}

module.exports = EventNames
