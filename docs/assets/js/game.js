// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 6 */
// noinspection JSUnusedLocalSymbols,ChainedFunctionCallJS

// noinspection GrazieInspection

/**
 * Represents the logic (state and behaviour) for a game of TicTacToe.
 */
class GameLogic {

    /**
     * Represents an empty cell's value/primitive.
     * @constant {null}
     * @default null
     */
    static _EMPTYCELL = null
    /**
     * Represents the initial value of the _INITIALISE variable for arrays.
     * @constant {null}
     * @default null
     */
    static _INITIALISE = null
    /**
     * The shift incremented value for the first row.
     * @constant {number}
     * @default 0
     */
    ROW_ONE = 0
    /**
     * The shift incremented value for the second row.
     * @type {number}
     */
    ROW_TWO = 3
    /**
     * The shift incremented value for the third row.
     * @constant {number}
     * @default
     */
    ROW_THREE = 6
    /**
     * Represents the ref value when border hides.
     * @constant {number}
     * @default 0
     */
    static BOARDER_HIDE = 0
    /**
     * Represents the maximum value for negative subtraction operation/length/range.
     * @constant {number}
     * @default 1
     */
    static _CHECK_FROM = 1
    /**
     * Maximum number of player tokens allowed.
     * @constant
     * @type {number}
     */
    static _MAX_TOKENS = 2

    static START = 0
    static INVALID = 1
    static NEXT = 2
    static PLAYER1 = 3
    static PLAYER2 = 4
    static DRAW = 5
    static RESET = 6

    /**
     * @constructor
     * @param {function} [logger=gameConsole{}] - Optional logger function
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [mode=this.LOGLEVEL] - Optional level of logging to console.
     * Constructor for the App class.
     * Uses Class Constants to initialises values.
     * Initializes the App object with default values and reactivity for:
     * - turns counters & turn properties
     * - win or draw state,
     * - win sequences/combinations,
     * - game grid & current cell,
     * - x & o characters,
     * The constructor also logs the instantiation of the App object to the console.
     * @returns {void}
     */

    constructor(logger = null, debug = false, mode = 0) {
        // Enable Developer Mode for debugging
        /** @instance public */
        this.DEBUG =  debug
        // this.DEBUG = false
        /** @instance public */
        this.mode = 0
        this.LEVEL = this.LOGLEVEL
        this.logger = logger
        this.writer = 'local'
        //logger('Instantiate Game Logic: ',this.DEBUG, this.LEVEL, this) // jshint ignore:line
        // Instance variables set by Class Constants
        this._start = GameLogic.START
        /** @instance public */
        this.empty = null
        this._click = null;
        this._currentPlayer = GameLogic.P1 // initialised to P1 or X
        // Set initial class constants empty cell.
        /** @instance private */
        this._turns = 0
        /** @instance private */
        this._currentcell = GameLogic.CELL_RESET
        /** @instance private */
        this._length = 9
        //  works best when class in Proxy'ed in Alpine.Js
        // noinspection NestedFunctionCallJS,AnonymousFunctionJS
        /** @instance private */
        this._grid = Array.apply(null,Array(9))
                          .map(function (v,i) {return null})
        // The default check win state of the game / Set initial constants
        /** @instance private */
        this._draw = GameLogic.NO_DRAW
        // The default check win state of the game / Set initial constants
        /** @instance private */
        this._won = GameLogic.IN_PLAY
        // Set initial class constants
        /** @instance private */
        this._winSeq = GameLogic.WIN_COMBINATIONS
        /** @instance private
         * @type {array} */
        this._xChars = ['x','X']
        this._xTokens = this._setTOKENS('X')
        // noinspection JSUnresolvedReference
        /** @instance  private */
        this._oChars = ['o','O']
        this._oTokens = this._setTOKENS('0')
        /** @instance  private Track the length/number of X's played */
        this._xTurns = GameLogic.TURN_RESET // Set initial class constants
        /** @instance private Track the length/number of Y's played */
        this._oTurns = GameLogic.TURN_RESET // Set initial class constants
    }

    /**
     * Initializes the object with default values for debug, level, and mode properties.
     *
     * @function init
     * @returns {void}
     */
    init() {
        this.debug = this.DEBUG
        this.level = this.LEVEL
        this.mode = 0
    }

    /**
     * Generates a report with the provided information.
     * @function report
     * @param {string} label - The label for the report.
     * @param {string} step - The step of the report.
     * @param {string} emoji - The emoji associated with the report.
     * @param {string} caller - The caller of the report.
     * @param {string} writer - The writer of the report.
     * @param {string} level - The level of the report.
     * @param {object} obj - The object containing report data.
     * @param {boolean} [data=true] - Flag indicating whether to display data in the report. (default: true)
     * @param {boolean} [collapse=false] - Flag indicating whether to collapse the report groups. (default: false)
     * @returns {void}
     */
    report(label, step, emoji, caller, writer,
           level, obj, data = true, collapse = false)
    {
        collapse === true && console.groupCollapsed(label);
        this.logger(step, '➡️', caller, writer, level, obj);
        collapse === true && console.groupCollapsed(`${label}: Table:`);
        data === true && console.table(obj);
        collapse === true && console.groupEnd()
        collapse === true && console.groupEnd()
    }


    get CLICK() {
        return this._click
    }

    set CLICK(c) {
        this._click = c
        this.updateUI(c);
    }

    // ======================= PROPERTY GET/SET | CLASS DEBUG MODE ===============================

    /**
     * GETTER: Retrieves the current value of the DEVMODE property.
     * @property {boolean} DEVMODE
     * @public
     * @returns {boolean} The current value of the DEVMODE property.
     * @default false
     */
    get DEVMODE() {
        return false
    }

    /**
     * SETTER: Sets the developer mode toggle.
     * @property {boolean} DEVMODE
     * @public
     * @param {boolean} toggle - The value to set the developer mode toggle.
     * @default {boolean} false` if `toggle` is undefined.
     */
    set DEVMODE(toggle = false) {
        const _disabled = false // disabled by default or if omitted
        // When true, enabled debug mode
        this.DEBUG = typeof toggle === 'boolean' ? toggle : _disabled
    }

    /**
     * GETTER: Retrieves the current value of the DEVMODE property.
     * @property {number} LOGLEVEL property
     * @public
     * @returns {number} The current value of the DEVMODE property.
     * @default 0
     */
    get LOGLEVEL() {
        return this.LEVEL === undefined ? 0 : this.LEVEL
    }

    /**
     * SETTER: Sets the developer mode toggle.
     * @property {number} LOGLEVEL
     * @public
     * @param {number} consolelevel - The value to set the developer mode toggle.
     * @default {boolean} false` if `toggle` is undefined.
     */
    set LOGLEVEL(consolelevel = 1) {
        const _disabled = 0 // disabled by default or if omitted
        this.LEVEL = typeof consolelevel === 'number' ? consolelevel : _disabled
    }

    // ======================= PROPERTY STATIC GETTERS | CLASS Constants =========================
    // =======================     GAME STATE                            =========================

    /**
     * GAME STATE: Retrieves the initial state of a drawn game.
     * @property {boolean} NO_DRAW -  Initial State of a drawn game, a viable initial state.
     * @private
     * @return {boolean} -  Initial State of a drawn game, a viable initial state.
     * @static, Class constant
     * @default false
     */
    static get NO_DRAW() {
        return false
    }

    /**
     * GAME STATE: Retrieves the current as an end state of the game.
     * @property {boolean} HAS_DRAW -  Whether the game has drawn, a viable end state.
     * @private
     * @return {boolean} - Whether the game has drawn, a viable end state.
     * @static, Class constant
     * @default true
     */
    static get HAS_DRAW() {
        return true
    }

    /**
     * GAME STATE: Retrieves the initial/current state of the game.
     * @property {boolean} IN_PLAY - The initial/current state of the game when not won.
     * @private
     * @return {boolean} - Whether the game is currently in play or not.
     * @static, Class constant
     * @default false
     */
    static get IN_PLAY() {
        return false
    }

    // =========================    PLAYERS & TOKENS                      =========================



