var Binary = function(input) {
    this.input = input;
}

Binary.prototype.toDecimal = function() {
    // check for invalid input
    if (this.input === '') return 0;
    if (!/^[0,1]+$/.test(this.input)) return 0;

    var decimal_value = 0;
    len = this.input.length
    for (var i=0; i<len; i++) {
        var value = parseInt(this.input[i]);
        // -1 bc 0 index
        decimal_value += value * 2**(len -i - 1)
    }
    return decimal_value
}

module.exports = Binary;