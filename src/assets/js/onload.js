// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 6 */
// noinspection AnonymousFunctionJS
/**
 * Initializes the game when the DOM is loaded.
 * @function oninitload
 * @param {GameLogic} newgame - The instance of the gameLogic class.
 * @return {void}
 * @complexity 6%|low
 * @see index.html
 */
function oninitload(newgame) { // jshint ignore:line

    // noinspection AnonymousFunctionJS
    document.addEventListener('DOMContentLoaded', function()// jshint ignore:line
    {
        //Initialize gameLogic class and assign to game
        /** @type {GameLogic} **/
        let game = newgame;
        /** @type {boolean} Toggle to enable/disable DevMode **/
        let devmode = true
        // Init starting array to compare board for null v complete compare
        /** @type {(null)[]} **/
        let startgrid = game._grid.slice();
        //Initialize result object
        /** @type {object|{}} **/
        let result = {}; // Init game result object
        /** @type {object} Global Variable with data property to watch **/
        window.GameRound = {roundData: []}
        // Proxy-ify the Global variable's data structure for watching for changes.
        /** @see watch.js **/
        window.GameRound.roundData = watchData(window.GameRound.roundData, // jshint ignore:line
                                                dataHandler) // jshint ignore:line
        window.hasFinal = null
        /** @see watch.js **/
        initUI() // jshint ignore:line
        // helpButton(); // jshint ignore:line
        //Find all grid buttons i.e. cells/clicks
        /** @type {HTMLElement[]}
         * @see ui1.js **/
        let buttons_on_grid = findButtons('cell-', // jshint ignore:line
                                                            game.MAX)
        /** @type {HTMLElement} **/
        let resetBtn = document.getElementById('reset');
        // Initialize the game' eventHandlers
        // and link the result container for each move to the grid
        /** @see ui1.js **/
        result = gridButtonOnClick(buttons_on_grid, // jshint ignore:line
                                    'click',
                                    'cell-',
                                    startgrid,
                                    game,
                                    result)
        // Dynamically initialize the reset on load,
        // and link the result of a move to the reset
        /** @see ui1.js **/
        resetButtonOnClick(resetBtn, // jshint ignore:line
                            'click',
                            'reset',
                            startgrid,
                            game,
                            result,
                            devmode );
        // Log the passing result
        /** @see ui1.js **/
        devmode && clickLogger(result) // jshint ignore:line
    });
}