    /**
     * GETTER: Gets the Player 1 Token.
     * @property {string} P1 Player 1 Token
     * @private
     * @returns {string} The name of the property for turns.
     * @static, Class constants
     * @default 'X'
     */
    static get P1() {
        return 'X'
    }

    /**
     * GETTER: Get the P1 tokens.
     * @property P1_TOKENS
     * @private
     * @returns {string[]} The P1 tokens.
     */
    get P1_TOKENS() {
        return ['x', 'X']
    }

    /**
     * GETTER: Gets the Player 1 Token.
     * @property {string} P2 Player 2 Token
     * @private
     * @returns {string} The name of the property for turns.
     * @static, Class constants
     * @default 'O'
     */
    // noinspection FunctionNamingConventionJS
    static get P2() {
        return 'O'
    }

    /**
     * GETTER: Get the P2 tokens.
     * @property {Array} P2_TOKENS
     * @private
     * @returns {string[]} The P2 tokens.
     */
    get P2_TOKENS() {
        return ['o', 'O']
    }

    // ==========================     ALGORITHM VALUES                    =========================

    /**
     * GETTER: Returns the length of the search string used in regular expression.
     * @property {number} _REG_SEARCH_LENGTH
     * @private
     * @access private
     * @default {number} 3 Number of winning moves
     * @returns {number} The length of the search string.
     */
    static get REG_SEARCH_LENGTH() {
        return 3
    }

    /**
     * GETTER: Returns the regular expression flag used to perform a global search.
     * @property {string} _REG_SEARCH_FLAG
     * @private
     * @access private
     * @default {string} g: means regular expression will look for all instances rather than
     *     stopping at the 1st instance. e - ['g'] The mode to use for the regular expression. G is
     *     a global search.
     * @returns {string} The regular expression flag for global search.
     */
    static get REG_SEARCH_ALL() {
        return 'g'
    }

    /**
     * GETTER: Retrieves the REG_SEARCH_FILTER constant.
     * @function REG_SEARCH_FILTER
     * @private
     * @access private
     * @default {string} ''
     * @return {string} The REG_SEARCH_FILTER constant string.
     */
    static get REG_SEARCH_FILTER() {
        return ''
    }

    /**
     * GETTER: Returns an array of winning combinations on a Tic-Tac-Toe board.
     * The combinations are represented by strings of three positions on the board.
     * Each position is denoted by a number from 0 to 8, indicating the index of the position on
     * the board array. The winning combinations consist of three positions that form a winning
     * row, column, or diagonal on the board.
     * @property {Array} WIN_COMBINATIONS
     * @private
     * @return {Array} The array of winning combinations.
     * @static, Class constant
     */
    static get WIN_COMBINATIONS() {
        return [
            '012',
            '345',
            '678', // HorizontalWins
            '036',
            '147', // DiagonalWins
            '258',
            '048',
            '246',
        ]
    }

    /**
     * GETTER: Retrieves the value of the "_winSeq" property.
     *
     * @returns {array} The value of the "_winSeq" property.
     */
    get WIN_SEQUENCE() {
        return this._winSeq
    }

    // ==========================    INITIALIZERS                         =========================

    /**
     * GETTER: Returns the reset value for the cell.
     * @property {null} CELL_RESET
     * @private
     * @returns {null} The reset value for the cell.
     * @static, Class constant
     * @default null
     */
    static get CELL_RESET() {
        return null
    }

    /**
     * GETTER: Retrieves the value representing the turn reset.
     * @property {string} TURN_RESET
     * @private
     * @returns {string} The value representing the turn reset.
     * @static, Class constant
     */
    static get TURN_RESET() {
        return ''
    }

    /**
     * GETTER: Gets the name of the property for keeping track of turns:
     * i.e. the string/number of move sequences made by the player.
     * @property {string} X_TURNS_PROP
     * @private
     * @returns {string} The name of the property for X turns.
     * @static, Class constant
     * @default '_xTurns' - The name of this._xTurns
     * @called: _updateTurns | _updateTurnsAndGrid
     */
    // noinspection FunctionNamingConventionJS
    static get X_TURNS_PROP() {
        return '_xTurns'
    }

    /**
     * GETTER: Gets the name of the property for keeping track of turns:
     * i.e. the string/number of move sequences made by the player.
     * @property {string} O_TURNS_PROP
     * @private
     * @returns {string} The name of the property for O turns.
     * @static, Class constant
     * @default '_oTurns' - The name of this._oTurns
     * @called: _updateTurns _updateTurnsAndGrid
     */
    // noinspection FunctionNamingConventionJS
    static get O_TURNS_PROP() {
        return '_oTurns'
    }

    /**
     * GETTER: Returns the maximum (array/grid cell) length allowed for the grid
     * @property {number} MAX_LENGTH
     * @private
     * @returns {number} The maximum length allowed.
     * @static, Class constant
     * @default 9 - max size of a game of tic tac toe
     */
    // noinspection FunctionNamingConventionJS
    static get MAX_LENGTH() {
        return 9
    }
    /**
     * GETTER: Returns the initialisation value for turns.
     * @property {number} TURN_INIT
     * @private
     * @returns {number} The value for TURN_INIT.
     * @static, Class constant
     * @default 0 - Initialisation for turns.
     */
    // noinspection FunctionNamingConventionJS
    static get TURN_INIT() {
        return 0
    }

    // ============================= PROPERTY PUBLIC GETTERS ======================================

    /**
     * GETTER: Returns the current grid, as-is.
     * @property {*[]|null[]|array} GRID
     * @access public
     * @returns {*[]|null[]|array} The value for private _grid.
     */
    get GRID() {
        return this._grid
    }

    // noinspection FunctionWithInconsistentReturnsJS
    /**
     * SETTER: Sets / updates the current grid, as-is, with an shallow copy overwrite of primitives.
     * @property {*[]|null[]|array} GRID
     * @access public
     * @returns {*[]|null[]|array} The value for private _grid.
     */
    set GRID(updateGrid) {
        if (Array.isArray(updateGrid)) {
            // Assign this array to the _grid property
            this._grid = Array.from(updateGrid);
        } else if (typeof updateGrid === 'object' && updateGrid !== null) {
            // updateGrid is an object (not null), create a new grid
            this._grid = this.NEW_GRID;
        }
    }

    /**
     * INITIAL: Creates a new grid with the specified max, filled with the reset cell value.
     * @property {null[]|Array<null>} NEW_GRID
     * @access private: internal use only
     * @return {null[]|Array<null>} The new grid with the specified length, filled with the reset
     *     cell value.
     */
    get NEW_GRID() {
        // noinspection ChainedFunctionCallJS,NestedFunctionCallJS,AnonymousFunctionJS,JSUnusedLocalSymbols
        return Array.apply(null,
                           Array(9)).map(function (v,i) {return null})
        //return Array.apply(null, Array(9)).map(function (v,i) { return null})
        //return new Array(GameLogic.MAX_LENGTH).fill(GameLogic.CELL_RESET)
    }

    /**
     * INITIAL: Sets the tokens for the game.
     *
     * @param {string} char - The character to use as tokens.
     * @return {string[]}   - An array containing pairs of lower and upper case tokens.
     *                   Returns an empty array if the input character is not a string
     *                   or is equal to `GameLogic.P1` or `GameLogic.P2`.
     */
    _setTOKENS(char){
        if (typeof char === 'string' && char !== GameLogic.P1 && char !== GameLogic.P2) {
            return [char.toLowerCase(), char.toUpperCase()];
        }
        return ['🚧','🚧'];
    }

    /**
     * SETTER: Set a new grid for the object, for constructor(), and reset().
     * @property {*[]|null[]} NEW_GRID
     * @private
     * @access private: internal use only
     * @param {*[]|null[]} grid - The new grid to be set. Must be an array.
     */
    set NEW_GRID(grid) {
        this._grid = grid === undefined ? this.NEW_GRID : grid
    }


