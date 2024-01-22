// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 6 */
// noinspection JSUnusedLocalSymbols,ChainedFunctionCallJS,AssignmentToFunctionParameterJS

// noinspection GrazieInspection

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
     */
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

    /**
     * @property this._outcome values: 0-7
     * @constants for game's initial, final and transitory states
     * @see this._outcome
      **/

    /** @constant {number} START **/
    static START = 0
    /** @constant {number} INVALID **/
    static INVALID = 1
    /** @constant {number} NEXT **/
    static NEXT = 2
    /** @constant {number} DRAW **/
    static DRAW = 3
    /** @constant {number} PLAYER1 Win state for Player 1  **/
    static PLAYER1 = 4
    /** @constant {number}  PLAYER1  Win state for Player 2 **/
    static PLAYER2 = 5
    /** @constant {number} END **/
    static END = 6
    /** @constant {number} RESET  State check if reset game has happened/game initialised.   **/
    static RESET = 7
    /** @constant {number} MAX Length/size of game's grid **/
    MAX = 9
    /** @constant {boolean} GameLogic.NO_DRAW **/
    static NO_DRAW = false
    /** @constant {boolean} GameLogic.HAS_DRAW **/
    static HAS_DRAW = true
    /** @constant {boolean} GameLogic.IN_PLAY **/
    static IN_PLAY = false
    /** @constant {string} GameLogic.WHENDRAWN **/
    static WHENDRAWN = 'drawn'


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

    constructor(logger = null, debug = false) {
        // Enable Developer Mode for debugging
        /** @type {boolean} class optional/default in functions for debugging **/ //@todo decide
        this.DEBUG =  debug
        /** @type {function} External Logger: GameConsole Function:
         *  @see logging.js **/
        this.logger = logger
        /** @type {string} @logger mode: Local or Global@ param to this.logger **/
        this.writer = 'local'
        /** @type {number} **/ //@todo decide
        this._start = GameLogic.START
        /** @type {null} */ //@todo decide
        this.empty = GameLogic._EMPTYCELL
        /** @type {number|null} @alias: Index/Cell Nos that is currently clicked. **/
        this._click = GameLogic._INITIALISE;
        /** @type {string} Tracks/Swaps Players: Default: 1st Player. **/
        this._currentPlayer = GameLogic.P1
        /** @type {number} Turn Counter: GameLogic.START (0) -> GameLogic.MAX (9) */
        this._turns = GameLogic.START
        /** @type {boolean} True: Even: Start: Player 1. False: Odd: Player 2  */
        this._turnFlag = true
        /** @type {boolean} True: Invalid Move. False: Reset Invalid, does not mean valid  */
        this._invalid = false
        /** @type {null|string} The active move/cell value */
        this._currentcell = GameLogic._EMPTYCELL
        /** @type {number} Constant: Size of grid */
        this._length = GameLogic.MAX
        // noinspection NestedFunctionCallJS,AnonymousFunctionJS
        /** @type {*[]|null[]|string[]} */
        this._grid = Array.apply(null,Array(9))
                            .map(function (v,i) {return null})
        /** @type {boolean|string} Default: false, else GameLogic.WHENDRAWN */
        this._draw = GameLogic.NO_DRAW
        /** @type {boolean|string} Default is False, else Win State (X/P1 or O/P2)*/
        this._won = GameLogic.IN_PLAY
        /** @type {number} GameLogic State by numbers 0-7. Default is 0*/
        this._outcome = GameLogic.START
        /** @type {string[]} Constant: Array of win combinations */
        this._winSeq = GameLogic.WIN_COMBINATIONS
        /** @type {string[]} Constant: Array of random Tokens */
        this._xChars = ['x','X']
        this._xTokens = this._setTOKENS('X') //@todo decide
        /** @type {string[]} Constant: Array of random Tokens */
        this._oChars = ['o','O']
        this._oTokens = this._setTOKENS('0') //@todo decide
        /** @type {string} private stores  sequence X's moves played */
        this._xTurns = GameLogic.TURN_RESET // Set initial class constants
        /** /** @type {string} private stores  sequence O's moves played */
        this._oTurns = GameLogic.TURN_RESET // Set initial class constants
    }

    /**
     * GETTER: Retrieves the value of the _click property.
     * @property CLICK
     * @access public
     * @returns {number} The value of the _click property.
     * @throws {Error} If the value for CLICK is not a number.
     */
    get CLICK() {
        return (typeof this._click === 'number') ? this._click :
                console.error('Check your click type');
    }

    /**
     * SETTER: Set the user input, index/cell-id-{i} for CLICK property.
     * @property CLICK
     * @access public
     * @param {number} c - The new value for the CLICK property.
     * @throws {Error} If the provided value for CLICK is not a number.
     */
    set CLICK(c) {
        this._click = (typeof c === 'number') ? c :
            console.error('Check your click Index type');
    }

    /**
     * GETTER: Retrieves the value of the TURN SWITCH flag.
     * @property SWITCH
     * @access public
     * @return {boolean} The value of the TURN SWITCH flag.
     * @throws {Error} Throws an error if the TURN SWITCH flag is not of boolean type.
     */
    get SWITCH() {
        return (typeof this._turnFlag === 'boolean') ? this._turnFlag :
            console.error('Check your turn SWITCH flag type');
    }

    /**
     * SETTER: Set the turn flag based on the provided value.
     * @property SWITCH
     * @access public
     * @param {boolean} evenOdd - The value indicating whether the turn is even or odd.
     * @throws {Error} If the evenOdd parameter is not a boolean value.
     */
    set SWITCH(evenOdd) {
        this._turnFlag = (typeof evenOdd === 'boolean') ?   evenOdd :
            console.error('Check your turn SWITCH flag type');
    }

    /**
     * GETTER: Retrieves the value of the "_invalid" property of the current instance.
     * @property INVALID
     * @access public
     * @return {boolean} - The value of the "_invalid" property.
     * @throws {Error} - Throws an error if the instance type of "invalid" is not a boolean.
     */
    get INVALID() {
        return (typeof this._invalid === 'boolean') ? this._invalid :
                console.error('Check your invalid instance type');
    }

    /**
     * SETTER: Set the invalid move flag.
     * @property INVALID
     * @param {boolean} move - The invalid move to be set.
     * @returns {void}
     */
    set INVALID(move) {
       this._invalid = (typeof move === 'boolean') ?  move :
            console.error('Check your invalid move input type')
    }

    // ======================= PROPERTY GET/SET | CLASS DEBUG MODE ===============================

    /**
     * GETTER: Retrieves the current value of the DEVMODE property.
     * @function {boolean} DEVMODE
     * @access public
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
     * GETTER :Gets the value of IFDRAWN.
     * @property {boolean} IFDRAWN
     * @access public
     * @see NO_DRAW
     * @see WHENDRAWN
     * @see DRAW
     * @return {boolean|string} - The new value for IFDRAWN.
     */
    get IFDRAWN() {
        if (typeof this._draw === 'boolean' && this._draw === GameLogic.NO_DRAW) {
            return this._draw
        } else if (typeof this._draw === 'string' && this._draw === GameLogic.WHENDRAWN) {
            this._outcome = GameLogic.DRAW
            return this._draw
        } else {
            console.warn('Drawn State is outside of valid values')
            return this._draw
        }
    }

    /**
     * SETTER:Sets the value of IFDRAWN.
     * @property {boolean} IFDRAWN
     * @public
     * @access public
     * @default {boolean} false:
     *   - False on initialisation/reset, no draw.
     *   - True if end game is drawn/no winner.
     * @param {boolean|string} value - The new value for IFDRAWN.
     * @return {void} - The new value for IFDRAWN.
     */
    set IFDRAWN(value) {
        if (typeof value === 'boolean' && value === GameLogic.NO_DRAW) {
            this._draw = value // assigns to the default: false
        } else if (typeof value === 'string' && value === GameLogic.WHENDRAWN) {
            this._outcome = GameLogic.DRAW
            this._draw = value
        } else {
            console.warn(`Drawn State is assigned bad ${value}`)
            this._draw = GameLogic.NO_DRAW // reset to the default: false
        }
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

    set CELL(value){
        this._currentcell = value
    }

    /**
     * HELPER: Checks if the given index is a valid cell in the grid.
     * @function _validCell accessor function
     * @access private
     * @param {number} index - The index to check.
     * @return {boolean} - Returns true if the index is a valid type, and a valid cell, false
     *     otherwise.
     * @see currentCELL
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
            this.CELL = this._currentcell
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

    // ======================================= ========================== =======================
    // ======================================= PRIVATE FUNCTIONS: HELPERS =======================
    // ======================================= ========================== =======================



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
     * @return {string} - A random character from the character array.
     */

    // noinspection FunctionNamingConventionJS
    _getRandomCharacter(
        characterArray,
        debug = false
    ) {
        // noinspection LocalVariableNamingConventionJS,NestedFunctionCallJS
        /** An inner function/closure for generating a random index. Improve maintainability/readability.
         * @function {arrow function} _getRandomIndex
         * @param {number} arrayLength
         * @return {number} - A random index.
         * @ignore Math.random()  - Using pseudorandom number generators (PRNGs)
         *  - SonarLint: Medium Security (Javascript:  S2245)
         *   - Usage is minor, as this only randomise UI character
         *   - Solution: use Use a cryptographically strong pseudorandom number generator (CSPRNG)
         *   like crypto.getRandomValues()
         */
        const _getRandomIndex = arrayLength => Math.floor(Math.random() * arrayLength)
        const index = _getRandomIndex(characterArray.length)
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
        debug = false,
        caller = `_isInValidMove`
    ) {
        // // 4.2.1
        // if (this.INVALID === true) return this.INVALID
        // 4.2.2
        const show = (debug === true)
        show && this.logger('4.2.1', '⛔', caller, this.writer,'log', false, `Enter ${index}`)
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
            // 4.2.2.1
        const __hasInvalidState = (index, cell, max_turn,
                                   empty = null, caller= '_hasInvalidState') => {
                show && this.logger('S4.2.2.1', '🫸🛑', 'CHECK Invalid State', this.writer,'log',false,
                                    `Index: ${index}, Cell: ${cell}, Max ${max_turn}`, this)
                return (
                    this.IFWON || this.IFDRAWN || this.INVALID || this.TURNS > this.MAX_TURN
                ) // More than max turns, truthy for false
            }
        // 4.2.2.2 Checks the current state for invalidity from inner function
        const ifInvalidMove = __hasInvalidState(index, this.CELL,
                                                this.MAX_TURN)
        // Log to Function Params to Console for debugging purposes when debug mode is enabled.
        show && this.logger('S4.2.2.2', '🫸🛑', 'SET Invalid State', this.writer,'log', false,
                            `Index: ${index}, IFWON: ${(this.IFWON||this.IFDRAWN)},<Max ${this.MAX_TURN} : ${this.TURNS},
                         Invalid Flag ${ifInvalidMove}\n`,
                            this)
        //this.INVALID = ifInvalidMove // FALSE and Move is Valid | TRUE and Move is Invalid  @todo CHECK/STORE INVALID/VALID
        // 4.2.3
        return ifInvalidMove // return Invalid False||True: If True: Invalid move
    }

    /**
     * SELECT(...) HELPER: Increments the value of the TURNS property by 1.
     *  when _EvenTurn is played and end of each turn
     * @function _incrementTurn
     * @private
     * @access private
     * @param {string} firstplayer - The first player of the game, first turn maker
     * @param {string} secondplayer - The second player of the game, the alternate
     * @param {boolean} evenOdd - Turn flag from _isEvenTurn caller
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {string} [caller='_incrementTurn'] Option method caller for logging.
     * @return {number|*}
     * @complexity: 86%
     */
    // ✅🔂 4.4. 2024-01-21
    _incrementTurn(firstplayer, secondplayer, evenOdd,
                   debug = false, caller = '_incrementTurn')
    {
        // 4.4.1
        const show = (debug === true)
        const nextTurn = 1
        !show && this.logger('4.4.1', '🏁', caller, this.writer,'info', false, `Turn Counter Enter`)

        /** Swap to the game's next player property value when turn increments
         * @function swapPlayer
         * // noinspection
         * @param {boolean} swap - evenOdd Flag from parent method param
         * @param {string} evenPlayer - firstplayer from parent method
         * @param {string} oddPlayer - secondPlayer from paremt method
         * @return {string} - Return the swapped player when turning over turns
         * @complexity 13%|low
         */
        let swapPlayer;
        // noinspection AnonymousFunctionJS
        swapPlayer = function(swap, evenPlayer, oddPlayer) {
            // Swap the current player when the turn increments.
            // Init Even: true: P1 but swaps top P2 when even and turn increments
            return swap ? oddPlayer : evenPlayer;
        };
        //
        let newturn = 0
        if  (this._turns === this.START && this._currentPlayer === firstplayer) {
            // 4.4.2.A Start | 1st Turn: Start =0
            this._turns += nextTurn
            this._currentPlayer = secondplayer;
            show && this.logger('4.4.2.A', '🏁 1ST TURN', caller, this.writer,'log', false,
                                `START: Turn ${this._turns}, CurrentPlayer/Cell ${this._currentcell},
                                Swapped Player ${this._currentPlayer}, Even: ${evenOdd}`,)
            newturn = this._turns
        } else if (this._turns > this.START && this._turns <= this.MAX) {
            // 4.4.2.B In Game Turns: Max is 9
            this._turns += nextTurn
            this._currentPlayer = swapPlayer(evenOdd, firstplayer, secondplayer)
            show && this.logger('4.4.2.B', '♻️ NEXT TURN', caller, this.writer,'log', false,
                                `NEXT: Turn ${this._turns}, CurrentPlayer/Cell ${this._currentcell},
                                Swapped Player ${this._currentPlayer}, Even: ${evenOdd}`,)
            newturn = this._turns
        } else if (this._turns === undefined) {
            // 4.4.2.B In Game Turns: Error
            this._turns = GameLogic.TURN_INIT;
            this._currentPlayer = firstplayer;
            if (show)  {
                this.logger('4.4.2.C', '⚠️ ERROR TURN', caller, this.writer,'error', false,
                            `STOP: Game Restarted: Error with turns`, this)
            }
            newturn = this._turns
        }
        return newturn
    }

    // Determines if the turn is even or odd.
    /**
     * Determines if the current turn is even.
     * @function _isTurnEven - Determines if the current turn is even. using modulus 2
     * @access private
     * @private
     * @param {boolean} [debug=false] - Optional Flag to enable debug mode.
     * @param {string} [caller='_isTurnEven'] Option Caller name for method for logging
     * @returns {boolean|void} - `true` if the current turn is even, `false` otherwise.
     * @throws {function} Console error if `this._turns` is undefined.
     */
        // ✅ 4.4.0.1
     _isTurnFlag(debug = false, caller = '_isTurnEven'){
        let evenOrOdd;
        if (this._turns === undefined) {
            show && this.logger('4.4', '🏁', caller, this.writer,'error', false,
                                `Error: this._turns is undefined: %', this._turns`)
            throw new Error('this._turns is undefined')
        } else {
            // %2 = even = true: P1, !%2 = odd = false: P2
            evenOrOdd = this._turns % 2 === 0
            return evenOrOdd
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
     * @param {string} [caller='_isEvenTurn'] - Optional caller name for logging
     * @return {void}
     * @desc determines if the turn is even and updates the turns and grid accordingly.
     * It takes an input parameter index which represents the index of the grid to be updated.
     * It calculates whether the turn is even by checking if the remainder of the division of
     *     `this._turns` by 2 is equal to 0. If the turn is even, it assigns certain values to
     *     variables char and prop.
     * @complexity 26%
     */
    // 4.4 2024-01-15
    _isEvenTurn(
        index,
        debug = false,
        caller = '_isEvenTurn')
    {
        // ✅ 4.4
        const show = (debug === true)
        show && this.logger('4.4', '🏁', caller, this.writer,'info', false,
                            `_isEvenTurn: Enter | Current Turn: ${this._turns},
                        Current Player: ${this._currentPlayer}, Current Cell: ${this._currentcell}`)

        // ✅ 4.4.1 Chooses the character to be used
        // evenOdd the state of the turn/validMove
        let evenOdd = this._isTurnFlag(show)
        this._turnFlag = evenOdd
        // ✅ 4.4.2
        if (typeof evenOdd === 'boolean') {
            // 4.4.2.1
            const __selectPlayer = () => {
                // True: Even: 1st Player || False: Odd: 2nd Player
                return evenOdd ? GameLogic.P1 : GameLogic.P2;
            }
            // 4.4.2.2
            const __chooseSequenceStore = () => {
                // True: Even: 1st Player || False: Odd: 2nd Player
                return evenOdd ? this._xTurns : this._oTurns;
            }
            // 4.4.2.3
            const __chooseCharArray = () => {
                // True: Even: 1st Player || False: Odd: 2nd Player
                return evenOdd ? this._xChars : this._oChars;
            }
            // 4.4.2.4
            // Selects the token property to be used
            const __selectProp = () => {
                // True: Even: 1st Player || False: Odd: 2nd Player
                return evenOdd ? GameLogic.X_TURNS_PROP : GameLogic.O_TURNS_PROP;
            }
            // Assign the selector value per each turn.
            // 4.4.2.1.A
            let currentPlayer = __selectPlayer()
            // 4.4.2.1.B
            let turnsSequence = __chooseSequenceStore() // select the per player store for click value/turn sequences
            // 4.4.2.1.C @todo Uncommented Code __chooseCharArray()
            //let charArray = __chooseCharArray() // select the per player store for click value/turn sequences
            // 4.4.2.1.D
            let turnprop = __selectProp() // X Prop for odd or O Prop for even
            // ✅ 4.4.2
            show && this.logger('4.4.2', '🏁⤵️', `${caller}: ↪️🛞B4 updateTurnsAndGrid🐛:`, this.writer,'info', false,
                                `Player: ${currentPlayer}, Sequence: ${turnsSequence} for ${turnprop}`)
            // ✅ 4.4.3 => 4.5 Update the turns and grid
            let playedturns = this._updateTurnsAndGrid(index, evenOdd, currentPlayer,
                                                       turnsSequence, turnprop)
            // Log to Function Return to Console for debugging purposes when debug mode is enabled.
            show && this.logger('4.4.3', '🏁⤴️', `${caller}: ♻️🏁 updateTurnsAndGrid✅:`, this.writer,'info', false,
                                `Player: ${currentPlayer} at ${index}, Sequence: ${turnsSequence} for ${turnprop},
                       Current Turns Count: ${this._turns} for ${playedturns}`) // jshint ignore:line
        }
        // ✅ 4.4.4 => 4.4.1 Increment for next Turn
        let newTurn = this._incrementTurn(GameLogic.P1, GameLogic.P2,
                                          evenOdd,  true, '_isEvenTurn')
        show && console.info(`4.4.4 : End of Turn: ${newTurn}`)
    }

    // noinspection OverlyComplexFunctionJS
    /**
     * SELECT(...) HELPER:Update the current instance turn property, per current cell/token,
     *    with latest move/cell ref.
     * @function _updateTurn
     * @access private
     * @private
     * @param {number} index - The index (ref) of the selected cell.
     * @param {number} currentClick - The click current value.
     * @param {string} currentCell - The cell current value.
     * @param {string} currentTurns - The current player record.
     * @param {string} activePlayer - The active Token (X or O) constant.
     * @param {string} turnProp - The current player record.
     * @param {boolean} [group=false] - Option Flag to group logging statements
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param group
     * @param {string} [caller='_updateTurn'] - Optional method caller name for logging.
     * @return {string} - The updated current player's record.
     */
    // 4.6 ✅ Debuged 2024.01.15
    _updateTurn(
        index,
        currentClick,
        currentCell,
        currentTurns,
        activePlayer,
        turnProp,
        debug = false,
        group = false,
        caller = '_updateTurn'
    ) {
        // 4.6.1
        const show = (debug === true) // DRY for the true:show or false: off
        show && this.logger('4.6.1', '⛳ ', caller, this.writer,'info', group,
                            `${activePlayer} This TURN: ${index}: Click: ${currentClick},
                            Val: ${currentCell} play by ${currentTurns} for ${turnProp}`)
        // 4.6.2
        let moveRef = this.CLICK === index ? index : currentClick
        show && this.logger('4.6.2', '⛳ ', caller, this.writer,'info', group,
                            `${activePlayer} This TURN: B4 ${this[turnProp]}, moveRef ${moveRef}` )
        // 4.6.3 A, B, C
        if (this[turnProp] === this._xTurns) {
            this[turnProp] = this[turnProp].concat(moveRef)
            show && this.logger('4.6.3.A P1', '⛳ ', caller, this.writer,'info', group,
                                `${activePlayer} at ${index} This TURN: B4 ${this[turnProp]}, moveRef ${moveRef}` )
        } else if (this[turnProp] === this._oTurns) {
            this[turnProp] = this[turnProp].concat(moveRef)
            show && this.logger('4.6.3.B P2 ', '⛳ ', caller, this.writer,'info', group,
                                `${activePlayer} at ${index} This TURN: B4 ${this[turnProp]}, moveRef ${moveRef}` )
        } else {
            show && this.logger('4.6.3.C', '⛳ ', caller, this.writer,'error', group, `${this[turnProp]} is undefined`)
        }
        // 4.6.4 A & B
        show && this.logger('4.6.4.A', '⛳✅ ', caller, this.writer,'info', group,
                            `Click ${index}, Cell ${currentCell}, Active ${activePlayer}`)
        show && this.logger('4.6.4.B', '⛳⤴️⤴️', caller, this.writer,'info', group,
                            `${turnProp}: Updated Played Sequence ${this[turnProp]}`, this )
        // 4.6.5 Return the current player's record {string}
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
     * @param {boolean} [group=false] - Option Flag to group logging statements
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param group
     * @param {string} [caller='_updateTurnAndGrid'] - Optional caller method name for logging
     * @return {string}
     * @desc It takes in five key parameters: index, evenOrOdd, currentPlayer, sequenceStore,
     *      and turnProperty
     *      The turnProp dynamically switches between this.X_TURNS_PROP and this.O_TURNS_PROP.
     *      This class member stores the sequenceStore per each player.
     *      USED TO:
     *      It updates the grid array at the specified index with a random character from the
     *     characterArray and ... increments the value of the turnProperty by index.
     * @complexity 13%
     **/

    // 4.5
    _updateTurnsAndGrid(
        index,
        evenOrOdd,
        currentPlayer,
        sequenceStore,
        turnProperty,
        debug = false,
        group = false,
        caller = '_updateTurnsAndGrid'
    ) {
        // 4.5.0.1. & 4.5.0.2
        const show = (debug === true)
        show && this.logger('4.5', '⛳ ', caller, this.writer,'info', group,`${caller}: Enter`)
        // Set the current CELL (grid item) to a random character from the characterArray
        // noinspection NestedFunctionCallJS
        //this.setCELL(index, this._getRandomCharacter(characterArray));
        // Update the sequence of moves via appending the turnProperty by selected index
        //const _token = turnProperty === GameLogic.X_TURN_PROP ? GameLogic.P1 : GameLogic.P2;
        // 4.5.1
        let playedsequence = ''
        if (currentPlayer) {
            const currentCell = this._grid[index]
            let currentClick = index
            // 4.5.1
            show && this.logger('4.5.1', '⛳ ', caller, this.writer,'info', group,
                                `${index}: ${currentPlayer} === ${this._currentPlayer} at ${currentCell},
                             for ${currentClick} on ${turnProperty}` )
            // update the current players played sequenced store by appending value to turn store
            // 4.5.3 => 4.6 _updateTurn
            const currentSequence = this._updateTurn(index,
                                                     currentClick,
                                                     currentCell,
                                                     sequenceStore,
                                                     currentPlayer,
                                                     turnProperty);

            // Update the corresponding turns property based on activeToken
            // Update the class instance properties as store for the next turn/state values
            // 4.5.4
            switch (currentPlayer) {
                case GameLogic.P1:
                    // 4.5.4.A: Update Turn & Grid for Player 1
                    this._xTurns = currentSequence;
                    this._grid[index] = GameLogic.P1
                    this._currentPlayer = GameLogic.P1
                    this.CELL = this.currentCELL(index)
                    show && this.logger('4.5.4.A', '⛳P1: X ', caller, this.writer,'info', group,
                                        `1️⃣✅P1: ${GameLogic.P1}: Played Sequence ${this._xTurns}`)
                    playedsequence = this._xTurns
                    break;
                case GameLogic.P2:
                    // 4.5.4.B: Update Turn & Grid for Player 2
                    this._oTurns = currentSequence;
                    this._grid[index] = GameLogic.P2
                    this._currentPlayer = GameLogic.P2
                    this.CELL = this.currentCELL(index)
                    show && this.logger('4.5.4.A', '⛳P2: O ', caller, this.writer,'info', group,
                                        `✅2️⃣P2: ${GameLogic.P2}: Played Sequence ${this._oTurns}`)
                    playedsequence = this._oTurns
                    break;
                default:
                // You can add some default behaviour here if needed.
            }
        }
        // 4.5.5
        show && this.logger('4.5.5',' ', caller, this.writer,'info', group,`${index} for ${currentPlayer},${turnProperty} play ${this[turnProperty]} with ${this._grid[index]}`, this )
        return playedsequence
    }


    // ======================== ================================ ==================================
    // ========================    PUBLIC FUNCTIONS: SELECT()    ==================================
    // ======================== ================================ ==================================

    // noinspection ParameterNamingConventionJS
    /**
     * Checks if a move is valid and returns the result.
     *
     * @access private
     * @private
     * @param {number} index - The index of the move.
     * @param {function} __isWins - Flag to enable/disable wins.
     * @param {boolean} [group=false] - Option Flag to group logging statements
     * @param {boolean} debug - Flag to enable/disable debugging.
     * @param {string} caller - Optional caller method name for logging
     * @returns {object} - The result of the move. see this._result
     */
    _hasValidMove(index, __isWins,
                  group = false, debug = false, caller = '_hasValidMove' )  {
        // 4.2.0
        const show = (debug === true)
        show && this.logger('4.2.1', '🏁🟢', caller, this.writer, 'log', group, 'Enter\n')
        // 4.2.1. && 4.2.2

        if (this._isInvalidMove(index) && this.INVALID) { // 4.2.1 =>
            // 4.2.2
            // Invalid Moves: Try again. / Output to Console
            !show && this.logger('4.2.2.A', '🛑', caller, this.writer, 'log', group,
                                'Cell ID: %s, isInvalid %s, Return: %s', index,
                                `✅ Invalid for ${this.CELL}`, `Return result: invalid obj` )
            // 4.2.2.1. => 4.7
            return this._result(index, this.CELL, this.GRID, 'STOP', '🛑 Invalid Move', false, false, 1)
        }
        else {
            // 4.2.0.B Update the turns and grid
            // Valid Move: Proceed to next turn or declare winner.
            show && this.logger('4.2.2.B', '🏁🟢', caller, this.writer, 'log', group, 'ELSE\n')
            // 4.2.3. => 4.4: Check the winner state before turn

            show && this.logger('4.2.3', '🏁✅', `${caller}:B4 isEvenTurn`, this.writer, 'log', group,
                                'Cell ID: %s Click: %s, VALID %s', index, `Current: ${this.CLICK}`,
                                `✅ Valid for ${this.CELL}`)
            // Make the turn even or odd and select player, and update the grid and turn values
            this._isEvenTurn( index )
            // Return the result
            const hasOutcome = __isWins( index )
            !show && this.logger('4.2.4', '🏁✅', `${caller}:A8 isEvenTurn`, this.writer, 'log', group,
                                `✅ Valid: ${index}: ${this._currentPlayer} play ${this._turns}, Grid: ${this._grid[index]}`,
                                hasOutcome)
            console.table(hasOutcome)
            // 4.2.4.1 => 4.7
            return hasOutcome //  Returns False or Draw or P1 or P2
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
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
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
        debug = true,
        caller = 'Select:')
    {
        // Enabled only for developer mode
        const show = (debug === true)
        this.CLICK = index
        if (show) {
            console.info('Developer Mode | Logging Enabled\n')
            show && this.logger('4.0', '❓🏁', caller, this.writer, 'log', false,
                                `Cell:${index}`)
            // Exits if dev or user inputs wrong data/type and logs warning to console directly
            if (typeof index !== 'number' ) {
                show && this.logger('4.0.B', '❓🏁', caller, this.writer, 'warn', false,
                                    `select API: invalid index`);
                return;
            }
            // Exits if dev or user inputs wrong data/type and logs warning to console directly
            if (typeof debug !== 'boolean') {
                show && this.logger('4.0.C', '❓🏁', caller, this.writer, 'warn', false,
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
                            level,
                            debug = true,
                            caller = '__whoWins') =>
        {
            // Call checkWinner and assign result
            const show = (debug === true)
            let _cell = this._grid[index]
            let _grid = this.GRID
            //show && console.log(`${_cell} for ${_grid} `, _cell)
            const validmove = true // __whoWins is always valid
            let winCheck = this.checkWinner(false, false,
                                              ' __whoWins => checkWinner = winCheck');

            show && this.logger('4.7', '❓🏁', caller, this.writer, 'log', false,
                                `Enter: Index${index} | Next/Win: ${winCheck}`);


            // on every valid move, check for winner or draw
            if (this._outcome === GameLogic.NEXT &&
                winCheck === GameLogic.IN_PLAY) { // False, default state for game
                return this._result(index,
                                        _cell,
                                        _grid,
                                        '♻️ 🔁 Game in Play',
                                        'Next Turn',
                                        false,
                                        true,
                                        this._outcome,
                                        'NONE')
            }
            else if (this._outcome === GameLogic.DRAW &&
                     typeof winCheck === 'string') {
                // Draw Move/Outcome
                return this._result(index,
                                        _cell,
                                        _grid,
                                        '🥅 🟰 Draw-End',
                                        '🚧 Draw 🚧',
                                        true,
                                        true,
                                        this._outcome,
                                        winCheck)

            } else if (typeof winCheck === 'string' &&
                       winCheck !== (GameLogic.IN_PLAY || GameLogic.WHENDRAWN)) {
                // Winning Move/Selection
                // Returns the game result for UI state object/UI Data
                let P1outcome;
                let P2outcome;
                let winner;
                if (winCheck === GameLogic.P1) {
                    winner = winCheck
                return  this._result(index,
                                         _cell,
                                         _grid,
                                         '1️⃣🥅 🏁 Win-End',
                                         'Winner' + winCheck,
                                         true,
                                         true,
                                        GameLogic.PLAYER1,
                                         winCheck)
                } else if (winCheck === GameLogic.P2) {
                    return this._result(index,
                                         _cell,
                                         _grid,
                                         '2️⃣🥅 🏁 Win-End',
                                         'Winner' + winCheck,
                                         true,
                                         true,
                                        GameLogic.PLAYER2,
                                         winCheck)
                }
            } else {
                console.warn(`Inspect ${winCheck} state/values`)
            }
        }

        // noinspection NestedFunctionCallJS
        let outcome = this._hasValidMove(index, __whoWins, show );
        //show && this.logger(`4.0.2`, '❓🏁', caller, this.writer, 'table', false, outcome)
        return outcome
        // Check if move is / has Valid Move, and if value move, return the updated token from grid
        //return this._hasValidMove(index, __whoWins,debug, level )
    }

    // noinspection OverlyComplexFunctionJS,ParameterNamingConventionJS
    /**
     * API DATA: Returns a game result object, i.e. the state/data of the game per start/turn/end.
     * @function _gameResult
     * @access private
     * @private
     * @param {number} _id
     * @param {*} _cell - The cell value.
     * @param _grid
     * @param {*} _next - The next value.
     * @param {string} _msg - The game message.
     * @param {boolean} _state - The game state. True if game is continuing.
     * @param {boolean} _valid - The validity of the game.
     * @param {*} _outcome - The game outcome.
     * @param {*} [_final=null] - The winner|draw of the game or none.
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
     *     - 6 - endstate: draw or win
     *     - 7 - reset/initialised
     *   - winner: The winner of the game or null.
     */
    _result(_id, _cell, _grid, _next, _msg, _state, _valid, _outcome, _final = null)
    {
        switch (this._outcome) {
            case 3:
                _final = 'A Draw';
                break;
            case 4:
                _final = 'Player 1';
                break;
            case 5:
                _final = 'Player 2';
                break;
            default:
                _final = _final || null
        }

        // noinspection PointlessBooleanExpressionJS
        return {
            id: _id,
            cell: _cell,
            board: _grid,
            next: _next,
            message: _msg,
            state: _state,
            valid: _valid,
            outcome: _outcome,
            final: (_final && _final !== null) ? _final : 'None'
        }
    }
    //@todo remove updateUI
    // A helper method to manually tell Alpine.js to update the UI
    updateUI(property, value)
    {
        // noinspection AnonymousFunctionJS
        Alpine.nextTick(() => {
            // add the operations you want to perform after the DOM update here
            console.log(`Signature of this log guarantees that the DOM has
        been updated with ${property} value of ${value}`);
        });
    }

    // ======================= ================================ ==================================
    // ======================= PRI  VATE FUNCTIONS: CHECKWINNER() ==================================
    // ======================= ================================ ==================================


    /**
     * CHECKWINNER(...) HELPER: Checks whether the sequence of turns is a winner.
     * @design
     *   - Uses default/optional parameter values for function variable defaults.
     *   - Array.from(sequence.trim()) converts your sequence into an array of characters
     *   - every() checks if every character in that array satisfies the condition specified in the provided function
     *   - The condition is streak.includes(char)
     *   - Returns true if all characters satisfy the condition, in any order, false otherwise.
     * @function _checkSequenceWin
     * @version 2.0 RegEx to Array
     * @private
     * @access private
     * @param {string} streak - The current sequence streak of turns.
     * @param {string} sequence - The sequence of turns to check.
     * // Uses default/optional parameter values for function variable defaults.
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
     * @param {string} [caller='._checkSequenceWin'] - Optional function name to enable debug mode.
     * @param {boolean} [group=false] - Optional  grouping of console statement.
     * @returns {boolean} - Returns true if all characters satisfy the condition, in any order,
     *   false otherwise.
     * */
    // ✅ 2024/01/21
    _checkSequenceWin(streak, sequence,
                      debug = false, caller = '_checkSequenceWin', group = false)
    {
        /** @type {boolean} **/
        const show = (debug === true);
        /** @type {boolean} [false] **/
        let foundWinner= false
        if (typeof streak === "string" && typeof sequence === "string") {
            // Trim the strings
             sequence = sequence.trim();
             streak = streak.trim()
            // noinspection NestedFunctionCallJS,AnonymousFunctionJS
            foundWinner = Array.from(sequence)
                                    .every(char => streak.includes(char));
        }
        show && this.logger('5.0.1.A', '⛔', caller, this.writer, 'log', group,
                            `checkSequenceWin: ✅, streak: ${streak}, sequence: ${sequence},
                 Filtered by ${filteredTurns}: Found Winner: ${foundWinner}`)
        return foundWinner
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
     * @return {string|boolean|undefined} - The valid player value if the specified player is valid
     *     ('P1' or 'P2'), otherwise undefined.
     */
    _declareWinner(isValidPlayer, group = false,
                   caller = '_declareWinner', debug = true)
    {
        const show = (debug === true)
        /**
         * @type {number}
         * @see _result
         * @see this._outcome
         * **/
        const NextPlay = 2
        const BothDraw = 3
        const P1Win = 4
        const P2Win = 5
        //
        if (typeof isValidPlayer === 'string') {  // i.e. {string}: P1 || P2 (not commented out code)
            if (isValidPlayer === GameLogic.P1 || isValidPlayer === GameLogic.P2) {
                this._outcome = [P1Win,P2Win]
                show && this.logger('5.2.1', '👨🏼🏁✅', caller, this.writer, 'log', group,
                                    `Declare Winner: ${isValidPlayer}`)
                return isValidPlayer
            }// GameLogic.P1 || GameLogic.P2
            else {
                this._outcome = BothDraw
                show && this.logger('5.2.2', '🟰🏁✅', caller, this.writer, 'log', group,
                                    `Drawn Game: ${isValidPlayer}`)
                return GameLogic.HAS_DRAW
            }  // if ValidPlayer is ANY OTHER STRING
        } else if (typeof isValidPlayer === 'boolean' && isValidPlayer === GameLogic.IN_PLAY ) {
            this._outcome = NextPlay
            show && this.logger('5.2.3', '♻️🔁✅', caller, this.writer, 'log', group,
                                `Next Turn: ${isValidPlayer}`)
            return GameLogic.IN_PLAY
            // i.e. {boolean}: IN_PLAY: false
        } else {
            // Log an error to console in debug mode
            this._outcome = 0
            show && this.logger('5.2.4', '⚠️', caller, this.writer, 'error', group,
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
     * @param {string} [caller='_checkOutcome'] - Optional string to identify the caller of method
     * @param group
     * @returns {boolean|string} [GameLogic.IN_PLAY || GameLogic.P1 || GameLogic.P2 ]
     *   - Returns the winning player's string token [GameLogic.P1 || GameLogic.P2]
     *   - Returns the draw string token [GameLogic.DRAWN]
     *   - Returns GameLogic.IN_PLAY
     */

    // noinspection FunctionWithInconsistentReturnsJS
    _checkOutcome (currentMoves, currentPlayers, sequence,
                   debug = true,
                   caller = '_checkOutcome', group = false,)
    {
        // 5.1.1
        const show = (debug === true)
        const __logOutcome = (step, emoji, message, possible) => {
            show && this.logger(`${step}`, emoji, `${caller}:LOG+Declare`, this.writer,
                                'log', group, message, this.IFWON, this.IFDRAWN, this);
            return this._declareWinner(possible);
        };
        // 5.1.2
        const P1 = 0; // 1st in Array: 1st player
        const P2 = 1; // 2nd in Array: 2nd player
        const totalTurns = currentMoves[P1].length + currentMoves[P2].length;
        // Loops over current moves, refs the who, then checks if they have win sequence,
        // 5.1.3
        let outcome = GameLogic.IN_PLAY // Default before any end state
        for (let play = 0; play < currentMoves.length; play++) {
            // 5.1.3 => 5.2 : true
            if ( this._checkSequenceWin(currentMoves[play], sequence) ) {
                //5.1.3.1.A assumes win sequence for current player
                let winner = currentPlayers[play] // Single call to array: check on each
                let played = currentMoves[play]   // Single call to array: check on each
                outcome = __logOutcome('5.1.3.1.A', '🏁✅',
                                       `For ${winner}:Play Moves${played} v ${sequence}`,
                                       winner);
                // outcome = this._declareWinner(currentPlayers[play]); @todo REMOVE CODE
            }
            // 5.1.3.2 => 5.2 : false
            else if ( !this._checkSequenceWin(currentMoves[play], sequence) ) {
                // Assumes no win sequence and that this is for === MAX turns
                if (totalTurns >= GameLogic.MAX_TURN) {
                    //5.1.3.2.A (<= 5.1.1)
                    this.IFDRAWN = GameLogic.WHENDRAWN
                    outcome = __logOutcome('5.1.3.2.A', '🏁🟰',
                                           `Game Drawn after maximum turns reached`,
                                           this.IFDRAWN);
                    // outcome = this._declareWinner(this.IFDRAWN); @todo REMOVE CODE
                }
                // Assumes no win sequence and that this is for NEXT turn
                else if (totalTurns < GameLogic.MAX_TURN) {
                    //5.1.3.2.B (<= 5.1.1) Not Outcome before MAX turns
                    this._outcome = 2
                    outcome = __logOutcome('5.1.3.2.B', '♻️🔁',
                                           `Next Turn before maximum turns reached`,
                                           this.IFWON);
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
    checkWinner(debug = true,
                group = false,
                caller = 'checkWinner API: ' )
    {
        /** @type {boolean} show for short circuit flags for logging in DevMode **/
        const show = (debug === true)
        // 5.0.1  a) Manages the (end) game state & b) set the class properties to the appropriate,
        // for each WIN CHECK
        if (show) {
            this.logger('5.0.1', '🏁🏁', caller, this.writer, 'info', group,
                        `Developer Enabled\n `)
        }

        let moves = [this._xTurns, this._oTurns]  // Stores of the current played moves as string sequnece
        let players = [GameLogic.P1, GameLogic.P2]; // Possible players
        let _gameStatus = GameLogic.IN_PLAY;
        let _winningSequence = null
        // 5.0.2 Loop over the list of winning sequences and check if either player has won
        for (let sequence of GameLogic.WIN_COMBINATIONS) {
            // 5.1 _checkPlayerWin
            //console.log(sequence)
            show && this.logger('5.0.2', '🔁❓', caller, this.writer, 'info', group,
                                `Current Sequence ${sequence}`);
            let outcome = this._checkOutcome(moves, players, sequence);
            console.log(`Outcome: -- ` + outcome)
            // If a player has won, return who
            if (outcome === GameLogic.P1 || outcome === GameLogic.P2) {
                console.log('Win: ' + outcome)
                this.IFWON = outcome;
                this._outcome = [GameLogic.PLAYER1,GameLogic.PLAYER2]
                this.IFDRAWN = GameLogic.NO_DRAW;
                show && this.logger('5.0.2.A', '🔁❓', caller, this.writer, 'info', group,
                                    `checkWinner: ✅: Game WON: ${this.IFWON}, Winnning Sequence ${sequence}`,
                                    this.IFWON, this.IFDRAWN, this );
                _gameStatus = outcome;
                _winningSequence = sequence
                break;
            }
            /// If Drawn return drawn outcome
            else if (outcome === GameLogic.IFDRAWN ) {
                this.IFWON = outcome;
                this._outcome = GameLogic.DRAW
                this.IFDRAWN = outcome;
                show && this.logger('5.0.2.B', '🔁❓', caller, this.writer, 'info', group,
                                    `checkWinner: ✅: Game Drawn: ${this.IFWON}, Last Sequence ${sequence}`,
                                    this.IFWON, this.IFDRAWN, this );
                _gameStatus = outcome;
                break;
            }
            // Next Turn
            if (outcome === GameLogic.IN_PLAY && typeof outcome !== 'string' ) {
                // If no player has won yet i.e. (playerWin ==== false)
                this.IFWON = GameLogic.IN_PLAY;
                this._outcome = GameLogic.NEXT
                this.IFDRAWN = GameLogic.NO_DRAW;
                show && this.logger('5.0.2.C', '🔁❓', caller, this.writer, 'info', group,
                                    `checkWinner: ✅: Game In Play: ${this.IFWON}, Current Sequence ${sequence}`,
                                    this.IFWON, this.IFDRAWN, this );
                _gameStatus = outcome;
            }
        }
        this.logger('5.1', '⬅️', caller, this.writer, 'info', group, `checkWinner:` +
            ` _gameStatus: ${_gameStatus}, if Win Seq ${ _winningSequence}`);
        return _gameStatus
    }

    // ======================== ================================ ==================================
    // ========================   PUBLIC FUNCTIONS: RESET()      ==================================
    // ======================== ================================ ============================= =====

    /**
     * INITIALISER: Reset the game state to its initial values using Class Constants (properties).
     * @design
     *   - Reset the game state to its initial values using Class Constants (properties).
     *   - Uses Class contains to reset the game state for the current instance.
     *   - Logs to the console to validate the game state on reset
     * @function reset
     * @public
     * @access public
     * @param {boolean} [debug=this.DEVMODE] - Optional Flag to enable debug mode.
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
    // ✅ 2024/01/21
    reset(debug = this.DEVMODE,
          group = false, caller='reset')
    {
        // Enabled only for developer mode
        const show = (debug === true)
        if (show) {
            console.info('Developer Enabled\n')
            if (typeof debug !== 'boolean') {
                this.logger('6.0', '🏁', caller, this.writer,'info', group,
                            `reset API: Invalid type: debug, level`)
                return
            }
        }
        this._click = null;
        this._currentcell = null
        this._currentPlayer = 'X'
        // noinspection AnonymousFunctionJS,NestedFunctionCallJS
        this._grid = Array.apply(null,Array(9))
                            .map(function (v,i) {return null})
        this._draw = false// reset draw state to false
        this._won = false // reset game state to false
        this._outcome = 1 // reset Game state
        this._turns = 0   // reset turn count
        this._xTurns = '' // reset move sequences for xTurns
        this._oTurns = '' // reset move sequences for oTurns
        // Logs to the console for the instance  variables on reset class instance.
        show && this.logger('6.0.1', '🛟', caller, this.writer, 'info', group, `Reset:✅`, this)
        show && this.logger('6.0.2', '🛟', caller, this.writer, 'table', true, `Reset:Data🗄️`, this)
    }
}
