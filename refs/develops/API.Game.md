###  Classes

<dl>
<dt><a href="#App">App</a></dt>
<dd></dd>
</dl>

###  Members

<dl>
<dt><a href="#game">game</a> : <code><a href="#App">App</a></code></dt>
<dd><p>Assigns the gameApp function to the global window object.</p>
</dd>
</dl>

###  Functions

<dl>
<dt><a href="#_getRandomCharacter">_getRandomCharacter(characterArray)</a> ⇒ <code>string</code></dt>
<dd><p>Returns a random character from the given character array.</p>
</dd>
<dt><a href="#_updateTurnsAndGrid">_updateTurnsAndGrid(index, characterArray, turnProperty)</a> ⇒ <code>undefined</code></dt>
<dd><p>It takes in three parameters: index, characterArray, and turnProperty.
It updates the grid array at the specified index with a random character from the characterArray and ...
increments the value of the turnProperty by index.</p>
</dd>
<dt><a href="#_isInvalidMove">_isInvalidMove(index)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a given move is invalid. The function takes an index as an argument and returns true if the
move is invalid, and false otherwise.
The move is considered invalid if any of the following conditions are met: the game is already won, the
grid at the given index is not null, or the number of turns is greater than or equal to the maximum index.</p>
</dd>
<dt><a href="#_isEvenTurn">_isEvenTurn(index)</a> ⇒ <code>undefined</code></dt>
<dd><p>determines if the turn is even and updates the turns and grid accordingly.
It takes an input parameter index which represents the index of the grid to be updated.
It calculates whether the turn is even by checking if the remainder of the division of <code>this.turns</code>
by 2 is equal to 0. If the turn is even, it assigns certain values to variables char and prop.</p>
</dd>
<dt><a href="#select">select(index)</a> ⇒ <code>string</code></dt>
<dd><p>It logs the selected index, checks if the move is invalid, and returns the game token for X or Y.
If the move is invalid, it logs an error message and returns the current item from the grid.
If the move is valid, it updates the turns and grid, checks if the game has been won, logs a success message,
and returns the updated item/token from the grid.</p>
</dd>
<dt><a href="#checkWinner">checkWinner(turns, sequence)</a> ⇒ <code>boolean</code></dt>
<dd><p>checks for a winner in a game. It iterates over a list of winning sequences and calls the
_checkSequenceWin method to check if either player has won.
If Player 1 has won, the won variable is set to App.P1 (indicating Player 1&#39;s victory).
If Player 2 has won, the won variable is set to App.P2 (indicating Player 2&#39;s victory).
The method returns the value of the won variable, indicating the winner of the game.</p>
</dd>
<dt><a href="#reset">reset()</a> ⇒ <code>void</code></dt>
<dd><p>that resets the game state to its initial values.</p>
<ul>
<li>Resets turns to a predefined value</li>
<li>Reset won to false.</li>
<li>Reset grid to an empty array.</li>
<li>Reset _xTurns and _oTurns to empty strings.</li>
</ul>
</dd>
<dt><a href="#gameApp">gameApp()</a> ⇒ <code><a href="#App">App</a></code></dt>
<dd><p>The gameApp function creates a new instance of the App class.</p>
</dd>
</dl>

***

## Detailed

###  App
<a name="App"></a>

**Summary**: The App class represents a Tic-Tac-Toe game application.
**Classdescription**: The App class represents a Tic-Tac-Toe game application.
**See**: https://alpinejs.dev/advanced/reactivity for Apline.reactive()
**Version**: 2.0.0
**Author**: Charles J Fower
**License**: MIT Open Source License, Scott Windon (v1.0.0), Charles J Fower (v2.0.0)
**Copyright**: Copyright (c) 2022. Charles J Fower

* [App](#App)
    * [new App()](#new_App_new)
    * _instance_
        * [.turns](#App+turns)
        * [.won](#App+won)
        * [.winSeq](#App+winSeq)
        * [.grid](#App+grid)
        * [._xChars](#App+_xChars)
        * [._oChars](#App+_oChars)
        * [._xTurns](#App+_xTurns)
        * [._oTurns](#App+_oTurns)
    * _static_
        * [.P1](#App.P1) ⇒ <code>string</code>
        * [.P2](#App.P2) ⇒ <code>string</code>
        * [.X_TURNS_PROP](#App.X_TURNS_PROP) ⇒ <code>string</code>
        * [.O_TURNS_PROP](#App.O_TURNS_PROP) ⇒ <code>string</code>
        * [.MAX_LENGTH](#App.MAX_LENGTH) ⇒ <code>number</code>
        * [.TURN_INIT](#App.TURN_INIT) ⇒ <code>number</code>

<a name="new_App_new"></a>

### new App()
<a name="new_App_new"></a>

The App class represents a Tic-Tac-Toe game application.
It includes methods to handle game logic and state management.

Constructor for the App class.
Initializes the App object with default values and reactivity, for

- turns,
- win state,
- win sequences,
- game grid,
- x characters | o characters.

The constructor also logs the instantiation of the ...  App object to the console.

### # app.turns
<a name="App+turns"></a>

**Kind**: instance property of [<code>App</code>](#App)<br>
**Access**: public

### # app.won
<a name="App+won"></a>

**Kind**: instance property of [<code>App</code>](#App)<br>
**Access**: public

### # app.winSeq
<a name="App+winSeq"></a>

**Kind**: instance property of [<code>App</code>](#App)<br>
**Access**: public

### # app.grid
<a name="App+grid"></a>

**Kind**: instance property of [<code>App</code>](#App)<br>
**Access**: public

### # app.\_xChars
<a name="App+_xChars"></a>

**Kind**: instance property of [<code>App</code>](#App)<br>
**Access**: public

### # app.\_oChars
<a name="App+_oChars"></a>

**Kind**: instance property of [<code>App</code>](#App)<br>
**Access**: public
<a name="App+_xTurns"></a>

### # app.\_xTurns

**Kind**: instance property of [<code>App</code>](#App)<br>
**Access**: public

### # app.\_oTurns
<a name="App+_oTurns"></a>

**Kind**: instance property of [<code>App</code>](#App)<br>
**Access**: public

### # App.P1 ⇒ <code>string</code>
<a name="App.P1"></a>

Gets the Player 1 Token.

**Kind**: static property of [<code>App</code>](#App)
**Returns**: <code>string</code> - The name of the property for turns.

### # App.P2 ⇒ <code>string</code>
<a name="App.P2"></a>

Gets the Player 1 Token.

**Kind**: static property of [<code>App</code>](#App)<br>
**Returns**: <code>string</code> - The name of the property for turns.

### # App.X\_TURNS\_PROP ⇒ <code>string</code>
<a name="App.X_TURNS_PROP"></a>

Gets the name of the property for keeping track of the number of X turns.

**Kind**: static property of [<code>App</code>](#App)<br>
**Returns**: <code>string</code> - The name of the property for X turns.

### # App.O\_TURNS\_PROP ⇒ <code>string</code>
<a name="App.O_TURNS_PROP"></a>

Gets the name of the property for keeping track of the number of O turns.

**Kind**: static property of [<code>App</code>](#App)<br>
**Returns**: <code>string</code> - The name of the property for O turns.
<a name="App.MAX_LENGTH"></a>

### # App.MAX\_LENGTH ⇒ <code>number</code>

Returns the maximum (array/grid cell) length allowed for the grid

**Kind**: static property of [<code>App</code>](#App)<br>
**Returns**: <code>number</code> - The maximum length allowed.
<a name="App.TURN_INIT"></a>

### # App.TURN\_INIT ⇒ <code>number</code>

Returns the initialisation value for turns.

**Kind**: static property of [<code>App</code>](#App)<br>
**Returns**: <code>number</code> - The value for TURN_INIT.
<a name="App"></a>

# Methods

###  via game : [<code>App</code>](#App)

Assigns the gameApp function to the global window object.

**Kind**: global variable

<a name="_getRandomCharacter"></a>

###  \_getRandomCharacter(characterArray) ⇒ <code>string</code>

Returns a random character from the given character array.

**Kind**: global function
**Returns**: <code>string</code> - - A random character from the character array.
**Design**: This randomiser allows variation of the game token sizes (lower case/upper case).
It mimics variation in hand strokes when hand drawing the game tokens.

| Param | Type | Description |
| --- | --- | --- |
| characterArray | <code>Array</code> | The array containing characters. |

<a name="_updateTurnsAndGrid"></a>

###  \_updateTurnsAndGrid(index, characterArray, turnProperty) ⇒ <code>undefined</code>

It takes in three parameters: index, characterArray, and turnProperty.
It updates the grid array at the specified index with a random character from the characterArray and ...
increments the value of the turnProperty by index.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the grid to update. |
| characterArray | <code>Array</code> | The array of characters to choose from. |
| turnProperty | <code>string</code> | The property to update the turns with. |

<a name="_isInvalidMove"></a>

###  \_isInvalidMove(index) ⇒ <code>boolean</code>

Checks if a given move is invalid. The function takes an index as an argument and returns true if the
move is invalid, and false otherwise.
The move is considered invalid if any of the following conditions are met: the game is already won, the
grid at the given index is not null, or the number of turns is greater than or equal to the maximum index.

**Kind**: global function
**Returns**: <code>boolean</code> - - Returns true if the move is invalid, false otherwise.

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the move. |

<a name="_isEvenTurn"></a>

###  \_isEvenTurn(index) ⇒ <code>undefined</code>

determines if the turn is even and updates the turns and grid accordingly.
It takes an input parameter index which represents the index of the grid to be updated.
It calculates whether the turn is even by checking if the remainder of the division of `this.turns`
by 2 is equal to 0. If the turn is even, it assigns certain values to variables char and prop.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the grid to be updated. |

<a name="select"></a>

###  select(index) ⇒ <code>string</code>

It logs the selected index, checks if the move is invalid, and returns the game token for X or Y.
If the move is invalid, it logs an error message and returns the current item from the grid.
If the move is valid, it updates the turns and grid, checks if the game has been won, logs a success message,
and returns the updated item/token from the grid.

**Kind**: global function
**Returns**: <code>string</code> - - Game Token for X || Y.

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the cell to be selected. |

<a name="checkWinner"></a>

###  checkWinner(turns, sequence) ⇒ <code>boolean</code>

checks for a winner in a game. It iterates over a list of winning sequences and calls the
_checkSequenceWin method to check if either player has won.
If Player 1 has won, the won variable is set to App.P1 (indicating Player 1's victory).
If Player 2 has won, the won variable is set to App.P2 (indicating Player 2's victory).
The method returns the value of the won variable, indicating the winner of the game.

**Kind**: global function
**Returns**: <code>boolean</code> - True if the sequence of turns is a winner.

| Param | Type | Description |
| --- | --- | --- |
| turns | <code>string</code> | The sequence of turns. |
| sequence | <code>string</code> | The sequence of turns to check. |

<a name="reset"></a>

###  reset() ⇒ <code>void</code>

that resets the game state to its initial values.

- Resets turns to a predefined value
- Reset won to false.
- Reset grid to an empty array.
- Reset _xTurns and _oTurns to empty strings.

**Kind**: global function
<a name="gameApp"></a>

###  gameApp() ⇒ [<code>App</code>](#App)

The gameApp function creates a new instance of the App class.

**Kind**: global function
**Returns**: [<code>App</code>](#App) - A new instance of the App class.
<a name="gameApp..game"></a>

### # gameApp~game

**Kind**: inner property of [<code>gameApp</code>](#gameApp)