    /**
     * SETTER:Sets the value of IFDRAWN.
     * @property {boolean} IFDRAWN
     * @public
     * @access public
     * @default {boolean} false:
     *   - False on initialisation/reset, no draw.
     *   - True if end game is drawn/no winner.
     * @param {boolean} value - The new value for IFDRAWN.
     * @return {void} - The new value for IFDRAWN.
     */
    set IFDRAWN(value) {
        this._draw = typeof value === 'boolean' ? value : GameLogic.NO_DRAW
    }

    /**
     * GETTER | STATE: Returns the default value for WIN state or winning Player for instance
     * variable _won.
     * @property {boolean|string} IFWON
     * @access public
     * @returns {boolean|string} The value for private instance member _won.
     * @default {boolean} false
     *   - False on initialisation/reset.
     *   - GameLogic.P1 | GameLogic.P2 if game is won. Winning Player's Token
     */
    get IFWON() {
        if (typeof this._won === 'string') {
            return this._won === Game.Logic.P1 ? GameLogic.P1 : GameLogic.P2
        }
        return this._won === GameLogic.IN_PLAY ? GameLogic.IN_PLAY : this._won
    }

    /**
     * SETTER: STATE: Sets the value for _won.
     * @property {boolean, string} IFWON
     * @access public
     * @param {boolean, string} value The value to set for _won.
     * @default {boolean} false
     *   - False on initialisation/reset.
     *   - GameLogic.P1 | GameLogic.P2 if game is won. Winning Player's Token
     * @return {void}
     */
    set IFWON(value) {
        const players = [GameLogic.P1, GameLogic.P2];
        // noinspection AnonymousFunctionJS,NestedFunctionCallJS
        const isPlayerOneOrTwo =
            typeof value === 'string' &&
            players.some(player => value.toUpperCase() === player.toUpperCase());

        if (isPlayerOneOrTwo) {
            this._won = value;
        } else if (typeof value === 'boolean') {
            this._won = value;
        }
        else { // Fail-over to false if value is not string or boolean
            this._won = GameLogic.IN_PLAY;
        }
    }

    GAMESTATE (state) {
        switch (state) {
            case 0:
                this._turns = 0
                break
            case 1:
                break
            case 2:
                break
            case 3:
                break
            case 4:
                break
            case 5:
                break
            case 6:
                break
            case 7:
                this._turns = 0
                break
            default:
                break
        }
    }

    // ====================================== TURNS ==============================================================

    /**
     * GETTER: Returns the (initialisation/current value for turns.
     * @property {number} TURNS
     * @access public
     * @returns {number} The value for current private _turns.
     */
    get TURNS() {
        return this._turns
    }

    /**
     * GET | LIMIT: Returns the maximum turn value.
     * @property {number} MAX_TURNS
     * @access private
     * @private
     * @return {number} The maximum turn value.
     */
    get MAX_TURN() {
        return this._grid.length
    }
    // ====================================== UI: CELL VALUES & ACCESSORS ========================================

    /**
     * GETTER: Retrieves the value of the current cell.
     * @property {string} CELL
     * @access public
     * @returns {string} The value of the current cell.
     */
    get CELL() {
        return this._currentcell
    }

    /**
     * HELPER: Checks if the given index is a valid cell in the grid.
     * @function _validCell accessor function
     * @private
     * @param {number} index - The index to check.
     * @return {boolean} - Returns true if the index is a valid type, and a valid cell, false
     *     otherwise.
     * @called: currentCELL
     */
    _validCell(index) {
        return typeof index === 'number' && ( index <= this._grid.length && index >= 0)
    }

    /**
     * ACCESSOR: Retrieves the value of a cell in the grid based on a given index.
     * @function currentCELL accessor function
     * @param {number} index - The index of the cell to retrieve.
     * @return {string|null} - The value of the cell at the specified index.
     */

    currentCELL(index) {
        if (this._validCell(index)){
            this._currentcell = this._grid[index];
            return this._currentcell;
        }
        return null;
    }

    /**
     * ACCESSOR: Sets the value of instance property cell in the grid based on a given index, &
     * updates the current grid at index.
     * @property {number} setCELL - The grid's index of the cell to set.
     * @access public
     * @param {number} index - The index of the cell to set.
     * @param {string} value - The value to set the cell to.
     * @return {void}
     */

    setCELL(index, value) {
        // Only update the current cell if the value is a string
        if (value !== undefined && typeof value === 'string' && typeof index === 'number') {
            this._currentcell = value
            this._grid[index] = this._currentcell
        }
    }

    /**
     * ACCESSOR: Gets the value of instance property cell in the grid based on a given index, &
     * updates the current grid at index.
     * @property {number} getCELL - The grid's index of the cell to set.
     * @access public
     * @param {number} index - The index of the cell to set.
     * @param {string} value - The value to set the cell to.
     * @return {string} the current cell value for UI show
     */

    getCELL(index, value = '') {
        // Only update the current cell if the value is a string
        if (value !== '' && typeof value === 'string' && typeof index === 'number') {
            this._currentcell = value
            this._grid[index] = this._currentcell
            return this._currentcell
        }
        return this._currentcell
    }

    // ======================================= ========================== =======================================
    // ======================================= PRIVATE FUNCTIONS: HELPERS =======================================
    // ======================================= ========================== =======================================

    /**
     * Logs a message to the console based on the specified debug and verbosity level.
     * @design LOGGING TO CONSOLE IS AN INTENTIONAL DESIGN FEATURE THAT IS CONTROLLED BY THE DEBUG
     *     MODE & VERBOSITY FLAG.
     * @function _console logger according to debug mode and verbosity level
     * @private
     * @access private
     * @param {string} message - The message to be logged.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @param {...any} [args] - Additional arguments to be passed to the console methods.
     * @return {void}
     * @desc It takes in four parameters: message, debug, level, and args.
     * It checks if debug is enabled, and if it is, it outputs the message to the console based on
     *     the verbosity level.
     * Verbosity level 0: Clears the console (default)
     * Verbosity level 1 [LOGS]: Logs the message to the console.
     * Verbosity level 2 [DEBUG]: Logs the message to the console using console.debug.
     * Verbosity level 3 [TRACE]: Logs the message to the console using console.trace.
     * Verbosity level 4 [WARN]: Logs the message to the console using console.warn.
     * Verbosity level 5 [ERROR]: Logs the message to the console using console.error.
     * Verbosity level 6 [OBJECT]: Logs the message to the console using console.dir.
     */
    _console(
        message,
        debug = this.DEVMODE,
        level = this.LOGLEVEL,
        ...args
    ) {
        // check if debug is enabled
        if (!debug) {
            return
        }

        // output messages based on verbosity level
        switch (level) {
            case 1:
                console.log(message, ...args)
                break
            case 2:
                console.debug(message, ...args)
                break
            case 3:
                console.trace(message, ...args)
                break
            case 4:
                console.warn(message, ...args)
                break
            case 5:
                console.error(message, ...args)
                break
            case 6:
                console.info(message, ...args)
                console.dir(...args)
                break
            default:
            // do nothing for default. If true, and level is not used, clears the console.
            // if (debug === true && level === 0) {
            //     console.clear()
            // }
        }
    }

    // ========================== =========================== ===================================
    // ========================== PRIVATE FUNCTIONS: SELECT() ===================================
    // ========================== =========================== ===================================

    /**
     * SELECT(...) HELPER: Returns a random character from the given character array.
     * @design
     *  This randomizer allows variation of the game token sizes (lower case/upper case).
     *  It mimics variation in hand strokes when hand drawing the game tokens.
     * @function _getRandomCharacter
     * @private
     * @access private
     * @internal @function _getRandomIndex
     * @param {Array} characterArray - The array containing characters.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @return {string} - A random character from the character array.
     */

    // noinspection FunctionNamingConventionJS
    _getRandomCharacter(
        characterArray,
        debug = false,
        level = this.LOGLEVEL
    ) {
        // noinspection LocalVariableNamingConventionJS,NestedFunctionCallJS
        /** An inner function/closure for generating a random index. Improve maintainability/readability.
         * @function {arrow function} _getRandomIndex
         * @param {number} arrayLength
         * @return {number} - A random index.
         */
        const _getRandomIndex = arrayLength => Math.floor(Math.random() * arrayLength)
        const index = _getRandomIndex(characterArray.length)
        if (debug) {
            console.log('getRandomCharacter: %s, %s, Tokens %s, Index %s, TokenChar %s ',
                        debug,
                        level,
                        characterArray,
                        index,
                        characterArray[index]
            )
        }
        return characterArray[index]
    }

