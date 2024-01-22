# Original Code

```javascript
function app() {  
    return {  
        turns: 0,  
        won: false,  
        winSeq: ['012', '345', '678', '036', '147', '258', '048', '246'],  
        grid: new Array(9).fill(null),  
        xChars: ['x', 'X'],  
        oChars: ['o', 'O'],  
        xTurns: '',  
        oTurns: '',  
  
        /**  
         * Selects a cell in the game grid.         *         * @function  
         * @name reset  
         * @memberof App  
         *  
         * @param {number} index - The index of the cell to select.  
         */        select: function (index) {  
            if (this.won || this.grid[index] !== null || this.turns >= 9)  
                return;  
  
            this.turns++;  
  
            if (this.turns % 2 === 0) {  
                this.grid[index] = this.xChars[Math.floor(  
                    Math.random() * this.xChars.length)];  
                this.xTurns += index;  
            } else {  
                this.grid[index] = this.oChars[Math.floor(  
                    Math.random() * this.oChars.length)];  
                this.oTurns += index;  
            }  
            this.checkWinner();  
        },  
  
        /**  
         * Checks if there is a winner by comparing the current turns of X and O with the winning sequences.  
         *         * @function  
         * @name checkWinner  
         * @memberof App  
         * @return {string} The winner ('X', 'O', or null if no winner yet).  
         */        checkWinner: function () {  
            for (let i = 0, length = this.winSeq.length; i < length; i++) {  
                if (new RegExp  
                        (`[${this.winSeq[i]}]{3}`).test(  
                            this.xTurns.replace(  
                                new RegExp(`[^${this.winSeq[i]}]+`,  
                                    'g'),  
                                    '')  
                            )  
                    )  
                    {  
                        this.won = 'X';  
                        break;  
                    }  
                else if (  
                    new RegExp(`[${this.winSeq[i]}]{3}`).test(  
                        this.oTurns.replace(  
                            new RegExp(`[^${this.winSeq[i]}]+`,  
                                'g'),  
                                '')))  
                    {  
                        this.won = 'O';  
                        break;  
                    }  
            }  
            return this.won;  
        },  
  
        /**  
         * Resets the game state.         * @function  
         * @name reset  
         * @memberof App  
         *  
         * @returns {void}  
         */  
        reset: function () {  
            this.turns = 0;  
            this.won = false;  
            this.grid = new Array(9).fill(null);  
            this.xTurns = '';  
            this.oTurns = '';  
        }  
  
    }  
}
```
# Refactoring

## Class

