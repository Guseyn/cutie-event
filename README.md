# cutie-event

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>event</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-event/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@guseyn/cutie-fs');
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
| `EventNames` | `emitter.eventNames` | `emitter` | `(string|symbol)[]` |
| `ListenerCount` | `emitter.listenerCount` | `emitter, eventName` | `number` |
| `Listeners` | `emitter.listeners` | `emitter, eventName` | `function[]` |
| `MaxListeners` | `emitter.getMaxListeners` | `emitter` | `number` |

[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-event.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-event