    /**
     * SELECT(...) HELPER: Checks if the given move is invalid.
     * @design
     *   - Has an inner function to DRY check the multiple invalid states:
     *      1) If Won, or 2) If Cell is not empty, or 3) IF turn COUNT is greater than or equal to
     *     playable MAX_TURNs.
     *       - Use as a flag to check for type of moves (invalid or valid) and to return the
     *     current state of the game.
     *   - Logs to console the function parameters and return values for debugging purposes when
     *     debug mode is enabled.
     * @function _isInvalidMove
     * @private
     * @access private
     * @internal @function __hasInvalidState
     * @param {number} index - The index of the move.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @param {string} [caller='_isInvalidMove'] - Optional method caller for logging
     * @returns {boolean} - Returns true if the move is invalid, false otherwise.
     * @description Checks if a given move is invalid. The function takes an index as an argument
     *     and returns true if the move is invalid, and false otherwise. The move is considered
     *     invalid if any of the following conditions are met: the game is already won, the grid at
     *     the given index is not null, or the number of turns is greater than or equal to the
     *     maximum index.
     * @complexity 6%
     */
    _isInvalidMove(
        index,
        debug = true,
        level = this.LOGLEVEL,
        caller = `_isInValidMove`
    ) {
        if (debug) {
            //console.log(`incrementTurn: Called by %s`, caller)
            this.logger('4.2.1', '⛔', caller, this.writer,'log', false, `Enter ${index}`)
        }
        /**  Inner function declaration (restrict for scope)
         * Determines if the current state is invalid.
         * @function _hasInvalidState
         * @param {number} index - The index of the cell.
         * @param {string|null} cell - The current cell's content at the given index.
         * @param {number} max_turn - The maximum number of turns allowed.
         * @param {null} empty - Default value of an empty cell
         * @param {string} [caller='_hasInvalidState'] - Optional method caller for logging
         * @return {boolean} - True if the current state is invalid, false otherwise.
         */
        const __hasInvalidState = (index, cell, max_turn,
                                   empty = null, caller= '_hasInvalidState') => {
            if (debug) {
                this.logger('4.2.2.1', '🫸🛑', 'CHECK Invalid State', this.writer,'log',false,
                            `Index: ${index}, Cell: ${cell}, Max ${max_turn}`, this)
            }
            return (
                this.IFWON || this.TURNS >= max_turn
            ) // More than max turns, truthy for false
        }
        // Checks the current state for invalidity from inner function
        const ifInvalidMove = __hasInvalidState(index, this.CELL,
                                                this.MAX_TURN)
        // Log to Function Params to Console for debugging purposes when debug mode is enabled.
        if (debug) {
            this.logger('4.2.2.2', '🫸🛑', 'SET Invalid State', this.writer,'log', false,
                        `Index: ${index}, IFWON: ${this.IFWON},<Max ${this.MAX_TURN} : ${this.TURNS}, Invalid Flag ${ifInvalidMove}\n`,
                        this)
        }
        return ifInvalidMove // return Invalid False||True: If True: Invalid move
    }

    /**
     * SELECT(...) HELPER: Increments the value of the TURNS property by 1.
     * @function _incrementTurn
     * @private
     * @access private
     * @param firstplayer - The first player of the game, first turn maker
     * @param secondplayer - The second player of the game, the alternate
     * @param [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param [caller='_incrementTurn'] Option method caller for logging.
     * @return {number|*}
     * @complexity: 86%
     */
    _incrementTurn(firstplayer, secondplayer, debug = true, caller = '_incrementTurn') {
        if (debug)  {
            this.logger('4.4.1', '🏁', caller, this.writer,'info', false, `Turn Counter Enter`)
        }
        let currentturn = this._turns
        //console.log('B4 Increment Turn: %s', currentturn)
        if  (this._turns === 0 && this._currentPlayer === firstplayer) {
            this._turns = 0; // increment turns here
            this._turns += 1
            this._currentPlayer = firstplayer;
            let even = this._turns % 2 === 0;
            //
            if (debug)  {
                this.logger('4.4.1.A', '🏁 1ST TURN', caller, this.writer,'log', false,
                            `START: Turn %s, Cell %s, Player %s,  Even: %s`,
                            this._turns, this._currentcell, this._currentPlayer, even)

            }
            return this._turns
        } else if (currentturn > 0 && currentturn < 8) {
            this._turns += 1 // increment turns here
            let even = this._turns % 2 === 0;
            this._currentPlayer = even ? firstplayer : secondplayer;
            //
            if (debug)  {
                this.logger('4.4.1.B', '♻️ NEXT TURN', caller, this.writer,'log', false,
                            `NEXT: Turn %s, Cell %s, Player %s,  Even: %s`,
                            this._turns, this._currentcell, this._currentPlayer, even)}

            return this._turns
        } else if (currentturn === undefined) {
            this._turns = 1; // increment turns here
            //
            if (debug)  {
                this.logger('4.4.1.C', '⚠️ ERROR TURN', caller, this.writer,'error', false,
                            `STOP: Game Restarted: Error with turns`,
                            this._turns, this._currentcell, this._currentPlayer)
            }
            //this.reset()
            return this._turns
        }

    }

    /**
     * SELECT(...) HELPER: Determines if the turn is even and updates the turns and grid
     * accordingly.
     * @design:
     *  - Uses anonymous arrow functions to DRY the code over direct const assignments.
     *  - Improve maintainability/readability.
     *  - Uses Modulus 2 to determine if the turn is even.
     *  - Uses a ternary operator to assign the character and property to be used.
     *  - Calls the _updateTurnsAndGrid method to update the turns and grid based the character and
     *     turn properties.
     *  - Logs to console the function parameters and return values for debugging purposes when
     *     debug mode is enabled.
     * @function _isEvenTurn
     * @private
     * @access private
     * @internal @function _isTurnEven
     * @internal @function _chooseChar
     * @internal @function _chooseProp
     * @calls @function _updateTurnsAndGrid
     * @param {number} index - The index of the grid to be updated.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @return {void}
     * @desc determines if the turn is even and updates the turns and grid accordingly.
     * It takes an input parameter index which represents the index of the grid to be updated.
     * It calculates whether the turn is even by checking if the remainder of the division of
     *     `this._turns` by 2 is equal to 0. If the turn is even, it assigns certain values to
     *     variables char and prop.
     * @complexity 26%
     */
    _isEvenTurn(
        index,
        debug = false,
        level = this.LOGLEVEL,
        caller = '_isEvenTurn'
    ){
        if (debug)  {
            this.logger('4.4', '🏁', caller, this.writer,'info', false,
                        `_isEvenTurn: Enter | Current Turn: ${this._turns},
                            Current Player: ${this._currentPlayer}, Current Cell: ${this._currentcell}`)
        }

        // Determines if the turn is even or odd.
        /**
         * Determines if the current turn is even.
         * @function _isTurnEven - Determines if the current turn is even. using modulus 2
         * @param {string} method - The method name where this function is called.
         * @param {boolean} [debug=false] - Optional Flag to enable debug mode.
         * @returns {boolean|void} - `true` if the current turn is even, `false` otherwise.
         * @throws {function} Console error if `this._turns` is undefined.
         */
        const __isTurnEven = (debug = false, caller = '__isTurnEven') => {
            if (this._turns === undefined) {
                debug === true && console.error('Error: this._turns is undefined: %', this._turns)
                throw new Error('this._turns is undefined')
            } else {
                let evenOrOdd = this._turns % 2 === 0
                return evenOrOdd
            }
        }
        // Chooses the character to be used
        let evenOdd = __isTurnEven(debug)  // evenOdd the state of the turn/validMnve
        this._turnFlag = evenOdd
        if (typeof evenOdd === 'boolean') {

            const __selectPlayer = () => {
                // True: Even: 2nd Player || False: Odd: 1st Player
                return evenOdd ? GameLogic.P2 : GameLogic.P1;
            }

            const __chooseSequenceStore = () => {
                // True: Even: 2nd Player || False: Odd: 1st Player
                return evenOdd ? this._oTurns : this._xTurns;
            }

            const __chooseCharArray = () => {
                // True: Even: 2nd Player || False: Odd: 1st Player
                return evenOdd ? this._oChars : this._xChars;
            }

            // Selects the token property to be used
            const __selectProp = () => {
                return evenOdd ? GameLogic.O_TURNS_PROP : GameLogic.X_TURNS_PROP;
            }


            // Assign the selector value per each turn.
            let currentPlayer = __selectPlayer()
            let turnsSequence = __chooseSequenceStore() // select the per player store for click value/turn sequences
            //let charArray = __chooseCharArray() // select the per player store for click value/turn sequences
            let turnprop = __selectProp() // X Prop for odd or O Prop for even
            console.log('↪️🛞B4 updateTurnsAndGrid🐛: Current Turn %s, Sequence: %s, Prop: %s ', currentPlayer, turnsSequence, turnprop)
            // Update the turns and grid
            this._updateTurnsAndGrid(index, evenOdd, currentPlayer,
                                     turnsSequence, turnprop,
                                     debug, level)
            // Log to Function Return to Console for debugging purposes when debug mode is enabled.
            this._console('isEvenTurn:✅', debug, level,
                          turnsSequence, turnprop, index, this.CELL) // jshint ignore:line
        }
        let newTurn = this._incrementTurn('X', 'O', '_isEvenTurn')
    }


