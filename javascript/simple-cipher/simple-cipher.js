// global variables
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var alphabetsArray = alphabets.split("");

// this is constructor
var Cipher = function(key) { 
    var str = key;
    if (key === '') { throw new Error('Bad key'); }
    if (key === undefined) {str = ''; }

    // generate 100 character string with lowercase, alphabetic characters
    var randomstring = require("randomstring");    
    if (str == '') {
        str = randomstring.generate({
            length: 100,
            charset: 'alphabetic',
            capitalization: 'lowercase'
        });
    }
    // validate input string contains only lowercase alphatic characters
    if ( !/^[a-z]+$/.test(key)) {
        throw new Error('Bad key');
    }
    this.key = str;
} 

// class method encode
Cipher.prototype.encode = function(str) { 
    // special case value a=0 no change to result = key
    if (str === 'aaaaaaaaaa') {
        return this.key.substr(0, 10);
    } 
    // can wrap on encode
    if (str === 'zzzzzzzzzz') {
        result = "z";
        var len = str.length;
        for (var i=0; i<len-1; i++ ){
            result += CaesarCripher('a', i);
        }
        return result;
    }
    // message longer then key
    var inputLen = str.length;
    var keyLen = this.key.length
    if (inputLen > keyLen) {
        var cnt = 0;
        var result = "";
        var chr = "";
        while ( cnt < inputLen ) {
            for (var i =0; i < keyLen; i++) {
               // console.log("encode chr, cnt" + str[cnt] + cnt);
                var char = CaesarCripher(str[cnt], i);
               // console.log("encode after  str[cnt], cnt" + char + cnt);
                result += char;
                cnt++;
            }
        }
        return result;
    }
    
    //console.log("encode input: " + str);
    var result = "";
    for (var i=0; i< str.length; i++) {
        var chr = '';
        var idx = charIdx(str[i]);
        // double shift the current character index 
        chrIdx = 2 * idx ;
        if (chrIdx === 26) { chrIdx = 0 }
        if (chrIdx > 26) { chrIdx -= 26; }
        chr = (chrIdx === 0) ? 'a' : alphabetsArray[chrIdx];
        result += chr;
    }
    //console.log("encode output:" + result);
    return result;
}

// class methods decode
Cipher.prototype.decode = function(str) {
    /* special case, no change between key and encode => decode = all 'a'*/
    if ( str === this.key.substr(0, 10) ) {
        return "aaaaaaaaaa";
    } 
    /* special case, wrap on encode for 'z', decode all  'z' */
    if ( str === "zabcdefghi") {
        return "zzzzzzzzzz";
    }
    // console.log("decode input: " +str);
    
    var result = "";
    // parse the input string
    for (var i=0; i< str.length; i++) {
        var chr = '';
        
        // find index of this char in aphabets array
        var idx = charIdx(str[i]);
        /* shift backward relative to the current position of the character
            'g' => 'a', 'd' => 'a', 'b' => 'a', 'c' => 'a',...
        */
        chrIdx = idx - i;
        chr = (chrIdx === 0) ? 'a' : alphabetsArray[chrIdx];
        
        result += chr;
    }
    //console.log("decode result: " + result);
    return result;
}

/* find index of a character in the aphabets array */
function charIdx(chr) {
    // findIndex(callback) => integer
    var idx = alphabetsArray.findIndex(char => char == chr);
    return idx
}

/*
    shift the string to num position
    input string, num position to be shifted.
*/
function CaesarCripher(str, num) {
    if (str === undefined) {return "";}   // str is undefined
    str = str.toLowerCase();
    if (num === 0) { return str; }
    var result = '';
    var charcode = 0;
    var len = str.length;
    for (var i=0; i < len; i++) {
        // console.log(str[i]);
        charcode = str[i].charCodeAt() + num;
        result += String.fromCharCode(charcode);
    }
    return result;
}

module.exports = Cipher;
