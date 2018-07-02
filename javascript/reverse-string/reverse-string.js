function reverseString(str) {
    if (str === '') { return '';}
    revStr = str.split('').reverse().join('');
    return revStr;
};

module.exports = reverseString;