    // noinspection OverlyComplexFunctionJS
    /**
     * SELECT(...) HELPER:Update the current instance turn property, per current cell/token,
     *    with latest move/cell ref.
     * @function _updateTurn
     * @access private
     * @private
     * @param {number} selectCellRef - The index (ref) of the selected cell.
     * @param {string} currentClick - The click current value.
     * @param {string} currentCell - The cell current value.
     * @param {string} currentTurns - The current player record.
     * @param {string} activePlayer - The active Token (X or O) constant.
     * @param {string} turnProp - The current player record.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @param {string} [caller='_updateTurn'] - Optional method caller name for logging.
     * @return {string} - The updated player record.
     */

    _updateTurn(
        selectCellRef,
        currentClick,
        currentCell,
        currentTurns,
        activePlayer,
        turnProp,
        debug = this.DEVMODE,
        level = this.LOGLEVEL,
        caller = '_updateTurn'
    ) {
        console.log(`🛞🔎 ${caller} Current TURN: %s, Click, %s, Index: %s, Cell: %s, Active %s, TURN %s`, selectCellRef, currentClick, selectCellRef, currentCell, activePlayer, turnProp)
        //if (this[turnProp] === currentTurns) { console.log(`${caller} Played Turns: %s === %s`, this[turnProp], currentTurns)}
        let moveRef = (currentCell === activePlayer) ? selectCellRef : this.CLICK;
        console.log('🏁 B4 Turn %s, Sequence: %s', moveRef, this[turnProp] )
        if (typeof moveRef === 'number') {
            this[turnProp] = this[turnProp].concat(moveRef)
            console.log('👍👍Player\'s turns updated %s by moveRef %s: %s', this[turnProp], moveRef, selectCellRef)
        }
        console.log(`✅${caller}: Click ${selectCellRef}, Cell ${currentCell}, Active ${activePlayer}`, debug, level,
                    turnProp, this[turnProp])
        console.log(`⤴️⤴️${turnProp}: Updated Played Sequence ${this[turnProp]}` )
        return this[turnProp];
    }

    /**
     * SELECT(...) HELPER: Update the turns and grid at the specified index
     * with a random character from the characterArray.
     * @function _updateTurnsAndGrid
     * @private
     * @access private
     * @calls _getRandomCharacter
     * @calls _updateTurn
     * @param {number} index - The index of the grid to update.
     * @param {boolean} evenOrOdd - The even or odd flag to determine which player's turn it is.
     * @param {string} currentPlayer - The current player assigned to the turn.
     * @param {string} sequenceStore - The sequence store (previous moves/player) to update turn.
     * @param {string} turnProperty - The property to update the turns with.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @param {string} [caller='_updateTurnAndGrid'] - Optional caller method name for logging
     * @return {void}
     * @desc It takes in five key parameters: index, evenOrOdd, currentPlayer, sequenceStore,
     *      and turnProperty
     *      The turnProp dynamically switches between this.X_TURNS_PROP and this.O_TURNS_PROP.
     *      This class member stores the sequenceStore per each player.
     *      USED TO:
     *      It updates the grid array at the specified index with a random character from the
     *     characterArray and ... increments the value of the turnProperty by index.
     * @complexity 13%
     **/

    _updateTurnsAndGrid(
        index,
        evenOrOdd,
        currentPlayer,
        sequenceStore,
        turnProperty,
        debug = this.DEVMODE,
        level = this.LOGLEVEL,
        caller = '_updateTurnsAndGrid'
    ) {
        console.log(`${caller}: Enter`)
        // Set the current CELL (grid item) to a random character from the characterArray
        // noinspection NestedFunctionCallJS
        //this.setCELL(index, this._getRandomCharacter(characterArray));
        // Update the sequence of moves via appending the turnProperty by selected index
        //const _token = turnProperty === GameLogic.X_TURN_PROP ? GameLogic.P1 : GameLogic.P2;
        if (currentPlayer === this._currentPlayer) {
            const currentCell = this._grid[index]
            let currentClick = this.CLICK
            console.log(`🏁 ${caller}: B4 _updateTurn, Player %s, thisPlayer: %s, Cell, index: %s, grid: %s, click: %s, Turn: %s`,
                        currentPlayer, this._currentPlayer, index, currentCell, currentCell, turnProperty)

            const currentSequence = this._updateTurn(index,
                                                     currentClick,
                                                     currentCell,
                                                     sequenceStore,
                                                     currentPlayer,
                                                     turnProperty);

            // Update the corresponding turns property based on activeToken
            switch (currentPlayer) {
                case GameLogic.P1:
                    this._xTurns = currentSequence;
                    this._grid[index] = GameLogic.P1
                    console.log(`1️⃣✅P1: ${GameLogic.P1}: Played Sequence %s`, this._xTurns)
                    break;
                case GameLogic.P2:
                    this._oTurns = currentSequence;
                    this._grid[index] = GameLogic.P2
                    console.log(`✅2️⃣P2: ${GameLogic.P2}: Played Sequence %s`, this._oTurns)
                    break;
                default:
                // You can add some default behaviour here if needed.
            }
        }
        console.log(
            '⛳ updateTurnsAndGrid: ',
            debug,
            level,
            index,
            currentPlayer,
            turnProperty,
            this[turnProperty],
            this.CELL
        )
    }


    // ======================== ================================ ==================================
    // ========================    PUBLIC FUNCTIONS: SELECT()    ==================================
    // ======================== ================================ ==================================

    /**
     * Checks if a move is valid and returns the result.
     *
     * @access private
     * @private
     * @param {number} index - The index of the move.
     * @param {function} __isWins - Flag to enable/disable wins.
     * @param {boolean} debug - Flag to enable/disable debugging.
     * @param {number} level - The level of the game.
     * @param {string} caller - Optional caller method name for logging
     * @returns {object} - The result of the move. see this._result
     */
    _hasValidMove = (index, __isWins,
                     level,
                     debug = true,
                     caller = '_hasValidMove' ) => {
        (debug === true ) && this.logger('4.2.0.A', '🏁🟢', caller, this.writer, 'log', false,
                                         'Enter\n')
        if (this._isInvalidMove(index)) {
            // Invalid Moves: Try again. / Output to Console
            if (debug)  {
                this.logger('', '🛑', caller, this.writer, 'log', false,
                            'Cell ID: %s, isInvalid %s, Return: %s', index,
                            `✅ Invalid for ${this.CELL}`, `Return result: invalid obj` )
            }
            return this._result(this.CELL,
                                'STOP',
                                '🛑 Invalid Move',
                                false,
                                false,
                                1)
        } else {
            // Valid Move: Proceed to next turn or declare winner.
            // Update the turns and grid
            (debug === true ) && this.logger('4.2.0.B', '🏁🟢', caller, this.writer, 'log', false,
                                             'ELSE\n')
            let whoWins = __isWins(index)
            if (debug === true)  {
                this.logger('4.2.3', '🏁✅', caller, this.writer, 'log', false,
                            'Cell ID: %s Click: %s, VALID %s', index, `Current: ${this.CLICK}`,
                            `✅ Valid for ${this.CELL}`, whoWins )
            }
            this._isEvenTurn(index)
            // Check if the game has been won
            const isWinner = __isWins( index, debug, level)
            // Return the updated item from grid
            console.log(
                '✅ Valid Move: ✅: [%s, %s], TURN: %s, Selected: %s, Grid: %s, Winner: %s',
                debug,
                level,
                this._turns,
                this.CELL,
                isWinner.cell,
                isWinner.next || isWinner.winner
            )
            return isWinner //  Returns False or Draw or P1 or P2
        }
    }

