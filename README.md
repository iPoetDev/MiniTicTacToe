# `PROJECT-NAME`
> _"Single Intent"_

## 1.0 Introduction
> Complete: ❓ | Review: 📝 | To Do: 📌

Tic Tac Toe origins come from 
### 1.1 Goals
> `Simple Goals, bullets points`

#### 1.1.1 App Goals

#### 1.1.2 Project Goals

### 1.2 Live App

Name | App | Repo Name | Repo URL |
--- | --- |--- | --- |
`Project` | https://{{app-slug}}.github.io | `Repo` | https://github.com/iPoetDev/{{repo-slug}} |

### 1.3 App Visual

![Image]( "")

amiresponsive.co.uk/ | URI: AmIResponsive

***
> :: 
***
## 2.0 Solution: **`Tic Tac Toe`** - A Grid Game
> Complete: ✅ | Review: ❓ 

### 2.1 Game Play ✅✅

- Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid <sup><b>(1)</b></sup>.
	- There is no universally agreed rule as to who plays first.
	- Convention is used so that **`X`** is played first.
- Players soon discover that the best play from both parties leads to a draw as an optimal strategy. It is sometimes known as [futile game](https://en.wikipedia.org/wiki/Futile_game) <sup><b>(2)</b></sup> in game theory.

**`Example GamePlay`: Wikipedia.com <sup><b>(1)</b></sup> **
![](docs/assets/img/Tic-tac-toe-game-1.png)

#### This Game Play ✅✅

- When player starts a round, they click the start button.
- The First move is, by convention, signalled by the **`X`** first move.
- The 1st Player is marked by a `BLUE` marker, i.e. item or game token,
- The 2nd Player is automatically marked by a `RED` marker, i.e. item or game token.
- Players can only mark a turn/position once.
	- `Time Limits` is a potential feature (Credit: [Tic Tac Toe Web Browser Gameplay)](https://github.com/miloszmisiek/ci_p2_tictactoe#gameplay) <sup><b>(3)</b></sup>
		- Player has **time limit** for his move equals to **15 seconds**.
		- Timer starts when Player press **START/RESTART** button and is reset after every turn.
- To **win** the game, the first to mark 3 indices/rows in any direction, along one of these incidence structures.
	- 3 Horizontal Wins
	- 3 Vertical Wins
	- 2 Diagonal Wins 
- To **draw** the game, is when no further win along the above indices/row and all spaces are occupied or the next turn player concedes to a draw.
`Winning Options: 3 indices in a row`
![](docs/assets/img/Three_Men's_Morris_variant_board.svg)
- Given that Tic Tac Toe is a futile game, Players may want to have a series a rounds of games
	- Each round is a sets 
	- Best of `2n+1` sets is a match.
- Therefore, to score these rounds of games, scoring each will need to be tallied and kept.
	- **`Scoring`**: is a potential feature. Credit: [Tic Tac Toe Web Browser Gameplay)](https://github.com/miloszmisiek/ci_p2_tictactoe#gameplay) <sup><b>(3)</b></sup>
		- After every result, the respective score counter is updated for each player.
- To play a new game, Player can press **RESTART** button.
	- If a player wants to start over and have a new match: Players can press the **RESET MATCH**
- More on a Perfect Game strategies on Wikipedia **(1)**.


```
<small><sup><b>1</b></sup>: Source: <a href="https://en.wikipedia.org/wiki/Tic-tac-toe#Gameplay">https://en.wikipedia.org/wiki/Tic-tac-toe#Gameplay</a></small>
<small><sup><b>2</b></sup>: Source: <a href="https://en.wikipedia.org/wiki/Futile_game">https://en.wikipedia.org/wiki/Futile_game</a></small>
<small><sup><b>3</b></sup>: Source: <a href="https://github.com/miloszmisiek/ci_p2_tictactoe#gameplay">https://github.com/miloszmisiek/ci_p2_tictactoe#gameplay</a>, Author: <b>Milosz Misiek</b> <i>https://github.com/miloszmisiek</i> (2021), Last Accessed: Dec 12, 2023</small>
```


### 2.2 Game Arena ✅❓

**`Key Components`**: See [4.? Features]() below for fuller outline and description.

| Arena/App Features      | Parent Feature   | Form Factor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Location                       | Outline                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Elements                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Interactions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Version |
|:-------------------|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| Web Page           | --               | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile | Page                           | HTML                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | HTML Semantics                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | --                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Web App            | Web Page         | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile | Page                           | SPA, Simple, Alpine X-Data&nbsp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Loads JS&nbsp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | --                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Game Banner        | Web App          | All: <br>Desktop, Tablet, Mobile                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 1st Row,<br>Top of Area/Header | Header, Headings<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Game Title,<br>In-Game Controls                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | --                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Game Title         | Game Banner      | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile |  2nd Row,&nbsp;<br>Game Banner | Headings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | --                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| In-Game Controls   | Game Banner      | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile |           2nd Row, Game Banner | Template,<br>Components<br><br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Game Timer/Controls,<br>Game FAQ Button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | --                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Game Timer         | In-Game Controls | Desktop &amp; Tablet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |           2nd Row, Game Banner | Counts down the assigned set interval.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | External Library,<br>InnerHTML Text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Timer, On Click                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Game FAQ Button    | In-Game Controls | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile |           2nd Row, Game Banner | Button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | In Page Modal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Opens Modal<br>Button On Click                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Game Board         | Web App          | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile | Centre of Area                 | Template,<br>Grid, Button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Grid, 0-3<br>Grid, 3-6<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Grid, 6-9<br> | Button On Click                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Game Messages      | Web App          | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile |         2nd Row,&nbsp;<br>Area | Template,<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Components   | InnerHTML Text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &nbsp;On Update, Update DOM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Game Controls      | Web App          | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile | Bottom of Game Board           | Template,<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Grid, Button | Start Button<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Reset Button            | Button On Click                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Game Score         | Web App          | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile | Bottom of Game Board           | Template,<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Components   | InnerHTML Text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &nbsp;On Update, Update DOM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Game Match Scoring | Web App          | All:<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Desktop, Tablet, Mobile | In Overlay, In Page Modal      | Template,<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Components   | InnerHTML Text<br>Start Match Button<br>Reset Match                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Opens Modal<br style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;">Button On Click |         |  

### 2.3 Developer Motivations ✅✅

- This is a second shot attempt at Code Institute's *JavaScript Essentials* assignment.
- Tic Tac Toe has a simple implementation and is commonly used to instruct student developers in:
	1. Fundamentals of *JavaScript* for interactive web design.
	2. Basics of Game Design as a common learning pattern for interactivity.
- This README is demonstration of the author's technical writing and structured documentation skills. 
- A preference for technical choices that demonstrate a principle of **Locality of Behaviour**
	-  **i.e.**: The behaviour of a unit of code should be as obvious as possible by looking only at that unit of code.
- The choice of *TailwindCSS*, as part of the requirements for the design and testing an interactive Front-End web application, is: 
	- To build on the personal preference for pre-composed *CSS* styling and a opinionated library and or framework of styling.
	- Example of *Locality of Behaviour*.
- The choice of *AlpineJS*, as part of the requirement to implement Front-End interactivity a *JavaScript* libraries or frameworks, is:
	- One to minimise the employment of *JavaScript* on a lightweight minimal basis.
	- A minimal tooling to compose behaviour directly in the mark up, a modernised variant of *jQuery*.
	- Example of *Locality of Behaviour*.
- Aims to reduce complexity and not repeat the basis of the first attempt by using AlpineJS and TailwindCSS as framworks.

### 2.4 Future Features 🚧

**For versions beyond version 0.5 / Alpha **

- `Time Limits` is a potential feature 
- **`Scoring`**: is a potential feature.

***
### 2.5 Open Source Influences ✅✅

This author-developer's project has a strong influence, code reuse, concept and implementation and bearing from [Scott Windon - Buy Him a Coffee]([Scott Windon | Linktree](https://linktr.ee/scottwindon "Buy Scot a Coffee").

- *CodePen*: [Scott Windon - AlpineJS Tic Tac Toe (codepen.io)](https://codepen.io/ScottWindon/pen/eYBMXQO "Scott Windon")
- *AlpineToolBox*: [Alpine Toolbox - Alpine.js Examples](https://www.alpinetoolbox.com/examples/)
	- Browsing for sources of implementation and showcase of AlpineJS projects.
	- Used for researching into the project and solution ideas.

**Why**: All Students reference former students previous code submissions and this is not an uncommon practice. Scott Windon's example is a good example of AlpineJS implementation, architecture and reference code. All Code will be commented and accredited as it is included into this solution and project.

**Shared Concepts**: Reused.
	- Design: Font: Gochi-Hand
	- JavaScript: AlpineJS in HTML and Game Code
	- JavaScript: App Game Code 

***
> ::
***
## 3.0 Project
> Complete: ❓ | Review: 📝 | To Do: 📌

_This section is a summation of select key, pre-agile:
- _i) project decisions_
- _ii) project management activities_
- _iii) stages of the project delivery workflows from code to hosting_
- _iv) documentation requirements._
### 3.1 Key Project Decisions

> -  Learning Requirement: Any design decisions that contravene accepted user interaction, user experience design principles are **identified and described** (comments in code or a section in the README)

#### 3.1.1 Interactive Front-End Web Application as a Single Page Architecture

> To use HTML, CSS and JavaScript (native and or Libraries) as front end technologies

#### 3.1.2 To employ a principle of Locality of Behaviour before Separation of Concerns, as a leading technical design pattern.

- .

#### 3.1.3 Select a CSS Framework, like TailwindCSS, that demonstrate the Locality of Behaviour principle as a design pattern.

- 
#### 3.1.4 Select a lightweight JavaScript Framework, like AlpineJS, that demonstrate the Locality of Behaviour principle and composability of behaviour.

- 

***
### 3.2 Requirements

To view the Project Assessments and Requirements, see the associated Repository's Wiki: [Wiki (Project)](https://github.com/iPoetDev/AlpineTicTacToe/wiki)

***
### 3.3 Workflow

The following workflow is an extract, re-sorted, of the PASS and MERIT Learning Objectives from the assessment criteria. Repurposed to define a workflow from start to finish, in semantic categories/phases. If these are surmounted, then good performance will open the possibility to a higher performance.
#### 3.3.1 Design & UX

> - 🚧✅ **Learning Objective**: *Design an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity*.
> 	- [ ] Design a web application that meets accessibility guidelines, follows the principles of UX design, and meets its given purpose.
> 	- [ ] Design the organisation of information on the page following the principles of user experience design.
> 	- [ ] Design a web application that presents a structured layout and navigation model, and meets its given purpose.
> 	- [ ] Design a website that meets accessibility guidelines.
> 	- [ ] Design interactivity for a web application that lets the user initiate and control actions, and gives feedback.
> - 🚧✅ **Learning Objective**: *Design an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity*.
> 	- [ ] Implement a website that provides an excellent solution to the key project goals, demands and expectations.
> 	- [ ] Implement a web application whose purpose is immediately evident to a new user.
> 	- [ ] Design a website with a flow of information layout and interaction feedback that is clear and unambiguous.
> - 🚧✅ **Learning Objective**: *Test a front-end web application through the development, implementation and deployment stages*
> 	- [ ] Code all external links to open in a separate tab when clicked.
> 	- [ ] If used, implement clear navigation to allow users to find resources on the site intuitively.
> 	- [ ] Present the finished website with clearly understandable site-specific content, rather than Lorem Ipsum placeholder text.
> - 🚧✅ **Learning Objective**: *Implement Front-End interactivity, using core JavaScript, JavaScript libraries or frameworks*.
> 	- [ ] Design a web application that lets the user initiate and control actions and gives feedback
##### 3.3.1.1 Graphics & Content

> - 🚧✅ <ins><b>Learning Objective</b>: <i>Design an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity</i>.</ins>
> 	- [ ] Implement an interactive web application that incorporates images or graphics of usable resolution, legible, unobscured text, consistent styling, undistracted foregrounds.
> 	- [ ] Ensure that foreground information is never distracted by backgrounds.
> 	- [ ] Include graphics that are consistent in style and colour.
> 	- [ ] Design a website that meets accessibility guidelines (e.g. contrast between background and foreground colours to cater for the visually impaired).
> - 🚧✅ <ins><b>Learning Objective</b>: <i>Test a front-end web application through the development, implementation and deployment stages</i></ins>.
> 	- [ ] **Present** the finished website with clearly understandable site-specific content, rather than Lorem Ipsum placeholder text.
#### 3.3.2 Build

> - 🚧✅ **Learning Objective**: Implement an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity*.
> 	- [ ] Implement a website with a flow of information layout and interaction feedback that is clear and unambiguous.
> 	- [ ] Implement an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity.
> 	- [ ] Implement the (*semantic*) organisation of information on the page following the principles of user experience design.
> 	- [ ] Implement interactivity for a web application that lets the user initiate and control actions, and gives feedback.
> 	- [ ] Implement an interactive web application that incorporates images or graphics of usable resolution, legible, unobscured text, consistent styling, undistracted foregrounds.
> - 🚧✅ **Learning Objective**: *Implement Front-End interactivity, using core JavaScript, JavaScript libraries or frameworks*
> 	- [ ] Implement appropriate working functionality for all project requirements.
##### 3.3.2.1 HTML

> - 🚧✅ **Learning Objective**: Design an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity
> 	- [ ] Write custom HTML code to create a responsive front-end web application consisting of one or more HTML pages with significant interactive functionality
> - 🚧✅ **Learning Objective**: *Test a front-end web application through the development, implementation and deployment stages*
> 	- [ ] Write custom HTML code that passes through the official W3C validator with no issues.
> 	- [ ] Use Semantic markup to structure HTML code
##### 3.3.2.2 CSS

> - 🚧✅ **Learning Objective**: Design an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity
> 	- [ ] Write custom CSS code to create a responsive front-end web application consisting of one or more HTML pages with significant interactive functionality
> - 🚧✅ **Learning Objective**: *Test a front-end web application through the development, implementation and deployment stages*
> 	- [ ] Write custom CSS code that passes through the official (Jigsaw) validator with no issues.
> 	- [ ] Use CSS media queries across the application to ensure the layout changes appropriately and maintains the page's structural integrity across device screen sizes.
##### 3.3.2.3 JavaScript

> - 🚧✅ **Learning Objective**: *Design an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity*.
> 	- [ ] Design interactivity for a web application that lets the user initiate and control actions, and gives feedback.
> 	- [ ] Write custom JavaScript to create a responsive front-end web application consisting of one or more HTML pages with significant interactive functionality.
> 	- [ ] Write JavaScript code to produce relevant responses to user actions.
> - 🚧✅ **Learning Objective**:  *Test a front-end web application through the development, implementation and deployment stages*.
> 	- [ ] Write JavaScript code that passes through a linter (e.g. Jshint) with no significant issues.
> - 🚧✅ **Learning Objective**: *Implement Front-End interactivity, using core JavaScript, JavaScript libraries or frameworks*.
>     - [ ] Write JavaScript functions that correctly implement compound statements.
>     - [ ] Write code that intelligently handles empty or invalid input data.
>     - [ ] Write code that does not generate internal errors on the page or in the console due to user actions.
>     - [ ] Organise code and assets files in directories by file type.
#### 3.3.3 Code & Project Organisation

> - 🚧✅ **Learning Objective**: *Maximise future maintainability through code structure and organisation*.
		- [ ] Clearly separate and identify code written for the website and code from external sources (e.g. libraries or tutorials).
		- [ ] Organise HTML, CSS and JavaScript code into well-defined and commented sections.
		- [ ] Place CSS code in external files linked to the HTML page in the HEAD element.
		- [ ] Place JavaScript code in external files linked to the HTML page just above the closing body tag.
		- [ ] Name files consistently and descriptively, without spaces or capitalisation to allow for cross-platform compatibility.
		- [ ] Group files in directories by file type (e.g. an assets directory will contain all static files and may be organised into sub-directories such as CSS, images, etc.).
	- 🚧✅ **Learning Objective**: *Implement Front-End interactivity, using core JavaScript, JavaScript libraries or frameworks.*
		- [ ] Organise code and assets files in directories by file type.
#### 3.3.4 Code Quality

> - 🚧✅ **Learning Objective**: *Test a front-end web application through the development, implementation and deployment stages*.
> 	- [ ] Write custom HTML code that passes through the official W3C validator with no issues.
> 	- [ ] Write custom CSS code that passes through the official (Jigsaw) validator with no issues.
> 	- [ ] Write JavaScript code that passes through a linter (e.g. Jshint) with no significant issues.
> - 🚧✅ **Learning Objective**: *Deploy a Front-End web application to a Cloud platform.*
> 	- [ ] Remove commented-out code before pushing final changes to version control and deploying.
> 	- [ ] Ensure that there are no broken internal links.
> - 🚧✅ **Learning Objective**: *Maximise future maintainability through code structure and organisation*.
		- [ ] Write code that meets at least minimum standards for readability (consistent indentation, blank lines only appear individually or, at most, in pairs).
##### 3.3.4.1 Static-Analysis/Linting
> Pre-Commit Runner

>  - 🚧✅ **Learning Objective**: *Deploy a Front-End web application to a Cloud platform*.
> 	 - [ ] Remove commented-out code before pushing final changes to version control and deploying.
#### 3.3.5 Version Control

> - 🚧✅ **Learning Objective**: *Demonstrate and document the development process through a version control system such as GitHub*.
> 	- [ ] Use Git & GitHub for version control of an interactive web application up to deployment.
> 	- [ ] Commit often for each feature/fix, ensuring that commits are small, well-defined and have clear, descriptive messages.
#### 3.3.6 Repository:

> - 🚧✅ **Learning Objective**: *Demonstrate and document the development process through a version control system such as GitHub*.
> 	- [ ] Use Git & GitHub for version control of an interactive web application up to deployment.
##### 3.3.6.1 Issues

> - 🚧✅ **Learning Objective**: *Test a front-end web application through the development, implementation and deployment stages*.
> 	- [ ] Document any bugs found and their fixes and explanation of any bugs that are left unfixed.
#### 3.3.7 Testing

> - 🚧✅ **Learning Objective**: *Test a front-end web application through the development, implementation and deployment stages*.
> 	- [ ] Document any bugs found and their fixes and explanation of any bugs that are left unfixed.
> - 🚧✅ **Learning Objective**: *Implement Front-End interactivity, using core JavaScript, JavaScript libraries or frameworks*.
> 	- [ ] Write code that does not generate internal errors on the page or in the console due to user actions.
#### 3.3.8 Deployment

> - 🚧✅ **Learning Objective**: *Deploy a Front-End web application to a Cloud platform*.
		- [ ] Deploy a final version of the code to a cloud-based hosting platform (e.g. GitHub Pages) and test to ensure it matches the development version.
> - 🚧✅ **Learning Objective**: *Demonstrate and document the development process through a version control system such as GitHub*.
> 	- [ ] Document the deployment procedure in a section in a README file.
#### 3.3.9 Hosting

>- 🚧✅ **Learning Objective**: Deploy a Front-End web application to a Cloud platform
>	-  [ ] Deploy a final version of the code to a cloud-based hosting platform (e.g. GitHub Pages) and test to ensure it matches the development version.
>- 🚧✅ **Learning Objective**: Demonstrate and document the development process through a version control system such as GitHub.

***
### 3.4 Documentation

> - 🚧✅ **Learning Objective LO2**: LO2 Test a front-end web application through the development, implementation and deployment stages
> 	 - [ ] Document any bugs found and their fixes and explanation of any bugs that are left unfixed.
> - 🚧✅ **Learning Objective: LO4**: Maximise future maintainability through documentation.
> 	 - [x] Write a README.md file for the web application that explains its purpose, the value that it provides to its users, and the deployment procedure.
> 	 - [x] Present a clear rationale for the development of the project, in the README, - Key project goals, target audience
> 	 - [x] Insert screenshots of the project features, give a brief description of what each feature does and explain its value to the user.
> 	 - [ ] Document the deployment procedure in a section in a README file, written using consistent and effective markdown formatting that is well-structured, easy to follow, and has few grammatical errors
>      - [ ] Attribute all code from external sources to its original source via comments above the code and (for larger dependencies) in the README
>  - 🚧✅ **Learning Objective**: *Demonstrate and document the development process through a version control system such as GitHub*.
> 	 - [ ] Document the deployment procedure in a section in a README file, written using consistent and effective markdown formatting that is well-structured, easy to follow, and has few grammatical errors

***
> ::
***
## 4.0 User Experience
> Complete: ❓ | Review: 📝 | To Do: 📌
### 4.? Features

> In the context of Agile workflows: _A feature is a chunk of work from the Epic – a deliverable that adds value and moves towards completing the Epic._

In this context, the author-developer extracts the definition of features and along with structuring semantics of a feature for definition purposes only so that:
- It provides a value to the user and reviewer alike.
- It should be estimable - with enough definition to provide an estimate of the effort involves.
- Be small enough to complete the feature for a milestone or version of work.
- Be (manually) testable - to be understandable what is to be tested to be passed in order to acceptable to the reviewer and the end user (if not the same).

Defining these features, within Milestones, (here), allows for alluding to the developer's Agile knowledge and for planning and design activities.

### 4.? Milestones 
#### Version 0.5

- **Game Brand**: Purpose and Context

```text
✅ Feature: App Branding & Brand Identity:
  - Icon:
  - Title/Text:
  - Color:
  - Whitespacing
  - Dark Mode:
✅ Is Part Of: Web Page 
Version: 
✅ Benefit: 
  - Implies and imparts the game's intent and context implicitly.
  - A good Brand Identity allows for an emotional and logical connection as to the design ethos of the App.
  - A strong brand allows for quick recognition of the game's purpose and intutive informational clues to how the game is played.
Acceptance:
  - 
```


- **Game Banner**:

```text
✅ Feature: The Game Banner is the page container that is composed of :
  - Game Title
  - In Game Controls
✅ Is Part of: Web Page     
Version: 
✅ Benefit: 
  - Allows for brand identity (a Title/Heading/Icon) positioning.
  - Allows for positioning simple in-game controls (like toggles) to control game options.
Acceptance:
  - 
```

- **Game Title**

```text
✅ Feature: The Game Title is the page element that is composed of :
  - Icon/Logo
  - Logo Heading
✅ Is Part of: Game Brand    
Version: 
✅ Benefit: 
  - Allows for brand identity (a Title/Heading/Icon) positioning.
  - Applying brand style and theming.
Acceptance:
  - 
```
- Game Controls

```text
Feature: 
Version: 
Benefit:
Acceptance:
```

- Game Board

```text
Feature: 
Version: 
Benefit:
Acceptance:
```


- Game Score Board

```text
Feature: 
Version: 
Benefit:
Acceptance:
```


- Game Turn Indicator
  
```text
Feature: 
Version: 
Benefit:
Acceptance:
```

- Game Timer

```text
Feature: 
Version: 
Benefit:
Acceptance:
```

- Game Messages

```text
Feature: 
Version: 
Benefit:
Acceptance: 
```

- Game FAQ

```text
Feature: 
Version: 
Benefit:
Acceptance:
```

### 4.? User Stories



### 4.? User Journey



### 4.? Form Factors


#### 4.1 Device Screens


#### 4.2 Responsiveness


#### 4.3 Accessibility



***
> ::
***

## 5.0 Plan
> Complete: ❓ | Review: 📝 | To Do: 📌

### 5.? Roadmap

| Stage | Version | Feature | Outline | Story | Submission |
|:----- |:------- |:------- |:------- |:----- |:---------- |
|       | 0.1     |         |         |       | ❌         |
|       | 0.2     |         |         |       | ❌         |
|       | 0.3     |         |         |       | ❌         |
|       | 0.4     |         |         |       | ❌         |
|       | 0.5     |         |         |       | ❓         |
|       | 0.6     |         |         |       | ❌         |
|       | 0.7     |         |         |       | ❌         |
|       | 0.8     |         |         |       | ❌         |
|       | 0.9     |         |         |       | ❌         |
|       | 1.0     |         |         |       | ✅❓       |
|       |         |         |         |       |            |
|       |         |         |         |       |            |
|       |         |         |         |       |            |
|       |         |         |         |       |            |
|       |         |         |         |       |            |
|       |         |         |         |       |            |
|       |         |         |         |       |            |
|       |         |         |         |       |            |
|       |         |         |         |       |            |

### 5.? Versions

#### v0.1 : Layout & Deployment

-  [ ] Web Page - Header
-  [ ] Game Arena - Layout & Surface Design
-  [ ] Game Title - Layout & Surface Design
-  [ ] Game Board - Layout & Surface Design
-  [ ] Hosting Deployment - Layout & Surface Design
#### v0.2 : Responsiveness: Devices & Form Factors

-  [ ] Game Arena - Responsiveness: Devices & Form Factors
-  [ ] Game Title - Responsiveness: Devices & Form Factors
-  [ ] Game Board - Responsiveness: Devices & Form Factors
-  [ ] Hosting Deployment - Responsiveness: Devices & Form Factors
#### v0.3 : 

#### v0.4 : 

#### v0.5

#### v0.6

#### v0.7

#### v0.8

#### v0.9

#### v1.0 



***
> ::
***

## 6.0 Design / UI
> Complete: ❓ | Review: 📝 | To Do: 📌

Key Milestones highlighted here maybe:
- **v0.5**: alpha
- **v0.8**: beta
- **v.9**: release candidate
- **v1.0**: submission
### 6.? Wireframe/Skeleton: 

#### 6.?.1 App Page

**Screen Resolution v Form Factor**

Form Factor | Orrientation | Device Size | Screen Resolution | Notes 
--- | --- | --- | --- | ---
Desktop | Landscape | Laptop 13"     | 1366 x 768    |    
Desktop | Landscape | Laptop 15"    | 1440 x 900    |    
Tablet Standard  | Landscape     | Tablet 10" | 1024 x 768 |    
Tablet Standard   | Portrait    | Tablet 10"    | 768 x 1024    |    
Mobile   | Portrait    | iPhone 14*    |     |   
Mobile   | Portrait    | iPhone 8*    |     |   
Mobile   | Portrait    | iPhone 6*    |     |        

* Equivalent: Android / iPhone
##### 6.?.1.1 Desktop

**Portrait 1366 x 768** | Notes
--- | ---
![](docs/assets/img/Wireframe-Desktop-Landscape-1366x768.png)| 13 Inch Laptop
**Landscape 1440 x 900** | Notes
![](docs/assets/img/Wireframe-Desktop-Landscape-1440x900.png) |...


***
##### 6.?.1.2 Tablet

**Portrait: 768 x 1024** | **Landscape 1024 x 768**
--- | --- 
![](docs/assets/img/Wireframe-Tablet-Standard-Portrait.png) |![](docs/assets/img/Wireframe-Tablet-Standard-Landscape.png)   

***
##### 6.?.1.3 Mobile

**Portrait iPhone** |  **Landscape iPhone**
--- | ---- 
![](docs/assets/img/Wireframe-Mobile-Portrait-Base.png) | ....

***
### 6.? Site Structure

#### Alpha Release 

- A single page application architecture for a web browser game, i.e The App
- The web app, The App, has:
	- Gameplay Controls i.e. Buttons: Start and Reset. 
	- Gameboard area
	- Game Play FAQ area

#### Beta Release


#### Candidate Release

- Version 0.5 Structure and ...
	- Player/Computer score counter
	- Game/Turn Timer

#### Submission Release

- Candidate Release and ....

***
### 6.? Theme/Surface

#### 6.?.1 Fonts+

Feature | Element | Font Name | Root Size | Desktop | Tablet | Mobile  
--- |--- | --- | --- | --- | --- | ---
Web Page   | Paragraph, Text   | Kanit       | 16     | 16     | 16 x       | 16 x
Game Title   | Headings: H1,H2,H3   | Kanit       |      |      |       |
Game Controls   | Inputs, Buttons, Label, Toggles    |  Kanit      |      |      |       |
Game Statuses   | Paragraph, Text   |  Kanit      |      |      |       |
Game Tokens   | Spa, Div, Text   |  Gochi-Hand      |      |      |       |
Emoji   | Icons, Spirites   | FontAwesome       |      |      |       |
   |    |        |      |      |       |
   |    |        |      |      |       |

##### 6.?.1.1 Kanit ✅

- *Kanit* means mathematics in Thai, and the Kanit typeface family is a formal Loopless Thai and Sans Latin design.
- A notable detail is that the stroke terminals have flat angles, which allows the design to enjoy decreased spacing between letters while preserving readability and legibility at smaller point sizes.
- The *Kanit* project is led by *[Cadson Demak](https://fonts.google.com/?query=Cadson%20Demak)*, a type foundry in Thailand. To contribute, see [github.com/cadsondemak/kanit](http://github.com/cadsondemak/kanit)
- Chosen for:
	1. Suitability for responsiveness and scaling over smaller responsive form factors.
	2. Also has a strong design case for Title Fonts when stronger at 900 and light for lower scoring.
	3. For a personal style preference for Asian Typescript.
	4. And it compliments *Gochi-Hand* as simultaneous complementary pairing.
- Download: [Kanit - Google Fonts](https://fonts.google.com/specimen/Kanit "Designed by [Cadson Demak]")

![](docs/assets/img/Font-Kanit-Reg400-48px.png)

![](docs/assets/img/Font-Kanit-Reg400-16px.png)
##### 6.?.1.2 Gochi-Hand ✅

- *Gochi Hand* is a typographic interpretation of the handwriting of a teenager. 
	- The style is fresh, not like the letters made by a calligrapher, but those of an ordinary person.
	- The glyphs were carefully designed with a good curve quality that makes it able to look good when printed too.
- *[Huerta Tipográfica](http://huertatipografica.com/)* is a collaborative Argentinian type foundry with a deep respect for design and typography.
- Chosen for:  
	1. To resemble hand-drawn, or handwriting, drawing of the tokens in a game of Tic Tac Toe.
	2. Code Reuse from *Scott Windon*, as this is the same font used in his open source code pen.
	3. And it compliments *Kanit* as simultaneous complementary pairing.
- Download: [Gochi-Hand - Google Fonts](https://fonts.google.com/specimen/Gochi+Hand "Designed by [Huerta Tipográfica]")

![](docs/assets/img/Font-GochiHand-Reg400-48px.png)

![](docs/assets/img/Font-GochiHand-Reg400-36px.png)

> <small>Note: These screenshots of fronts come from Google Fonts for Kanit and Gochi-Hand respectively. The quotes are mundane in this project's context and have no political intention or design.</small>
#### 6.?.2 Colour

##### 6.?.2.1 Light Mode


##### 6.?.2.2 Dark Mode



***
> ::
***

## 7.0 Build
> Complete: ✅ | Review: ❓ | Publish: ❌

### 7.1 IDE & Environments

- [x] `Windows 22H2`: `version 11.0.22621.2715` - [Windows](https://www.microsoft.com/en-gb/windows)
- [x] `Git`: `version 2.42` - [Git](https://git-scm.com/)
- [x] `Node`: `version 18.18.0` - [Node](https://nodejs.org/en/)
- [x] `NPM`: `version 9.8.1`  - [NPM](https://www.npmjs.com/)
- [x] `JetBrains | WebStorm`: `version  2023.2.3`  - [JetBrains WebStorms](https://www.jetbrains.com/webstorm)

#### 7.1.1 IDE Plugins

- [x] `Synk` - [Synk](https://plugins.jetbrains.com/plugin/13329-snyk-vulnerability-scanner/)
- [x] `SonarLint` - [SonarLint](https://plugins.jetbrains.com/plugin/7973-sonarlint/)
- [x] `AplineJS` - [AplineJS](https://plugins.jetbrains.com/plugin/16436-alpinejs/)
- [x] `Browserlist` - [Browserlist](https://plugins.jetbrains.com/plugin/9275-browserlist/)
- [x] `HTMX Support` - [HTMX Support](https://plugins.jetbrains.com/plugin/16435-htmx-support/)
- [x] `Tailwind CSS` - [Tailwind CSS](https://plugins.jetbrains.com/plugin/12075-tailwind-css/)
- [x] `W3C Validation` - [W3C Validation](https://plugins.jetbrains.com/plugin/7322-w3c-validation/)

***

### 7.2 AI Agents & Services

- [x] `Perplexity AI`: _[`version 1.0.0`](https://www.perplexity.ai/)_ - [Perplexity AI](https://www.perplexity.ai/)
  - AI Research and Sources: Context AI Assisted Search and Secondary Searches
  - Perplexity AI Search - Chrome | Edge Extension; default search engine
  - Perplexity AI Companion - Chrome | Edge Extension; chat while browsing
- [x] `JetBrains AI Assistant`: _[`version 233.11799.196`](https://plugins.jetbrains.com/plugin/22282-ai-assistant/versions/stable)_ - [AI Assistant](https://plugins.jetbrains.com/plugin/22282-ai-assistant):
    - **Features**: Code Generation, Code Completion, Code Analysis, Code Navigation, Code Refactoring, Code Inspection, Code Highlighting, Code Formatting, Code Folding, Code Templates, Code Style, Code Intentions, Code Actions, Code Linting, Code Documentation, Code Comments, Code Snippets.
- [x] `Tabnine`: _[`version 6.5.3`](https://plugins.jetbrains.com/plugin/12798-tabnine-ai-code-completion)_ - [Tabnine](https://plugins.jetbrains.com/plugin/12798-tabnine-ai-code-completion): **Features**: Code Completion (By Line)
- [x] `AIXCoder`: _[`version 1.0.0`](https://plugins.jetbrains.com/plugin/16205-aixcoder)_ - [AIXCoder](https://plugins.jetbrains.com/plugin/16205-aixcoder) **Features**: Code Completion  (By Line)
- [x] `GitHub Co-Pilot`: _[`version 2021.1.1`](https://plugins.jetbrains.com/plugin/8327-github/versions/stable)_ - [GitHub](https://plugins.jetbrains.com/plugin/8327-github): **Features**: Code Completion  (By Line)

***

### 7.3 Libraries & Frameworks

#### 7.3.1 npm Tooling
> See [`package.json`](https://github.com/iPoetDev/P2-Template/blob/main/package.json) for full list of dependencies

##### Dependencies

- [x] `tailwindcss`:
  _[`version 3.3.3`](https://www.npmjs.com/package/tailwindcss)_ - [tailwindcss](https://www.npmjs.com/package/tailwindcss)
    - [x] `autoprefixer`: _[`version 10.4.16`](https://www.npmjs.com/package/autoprefixer)_ - [autoprefixer](https://www.npmjs.com/package/autoprefixer)
    - [x] `postcss`: _[`version 8.4.31`](https://www.npmjs.com/package/postcss)_ - [postcss](https://www.npmjs.com/package/postcss)

##### devDependencies

- [x] `editorconfig`: _[`version 2.0.0`](https://www.npmjs.com/package/editorconfig)_ - [editorconfig](https://www.npmjs.com/package/editorconfig)
- [x] `eslint`: _[`version 8.51.0`](https://www.npmjs.com/package/eslint)_ - [eslint](https://www.npmjs.com/package/eslint)
    - [x] `eslint-config-defaults`:
      _[`version 9.0.0`](https://www.npmjs.com/package/eslint-config-defaults)_ - [eslint-config-defaults](https://www.npmjs.com/package/eslint-config-defaults)
    - [x] `eslint-config-prettier]`:
      _[`version 9.0.0`](https://www.npmjs.com/package/eslint-config-prettier)_ - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
  - [x] `eslint-config-semistandard`:
    _[`version 17.0.0`](https://www.npmjs.com/package/eslint-config-semistandard)_ - [eslint-config-semistandard](https://www.npmjs.com/package/eslint-config-semistandard)
  - [x] `eslint-config-standard`:
    _[`version 17.1.0`](https://www.npmjs.com/package/eslint-config-standard)_ - [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
  - [x] `eslint-import-resolver-node`:
    _[`version 0.3.9`](https://www.npmjs.com/package/eslint-import-resolver-node)_ - [eslint-import-resolver-node](https://www.npmjs.com/package/eslint-import-resolver-node)
  - [x] `eslint-module-utils`:
    _[`version 2.8.0`](https://www.npmjs.com/package/eslint-config-defaults)_ - [eslint-config-defaults](https://www.npmjs.com/package/eslint-config-defaults)
  - [x] `eslint-plugin-import`:
    _[`version 2.28.1`](https://www.npmjs.com/package/eslint-plugin-import)_ - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - [x] `eslint-plugin-security`:
    _[`version 1.7.1`](https://www.npmjs.com/package/eslint-plugin-security)_ - [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
  - [x] `eslint-eslint-scope`:
    _[`version 7.2.2`](https://www.npmjs.com/package/eslint-scope)_ - [eslint-scope](https://www.npmjs.com/package/eslint-scope)
  - [x] `eslint-utils`:
    _[`version 3.0.0`](https://www.npmjs.com/package/eslint-utils)_ - [eslint-utils](https://www.npmjs.com/package/eslint-utils)
- [x] `htmlhint`: _[`version 1.1.4`](https://www.npmjs.com/package/htmlhint)_ - [htmlhint](https://www.npmjs.com/package/htmlhint)
- [x] `live-server`: _[`version 1.2.1`](https://www.npmjs.com/package/live-server)_ - [live-server](https://www.npmjs.com/package/live-server)
- [x] `local-web-server`: _[`version 1.0.0`](https://www.npmjs.com/package/local-web-server)_ - [local-web-server](https://www.npmjs.com/package/local-web-server)
- [x] `prettier`: _[`version 3.0.3`](https://www.npmjs.com/package/prettier)_ - [prettier](https://www.npmjs.com/package/prettier)
  - [x] `prettier-plugin-django-alpine`: _[`version 1.2.6`](https://www.npmjs.com/package/prettier-plugin-django-alpine)_ - [prettier-plugin-django-alpine](https://www.npmjs.com/package/prettier-plugin-django-alpine)
  - [x] `prettier-plugin-tailwind`: _[`version 0.5.6`](https://www.npmjs.com/package/prettier-plugin-tailwindcss)_ - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- [x] `standard`: _[`version 17.1.0`](https://www.npmjs.com/package/standard)_ - [standard](https://www.npmjs.com/package/standard)
  - [x] `snazzy`: _[`version 9.0.0`](https://www.npmjs.com/package/snazzy)_ - [snazzy](https://www.npmjs.com/package/snazzy)
- [x] `stylelint`: _[`version 15.10.3`](https://www.npmjs.com/package/stylelint)_ - [stylelint](https://www.npmjs.com/package/stylelint)
    - [x] `stylelint-config-standard`:
      _[`version 34.0.0`](https://www.npmjs.com/package/stylelint-config-standard)_ - [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)
    - [x] `stylelint-config-recommended`:
      _[`version 13.0.0`](https://www.npmjs.com/package/stylelint-config-recommended)_ - [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-recommended)
    - [x] `stylelint-config-tailwindcss`:
      _[`version 0.0.7`](https://www.npmjs.com/package/stylelint-config-tailwindcss)_ - [stylelint-config-tailwindcss](https://www.npmjs.com/package/stylelint-config-tailwindcss)
    - [x] `stylelint-csstree-validator`:
    _[`version 3.0.0`](https://www.npmjs.com/package/stylelint-csstree-validator)_ - [stylelint-csstree-validator](https://www.npmjs.com/package/stylelint-csstree-validator)

***

### 7.4 Repository & Hosting

#### 7.4.1 Repository (Version Source Control)

- [x] `GitHub.com`: _[`Github Respoistory`](https://www.github.com)_
- [x] `GitHub.io`: _[`Github Pages`](https://pages.github.com/)_

#### 7.4.2 Apps (Code Integration & Deployment)

- [x] `Dependabot Preview`: _[GitHub: Dependabot](https://dependabot.com/)_ - [Dependabot](https://dependabot.com/)
- [x] `GitLive`: _[GitHub Marketplace: GitLive](https://github.com/marketplace/teamhub_ - [GitLive](https://gitlive.app/)
- [x] `GitHub Actions`: _[GitHub Marketplace: IssueLabler](https://github.com/marketplace/supershields)_ - [IssueLabler by riyadhalnur](https://riyadhalnur.github.io/issuelabeler/) : [Probot](https://probot.github.io/)
- [x] `Supershields`: _[GitHub Marketplace: Supershields.io](https://github.com/marketplace/supershields)_ - [Supershields.io](https://supershields.io)
- [x] `Wakatime`: _[GitHub Marketplace: Wakatime](https://github.com/marketplace/wakatime)_ - [Wakatime](https://wakatime.com)

***
> ::
***
## 8.0 Code
> Complete: ❓ | Review: 📝 | To Do: 📌

#### 8.0.1 Version Control

##### 8.0.1.1 [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a
project.
- All notable changes to this project will be documented in this file.
- To make it easier for users and contributors to see precisely what notable changes have been made between each
  release (or version) of the project.
- People do. Whether consumers or developers, the end users of software are human beings who care about what's in the
  software. When the software changes, people want to know why and how.
- The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

- [x] `Keep a ChangeLog`: _[`version 1.0.0`](https://keepachangelog.com/en/1.0.0/)_ - [Keep a ChangeLog](https://keepachangelog.com/en/1.0.0/)

##### 8.0.1.2 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
> The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set
of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This
convention dovetails with [SemVer](http://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

- [x] `Conventional Commits`: _[`version 1.0.0`](https://www.conventionalcommits.org/en/v1.0.0/)_ - [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

##### 8.0.1.3 [SemVer Versioning](https://semver.org/))
> “Semantic Versioning.” Under this scheme, version numbers and the way they change convey meaning about the underlying
code and what has been modified from one version to the next.

- Given a version number MAJOR.MINOR.PATCH, increment the:
  - **MAJOR** version when you make incompatible API changes
  - **MINOR** version when you add functionality in a backward compatible manner
  - **PATCH** version when you make backward compatible bug fixes

##### 8.0.1.4 Custom Descriptive Commits

- The author decided to merge and customise the two commit message standards to create a more descriptive commit message standard.
- There is a convention for not using commit messages as a changelog, but the author has decided to use the commit
  message as a keep a changelog, long with aspects of conventional commit messages and dovetailing with SemVer (as best manu effort as possible).
- See the following example for a custom descriptive commit message:
  - Why: The commit messages are used for assessment purposes in an academic context.
  - Thus this makes it easier for assessors to see precisely what notable changes have been made between each
    release (or version) of the project.
  - There is a loose adherence to the conventional commit message standard and SemVer.

```
type (optional scope): <description>

<optional body>
Intent:
Issue:
Fixed:
Tag:
Sprint:    01: Ends 23-mm-dd

<keepachangelog>
Bump:
Previous:  23-mm-dd v00.00.01.003
Changelog: 23-mm-dd v00.00.01.004
- add:
- modified:
- removed:
- fixed:
- linted:
- edits:
- deploy:

<optional footer>
Refs:
-
```

#### 8.0.2 Code Structure

###### 8.0.2.1 Design Patterns: Code Organisation
  - <ins>**Separation of Concerns v Locality of Behaviour**</ins>
    1. **Separation of Concerns**: HTML, CSS and Javascript are kept in separate, linked files is a traditional approach to code factoring and project structure organisation.
        - Related code is groups together in a single file by (mime-)type.
        - Allows for code re-use and centralised maintenance.
    3. **Locality of Behaviour**: The Locality of Behavior principle states that the behavior of code should be obvious
       on inspection. Or more formally: The behavior of a unit of code should be as obvious as possible by looking only
       at that unit of code.
        - .
        - .
#### 8.0.3 Code Style

**8.0.3.1 Style Guides**
- [x] `HTML`: _[`HTML Style Guide`](https://www.w3schools.com/html/html5_syntax.asp)_ - [HTML Style Guide](https://www.w3schools.com/html/html5_syntax.asp)
- [x] `CSS`: _[`CSS Style Guide`](https://www.w3schools.com/css/css_syntax.asp)_ - [CSS Style Guide](https://www.w3schools.com/css/css_syntax.asp)
- [x] `JavaScript`: _[`JavaScript Style Guide`](https://www.w3schools.com/js/js_conventions.asp)_ - [JavaScript Style Guide](https://www.w3schools.com/js/js_conventions.asp)

**8.0.3.2 Clean Code**

- [ ] `Clean Code Characteristics`: Project requirements for code quality and standards.
  - [ ] Code demonstrates the characteristics of ‘clean code’
    - all code is split into well-defined and commented sections
  - [ ] File Naming Conventions
  - [ ] HTML attributes, CSS rules, code variables and function:
      - names are consistent in format.
      - follow standards for the language and are appropriate and meaningful
      - id/class(CSS and JavaScript)/function/variable names clearly indicate their purpose
      - semantic markup is used to structure HTML code
  - [ ] Class/Function/Variable Name Conventions: names are descriptive and consistent
  - [ ] Cross-Platform Compatibility: names will not have spaces in them and will be lower-case only.
  - [ ] Code is well-structured and easy to read.
- [ ] `Code Readability and Maintainability`:
  - [ ] Code is indented in a consistent manner to ease readability
  - [ ] Code has no unnecessary repeated blank lines (and never more than 2)
- [ ] `Code Formating`: The Clean Code Characteristic enforced by and (actions on save):
  - JetBrains IDE Code Style
  - Editorconfig: IDE / Per Language
  - Prettier
  - ESlint for JavaScript
  - Stylelint
- [ ] `Code Linting`: The Clean Code Characteristic enforced by:
  - JetBrains IDE Code Style &amp; Code Inspections
  - HTMLHint
  - Stylelint
  - StandardJS for JavaScript
  - ESlint for JavaScript

#### 8.0.4 Project Structure

- [ ] `Project Templates`: GitHub allows for repository to be used as templates for new projects.
    - `Directory Structure` is defined in the repository template.
    - `Issue & Pull Request Templates` are defined in the repository template in the `.github` directory.
    - `File Structure` is defined in the repository template.
      - `Grouping by File Types`: e.g. assets directory will group related file types via sub-directories.
      - `Grouping by Libraries & Frameworks`: e.g. `node_modules` directory will group related file types via sub-directories. Though `node_modules` are not always pushed the remote repository.
      - `Grouping by Features`: e.g. `components` directory will group related file types via sub-directories.

#### 8.0.5 Planned Repository Structure

```
📁: Project
 ├── 📁 .github
 |     ├── 📁 ISSUE_TEMPLATE
 |     ├── 📁 PULL_REQUEST
 |     ├── 📁 workflows
 |     |    ├── 📄 super-linter.yml
 |     ├── 📄 dependabot.yml
 ├── 📁 docs
 |     ├── 📁 assets
 |     |    ├── 📁 images
 |     ├── 📁 decisions
 |     ├── 📁 design
 |     ├── 📁 features
 |     ├── 📁 acceptance
 |     ├── 📁 deployment
 ├── 📁 node_modules
 ├── 📁 src
 |    ├── 📁 assets
 |    |    ├── 📁 css
 |    |    ├── 📁 fonts
 |    |    ├── 📁 img
 |    |    |__ 📁 js
 |    ├── 📁 libs            # external libraries
 |    |    ├── 📁 lib
 |    |    ├── 📁 lib
 |    ├── 📁 components      # internal components
 |    ├── 📄 index.html
 |    ├── 📄 -.html
 |    ├── 📄 -.html
 |   ====================
 ├── 📄 README.md
 ├── 📄 AUTHORS
 ├── 📄 CITATION
 ├── 📄 CODEOWNERS
 ├── 📄 CODE_OF_CONDUCT.md
 ├── 📄 LICENSE
 |   ====================
 ├── 📄 .gitattributes
 ├── 📄 .gitignore
 |   ====================
 ├── 📄 .editorconfig
 ├── 📄 .eslintrc.json
 ├── 📄 .gitleaksignore
 ├── 📄 .htmlhintrc
 ├── 📄 .prettierrc.yaml
 ├── 📄 .prettierignore
 ├── 📄 .pre-commit-config.yaml
 ├── 📄 .stylelintrc.json
 ├── 📄 .tailwinorder
 ├── 📄 gitleaks.toml
 ├── 📄 postcss.config.js
 ├── 📄 tailwind.config.js
 |   ====================
 ├── 📄 package.json
 ├── 📄 package-lock.json
```

> **KEY**: 📁: _Folder_ , 📄: _File_ , ├── _Link_: Subdirectory, Linked File, | - _Link Generic_

***

### 8.1 HTML

- **Version**: HTML5

#### 8.1.1 Linting / Static Code Analysis

- The static code analysis tool you need for your HTML.
- Rules: https://htmlhint.com/docs/user-guide/list-rules

#### 8.1.2 HTML W3C Validation

- This validator checks the [markup validity](https://validator.w3.org/docs/help.html#validation_basics) of Web documents in HTML.
- Use Validator: https://validator.w3.org/nu/#textarea
- Uses NPM: https://www.npmjs.com/package/w3c-html-validator

***

### 8.2 CSS

#### 8.2.1 CSS Libraries & Frameworks

#### 8.2.2 Linting

#### 8.2.3 HTML W3C Validation

***

### 8.3 JavaScript

#### 8.3.1 JS Libraries & Frameworks

#### 8.3.2 JS Linting

***

### 8.4 Pre-Commit

***
> ::
***

## 9.0 Test & Quality
> Complete: ❓ | Review: 📝 | To Do: 📌

### 9.1 Code Quality & Validation

#### 9.1.1 HTML

Page | URI | Validation Type    |      |
--- | --- |--------------------| ---|
Page |  | Warning <br> Error |  |
Page |  | Warning <br> Error |  |
Page |  | Warning <br> Error |  |

#### 9.1.2 CSS

Page | URI | Validation Type    |      |
--- | --- |--------------------| ---|
Page |  | Warning <br> Error |  |
Page |  | Warning <br> Error |  |
Page |  | Warning <br> Error |  |
Page |  | Warning <br> Error |  |
Page |  | Warning <br> Error |  |

***

### 9.2 Responsive Design

***

### 9.3 Accessibility


***
### 9.4 Bugs & Issues



***
> ::
***
## 10.0 Features & User Acceptance
> Complete: ❓ | Review: 📝 | To Do: 📌

### 10.1 Features

### 10.2 Screenshots

### 10.3 User Acceptance

***
> ::
***
## 11.0 Deployment
> Complete: ❓ | Review: 📝 | To Do: 📌

***
> ::
***

## 12.0 Assessments
> Complete: ❓ | Review: 📝 | To Do: 📌

### 12.1 Credits



### 12.2 External Sources



***
> ::
***
