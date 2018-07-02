/// global variables
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var alphabetsArray = alphabets.split("");

var ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ALPHABETSArray = ALPHABETS.split("");

var RotationalCipher = function() {
}

RotationalCipher.prototype.rotate = function(str, rotNum) {
  
    let result = "";
    // special case shift 0 or 26 => no shift
    if (rotNum == 0 || rotNum == 26 ) { return str;}

    for(var i=0; i< str.length; i++) {
        // assign charsArray - ALPHABETSArray or alphabetsArray
        const charsArray = (str[i] == str[i].toLowerCase()) ? alphabetsArray : ALPHABETSArray;
        var char = "";
        if (charsArray.includes(str[i])) {
            char = charShift(str[i], rotNum, charsArray)
            result += char
        } else {
            result += str[i];
        }
    }
    return result;
}

function charShift(char, num, charsArray) {
    // array.findIndex(callback)
    const charIdx = charsArray.findIndex(chr => chr === char);

    // increase the index by num rotation, and get value
    let shiftIdx = charIdx + num;
    // check for wrap index
    if (shiftIdx > 25) { shiftIdx -= 26 }

    // find the shiftChar
    const shiftChar = charsArray[shiftIdx]
    
    return shiftChar;
}

module.exports = RotationalCipher;
