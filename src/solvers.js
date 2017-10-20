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
  if (n === 1) {
    return 1;
  }
  return n * this.countNRooksSolutions(n - 1);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var count = 0;
  var solution = new Board({n: n});
  var rows = solution.rows();
  var found = false;

  var makeBoard = function (solution, count) {
    for (var col = 0; col < solution.attributes[count].length; col++) {
      solution.attributes[count][col] = 1;
      if (!solution.hasAnyQueenConflictsOn(count, col)) {
        count++;
        if (count === n) {
          solution = solution;
          found = true;
          return;
        } else {
          makeBoard(solution, count);
          if (found) {
            return;
          }
          count--;
          solution.attributes[count][col] = 0;
        }
      }
      solution.attributes[count][col] = 0;
    }
  };

  if (n === 0) {
    return solution.rows();
  } else {
    makeBoard(solution, count);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var workBoard = new Board({n: n});

  var placeQueens = function(workBoard, count) {
    for (var i = 0; i < workBoard.attributes[count].length; i++) {
      workBoard.attributes[count][i] = 1;
      if (!workBoard.hasAnyQueenConflictsOn(count, i)) {
        count++;
        if (count === n) {
          solutionCount++;
          count--;
          workBoard.attributes[count][i] = 0;
          return;
        } else {
          placeQueens(workBoard, count);
          count--;
          workBoard.attributes[count][i] = 0;
        }
      }
      workBoard.attributes[count][i] = 0;
    }

    return;
  };

  if (n === 0) {
    solutionCount = 1;
  } else {
    placeQueens(workBoard, 0);
  }

  return solutionCount;
};
