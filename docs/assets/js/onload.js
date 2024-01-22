// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 6 */
// noinspection AnonymousFunctionJS
/**
 * Initializes the game when the DOM is loaded.
 * @function oninitload
 * @param {GameLogic} newgame - The instance of the gameLogic class.
 * @return {void}
 * @complexity 6%|low
 */
function oninitload(newgame) {

    // noinspection AnonymousFunctionJS
    document.addEventListener("DOMContentLoaded", function()
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
        window.GameRound.roundData = watchData(window.GameRound.roundData,
                                                dataHandler)
        window.hasFinal = null
        // initUI
        initUI()

        //Find all grid buttons i.e. cells/clicks
        /** @type {HTMLElement[]} **/
        let buttons_on_grid = findButtons('cell-',
                                                            game.MAX)
        /** @type {HTMLElement} **/
        let resetBtn = document.getElementById('reset');
        // Initialize the game' eventHandlers
        // and link the result container for each move to the grid
        result = gridButtonOnClick(buttons_on_grid,
                                    'click',
                                    'cell-',
                                    startgrid,
                                    game,
                                    result)
        // Dynamically initialize the reset on load,
        // and link the result of a move to the reset
        resetButtonOnClick(resetBtn,
                            'click',
                            'reset',
                            startgrid,
                            game,
                            result,
                            devmode );
        // Log the passing result
        devmode && clickLogger(result)
    });
}
