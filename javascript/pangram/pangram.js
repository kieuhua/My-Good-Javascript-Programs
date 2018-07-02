// global variables
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var alphabetsArray = alphabets.split("");

// contructor function
// input strings is a sentence
var Pangram = function(str) {
    this.sentence = str;
}

// validate for Pangram => true/false
// global property functioin
Pangram.prototype.isPangram = function() {
    // if sentence empty
    if (this.sentence === undefined) { return false;}
    if (this.sentence === '') { return false;}
    
    // create hash all aphabetic chars as key, its value is 0
    alphabetsHash = {}
    for (var i=0; i < 26; i++ ) {
        alphabetsHash[alphabetsArray[i]] = 0;
    }
    
    // check the the valid characters
    var flag = /^[a-z, A-Z, \., \_, 1, 2, \\, \", \s]+$/g.test(this.sentence);
    if (!flag) {return false;}
    
    // Yes, I can only keep a-z, A-z in the hash, 
    // otherwise hash['.'] = NaN => false
    // so, I need to take out pruntuations, numbers, ...
    var result = this.sentence.replace(/[\\, \", \s, \.]+/g, '');
    
    this.sentence = this.sentence.toLowerCase();
    
    // parse each char and update the alphabetsHash 
    var sentenceLen = this.sentence.length;
    for( var i=0; i< sentenceLen  ; i++) {
        alphabetsHash[this.sentence[i]]++;
    }
    
    /* if all the keys in alphabetHash have value > 0, 
    then sentence is pangram.
    */
    var result = true;
    Object.values(alphabetsHash).map( function(v){
        // at least one character is missing => false
        if ( v === 0 ) { result = false;}
    })
    return result;
}
module.exports = Pangram;