    // noinspection OverlyComplexFunctionJS
    /**
     * API DATA: Returns a game result object, i.e. the state/data of the game per start/turn/end.
     * @function _gameResult
     * @access private
     * @private
     * @param {*} c - The cell value.
     * @param {*} n - The next value.
     * @param {string} msg - The game message.
     * @param {boolean} s - The game state. True if game is continuing.
     * @param {boolean} v - The validity of the game.
     * @param {*} o - The game outcome.
     * @param {*} [w=null] - The winner|draw of the game or none.
     * @return {Object} - The game result object.
     *   - cell: The current cell.
     *   - next: The next action/command to take after the move.
     *      - NextTurn
     *      - GameOver
     *   - message: A message describing the reason / ui feedback.
     *   - state: Indicates if the game is still ongoing (false) or if someone has won or drawn
     *     (true).
     *   - valid: Valid (1) v invalid move
     *   - outcome: The possible outcome(s) of the game
     *     - 0 - invalid move
     *     - 1 - start
     *     - 2 - valid/in play move.
     *     - 3 - draw/no winner
     *     - 4 - win/Player 1
     *     - 5 - win/Player 2
     *     - 6 - reset/initialised
     *   - winner: The winner of the game or null.
     */
    _result(c, n, msg, s, v, o, w = null) {
        // noinspection PointlessBooleanExpressionJS
        return {
            cell: c,
            next: n,
            message: msg,
            state: s, // Game is not won, continuing
            valid: v,
            outcome: o,
            winner: (w && w !== null) ? w : 'None'
        }
    }


    /**
     * SELECT(...) API: Selects a cell, bu index, on the game board.
     * @design:
     *   - Main interface method for the user interface and game board.
     *   - Uses an inner function to DRY the code over direct const assignments.
     *   - Inner function is used to determine who wins based on the given index, and returns the
     *     state of the game.
     *   - Logs to console the function parameters and return values for debugging purposes when
     *     debug mode is enabled.
     *   - 3 Game States (on return): Based on a current cell, next play, game state and game
     *     message.
     *     - Invalid Move: Try again
     *     - Next Play: Game in play
     *     - Winning State: P1 or P2 wins
     * @function select
     * @public
     * @access public
     * @internal @function __whoWins
     * @internal @function __havValidMove
     * @param {number} index - The index of the cell to be selected.
     * @param {object} [cellRef=null] - Optional reference to the cell object.
     * @param {number|null} [row=null] - Optional row ID to be set.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @param {string} [caller='select'] - Optional method caller name for logging.
     * @returns {object|void}:
     *   - cell: The current cell at the given index. (X or Y Token)
     *   - next: The next action to take after the move.
     *   - message: A message describing the reason for the invalid move.
     *   - state: Indicates if the game is still ongoing (false) or if someone has won (true).
     *   - outcome: The outcome of the move (0 - invalid move, 1 - valid move)
     * @desc  It logs the selected index, checks if the move is invalid, and returns the game token
     *     for X or Y.
     *   - If the move is invalid, it logs an error message and returns the current item from the
     *     grid. //
     *   - If the move is valid, it updates the turns and grid, checks if the game has been won,
     *     logs a success message,
     *   - and returns the updated item/token from the grid.
     * @complexity 86%
     * */
    // noinspection OverlyComplexFunctionJS
    select(
        index,
        cellRef = null,
        row = null,
        debug = false,
        level = this.LOGLEVEL,
        caller = 'Select:')
    {
        // Enabled only for developer mode
        if (debug) {
            console.info('Developer Mode | Logging Enabled\n')
            debug === true && this.logger('4.0', '❓🏁', caller, this.writer, 'log', false,
                                          `Cell:${index}, ${cellRef}, Row ${row}`)
            // Exits if dev or user inputs wrong data/type and logs warning to console directly
            if (typeof index !== 'number' || index) {
                debug === true && this.logger('4.0.B', '❓🏁', caller, this.writer, 'warn', false,
                                              `select API: invalid index`);
                return;
            }
            // Exits if dev or user inputs wrong data/type and logs warning to console directly
            if (typeof debug !== 'boolean' || typeof level !== 'number') {
                debug === true && this.logger('4.0.C', '❓🏁', caller, this.writer, 'warn', false,
                                              `select API: Invalid type: ${debug}, ${level}`);
                return;
            }
        }

        /**
         * Determines who wins based on the given index.
         * @design
         *  - Uses an inner function to DRY the code over direct const assignments.
         *  - Inner function simplifies the multiple end states of the valid move: 1) Game in play,
         *     2) Game won.
         *  - Returns: Current cell, next turn, game message v winner, game state and game outcome.
         *  - Logs to console the function parameters for debugging purposes when debug mode is
         *     enabled.
         *  - Calls _result for returning data to UI the current or end state values as {object}.
         * @private
         * @internal
         * @function _whoWins
         * @param {number} index - The index of the move being checked.
         * @param {boolean} debug - Indicates whether debug mode is enabled.
         * @param {number} level - The difficulty level of the game.
         * @param {string} [caller='_whoWins'] - Optional string to identify the caller of the
         *     method.
         * @returns {Object} - @calls see this._result
         * @complexity: 60%
         */
        const __whoWins = ( index,
                            debug, level,
                            caller = '__whoWins') =>
        {
            // Call checkWinner and assign result
            let cell = this._grid[index]
            const validmove = true // __whoWins is always valid
            const winCheck = this.checkWinner(false, 0,
                                              ' __whoWins > checkWinner = winCheck');

            debug === true && this.logger('4.6', '❓🏁', caller, this.writer, 'log', false,
                                          `Enter: Index${index} | Next/Win: ${winCheck}`);

            const ___processResult = (n, cell, action,
                                      message, nextOrEnd,
                                      outcome, valid, debug = false,
                                      caller=`___processResult: `,
                                      conculsion='' ) => {
                // End Game Result
                const result = this._result(cell, action, message,
                                            nextOrEnd, valid, outcome, conculsion);
                // Log the result object
                if (debug) {
                    const logText = `${message}: ✅🏁: Cell ID: %s Click: %s, ${action} %s`;
                    this.logger(`4.6.${n}.A`, '✅🏁', caller, this.writer, 'log', false,
                                `${logText}`, index, `Current: ${this.CLICK}`,
                                `✅ Valid OF Cell ${this.CELL}`, winCheck)
                    this.logger(`4.6.${n}.A.1: State`, '✅🏁', caller, this.writer, 'table', true,
                                this)
                    this.logger(`4.6.${n}.A.2: Return`, '✅🏁', caller, this.writer, 'table', true,
                                result)
                }
                return result;
            };

            // on every valid move, check fgr winner or draw (draw 🚧 @todo implement draw on check
            if (winCheck === GameLogic.IN_PLAY) { // False, default state for game
                return ___processResult(1, cell, 'Next-Turn',
                                        '♻️Game in Play', false,
                                        2,validmove,  debug,
                                        `Result: Next` )
            }
            else if (winCheck === GameLogic.HAS_DRAW) {
                // Draw Move/Outcome
                return ___processResult(2,cell, 'Draw-End',
                                        '🚧 Draw 🚧', true,
                                        3,validmove,  debug,
                                        `Result: Draw`)

            } else {
                // Winning Move/Selection
                // Returns the game result for UI state object/UI Data
                return  ___processResult(3,cell, 'Win-End',
                                         winmsg, true,
                                         outcome,validmove,  debug,
                                         `Result: Win`, wincheck)
            }
        }

        // noinspection NestedFunctionCallJS
        return Alpine.reactive(this._hasValidMove(index, __whoWins,
                                                  debug, level));
        // Check if move is / has Valid Move, and if value move, return the updated token from grid
        //return this._hasValidMove(index, __whoWins,debug, level )
    }

