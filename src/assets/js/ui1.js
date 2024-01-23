// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 9 */

// noinspection AnonymousFunctionJS,InnerHTMLJS

/**
 * The click event for a set of grid buttons.
 * @function gridButtonOnClick
 * @param {HTMLElement[]} gridbuttons - The array of grid buttons.
 * @param {string} handler - The event handler to attach to the buttons.
 * @param {string} ident - The identifier for each grid button for user interaction.
 * @param {null[]} startgrid - The starting position.
 * @param {GameLogic} board - The game board.
 * @param {Object|{}} result - The result object.
 * @param {boolean} [debug=false] - show/hide console logging
 * @return {Object|{}} - The updated, and active result object to be passed to other UI controls.
 * @done - no more refactoring
 * @complexity: 26%|low
 */
function gridButtonOnClick(gridbuttons, handler, ident, // jshint ignore:line
                            startgrid, board, result,
                            debug = false)
{
    /** @type {boolean} show for DRY short circuit flags for logging in DevMode **/
    const show = (debug === true)
    /** @type {boolean} [_NORESET=false] constant value **/
    const _NORESET = false
    /** @type {object} Empty local object **/
    let outcome = {}
    // noinspection AnonymousFunctionJS
    /**
     * Loop over the grid buttons and add EventListener to each, and filter per ident.
     * @function _ anon
     * @param {number} index - The index of the button.
     * @param {HTMLElement} button - The button element.
     * @return {void}
     */
    gridbuttons.forEach(function(button, index)
    {
        // Filter for the UI button with the given ident
        if (button.id.includes(ident)) {
            // noinspection AnonymousFunctionJS
            /**
             *  Add EventListener for each button if it matched the ident
             * @function buttonOnClickAction anon function name if refactored
             * @param {string} handler - Name of event handler
             * @param {Event} event - Event.
             * @return {void}
             * @complexity 6%|low */
            button.addEventListener(handler, function(event) {
                event.preventDefault(); //"prevent propagation until clicks"
                // Do currentMove on game logic and update the result object for each click
                outcome = currentMove(index, board, result);
                // Update Grid UI on each click
                updateGridUI(index, startgrid, board, false);
                // Update the round data each click, i.e. if GameLogic is alias for backend
                updateRoundData(outcome, _NORESET, false)
                // Watch/observe state/data changes for the outcome of the game's underlying data
                // as a positive side effect of each data update action
                watchForOutcome() // jshint ignore:line
            });
        } else {
            show && console.warn('No grid button found with id: ' + button.id) // jshint ignore:line
        }
    });
    return outcome
}

/**
 * Displays the outcome of a round.
 *
 * @param {number} index - The round index.
 * @param {object} outcome - The outcome of the round.
 * @param {string} ident - The identifier of the HTML element to display the outcome.
 * @param {boolean} [reset=false] - Determines if the outcome should be reset.
 * @return {void}
 * @see watchForOutcome
 * @see watch.js
 */
function displayOutcome(index, outcome, ident, reset = false) { // jshint ignore:line
    const outcomeDiv = document.getElementById(ident);
    if(outcomeDiv !== null && !reset) {
        outcomeDiv.innerText = `The winner of round ${index} is: ${outcome.final}`;
    }
}

/**
 * Reset button click event handler.
 * @function resetButtonOnClick
 * @param {HTMLElement} resetButton - The reset button element.
 * @param {string} handler - The event handler name.
 * @param {string} ident - The identifier string.
 * @param {null[]} startgrid - The initial grid configuration.
 * @param {GameLogic} board - The game board object.
 * @param {Object} result - The game outcome object.
 * @param {boolean} [debug=false] - Optional, indicates whether to enable debug mode.
 * @return {void} except for console statements.
 */
function resetButtonOnClick (resetButton, handler, ident, // jshint ignore:line
                            startgrid, board, result,
                            debug = false)
{
    /** @type {boolean} show for DRY short circuit flags for logging in DevMode **/
    const show = (debug === true)
    /** @type {string} logType PROPERTY for logging in DevMode **/
    const logType = 'table'
    /** @type {boolean} _RESET constant value **/
    const _RESET =  true
    /** @type {Object} outcome empty object literal for reset result object **/
    let outcome = {}
    /** @type {string} cellIdent PROPERTY actually resetting the grid cells **/
    const cellIdent = 'cell-id-'
    // noinspection AnonymousFunctionJS
    resetButton.addEventListener(handler, function(event) { // jshint ignore:line
        if (resetButton.id.includes(ident)) {
            event.preventDefault(); //"prevent propagation until clicks"
            //Reset Game Instance OBJECT
            board.reset()
            // noinspection AssignmentToFunctionParameterJS
            result = outcome // reset with empty object literal
            resetGrid(cellIdent, startgrid.length, show)
            // When enabled, log to console with table type
            show && window.myLoggerWriteLog('Reset', '🔍',
                                            `Reset Button Click by Button ${ident}`,
                                            logType,
                                            `Game Reset UI Cells ${cellIdent}`,
                                            board); // jshint ignore:line
            // Reset Current Round Result Data
            updateRoundData(result, _RESET, show)
            window.hasFinal = null
        } else {
            show && console.warn('No grid button found with id: ' + resetButton.id) // jshint ignore:line
        }
    });
}

