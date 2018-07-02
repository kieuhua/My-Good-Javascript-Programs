// contains all the robot names
let robotsNames = {};

var Robot = function() {
    this.usednames = {};
    var name = generateName();

    // check name in the global robotsNames Database,
    while (robotsNames[name]) {
        name = generateName();
    }
    this.name = name;
    this.usednames[this.name] = true
    robotsNames[this.name] = true
}

Robot.prototype.reset = function() {
    //  check this name against usednames hash
    var name = generateName();
    // generate name until the name is new
    while (this.usednames[name] || robotsNames[name]) {
        name = generateName();
    } 
    this.name = name;
    this.usednames[name] = true;
}

function generateName() {
    // generate 3 random integer in string
    let numStr = randomNumber(3)
    
    // generate 2 random letter
    const letters = randomString(2)
    
    return letters + numStr
}

var randomNumber = function(len) {
    var numStr = Math.random().toString()
    // replace '0.' to ''
    var numStr = numStr.replace(/^0\./, '');
    //str.slice(beginIndex[, endIndex]), exclude 3
    var numLen = numStr.slice(0,3);
    return numLen;
}

var randomString = function(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i=0; i< len; i++) {
        text += possible.charAt(Math.floor(Math.random() * 26))
    }
    return text
}

module.exports = Robot;

