// 1219. Path with Maximum Gold
// Medium

// 1701

// 46

// Add to List

// Share
// In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.
 

// Example 1:

// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.
// Example 2:

// Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// Output: 28
// Explanation:
// [[1,0,7],
//  [2,0,6],
//  [3,4,5],
//  [0,3,0],
//  [9,0,20]]
// Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.

var getMaximumGold = function(grid) {
    let maxGold = 0
    let m = grid.length
    let n = grid[0].length
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j]) {
          maxGold = Math.max(maxGold, getGold(grid, i, j, m, n))
        }
      }
    }
    return maxGold
  };
  function getGold(grid, i, j, m, n) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == 0)
      return 0
    let temp = grid[i][j]
    grid[i][j] = 0
    let count = temp
    count += Math.max(
      getGold(grid, i - 1, j, m, n),
      getGold(grid, i + 1, j, m, n),
      getGold(grid, i, j - 1, m, n),
      getGold(grid, i, j + 1, m, n))
    grid[i][j]=temp
    return count
  }