/**
 * Initializes the user interface.
 * This method is responsible for setting up the initial state of the UI.
 * @function initUI
 * @see oninitload.js
 */
function initUI(){ // jshint ignore:line
    /**
     * Represents the outcome variable.
     *
     * @type {string}
     */
    const outcome = 'outcome'
    /**
     * Get the element with the specified ID and assign it to the variable outcomeDiv.
     *
     * @param {string} outcome - The ID of the element to retrieve.
     * @returns {Element|null} The element with the specified ID, or null if no element is found.
     */
    const outcomeDiv = document.getElementById(outcome);
    if(outcomeDiv !== null) {
        outcomeDiv.innerText = 'No Result';
    }
}

/**
 * Updates the round data in the global variable `window.GameRound.roundData`.
 *
 *  - Alternates to using: a) localStorage, b) sessionStorage or c) cookie.
 *  - Data in memory between clicks is ephemeral, so temporary assignment to higher scope is used.
 * @function updateRoundData
 * @param {any} result - The result to be added to the round data.
 * @param {boolean} [reset=false] - Indicates whether to reset the round data.
 *   @see resetButtonOnClick
 *   @see gridButtonOnClick
 * @param {boolean} [debug=false] - Indicates whether to enable debug mode for logging.
 * @return {void}
 * @complexity 20%|low
 */
function updateRoundData(result, reset = false,  debug = false)
{
    /** @type {boolean} show for short circuit flags for logging in DevMode **/
    const show = (debug === true)
    /** @type {string} logType PROPERTY for logging in DevMode **/
    const logType = 'table'
    /** @type {any[]} _RESET constant value **/
    const _RESET =  []
    // noinspection NonBlockStatementBodyJS
    if (reset) {
        window.GameRound.roundData = _RESET; // Reset the global variable
    } else {
        window.GameRound.roundData.push(result); // Update the global variable
    }
    // Log GameRound roundData to console as a table if DevMode is enabled for show
    show && window.myLoggerWriteLog('Round Data', '🔍',
                                    `updateRoundData`,
                                    logType,
                                    `Windows GameRound roundData`,
                                    window.GameRound.roundData); // jshint ignore:line
}

/**
 * Returns an array containing all the button elements with the specified ident in their IDs.
 * @function findButtons
 * @param {string} ident - The identifier to search for in the button IDs.
 * @param {number} length - The total count of cells to search through, i.e. grid.length.
 * @return {HTMLElement[]} - An array of HTMLElements containing the button elements found.
 * @complexity: 20%|low
 */
function findButtons(ident, length)// jshint ignore:line
{
    /** @type {number} **/
    const _START = 0
    /** @type {null} **/
    const _EMPTY = null
    /** @type {HTMLElement[]} Collect of Buttons  **/
    let cell_buttons = [];
    for(let cell = _START; cell < length; cell += 1) {
        /** @type {HTMLElement}  Current button **/
        let cell_button = document.getElementById(ident + cell);
        if(cell_button !== _EMPTY) {
            cell_buttons.push(cell_button);
        }
    }
    return cell_buttons
}

/**
 * Reset the grid via setting the content of each cell to empty string.
 * @function resetGrid
 * @param {string} ident - The identifier of the grid.
 * @param {number} gridlength - The length of the grid.
 * @param {boolean} [debug=false] - Optional debug flag. Default is false.
 * @return {void}
 */
function resetGrid(ident, gridlength, debug = false)
{
    /** @type {number} **/
    const _START = 0
    /** @type {string} **/
    const _RESET = ''
    /** @type {HTMLElement[]} **/
    let spans = findCells(ident, gridlength);
    if (spans.length === gridlength) {
        for(let i= _START; i < spans.length; i += 1) {
            spans[i].innerText = _RESET;  // reset span content
        }
        debug && window.myLoggerWriteLog('Reset','🔍', 'resetCells',
                                'info', 'Grid UI Reset'); // jshint ignore:line
    } else {
        debug && console.warn('UI grid is not as per game grid: ' + gridlength) // jshint ignore:line
    }
}