    // A helper method to manually tell Alpine.js to update the UI
    updateUI(property) {
        // noinspection AnonymousFunctionJS
        Alpine.nextTick(() => {
            // add the operations you want to perform after the DOM update here
            console.log(`Signature of this log guarantees that the DOM has
            been updated with _click value of ${property}`);
        });
    }

    // ======================= ================================ ==================================
    // ======================= PRIVATE FUNCTIONS: CHECKWINNER() ==================================
    // ======================= ================================ ==================================

    /**
     * CHECKWINNER(...) HELPER: Checks whether the sequence of turns is a winner.
     * @design
     *   - Uses default/optional parameter values for function variable defaults.
     *   - Uses RegExp to check for a winning sequence and search sequences.
     *   - G mode global search for all instances rather than stopping at the 1st instance.
     *   - Filter for testing for empty characters in the turns string that are not present in the
     *     sequence string.
     *   - Returns true if the filtered string contains a sequence of three consecutive characters
     *     that matches the sequence string, and false otherwise.
     * @function _checkSequenceWin
     * @private
     * @access private
     * @param {string} streak - The current sequence streak of turns.
     * @param {string} sequence - The sequence of turns to check.
     * // Uses default/optional parameter values for function variable defaults.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @returns {boolean}
     * @desc It takes in two parameters: turns and sequence.  Inside the function, it creates a
     *     regular expression using the sequence parameter. This regular expression matches any
     *     three characters in the sequence string. Then, it uses the created regular expression to
     *     filter out any characters in the turns string that are not present in the sequence
     *     string. The filtered string is stored in the filteredTurns variable. Finally, the
     *     function returns true if the filtered string contains a sequence of three consecutive
     *     characters that match the sequence string, and false otherwise.
     * @credit Scott Window for use of RegExp constructor, regex pattern and RegExp.test() methods.
     * */
    _checkSequenceWin(streak, sequence,
                      debug = this.DEVMODE, level = this.LOGLEVEL)
    {
        // Extract the sequence of turns that match the sequence string
        const sequenceRegExp =
            new RegExp(`[${sequence}]{${GameLogic.REG_SEARCH_LENGTH}]`)
        // Search for any empty characters in the turns string
        // that are not present in the sequence string
        const searchRegExp =
            new RegExp(`[^${sequence}]+`, GameLogic.REG_SEARCH_ALL)
        // replaces the characters found in the streak string that match the searchRegExp pattern.
        // Filters out any characters in the streak string that are not in the sequence string.
        const filteredTurns =
            streak.replace(searchRegExp, GameLogic.REG_SEARCH_FILTER)
        // Logs to the console the algorithm/regex for
        // inspecting the WIN_COMBINATION individual sequence.
        this.logger('5.0.1.A', '⛔', caller, this.writer, 'log', group,
                    `checkSequenceWin: ✅, streak: ${streak}, sequence: ${sequence},
                     Filtered by ${filteredTurns}`)
        // Returns true if the filtered string contains a sequence of three consecutive characters
        return sequenceRegExp.test(filteredTurns)
    }

    /**
     * Game STATE|API: Checks if the specified player is a valid player for checking end game
     * state.
     * @function _declareWinner
     * @access private
     * @private
     * @param {string}  isValidPlayer - The player to be checked. Possible values are 'P1' or 'P2'.
     * @param {boolean} [group=false] Show/hide collapsable groups in console
     * @param {string} [caller='_declareWinner'] - The name of the caller function.
     * @param {boolean} [debug=true] - Optional Flag to enable debug mode.
     * @return {string|boolean|undefined} - The valid player value if the specified player is valid ('P1'
     *     or 'P2'), otherwise undefined.
     */
    _declareWinner(isValidPlayer, group = false,
                   caller = '_declareWinner', debug = true){
        if (typeof isValidPlayer === 'string') {  // i.e. {string}: P1 || P2 (not commented out code)
            if (isValidPlayer === GameLogic.P1 || isValidPlayer === GameLogic.P2) {
                (debug === true) && this.logger('5.2.1', '👨🏼🏁✅', caller, this.writer, 'log', group,
                                                `Declare Winner: ${isValidPlayer}`)
                return isValidPlayer
            }// GameLogic.P1 || GameLogic.P2
            else {
                (debug === true) && this.logger('5.2.2', '🟰🏁✅', caller, this.writer, 'log', group,
                                                `Drawn Game: ${isValidPlayer}`)
                return GameLogic.HAS_DRAW
            }  // if ValidPlayer is ANY OTHER STRING
        } else if (typeof isValidPlayer === 'boolean' && isValidPlayer === GameLogic.IN_PLAY ) {
            (debug === true) && this.logger('5.2.3', '♻️🔁✅', caller, this.writer, 'log', group,
                                            `Next Turn: ${isValidPlayer}`)
            return GameLogic.IN_PLAY
            // i.e. {boolean}: IN_PLAY: false
        } else {
            // Log an error to console in debug mode
            (debug === true) && this.logger('5.2.4', '⚠️', caller, this.writer, 'error', group,
                                            `Illegal Type : ${isValidPlayer}`)
        }
    }

    //
    /**
     * CHECKWINNER(...) HELPER: Checks if any player wins based on the given turns and sequence.
     * @function __checkOutcome
     * @param {string[]} currentMoves - The array of played turns per player/{_x|_o}Turn.
     * @param {string[]} currentPlayers - The array of Player Token/Players.
     * @param {string} sequence - The winning sequence to check against.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @param {string} [caller='_checkOutcome'] - Optional string to identify the caller of method
     * @param group
     * @returns {boolean|string} [GameLogic.IN_PLAY || GameLogic.P1 || GameLogic.P2 ]
     *   - Returns the winning player's string token [GameLogic.P1 || GameLogic.P2]
     *   - Returns the draw string token [GameLogic.DRAWN]
     *   - Returns GameLogic.IN_PLAY
     */

    // noinspection FunctionWithInconsistentReturnsJS
    _checkOutcome (currentMoves, currentPlayers, sequence,
                   debug = false, level = this.LOGLEVEL,
                   caller = '_checkOutcome', group = false,)
    {
        // 5.1.1
        const __logOutcome = (step, emoji, message, possible) => {
            (debug === true) && this.logger(`${step}`, emoji, `${caller}:LOG+Declare`, this.writer,
                                            'log', group, message, this.IFWON, this.IFDRAWN, this);
            return this._declareWinner(possible);
        };
        // 5.1.2
        const P1 = 0; // 1st in Array: 1st player
        const P2 = 1; // 2nd in Array: 2nd player
        const totalTurns = currentMoves[P1].length + currentMoves[P2].length;
        // Loops over current moves, refs the who, then checks if they have win sequence,
        // ELSE ASSUMES _checkSeqquenceWin === false for following and that only checks
        //      outcome for on turns possible
        // 5.1.3
        let outcome = GameLogic.IN_PLAY // Default before any end state
        for (let play = 0; play < currentMoves.length; play++) {
            // 5.1.3 => 5.2 : true
            if ( this._checkSequenceWin(currentMoves[play], sequence) ) {
                //5.1.3.1.A assumes win sequence for current player
                let winner = currentPlayers[play] // Single call to array: check on each
                let played = currentMoves[play]   // Single call to array: check on each
                outcome = __logOutcome('5.1.3.1.A', '🏁✅',
                                      `For ${winner}: Play Moves${played} v ${sequence}`,
                                      winner);
                // outcome = this._declareWinner(currentPlayers[play]); @todo REMOVE CODE
            }
            // 5.1.3.2 => 5.2 : false
            else if ( !this._checkSequenceWin(currentMoves[play], sequence) ) {
                // Assumes no win sequence and that this is for === MAX turns
                if (totalTurns >= GameLogic.MAX_TURN) {
                    //5.1.3.2.A (<= 5.1.1)
                    outcome = __logOutcome('5.1.3.2.A', '🏁🟰',
                                           `Game Drawn after maximum turns reached`,
                                           this.IFDRAWN);
                    // outcome = this._declareWinner(this.IFDRAWN); @todo REMOVE CODE
                }
                // Assumes no win sequence and that this is for NEXT turn
                else if (totalTurns < GameLogic.MAX_TURN) {
                    //5.1.3.2.B (<= 5.1.1) Not Outcome before MAX turns
                    outcome = __logOutcome('5.1.3.2.B', '♻️🔁',
                                         `Next Turn before maximum turns reached`, this.IFWON);
                    //outcome = this._declareWinner(this.IFWON); @todo REMOVE CODE
                }
            }
        }
        return outcome
    }

