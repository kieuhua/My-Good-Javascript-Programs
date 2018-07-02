var SecretHandshake = function(input) {
    // check for invalid input
    if ( typeof input !== "number") {
      throw new Error('Handshake must be a number');
    } else {
        this.input = input;
    }
}

SecretHandshake.prototype.commands = function() {
    let results = [];
    let reverseFlag = false; 

    // convert base 10 to base 2 => string
    var b = (this.input).toString(2);

    len = b.length
    if (b[len-1] === '1') { results.push('wink')}
    if (b[len-2] === '1') { results.push('double blink')}
    if (b[len-3] === '1') { results.push('close your eyes')}
    if (b[len-4] === '1') { results.push('jump')}
    if (b[len-5] === '1') { reverseFlag = true}

    var finalResults =  (reverseFlag) ? results.reverse() : results
    //console.log(finalResults);
    return finalResults
}

module.exports = SecretHandshake;
