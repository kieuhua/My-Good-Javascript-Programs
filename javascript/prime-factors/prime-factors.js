/* Prime Factorization is finding prime numbers multiply
together to make the original number. */
var PrimeFactors = function() {
}

PrimeFactors.prototype.for = function(top) {
    if (top === 1) { return []}
    fractors = [];
    num = 2;
    while ( num <= top ) {
        if (top%num == 0) {
            // this is important, need to reduce the top
            top /= num;
            fractors.push(num);
        } else {
            num++;
        }
    }
    return fractors;
}

primeFactors = new PrimeFactors
module.exports = primeFactors;
