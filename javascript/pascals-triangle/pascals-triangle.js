var Triangle = function(numRows) {
    this.numRows = numRows;
    this.rows = createTriagle(numRows);
    this.lastRow = this.rows[this.rows.length-1];
}

// create the pascal triagle with numRows rows
function createTriagle(numRows) {
    let triagleA = [];

    triagleA.push([1])    // first row
    if (numRows === 1) return triagleA;

    triagleA.push([1,1])    // second row
    if (numRows === 2)  return triagleA;

    // create triagle has more then 2 rows
    for (var i=3; i<= numRows; i++) {
        rowA = createRow(i, triagleA)
        triagleA.push(rowA)
    }
    return triagleA
}

// rowNum is row number of this row(start from 1), 
// rowNum is also equal to number elems in this row
// rowNum=5, will has 5 elems
function createRow(rowNum, triagleA) {
    let rowA = []
    rowA[0] = 1;    //first elem 
    rowA[rowNum-1] = 1; // last elem 

    // elems in between of this row
    for(i=1; i<= rowNum-2; i++) {
        // find value of elem by adding the sum of two above elems
        // currunent elem(pos) = aboverow[pos-1] + aboverow[pos]
        // rowNum = 3 => row index is 2, 
        // rowNum -2 index is the row index above the rowNum= 3 
        rowA[i] = triagleA[rowNum-2][i-1] + triagleA[rowNum-2][i]
    }
    return rowA;
}

module.exports = Triangle;