```javascript
class App {  
    /**  
     * Gets the Player 1 Token.     * @returns {string} The name of the property for turns.  
     */    
    static get P1 () {  
        return "X";  
    }  
  
    /**  
     * Gets the Player 1 Token.     * @returns {string} The name of the property for turns.  
     */    
    static get P2 () {  
        return "O";  
    }  
  
    /**  
     * Gets the name of the property for keeping track of the number of X turns.     * @returns {string} The name of the property for X turns.  
     */
    static get X_TURNS_PROP () {  
        return "xTurns";  
    }  
  
    /**  
     * Gets the name of the property for keeping track of the number of O turns.     * @returns {string} The name of the property for O turns.  
     */    
    static get O_TURNS_PROP () {  
        return "oTurns";  
    }  
  
    /**  
     * Returns the maximum (array/grid cell) length allowed for the grid     * @returns {number} The maximum length allowed.  
     */    
    static get MAX_LENGTH () {  
        return 9;  
    }  
  
    /**  
     * Returns the initialisation value for turns.     * @returns {number} The value for TURN_INIT.  
     */    static get TURN_INIT () {  
        return 0;  
    }  

    /**  
     * Constructor for the App class.     
     * Initializes the App object with default values for     
     * - turns,     
     * - win state,     
     * - win sequences,     
     * - game grid,     
     * - x characters |  o characters.     
     * The constructor also logs the instantiation of the ...     
     *      App object to the console.     
     * @constructor  
     */  
    constructor () {  
        console.log('Instatiate App:', this);  
        this.turns = App.TURN_INIT;  
        this.won = false;         // The default check win state of the game        
        this.winSeq = [  
            "012", "345", "678",  // HorizontalWins  
            "036", "147",         // DiagonalWins  
            "258", "048", "246"]; // VerticalWins  
        this.grid = Array.from({ length: App.MAX_LENGTH }, () => null); // ES6 Arrow Function  
        this.xChars = ["x", "X"];  
        this.oChars = ["o", "O"];  
        this.xTurns = "";  
        this.oTurns = "";  
    }  
  
  
    /**  
     * Returns a random character from the given character array.     
     * @param {Array} characterArray - The array containing characters.  
     * @return {string} - A random character from the character array.
     * @private      
     */    
    _getRandomCharacter (characterArray) {  
        return characterArray[Math.floor(Math.random() * characterArray.length)];  
    }  
  
    /**  
     * Update the turns and grid at the specified index  
     * with a random character from the characterArray.     *     
     * @param {number} index - The index of the grid to update.  
     * @param {Array} characterArray - The array of characters to choose from.  
     * @param {string} turnProperty - The property to update the turns with.  
     * @return {undefined}  
     */  
    _updateTurnsAndGrid (index, characterArray, turnProperty) {  
        this.grid[index] = this.getRandomCharacter(characterArray);  
        this[turnProperty] += index;  
    }  
  
    /**  
     * Checks if the given move is invalid.  
     * @param {number} index - The index of the move.  
     * @return {boolean} - Returns true if the move is invalid, false otherwise.  
     * @private  
     */    
    _isInvalidMove (index) {  
        const MAX_INDEX = this.grid.length - 1;  
        const isInvalidMove = this.won || this.grid[index] !== null || this.turns >= MAX_INDEX;  
        if (isInvalidMove) return;  
    }  
  
    /**  
     * Determines if the turn is even and updates the turns and grid accordingly.  
     * @param {number} index - The index of the grid to be updated.  
     * @return {undefined}  
     * @private  
     */  
    _isEvenTurn(index) {  
        const isEvenTurn = this.turns % 2 === 0;  
        const char = isEvenTurn ? this.xChars : this.oChars;  
        const prop = isEvenTurn ? App.X_TURNS_PROP : App.O_TURNS_PROP;  
        this._updateTurnsAndGrid(index, char, prop);  
    }  
  
    /**  
     * Selects a cell on the game board.     
     * @param {number} index - The index of the cell to be selected.  
     * @returns {void}  
     */  
    select (index) {  
        console.log('selected index:', index);  
        this._isInvalidMove(index);  
        this.turns++;  
        this._isEvenTurn(index);  
        this.checkWinner();  
    }  
  
    /**  
     * Checks whether the sequence of turns is a winner.  
     * @param turns  
     * @param sequence  
     * @returns {boolean}  
     * @private  
     */  
  
    _checkSequenceWin (turns, sequence) {  
        const regExp = new RegExp(`[${sequence}]{3}`);  
        const filteredTurns = turns.replace(new RegExp(`[^${sequence}]+`, "g"), "");  
        return regExp.test(filteredTurns);  
    }  
  
    /**  
     * Checks if the sequence of turns is a winner.  
     * @param {string} turns - The sequence of turns.  
     * @param {string} sequence - The sequence of turns to check.  
     * @returns {boolean} True if the sequence of turns is a winner.  
     * @description  
     *  Refactored from original code:  
     *    - Swapped the `for` loop and used the `for...of` loop structure instead.     
     */  
    checkWinner () {  
        for (let sequence of this.winSeq) {  
            if (this._checkSequenceWin(this.xTurns, sequence)) {  
                this.won = App.P1; // Player 1 wins | X wins  
                break;  
            } else if (this._checkSequenceWin(this.oTurns, sequence)) {  
                this.won = App.P2; // Player 2 wins | O wins  
                break;  
            }  
        }  
        return this.won;  
    }  
  
    /**  
     * Reset the game state to its initial values.     * @return {void}  
     */  
    reset () {  
        this.turns = App.TURN_INIT;  
        this.won = false;  
        this.grid = Array(App.MAX_LENGTH).fill(null);  
        this.xTurns = "";  
        this.oTurns = "";  
    }  
}  
  
function gameApp() {  
    let game = new App();  
    return game;  
}  
  
/**  
 * Represents a game app and assigned to the window object to make globally accessible. 
 * @name app  
 * @returns {Object} An object with methods and properties for the app.  
 */
 window.game = gameApp;  // Make the app function globally accessible
```