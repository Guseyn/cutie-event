'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class MaxListeners extends AsyncObject {

  constructor(emitter) {
    super(emitter);
  }

  definedSyncCall() {
    return (emitter) => {
       return emitter.getMaxListeners();
    }
  }

}

module.exports = MaxListeners;
