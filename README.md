# HTML Code Description for Tic Tac Toe Game

## Document Structure (`<!DOCTYPE html>`)
- The code defines an HTML5 document with `lang="en"` for English language support.

## Head Section (`<head>`)
- Contains metadata like character encoding (`UTF-8`) and viewport settings for responsiveness.
- The title of the page is set as **"Tic Tac Toe"**.
- A link to an external CSS file (`TTT.css`) is included for styling.

## Body Section (`<body>`)
- The main content is wrapped inside a `<main>` tag.

### Game Title (`<h1>`)
- Displays **"Tic Tac Toe"** at the top.

### Game Board (`<div class="container">`)
- Contains a `div.game`, which includes **9 button elements** (`<button class="box">`) representing the **3×3 Tic Tac Toe grid**.

## Game Status Display (`<h3>`)
- An empty `<h3>` tag that will dynamically show the game result (e.g., **"Winner: X"** or **"Winner: O"**) using JavaScript.

## Game Control Buttons (`<div id="buttonsec">`)
- **New Game Button** (`<button id="newgameBt">`) → Starts a **new game**.
- **Reset Game Button** (`<button id="resetBt">`) → Resets the **current game**.

## JavaScript Link (`<script src="TTT.js">`)
- Links an external JavaScript file (`TTT.js`) that handles the **game logic and interactions**.



# JavaScript Code Description for Tic Tac Toe Game

## 📝 Assigning Values
- Selects all the **Tic Tac Toe boxes** using `document.querySelectorAll(".box")`.
- Initializes `turnO = true` (indicating **Player O starts**).
- Sets `count = 1` to track game resets and turns.
- Defines the **winning patterns** using a **2D array (`winpatterns`)**.
- Selects the `<h3>` element to display game results.

## 🎯 Check Winner Function (`checkwinner`)
- Loops through `winpatterns` to check if any **three consecutive boxes** have the same value.
- If a player wins:
  - Updates the heading (`<h3>`) to show the **winner**.
  - Calls `disablefun()` to **prevent further moves**.

## 🚫 Disable Boxes (`disablefun`)
- Disables all boxes after the game is won.

## ✅ Enable Boxes (`enablefun`)
- Resets the board:
  - Clears the text inside each box.
  - Enables all boxes for a **new game**.
  - Resets the heading (`Tic Tac Toe`).
  - Alternates the **starting player** based on `count`.

## 🎮 Handling Player Moves (`box.addEventListener`)
- Listens for **clicks** on each box:
  - Assigns **"O"** or **"X"** based on `turnO`.
  - Disables the clicked box to prevent changes.
  - Calls `checkwinner()` after each move.

## 🔄 New Game Button (`#newgameBt`)
- Increments `count` to track **turns**.
- Calls `enablefun()` to restart the game.
- Logs whose **turn it is** (`X` or `O`).

## 🔁 Reset Game Button (`#resetBt`)
- Calls `enablefun()` to reset the game without changing turn order.
- Logs the **current turn**.

---

This JavaScript file controls the **Tic Tac Toe game logic**, including:
✔ Player turns  
✔ Winner detection  
✔ Game resets  

Would you like any **improvements or optimizations**? 🚀