/**
 * Returns an array of HTML elements representing the cells with the given identifiers.
 * @function findCells
 * @param {string} ident - The identifier prefix for the cells.
 * @param {number} length - The total count of cells to search through, i.e. grid.length.
 * @return {HTMLElement[]} - An array of HTML elements representing the found cells.
 * @complexity: 20%|low
 */
function findCells(ident, length)
{
    const _START = 0
    const _EMPTY = null
    // Find all spans
    let spans = [];
    for (let cell = _START; cell < length; cell += 1) {
        let span = document.getElementById(ident + cell);
        if (span !== _EMPTY) {
            spans.push(span);
        }
    }
    return spans
}

/**
 * Returns the updated outcome object after selecting a move on the board.
 * @function currentMove - Wrapper for the board.select() API.
 * @param {number} index - The index of the move on the board.
 * @param {GameLogic} board - The current board state.
 * @param {Object} outcome - The current outcome object for a result {}.
 * @param {boolean} [debug=false] - A flag to enable debugging mode.
 * @return {Object} - The updated outcome object after selecting the move.
 * @complexity: 6%|low
 */
function currentMove(index, board, outcome,
                     debug = false)
{
    /** @type {boolean} show for short circuit flags for logging in DevMode **/
    const show = (debug === true)
    /** @type {string} logType PROPERTY for logging in DevMode **/
    const logType = 'table'
    /** @type {object} renewed outcome **/
    let newOutcome = { ...outcome, ...board.select(index)};
    // When enabled, logs to console in table format
    show && window.myLoggerWriteLog('Current Move', '🔍', 'currentMove',
                                    logType,
                                    'Current Move', newOutcome); // jshint ignore:line
    return newOutcome;
}

/**
 * UI updates for the grid based on the selected cell, start array, and board object.
 *  - Use of a logger pattern is a cross-cutting concern for debugging in the DevTools console.
 * @function updateGridUI
 * @param {number} selected - The index of the selected cell in the grid.
 * @param {null[]} start - The start array representing the initial state of the cells.
 * @param {GameLogic} board - The current game board {GameLogic} instance.
 * @param {boolean} [debug=false] - Optional flag to enable debug output.
 * @param {string} [level=log] - Optional log level to use for debug output.
 * @param {string} [caller=updateGridUI] - Optional caller function name to use for debug output.
 * @return {void}
 * @complexity: 93%|medium
 */
function updateGridUI(selected, start, board, // jshint ignore:line
                      debug = false, level='log',
                      caller = 'updateGridUI')
{
    // Strings: read, main, clarity, efficiency, testability
    const target = 'cell-id-'
    // DRY assignments: read, main, clarity, efficiency
    const show = (debug === true)
    const haslog = (window.myLoggerWriteLog !== undefined)
    // GamePlay
    const playedToken = board._grid[selected]
    const typeOfToken = typeof playedToken === 'string'
    // UI elements, refs
    const cell = document.getElementById(target + selected);
    const cellNotEmpty = !cell.innerText.trim()
    const parentDiv = cell.parentNode; // get the parent div
    const mostRecentMove = typeOfToken && playedToken;
    const hasBeenPlayed = mostRecentMove && typeof cell.innerText === 'string';
    // Logic Flows: (Checks UI and data structure is move is valid)
    // @todo improvements on the logic as PlayedToken is already string in this method, never {null}
    if (mostRecentMove && cellNotEmpty) {
        cell.innerText = playedToken;
    }
    else if (hasBeenPlayed && cellNotEmpty) {
        cell.innerText = playedToken;
    } else {
        show && haslog && window.myLoggerWriteLog(`Grid Cell ${selected}`, '🔍',
                                                  caller, level,
                                                  `Cell ${selected} is not free to play` +
                                                           ' Cell has not been played',
                                                  cell.innerText); // jshint ignore:line
    }
    // store parent div innerHTML, clear it, then set it back: this will cause a re-render
    renderElement(parentDiv);
    // Log the state of the game board
    show && haslog && window.myLoggerWriteLog('UI Update','🔍',
                                              caller, 'table',
                                              'log per cell', board); // jshint ignore:line
}

// noinspection InnerHTMLJS
/**
 * Renders the content of an element by clearing its innerHTML and setting it again.
 * @function renderElement
 * @param {object} el - The element to render.
 * @return {void}
 * @complexity: ??%|low
 */
function renderElement(el)
{
    // noinspection InnerHTMLJS
    const originalHTML = el.innerHTML;
    el.innerHTML = '';
    el.innerHTML = originalHTML;
}

/**
 * Logs a click event using the provided parameters.
 * @function
 * @param {Object} obj - The object representing the click event.
 * @return {void}
 * @complexity: ??%|low
 */
function clickLogger(obj)// jshint ignore:line
{
    window.myLoggerWriteLog('Click','🔍', 'clickLogger', 'table',
                            'Current', obj);
}
