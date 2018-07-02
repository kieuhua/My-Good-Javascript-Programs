// constructor
var Bob = function() {
    
}

// class property
Bob.prototype.hey = function(sentence) {
    // sentence ='' 
    if (sentence === '') { return 'Fine. Be that way!'; }
    
    // prolong silence
    let flag = /^\s+$/.test(sentence);
    if (flag) { return 'Fine. Be that way!'; }
    
    // only numbers
    flag = /^[1-9, \,]+$/.test(sentence);
    if (flag) { return 'Whatever.' }
    
    // test for all cap letter, space, and '!'
    flag = /^[A-Z,  \s]+\?$/.test(sentence);
    
    if (flag) { return "Calm down, I know what I'm doing!"; }

    // shouting gibberish
    flag = /^[A-Z,\s]+$/.test(sentence);
    if (flag) { return 'Whoa, chill out!'; }
    
    // shouting
    flag = /^[A-Z,\s]+\!$/.test(sentence);
    if (flag) { return 'Whoa, chill out!'; }
    
    // shouting numbers
    flag = /^[A-Z, 1-9, \s]+\!$/.test(sentence);
    if (flag) { return 'Whoa, chill out!'; }
    
    // shouting special characters
    flag = /^[A-Z, 1-9, \s, \%,\^,\*,\@,\#,\$,\(,\! ]+\!$/.test(sentence);
    if (flag) { return 'Whoa, chill out!'; }

    // test for normal question
    flag = /^[A-Z, a-z, , 0-9, \s, \., \!]+\?$/.test(sentence);
    if (flag) { return 'Sure.'; }

    // other ending with white spaces
    flag = /^[A-Z, a-z, \s]+\s+$/.test(sentence);
    if (flag) { return 'Whatever.'; }
    // ending with white spaces
    flag = /^[A-Z, a-z, , 0-9, \s, \., \!, \?]+\s+$/.test(sentence);
    if (flag) { return 'Sure.'; }
    
    return 'Whatever.';
    
}

module.exports = Bob;