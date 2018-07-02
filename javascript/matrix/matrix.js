var Matrix = function(input) {
    this.input = input;
    // create rowsArray contains array of row
    this.rows = rowsMatrix(this.input); 
    // create columnsArray contains array of columns
    this.columns = columnsMatrix(this.input);
}

function rowsMatrix(matrixStr) {
    var rows = matrixStr.split("\n");
    var rowsArray = [];
    for (i=0; i < rows.length; i++) {
        // split each row into row array
        var rowStr = rows[i].split(" ");
        // convert row w/ string to row w/ numbers
        var rowNum = []
        for(j=0; j< rowStr.length; j++) {
            rowNum.push( parseInt(rowStr[j]))
        }
        // add row w/ numbers to big array
        rowsArray.push(rowNum);
    }
    return rowsArray;
}

function columnsMatrix(matrixStr) {
    // first call rowsMatrix to create the Array of Array 
   var rowsArray = rowsMatrix(matrixStr)

    var columnsArray = []
    // iterate each columns, assume all rows have same number of columns
    for(i=0; i< rowsArray[0].length; i++) {
        var columsA = [];
        // iterate each rows to create each colums
        for (j=0; j< rowsArray.length; j++) {
           // console.log(rowsArray[j][i])
            columsA.push(rowsArray[j][i])
        }
        columnsArray.push(columsA)
    }
    return columnsArray;
}

module.exports = Matrix;
