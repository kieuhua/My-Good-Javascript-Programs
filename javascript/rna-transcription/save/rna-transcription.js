var DnaTranscription = function() {
}

DnaTranscription.prototype.toRna = function(str) {
    len = str.length;
    output = "";
    DNA_RNA = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};
    for (var i=0; i< len; i++) {
        char = str.charAt(i);
        if ( DNA_RNA[char]) {
            output += DNA_RNA[char];
        } else {
            throw new Error('Invalid input');
        }
    }
    /*
    for( var i=0; i < len; i++) {
        char = str.charAt(i);
        switch(char) {
            case 'G':
                output += 'C';
                break;
            case 'C':
                output += 'G';
                break;
            case 'T':
                output += 'A';
                break;
            case 'A':
                output += 'U';
                break;
            default:
                throw new Error('Invalid input');
        }
    }
    */
    return output;
}
 module.exports = DnaTranscription;