/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  var counter = 0;
  // assume n is 8, but can be 1-8, use as a counter for nested arrays

  // while counter != n
  while (counter !== n) {
    var row = [];
    for (var i = 0; i < n; i++) {
      if (counter === i) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    solution.push(row);
    counter++;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var test = new Board({n: n});
  var count = 0;

  var boardBuilder = function(count) {
    // for key count
      // iterate over row at key
        // put a rook at position i in row
        // use helper functions to check if this placement is okay
          // if it is okay there

            // base case:
            // if count = n
              // solutionCount++

            // recursive case:
              // call boardBuilder(count+1)
  };

  // call boardBuilder

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
