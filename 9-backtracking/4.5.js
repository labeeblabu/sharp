// 1079. Letter Tile Possibilities
// Medium

// 1512

// 45

// Add to List

// Share
// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

 

// Example 1:

// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
// Example 2:

// Input: tiles = "AAABBC"
// Output: 188
// Example 3:

// Input: tiles = "V"
// Output: 1

var numTilePossibilities = function(tiles) {
    let result = []
    let current = []
    let helper = (len, selectedIndex) => {
      if (current.length === len) {
        let cur2str = [...current].join('')
        if (!result.includes(cur2str)) result.push(cur2str)
        return
      }
      for (let j = 0; j < tiles.length; j++) {
        if (!selectedIndex.includes(j)) {
          current.push(tiles[j]) //A
          helper(len, [...selectedIndex, j])
          current.pop()
        }
      }
    }
    for (let len = 1; len <= tiles.length; len++) {
      helper(len, [])
    }
    return result.length
  }