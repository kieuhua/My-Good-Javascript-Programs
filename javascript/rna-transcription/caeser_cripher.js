// input string, num position to be shifted.
function CaesarCripher(str, num) {
    str = str.toLowerCase();

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
var res = CaesarCripher('kieu', -4);
console.log("Result : " + res);