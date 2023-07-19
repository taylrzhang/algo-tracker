/**
 * Let's play the minesweeper game (Wikipedia, online game)!

You are given an m x n char matrix board representing the game board where:

'M' represents an unrevealed mine,
'E' represents an unrevealed empty square,
'B' represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals),
digit ('1' to '8') represents how many mines are adjacent to this revealed square, and
'X' represents a revealed mine.
You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E').

Return the board after revealing this position according to the following rules:

If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed blank 'B' and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square 'E' with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.
 */

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const m = board.length,
    n = board[0].length;
  [r, c] = click;

  //if no board return
  if (!board) return;
  //if click on mine, reassign it to "X", then return
  if (board[r][c] === "M") {
    board[r][c] = "X";
    return;
  }

  dfs(r, c);
  return board;

  function dfs(r, c) {
    //than we gonna check on empty squares, aka clickable, so if not, return
    if (board[r][c] !== "E") return;
    //get the adjacent mines nums, if it has, reassign with the num, then return
    //otherwise, dfs the other possible directions recursively
    const nums = getAdjacentMines(r, c);
    if (nums) {
      board[r][c] = nums.toString();
      return;
    } else {
      board[r][c] = "B";
      for (let i = Math.max(r - 1, 0); i < Math.min(r + 2, m); i++) {
        for (let j = Math.max(c - 1, 0); j < Math.min(c + 2, n); j++) {
          dfs(i, j);
        }
      }
    }
  }

  function getAdjacentMines(x, y) {
    let nums = 0;
    for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, m); i++) {
      for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, n); j++) {
        if (board[i][j] === "M") nums++;
      }
    }
    return nums;
  }
};

const result = updateBoard(
  [
    ["E", "E", "E", "E", "E"],
    ["E", "E", "M", "E", "E"],
    ["E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E"],
  ],
  [3, 0]
);
console.log(result); //-> [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
