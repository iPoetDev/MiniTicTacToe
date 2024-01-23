// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 6 */
// noinspection GrazieInspection
// noinspection AnonymousFunctionJS

/**
 * JSHint 2024/01/22: // jshint ignore:line for W117: JSHint: 'console' is not defined.
 */

/**
 * Attr passable object for logging to the console or to a global logging function.
 * @function gameConsole
 * @scope this/const on class initialization
 * @param {string} step - The step or stage of the game.
 * @param {string} emoji - The emoji associated with the log message.
 * @param {string} caller - The name of the method or module making the log.
 * @param {string} writer - The log writer (either "local" or "global").
 * @param {string} logLevel - The log level (e.g. "debug", "log", "error").
 * @param {boolean} collapse - Whether to collapse log group (only for local writer).
 * @param {string} message - The log message.
 * @param {Array} args - Additional arguments to be logged.
 *
 * @throws {Error} If an invalid `logLevel` is provided.
 * @return {void} std to console.
 */
function gameConsole(step, emoji, caller, // jshint ignore:line
                    writer, logLevel, collapse,
                    message, ...args) {
    const validLogLevels = ['debug', 'error', 'info', 'log', 'warn', 'trace','table'];
    const show = (collapse === true)
    if (!validLogLevels.includes(logLevel)) {
        // noinspection NestedFunctionCallJS
        throw new Error(`Invalid logLevel: ${logLevel}.`+
                        `Must be one of ${validLogLevels.join(', ')}`);
    }
    const msg = `${step}: ${emoji} ${caller} :: ${message}`;
    switch (writer) {
        case 'local':
            if (logLevel === 'table' || logLevel === 'trace') {
                show && console.groupCollapsed(caller) // jshint ignore:line
                console[logLevel](args[0]); // jshint ignore:line
                console[logLevel](args[1]);// jshint ignore:line
                show && console.groupEnd(); // jshint ignore:line
            } else {
                console[logLevel](msg, ...args);// jshint ignore:line
            }
            break;
        case 'global':
            if (typeof window.myLoggerWriteLog === 'function') {
                if (logLevel === 'table' || logLevel === 'trace') {
                    collapse === true && console.groupCollapsed(caller); // jshint ignore:line
                    window.myLoggerWriteLog(step, emoji,
                                            caller, logLevel,
                                            '', args[0]);
                    collapse === true && console.groupEnd(); // jshint ignore:line
                } else {
                    window.myLoggerWriteLog(step, emoji,
                                            caller, logLevel,
                                            message, ...args);
                }
            }
            break;
        default:
            console[logLevel](msg, ...args);// jshint ignore:line
    }
}

// noinspection AnonymousFunctionJS
/**
 * A Global logger that for logging to the console with the specified parameters.
 * @function myLoggerWriteLog anonymous/arrow function object
 * @scope window {DOM}
 * @param {string} step - The step of the log message.
 * @param {string} emoji - The emoji to display in the log message.
 * @param {string} caller - The caller of the log message.
 * @param {string} logLevel - The log level of the message.
 * @param {string} message - The log message.
 * @param {...any} args - Additional arguments to include in the log message.
 * @return {void} std to console.
 */
window.myLoggerWriteLog = (step, emoji, caller,
                            logLevel, message,...args) => {

    const msg = `${step}: ${emoji} ${caller} :: ${message}`;
    if (logLevel === 'table' || logLevel === 'trace') {
        console.log(msg, ...args); // jshint ignore:line
        console[logLevel](args[0]); // jshint ignore:line
    } else {
        console[logLevel](msg, ...args); // jshint ignore:line
    }
}
