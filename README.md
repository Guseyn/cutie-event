# cutie-event

[![NPM Version](https://img.shields.io/npm/v/@cuties/event.svg)](https://npmjs.org/package/@cuties/event)
[![Build Status](https://travis-ci.org/Guseyn/cutie-event.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-event)
[![codecov](https://codecov.io/gh/Guseyn/cutie-event/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-event)

[Cutie](https://github.com/Guseyn/cutie) extension for <b>event</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-event/tree/master/test).

## Install

`npm install @cuties/event`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/event');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>event</b> module.

| Async Object | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `EmittedEmitter` | `emitter.emit` | `emitter, eventName, ...args` | `emitter` |
| `EmitterWithAdditionalListener` | `emitter.addListener` | `emitter, eventName, listener` | `emitter` |
| `EmitterWithAdditionalOneTimeListener` | `emitter.once` | `emitter, eventName, listener` | `emitter` |
| `EmitterWithAdditionalPrependedListener` | `emitter.prependListener` | `emitter, eventName, listener` | `emitter` |
| `EmitterWithAdditionalPrependedOneTimeListener` | `emitter.prependOnceListener` | `emitter, eventName, listener` | `emitter` |
| `EmitterWithMaxListeners` | `emitter.setMaxListeners` | `emitter, n` | `emitter` |
| `EmitterWithNewListenerEvent` | `emitter.once('newListener', listener)` | `emitter, listener(Event with definedBody(event, listener))` | `emitter` |
| `EmitterWithRemoveEvent` | `emitter.once('removeListener', listener)` | `emitter, listener(Event with definedBody(event, listener))` | `emitter` |
| `EmitterWithRemovedListener` | `emitter.removeListener` | `emitter, eventName, listener` | `emitter` |
| `EmitterWithoutAnyListeners` | `emitter.removeAllListeners` | `emitter, eventName` | `emitter` |
| `EventNames` | `emitter.eventNames` | `emitter` | `(string or symbol)[]` |
| `ListenerCount` | `emitter.listenerCount` | `emitter, eventName` | `number` |
| `Listeners` | `emitter.listeners` | `emitter, eventName` | `function[]` |
| `MaxListeners` | `emitter.getMaxListeners` | `emitter` | `number` |