    // =========================================== ================================ ===============
    // ===========================================  PUBLIC FUNCTION: CHECKWINNER()  ===============
    // =========================================== ================================ ===============

    /**
     * CHECKWINNER(...): Checks if the sequence of turns, assigns a winner, AND end state flag:
     * False, Draw, P1, P2.
     * @design
     *   - Loops over the list of winning sequences and calls the _checkSequenceWin method
     *   - Loops over winning combinations to check if either player has won.
     *   - For each xTurn/oTurn, it calls the _checkSequenceWin method to check if the sequence of
     *     turns is a winner.
     *   - If Player 1 has won, the won variable is set to GameLogic.P1 (indicating Player 1's
     *     victory).
     *   - If Player 2 has won, the won variable is set to GameLogic.P2 (indicating Player 2's
     *     victory).
     *   - The method returns the value of the won variable, indicating the winner of the game or
     *     default value: false/
     *   - Logs to the console the algorithm/regex for inspecting the WIN_COMBINATION individual
     *     sequence.
     * @function checkWinner
     * @public
     * @access public
     * @internal @function: __checkPlayerWin
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @param {boolean} [group=false] Show/hide collapsable groups in console
     * @param {string} [caller='checkWinner'] - Optional string to identify the caller of the
     *     method.
     * @returns {boolean|string|void} Returns false or the player string: P1, P2 (as truthy
     *     values).
     * @desc checks for a winner in a game. It iterates over a list of winning sequences and calls
     *     the
     * _checkSequenceWin method to check if either player has won.
     * If Player 1 has won, the won variable is set to GameLogic.P1 (indicating Player 1's
     *     victory).
     * If Player 2 has won, the won variable is set to GameLogic.P2 (indicating Player 2's
     *     victory).
     * The method returns the value of the won variable, indicating the winner of the game.
     * @complexity 53%
     * */
    // HAPPY ✅
    checkWinner(debug = false,
                level = this.LOGLEVEL,
                group = false,
                caller = 'checkWinner API: ' )
    {
        // 5.0.1  a) Manages the (end) game state & b) set the class properties to the propriate, for each WIN CHECK
        // Enabled only for developer mode
        if (debug) {
            this.logger('5.0.1', '🏁🏁', caller, this.writer, 'info', group, `Developer Enabled\n `)
            // Exits function if parameters are not valid types for debug and level,
            // even with optional values
            if (typeof debug !== 'boolean' || typeof level !== 'number') {
                this.logger('5.0.1.A', '⛔', caller, this.writer, 'error', group,
                            `checkWinner API: Invalid type: debug, level`);
                return;
            }
        }

        let moves = [this._xTurns, this._oTurns]  // Stores of the current played moves as string sequnece
        let players = [GameLogic.P1, GameLogic.P2]; // Possible players

        // 5.0.2 Loop over the list of winning sequences and check if either player has won
        for (const sequence of GameLogic.WIN_COMBINATIONS) {
            // 5.1 _checkPlayerWin
            let outcome = this._checkOutcome(moves, players, sequence);
            // If a player has won, return who
            if (outcome === (GameLogic.P1 || GameLogic.P2)) {
                this.IFWON = outcome;
                this.IFDRAWN = GameLogic.NO_DRAW;
                this.logger('5.0.2.A', '🔁❓', caller, this.writer, 'info', group,
                            `checkWinner: ✅: Game WON: ${this.IFWON}, Winnning Sequence ${sequence}`,
                            this.IFWON, this.IFDRAWN, this );
                return outcome;
            }
            /// If Drawn return drawn outcome
            if (outcome === GameLogic.HAS_DRAW ) {
                this.IFWON = outcome;
                this.IFDRAWN = outcome;
                this.logger('5.0.2.B', '🔁❓', caller, this.writer, 'info', group,
                            `checkWinner: ✅: Game Drawn: ${this.IFWON}, Last Sequence ${sequence}`,
                            this.IFWON, this.IFDRAWN, this );
                return outcome;
            }
            // Next Turn
            if (outcome === GameLogic.IN_PLAY) {
                // If no player has won yet i.e. (playerWin ==== false)
                this.IFWON = GameLogic.IN_PLAY;
                this.IFDRAWN = GameLogic.NO_DRAW;
                this.logger('5.0.2.C', '🔁❓', caller, this.writer, 'info', group,
                            `checkWinner: ✅: Game In Play: ${this.IFWON}, Current Sequence ${sequence}`,
                            this.IFWON, this.IFDRAWN, this );
                return outcome;
            }
        }
    }

    // ======================== ================================ ==================================
    // ========================   PUBLIC FUNCTIONS: RESET()      ==================================
    // ======================== ================================ ==================================

    /**
     * INITIAlISER: Reset the game state to its initial values using Class Constants (properties).
     * @design
     *   - Reset the game state to its initial values using Class Constants (properties).
     *   - Uses Class contains to reset the game state for the current instance.
     *   - Logs to the console to validate the game state on reset
     * @function reset
     * @public
     * @access public
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {number} [level=this.LOGLEVEL] - Optional level of logging to console.
     * @param {boolean} [group=false] Show/hide collapsable groups in console
     * @param {string} [caller='reset'] - Optional string to identify the caller of the
     *     method.
     * @return {void}
     * @desc that resets the game state to its initial values.
     * - Resets turns to a predefined value
     * - Reset won to false.
     * - Reset grid to an empty array.
     * - Reset _xTurns and _oTurns to empty strings.
     * */
    reset(debug = this.DEVMODE, level = this.LOGLEVEL,
          group = false, caller='reset') {
        // Enabled only for developer mode
        if (debug) {
            console.info('Developer Enabled\n')
            if (typeof debug !== 'boolean' || typeof level !== 'number') {
                this.logger('6.0', '🏁', caller, this.writer,'info', group,
                            `reset API: Invalid type: debug, level`)
                return
            }
        }

        //this._grid = GameLogic.NEW_GRID // Reset grid to an array of nulls
        // noinspection NestedFunctionCallJS,ChainedFunctionCallJS,AnonymousFunctionJS,JSUnusedLocalSymbols
        // this._grid = Array.apply(this.empty,
        //                          Array(this.MAX_LENGTH)).map(function (v,i) {return null})
        this._click = null;
        this._currentcell = null
        this._currentPlayer = 'X'
        // noinspection AnonymousFunctionJS,NestedFunctionCallJS
        this._grid = Array.apply(null,Array(9))
        .map(function (v,i) {return null})
        this._draw = false// reset draw state to false
        this._won = false // reset game state to false
        this._turns = 0  // reset turn count
        this._xTurns = '' // reset move sequences for xTurns
        this._oTurns = '' // reset move sequences for oTurns
        // Logs to the console for the instance  variables on reset class instance.
        this.logger('6.0.1', '🛟', caller, this.writer, 'info', group, `Reset:✅`, this)
        this.logger('6.0.2', '🛟', caller, this.writer, 'table', true, `Reset:Data🗄️`, this)
    }
}
