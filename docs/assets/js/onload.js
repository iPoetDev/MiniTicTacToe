// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 6 */
// noinspection AnonymousFunctionJS
/**
 * Initializes the game when the DOM is loaded.
 * @function oninitload
 * @param {GameLogic} newgame - The instance of the gameLogic class.
 * @return {void}
 */
function oninitload(newgame) {

    // noinspection AnonymousFunctionJS
    document.addEventListener("DOMContentLoaded", function()
    {
        //Initialize gameLogic class and assign to game
        /** @type {GameLogic} **/
        let game = newgame;
        let devmode = true
        // Init starting array to compare board for null v complete compare
        /** @type {(null)[]} **/
        let startgrid = game._grid.slice();
        //Initialize result object
        /** @type {object|{}} **/
        let result = {}; // Init game result object
        /** @type {object[]} **/
        let roundData = []
        window.GameRound = {roundData: []}
        window.GameRound.roundData = watchData(window.GameRound.roundData,
                                              dataHandler)
        //Find all grid buttons i.e. cells/clicks
        /** @type {HTMLElement[]} **/
        let buttons_on_grid = findButtons('cell-',
                                          game.MAX)
        /** @type {HTMLElement} **/
        let resetBtn = document.getElementById('reset');

        // Initialize the game' eventHandlers
        result = gridbuttonOnClick(buttons_on_grid,
                                   'click',
                                   'cell-',
                                   startgrid,
                                   game,
                                   result)

        resetButtonOnClick(resetBtn, 'click', 'reset',
                           startgrid, game, result, devmode );
        clickLogger(result)
    });
}
