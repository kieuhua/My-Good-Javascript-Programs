
var text = 'What is -12 divided by 2 divided by -3?';

operators = {
    "plus": '+',
    "minus": '-',
    "multiplied by": "*",
    "divided by": "/",
};

var form = new RegExp("^What is (-?\\d+(?: (?:" + Object.keys(operators).join("|") + ") -?\\d+)+)\\?$");
if (text.match(form)) {
    var cap1 = text.match(form)[1]
    var cap0 = text.match(form)[0]
    console.log(cap1)
    console.log(cap0)
}