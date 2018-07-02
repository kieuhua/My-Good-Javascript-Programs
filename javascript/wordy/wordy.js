const OPERATORS = {'plus': '+', 'minus': '-', 'multiplied by': '*', 'divided by': '/'};

var WordProblem = function(question) {
    this.question = question;
}

WordProblem.prototype.answer = function() {
    let result = 0;
    // take out 'What is ' and '?' in 'What is 1 plus 1 plus 1?'
    // create regex, -? '-'oprional , ?: non-capture, I have two non-capture groups
    // 1st non-capture is operator, 2nd non-capture is 2nd operand
    // together these non-capture groups can be repeated.
    let regex = new RegExp("^What is (-?\\d+(?: (?:" + "plus|minus|multiplied by|divided by" + ") -?\\d+)+)\\?$");
    
    // var text = 'What is 1 plus 1 plus 1?';
    if ( this.question.match(regex)) {
        // match(regex)[1] = 'is 1 plus 1 plus 1'
        let mathStr = this.question.match(regex)[1];

        // parse mathStr into tokens, then evaluate them.
        result =  parseTokens(mathStr)
    } else {
        throw new ArgumentError("Invalid question!!");
    }
    return result
}

function parseTokens(mathStr) {
    // replace word operator to sign operator, get all operators
    let operators = Object.keys(OPERATORS);
    // replace gobally("g") in the whole statement with sign operator
    operators.forEach( op => mathStr = mathStr.replace(new RegExp(op, "g"), OPERATORS[op]))
    // create tokens array
    let tokens = mathStr.split(' ');

    // the first operand
    let sum = tokens.shift();  

    // process the rest of tokens with eval() 
    for(var i=0; i<tokens.length; i++) {
        evalStr = sum + " " + tokens.shift() + " " + tokens.shift();
        sum = eval( evalStr);
    }
    return sum
}

var ArgumentError = function(error){
    //console.log(error)
}

module.exports = {
    WordProblem: WordProblem,
    ArgumentError: ArgumentError,
}
