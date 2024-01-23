// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 6 */

/**
 * @file watch.js
 * @description - Watcher functions for the game's outcome and result data with a custom Listener
 //* @module watch
 * @author - Charles J Fowler, & co-pilot: JetBrains AI Assistant (Boilerplate)
 * @package watch
 * @fileOverview
 *  - Proxy handler object
 *  - Watcher functions for the game's outcome and result data
 *  - EventListener callback
 *  - UI Event Wrapper/Interface
 * */

/**
 * Represents a data handler object used for manipulating data.
 *   - properties are functions that define the behavior of the proxy
 *   @trap get
 *   @trap set - so to dispatch events via the events stream.
 *   @event gameRoundUpdated
 * @name dataHandler - object that defines the custom behavior of the proxy.
 * @type {Object}
 * @return {Object}
 *@url https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
 * @see oninitload.js
 */
let dataHandler = { // jshint ignore:line
    /**
     * This intercepts attempts to retrieve a property on the target object
     * @function _ get trap
     * @param {Object} target - The target object.
     * @param {string} property - The property to be retrieved.
     * @type {function}
     * @return {any}
     */
    get: function(target, property) {
        return target[property];
    },

    /**
     * This intercepts attempts to assign/update a property on the target.
     *  - it will set the value of property on target
     *  - fire a CustomEvent named 'gameRoundUpdated' with the details of the change event.
     *  -
     * @function _ set trap
     * @param {Object} target - The target object.
     * @param {string} property - The property to be set.
     * @param {any} value - The value to be set.
     * @type {function}
     * @return {boolean} [true]
     */
    set: function(target, property, value) {
        target[property] = value;
        /**
         * @name gameRoundUpdated
         //* @type {CustomEvent}
         * @url https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
         * @bug Firefox web extension to web page issue, object is not cloned as per URL.
         * @property {any} detail:
         *  - {index: property, newOutcome: value}
         * @url https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail
         * @see watchForOutcome
         */
        let event = new CustomEvent('gameRoundUpdated',
                                    { detail:
                                            { index: property, newOutcome: value }
                                    });
        // The event carries further information in its detail attribute.
        // In the event listener, Access this detail for gameRoundUpdated.
        document.dispatchEvent(event);
        /** @url https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent **/
        return true;
    }
};

/**
 * Watches the changes in the given data array using a data handler.
 *  - To reflect updates on an array: a Proxied array, or a custom object, to behaves like an
 *  array
 *  - Proxy to create a "watchable" array.
 *  - The Proxy object is used to define custom behavior for fundamental operations.
 * @function watchData
 * @param {any[]} dataArray - The data array to be watched.
 * @param dataHandler - The data handler object to be used for handling the changes.
 * @returns {*} - A proxy object that wraps the data array and uses the data handler.
 * @url https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 * @see oninitload.js
 */
function watchData(dataArray, dataHandler) // jshint ignore:line
{
    return new Proxy(dataArray, dataHandler);
}

/**
 * Watches for updates of game rounds and invokes a callback function when an update occurs.
 * @function watchRounds Refactored for testing and reuse
 * @param {function} callback - The callback function to be invoked when a game round is updated.
 * @param {string} [action='add'] - The type of action to be performed ('add', 'remove').
 * @return {void}
 */
function watchRounds(callback, action = 'add')
{
    // noinspection AnonymousFunctionJS
    const handler = function(e) {
        callback(e);
    };
    if (action === 'add') {
        document.addEventListener('gameRoundUpdated', handler, { once: true });
    } else if (action === 'remove') {
        document.removeEventListener('gameRoundUpdated', handler);
    }
}

/**
 * Watches the outcome of each round, logs the result and updates the UI.
 * @function watchForOutcome
 * @param {string} [logType='info'] - The type of logging to be used ('info', 'table', 'trace')
 * @param {boolean} [debug=true].- Optional debug flag
 * @returns {null|object}
 * @complexity 46%|low
 */
function watchForOutcome(logType = 'table', debug = false) { // jshint ignore:line
    /** @type {boolean} show for DRY short circuit flags for logging in DevMode **/
    const show = (debug === true)
    let callback = function(e) { // jshint ignore:line
        let outcome = e.detail;
        let index = Number(outcome.index);
        index += 1
        let isFinal = outcome.newOutcome;

        // Declare the Winner to the UI
        if (isFinal && isFinal.final !== 'NONE') {
            show && console.log(`The winner of round ${index} is: ${isFinal.final}`); // jshint ignore:line
            console.log('--------------------'); // jshint ignore:line
            show && console[logType](isFinal); // jshint ignore:line
            window.hasFinal = {...isFinal} // jshint ignore:line
            /** @see ui1.js **/
            displayOutcome(index, isFinal, 'outcome'); // jshint ignore:line
            watchRounds(callback, 'remove');  // here we remove the event listener
        }
    };
    watchRounds(callback, 'add');  // here we add the event listener
}
