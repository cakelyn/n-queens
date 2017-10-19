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
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var varient4 = 0;
  var varient8 = 0;
  var workBoard = new Board({n: n});

  var placeQueens = function(workBoard, count) {
     // NOTE: we are only going to loop through the first row since there must be
     //       one queen at each row for there to be n Queens on a n x n board

     // base case:
     // loop through each index of first row, place a queen at each index
       // check conflict methods for placement of queen
         // if there is no conflict, increment count and check if there are n queens on the workBoard (count === n)
           // if there are n queens on the workBoard check varients
             // if (indexOf(1) on first row) % (indexOf(1) on last row) === 0
               // this means that this workBoard solution is equal to is 180 degree rotation, increment varient4
             // otherwise increment varient8

       // recursive case:
       // call placeQueens(workBoard[count+1], count)

  // call placeQueens(workBoard, 0)
  // solutionCount = (varient8 * 8) + (varient4 * 4)

  // return solutionCount;

 };


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
